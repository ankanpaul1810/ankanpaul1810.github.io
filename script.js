// ============================
// CONFIG
// ============================
const OPENAI_API_KEY = "(insert key here)"; // 🔒 Replace safely
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

// Elements
const imgInput = document.getElementById('imageInput');
const cameraBtn = document.getElementById('cameraBtn');
const cameraContainer = document.getElementById('cameraContainer');
const video = document.getElementById('camera');
const captureBtn = document.getElementById('captureBtn');
const closeCameraBtn = document.getElementById('closeCameraBtn');
const photoCanvas = document.getElementById('photoCanvas');
const statusDiv = document.getElementById('status');
const formSection = document.getElementById('formSection');
const fields = {
  name: document.getElementById('name'),
  phone: document.getElementById('phone'),
  email: document.getElementById('email'),
  address: document.getElementById('address'),
  company: document.getElementById('company')
};

let stream = null;

// ============================
// HELPERS
// ============================
function sanitize(s=''){
  return s.replace(/["':;]+/g,'').replace(/\s+/g,' ').trim();
}

function parseJsonLoose(str){
  try { return JSON.parse(str); }
  catch {
    const out = {};
    const lines = str.split(/\n|,/);
    lines.forEach(line=>{
      const m=line.match(/(Name|Phone Number|Email|Address|Company Name)\s*[:\-]?\s*(.*)/i);
      if(m) out[m[1]] = m[2];
    });
    return out;
  }
}

// ============================
// OCR + LLM Extraction
// ============================
async function processImage(base64) {
  statusDiv.textContent = "Sending to LLM...";
  formSection.style.display = "none";

  const prompt = `
You are a precise OCR and contact extractor AI.
Perform OCR + cleanup from the given business card image.
Return clean JSON with:
{Name:"", "Phone Number":"", "Email":"", "Address":"", "Company Name":""}
Each value must be clean, no quotes or colons inside.`;

  const body = {
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You extract structured contact info from images of business cards." },
      { role: "user", content: [
          { type: "text", text: prompt },
          { type: "image_url", image_url: { url: "data:image/jpeg;base64," + base64 } }
      ]}
    ],
    temperature: 0
  };

  try {
    const res = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": "Bearer " + OPENAI_API_KEY
      },
      body: JSON.stringify(body)
    });

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content || "{}";
    console.log('LLM Output:', content);

    const parsed = parseJsonLoose(content);

    fields.name.value = sanitize(parsed["Name"]);
    fields.phone.value = sanitize(parsed["Phone Number"]);
    fields.email.value = sanitize(parsed["Email"]);
    fields.address.value = sanitize(parsed["Address"]);
    fields.company.value = sanitize(parsed["Company Name"]);

    formSection.style.display = "block";
    statusDiv.textContent = "✅ Extraction complete.";
  } catch(err){
    console.error(err);
    statusDiv.textContent = "⚠️ LLM failed. Please retry.";
  }
}

// ============================
// File Upload Handler
// ============================
imgInput.addEventListener('change', async (e)=>{
  const file = e.target.files[0];
  if(!file) return;
  const base64 = await new Promise(r=>{
    const reader=new FileReader();
    reader.onload=()=>r(reader.result.split(',')[1]);
    reader.readAsDataURL(file);
  });
  await processImage(base64);
});

// ============================
// Camera Capture Handlers
// ============================
cameraBtn.addEventListener('click', async ()=>{
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
    video.srcObject = stream;
    cameraContainer.style.display = "block";
  } catch (err) {
    alert("Camera not available or permission denied.");
  }
});

closeCameraBtn.addEventListener('click', ()=>{
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    stream = null;
  }
  cameraContainer.style.display = "none";
});

captureBtn.addEventListener('click', ()=>{
  if (!stream) return;
  const ctx = photoCanvas.getContext('2d');
  photoCanvas.width = video.videoWidth;
  photoCanvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0);
  const dataUrl = photoCanvas.toDataURL('image/jpeg');
  const base64 = dataUrl.split(',')[1];
  cameraContainer.style.display = "none";
  if (stream) { stream.getTracks().forEach(t=>t.stop()); stream=null; }
  processImage(base64);
});

// ============================
// vCard Generation
// ============================
document.getElementById('downloadVCard').addEventListener('click', ()=>{
  const n = sanitize(fields.name.value);
  const p = sanitize(fields.phone.value);
  const e = sanitize(fields.email.value);
  const a = sanitize(fields.address.value);
  const c = sanitize(fields.company.value);

  const vcf = `BEGIN:VCARD
VERSION:3.0
N:${n}
FN:${n}
ORG:${c}
TEL;TYPE=CELL:${p}
EMAIL;TYPE=INTERNET:${e}
ADR;TYPE=WORK:;;${a}
END:VCARD`;

  const blob = new Blob([vcf], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const aTag = document.createElement('a');
  aTag.href = url;
  aTag.download = (n || 'contact') + '.vcf';
  aTag.click();
  URL.revokeObjectURL(url);
});

// ===========================
// VIEW TOGGLE
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const viewButtons = document.querySelectorAll('.view-btn');
    const portfolioView = document.getElementById('portfolio-view');
    const hiringView = document.getElementById('hiring-view');
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            
            // Update active button
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Toggle views
            if (view === 'hiring') {
                portfolioView.style.display = 'none';
                hiringView.style.display = 'block';
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                portfolioView.style.display = 'block';
                hiringView.style.display = 'none';
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
});

// ===========================
// NEURAL NETWORK ANIMATION
// ===========================
const canvas = document.getElementById('neural-network');
const ctx = canvas.getContext('2d');

let nodes = [];
let connections = [];
const maxNodes = 80;
const connectionDistance = 150;

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Node {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 77, 152, 0.6)';
        ctx.fill();
    }
}

function initNodes() {
    nodes = [];
    for (let i = 0; i < maxNodes; i++) {
        nodes.push(new Node());
    }
}

function drawConnections() {
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
                const opacity = (1 - distance / connectionDistance) * 0.3;
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(nodes[j].x, nodes[j].y);
                ctx.strokeStyle = `rgba(0, 77, 152, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    nodes.forEach(node => {
        node.update();
        node.draw();
    });
    
    drawConnections();
    
    requestAnimationFrame(animate);
}

// Initialize on load
initCanvas();
initNodes();
animate();

// Resize handler
window.addEventListener('resize', () => {
    initCanvas();
    initNodes();
});

// ===========================
// NAVIGATION
// ===========================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Update active nav on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// SKILL PROGRESS ANIMATION
// ===========================
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach((bar, index) => {
                setTimeout(() => {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = progress + '%';
                }, index * 100);
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// ===========================
// TYPING ANIMATION
// ===========================
const typingElement = document.querySelector('.typing .command');
if (typingElement) {
    const originalText = 'initialize_portfolio';
    let currentText = '';
    let index = 0;
    let isDeleting = false;

    function typeWriter() {
        if (!isDeleting && index < originalText.length) {
            currentText = originalText.substring(0, index + 1);
            index++;
        } else if (isDeleting && index > 0) {
            currentText = originalText.substring(0, index - 1);
            index--;
        }

        typingElement.innerHTML = currentText + '<span class="cursor">|</span>';

        if (index === originalText.length) {
            setTimeout(() => {
                isDeleting = true;
                typeWriter();
            }, 2000);
        } else if (index === 0 && isDeleting) {
            isDeleting = false;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, isDeleting ? 50 : 100);
        }
    }

    setTimeout(typeWriter, 1000);
}

// ===========================
// SYSTEMS THINKING PATTERN
// ===========================
const patternNodes = document.querySelectorAll('.pattern-node');
if (patternNodes.length > 0) {
    const patternObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                patternNodes.forEach((node, index) => {
                    setTimeout(() => {
                        node.style.opacity = '0';
                        node.style.transform = 'scale(0)';
                        node.style.transition = 'all 0.5s ease';
                        
                        setTimeout(() => {
                            node.style.opacity = '1';
                            node.style.transform = 'scale(1)';
                        }, 50);
                    }, index * 150);
                });
                patternObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const thinkingPattern = document.querySelector('.thinking-pattern');
    if (thinkingPattern) {
        patternObserver.observe(thinkingPattern);
    }
}

// ===========================
// DECISION LOG TOGGLES
// ===========================
const decisionToggles = document.querySelectorAll('.decision-toggle');

decisionToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const isActive = content.classList.contains('active');
        
        // Close all other decision logs
        document.querySelectorAll('.decision-content').forEach(c => {
            c.classList.remove('active');
        });
        
        // Toggle current one
        if (!isActive) {
            content.classList.add('active');
            toggle.textContent = 'Engineering Decisions ↓';
        } else {
            toggle.textContent = 'Engineering Decisions →';
        }
    });
});

// ===========================
// SYSTEMS DIAGRAM INTERACTION
// ===========================
const flowNodes = document.querySelectorAll('.flow-node');
const mappingCards = document.querySelectorAll('.mapping-card');

// Mapping between node highlights and project types
const highlightMap = {
    'fire': [0, 2],      // Fire Detection - Input & Decision
    'audio': [1, 4],     // Audio - Processing & Optimization
    'automation': [3]    // Automation - Feedback
};

flowNodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
        const highlight = node.getAttribute('data-highlight');
        if (highlight && highlightMap[highlight]) {
            node.classList.add('highlighted');
        }
    });
    
    node.addEventListener('mouseleave', () => {
        node.classList.remove('highlighted');
    });
});

// Highlight corresponding nodes when hovering over mapping cards
mappingCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        const projectType = ['fire', 'audio', 'automation'][index];
        if (highlightMap[projectType]) {
            highlightMap[projectType].forEach(nodeIndex => {
                flowNodes[nodeIndex]?.classList.add('highlighted');
            });
        }
    });
    
    card.addEventListener('mouseleave', () => {
        flowNodes.forEach(node => node.classList.remove('highlighted'));
    });
});

// ===========================
// CARDS HOVER EFFECT
// ===========================
const cards = document.querySelectorAll('.experience-card, .project-card, .contact-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 80;
        const rotateY = (centerX - x) / 80;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===========================
// TIMELINE ANIMATION
// ===========================
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateX(-50px)';
            entry.target.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, 100);
            
            timelineObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// ===========================
// PROJECT CARDS ANIMATION
// ===========================
const projectCards = document.querySelectorAll('.project-card');

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(50px)';
            entry.target.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            projectObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

projectCards.forEach(card => {
    projectObserver.observe(card);
});

// ===========================
// SCROLL REVEAL ANIMATION
// ===========================
const revealElements = document.querySelectorAll('.section-header, .stat-card, .skill-category');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            entry.target.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// ===========================
// SMOOTH PARALLAX EFFECT
// ===========================
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ===========================
// CURSOR TRAIL EFFECT
// ===========================
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

const cursor = document.createElement('div');
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(0, 77, 152, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.1s ease;
    display: none;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    cursor.style.left = cursorX - 10 + 'px';
    cursor.style.top = cursorY - 10 + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Show cursor on desktop
if (window.innerWidth > 768) {
    cursor.style.display = 'block';
}

// ===========================
// NAVBAR BACKGROUND ON SCROLL
// ===========================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 14, 26, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 77, 152, 0.2)';
    } else {
        navbar.style.background = 'rgba(15, 20, 32, 0.7)';
        navbar.style.boxShadow = 'none';
    }
});

// ===========================
// TECH TAG HOVER EFFECT
// ===========================
const techTags = document.querySelectorAll('.tech-tag');

techTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.1)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
    });
});

// ===========================
// STAT COUNTER ANIMATION
// ===========================
const statValues = document.querySelectorAll('.stat-value');

const countUp = (element, target) => {
    const speed = 200;
    const increment = target / speed;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            if (target.toString().includes('%')) {
                element.textContent = Math.ceil(current) + '%';
            } else if (target.toString().includes('+')) {
                element.textContent = Math.ceil(current) + '+';
            } else {
                element.textContent = Math.ceil(current);
            }
        }
    }, 10);
};

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target.textContent;
            const numMatch = target.match(/\d+/);
            if (numMatch) {
                const num = parseInt(numMatch[0]);
                entry.target.textContent = '0';
                setTimeout(() => {
                    countUp(entry.target, num);
                }, 500);
            }
            statObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

statValues.forEach(stat => {
    statObserver.observe(stat);
});

// ===========================
// LOADING ANIMATION
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// CONTACT FORM VALIDATION (if needed)
// ===========================
const ctaButton = document.querySelector('.cta-button');

if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = ctaButton.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;
        
        ctaButton.style.position = 'relative';
        ctaButton.style.overflow = 'hidden';
        ctaButton.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===========================
// CONSOLE MESSAGE
// ===========================
console.log('%c👋 Welcome to my portfolio!', 'font-size: 24px; color: #004D98; font-weight: bold;');
console.log('%cBuilt with precision and passion.', 'font-size: 14px; color: #FFCC00;');
console.log('%cInterested in collaboration? Let\'s connect!', 'font-size: 14px; color: #A0AEC0;');
console.log('%cEmail: ankanpaul577@gmail.com', 'font-size: 12px; color: #64748B;');

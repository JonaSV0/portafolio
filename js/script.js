function downloadPDF() {
    const element = document.getElementById('portfolio-content');
    const opt = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: 'Jonatan_Simon_Vargas_Portfolio.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            letterRendering: true,
            backgroundColor: '#0a0f1c'
        },
        jsPDF: { 
            unit: 'in', 
            format: 'a4', 
            orientation: 'portrait',
            compress: true
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // Temporalmente ocultar el botón de descarga
    const downloadBtn = document.querySelector('.download-btn');
    downloadBtn.style.display = 'none';

    html2pdf().set(opt).from(element).save().then(() => {
        // Mostrar el botón nuevamente después de la descarga
        downloadBtn.style.display = 'block';
    });
}

// Animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Función para inicializar animaciones
function initAnimations() {
    const animatedElements = document.querySelectorAll(
        '.experience-item, .education-item, .skill-category, .soft-skill, .project-card, .language-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Función para manejar imágenes de proyectos
function initProjectImages() {
    const projectImages = document.querySelectorAll('.project-img');
    
    projectImages.forEach(img => {
        // Verificar si la imagen ya está cargada
        if (img.complete && img.naturalWidth > 0) {
            // La imagen ya está cargada
            img.style.display = 'block';
            const placeholder = img.nextElementSibling;
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        } else {
            // La imagen no está cargada, ocultarla y mostrar placeholder
            img.style.display = 'none';
            const placeholder = img.nextElementSibling;
            if (placeholder) {
                placeholder.style.display = 'flex';
            }
            
            // Event listener para cuando la imagen se carga exitosamente
            img.addEventListener('load', function() {
                this.style.display = 'block';
                const placeholder = this.nextElementSibling;
                if (placeholder) {
                    placeholder.style.display = 'none';
                }
            });
            
            // Event listener para manejar errores de carga
            img.addEventListener('error', function() {
                console.error('Error cargando imagen:', this.src);
                this.style.display = 'none';
                const placeholder = this.nextElementSibling;
                if (placeholder) {
                    placeholder.style.display = 'flex';
                }
            });
        }
    });
}

// Función para agregar efectos de typing a los títulos
function addTypingEffect() {
    const title = document.querySelector('.header h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
}

// Función para agregar efectos de partículas flotantes
function addFloatingParticles() {
    const header = document.querySelector('.header');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #3b82f6;
            border-radius: 50%;
            opacity: 0.7;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${5 + Math.random() * 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        header.appendChild(particle);
    }
}

// Función para smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Función para agregar tooltip a las habilidades
function initSkillTooltips() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Función para contador animado de años de experiencia
function animateCounters() {
    const experienceYears = 4; // Años desde 2020
    const counterElement = document.querySelector('.experience-counter');
    
    if (counterElement) {
        let count = 0;
        const increment = experienceYears / 50;
        
        const timer = setInterval(() => {
            count += increment;
            counterElement.textContent = Math.floor(count);
            
            if (count >= experienceYears) {
                counterElement.textContent = experienceYears;
                clearInterval(timer);
            }
        }, 30);
    }
}

// Función para lazy loading de imágenes
function initLazyLoading() {
    const images = document.querySelectorAll('.project-img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Función para manejar el tema y efectos visuales
function initThemeEffects() {
    // Agregar efecto de cursor personalizado
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Efecto hover en elementos interactivos
    const interactiveElements = document.querySelectorAll(
        '.project-card, .skill-category, .experience-item, .soft-skill'
    );
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.8), transparent)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent)';
        });
    });
}

// Función principal de inicialización
function init() {
    // Esperar a que el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', () => {
        initAnimations();
        initProjectImages();
        initSmoothScroll();
        initSkillTooltips();
        initLazyLoading();
        initThemeEffects();
        
        // Efectos opcionales (comentados para evitar sobrecarga)
        // addTypingEffect();
        // addFloatingParticles();
        // animateCounters();
        
        console.log('🚀 Portafolio inicializado correctamente');
    });
}

// Inicializar la aplicación
init();
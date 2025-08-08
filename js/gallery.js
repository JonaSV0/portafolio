// Configuración de proyectos y sus imágenes
const projectsData = {
    'asistente-ai': {
        title: 'Asistente Digital AI para Alimentos Balanceados',
        description: 'Sistema inteligente desarrollado en Flask que utiliza algoritmos de IA para gestionar información del sector pecuario. Genera fórmulas optimizadas de alimentos balanceados usando residuos agroindustriales, mejorando la sostenibilidad y eficiencia nutricional.',
        technologies: ['Flask', 'Python', 'AI/ML', 'SQLite', 'REST API'],
        images: [
            { src: 'imagenes/proyectos/asistente-ai/chatbot.jpg', caption: 'Dashboard Principal', description: 'Interfaz principal del asistente' },
            { src: 'imagenes/proyectos/asistente-ai/diagram.jpg', caption: 'Diagrama de Funcionamiento', description: 'Algoritmo de IA generando fórmulas optimizadas' },
        ]
    },
    'sistema-sos': {
        title: 'Sistema SOS y Monitoreo Vehicular',
        description: 'Plataforma escalable de alertas SOS integrada con monitoreo vehicular en tiempo real. Arquitectura modular desarrollada en Django Rest y Node.js que garantiza alta disponibilidad y respuesta inmediata ante emergencias.',
        technologies: ['Django Rest', 'Node.js', 'WebSockets', 'PostgreSQL', 'Redis', 'API REST'],
        images: [
            { src: 'imagenes/proyectos/sistema-sos/monitoreo.jpg', caption: 'Centro de Monitoreo', description: 'Dashboard de monitoreo en tiempo real de la flota' },
            { src: 'imagenes/proyectos/sistema-sos/alertas.jpg', caption: 'Sistema de Alertas', description: 'Panel de gestión de alertas SOS y emergencias' },
            { src: 'imagenes/proyectos/sistema-sos/mapa.jpg', caption: 'Vista de Mapa', description: 'Geolocalización en tiempo real de todos los vehículos' },
            { src: 'imagenes/proyectos/sistema-sos/historial.jpg', caption: 'Historial de Rutas', description: 'Seguimiento histórico y análisis de rutas' }
        ]
    },
    'app-android': {
        title: 'Aplicación Android para Gestión de Flotas',
        description: 'Aplicación móvil nativa desarrollada en Java para gestión integral de flotas vehiculares. Incluye seguimiento GPS en tiempo real, sistema de alertas SOS, comunicación bidireccional y reportes de actividad.',
        technologies: ['Android', 'Java', 'GPS', 'Firebase', 'Google Maps API', 'SQLite'],
        images: [
            { src: 'imagenes/proyectos/app-android/login.jpg', caption: 'Pantalla de Login', description: 'Autenticación segura con biometría' },
            { src: 'imagenes/proyectos/app-android/dashboard.jpg', caption: 'Dashboard Principal', description: 'Vista general de la flota y alertas activas' },
            { src: 'imagenes/proyectos/app-android/mapa-movil.jpg', caption: 'Mapa Interactivo', description: 'Seguimiento GPS en tiempo real desde móvil' },
            { src: 'imagenes/proyectos/app-android/boton-sos.jpg', caption: 'Botón de Pánico', description: 'Interfaz de emergencia para alertas SOS' }
        ]
    },
    'reconocimiento-facial': {
        title: 'Sistema de Reconocimiento Facial',
        description: 'Sistema avanzado de autenticación biométrica desarrollado en Python utilizando computer vision. Implementa algoritmos de deep learning para reconocimiento facial preciso y seguro, mejorando la seguridad empresarial.',
        technologies: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'NumPy', 'SQLite'],
        images: [
            { src: 'imagenes/proyectos/reconocimiento-facial/screens.jpg', caption: 'Interfaz', description: 'Interfaz de configuracion y reconocimiento de rostros' },
            { src: 'imagenes/proyectos/reconocimiento-facial/rec.png', caption: 'Captura Facial', description: 'Sistema funcionando en tiempo real' }
        ]
    },
    'cochera-inteligente': {
        title: 'Sistema de Cochera Inteligente',
        description: 'Plataforma inteligente de cochera desarrollada en Django Rest, opera offline.',
        technologies: ['Django Rest', 'Python', 'Algoritmos de Optimización', 'SQLite', 'JavaScript'],
        images: [
            { src: 'imagenes/proyectos/cochera-inteligente/login.jpg', caption: 'Login', description: 'Vista de Login' },
            { src: 'imagenes/proyectos/cochera-inteligente/dashboard.jpg', caption: 'Dashboard', description: 'Vista de vehiculos totales, parkeados y parkeados el dia de hoy' },
            { src: 'imagenes/proyectos/cochera-inteligente/tickets.jpg', caption: 'Sistema de Tickets', description: 'Generación automática de tickets con códigos QR/Barras' },
            { src: 'imagenes/proyectos/cochera-inteligente/boletas.jpg', caption: 'Boletas', description: 'Informacion de horas de parkeo, tipo de vehiculo, boletas...' }
        ]
    },
    'sistema-facturacion': {
        title: 'Sistema de Facturación y Monitoreo',
        description: 'Plataforma completa de facturación desarrollada con Angular y Django Rest. Incluye monitoreo en tiempo real, automatización de procesos de billing y optimización que redujo significativamente los costos logísticos.',
        technologies: ['Angular', 'Django Rest', 'PostgreSQL', 'Redis', 'Celery', 'API REST'],
        images: [
            { src: 'imagenes/proyectos/sistema-facturacion/facturacion.jpg', caption: 'Módulo de Facturación', description: 'Interfaz principal de generación de facturas' },
            { src: 'imagenes/proyectos/sistema-facturacion/monitoreo-tiempo-real.jpg', caption: 'Monitoreo en Tiempo Real', description: 'Dashboard con métricas en vivo del sistema' },
            { src: 'imagenes/proyectos/sistema-facturacion/reportes-financieros.jpg', caption: 'Reportes Financieros', description: 'Análisis detallado de ingresos y costos' },
            { src: 'imagenes/proyectos/sistema-facturacion/api-integracion.jpg', caption: 'API de Integración', description: 'Panel de gestión de APIs y conectores externos' }
        ]
    },
};

// Clase principal de la galería
class ProjectGallery {
    constructor() {
        this.currentProject = null;
        this.currentImages = [];
        this.currentImageIndex = 0;
        this.zoomLevel = 1;
        this.isViewerOpen = false;
        this.isGalleryOpen = false;
        
        this.init();
    }

    init() {
        this.createGalleryModal();
        this.createImageViewer();
        this.bindEvents();
        console.log('🖼️ Galería de proyectos inicializada correctamente');
    }

    createGalleryModal() {
        // Crear el modal principal de la galería
        const modalHTML = `
            <div id="gallery-modal" class="gallery-modal">
                <div class="gallery-container">
                    <div class="gallery-header">
                        <h2 class="gallery-title" id="gallery-title">Título del Proyecto</h2>
                        <button class="gallery-close" id="gallery-close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div class="gallery-tech-tags" id="gallery-tech-tags"></div>
                    
                    <div class="gallery-description" id="gallery-description">Descripción del proyecto</div>
                    
                    <div class="gallery-grid" id="gallery-grid"></div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    createImageViewer() {
        // Verificar si ya existe
        if (document.getElementById('image-viewer')) {
            return;
        }

        // Crear el visor de imágenes
        const viewerHTML = `
            <div id="image-viewer" class="image-viewer">
                <div class="viewer-container">
                    <div class="viewer-counter" id="viewer-counter">1 / 4</div>
                    
                    <div class="viewer-zoom-controls">
                        <button class="zoom-btn" id="zoom-in">
                            <i class="fas fa-search-plus"></i>
                        </button>
                        <button class="zoom-btn" id="zoom-out">
                            <i class="fas fa-search-minus"></i>
                        </button>
                        <button class="zoom-btn" id="zoom-reset">
                            <i class="fas fa-expand-arrows-alt"></i>
                        </button>
                    </div>
                    
                    <button class="viewer-close" id="viewer-close">
                        <i class="fas fa-times"></i>
                    </button>
                    
                    <button class="viewer-nav viewer-prev" id="viewer-prev">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    
                    <button class="viewer-nav viewer-next" id="viewer-next">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    
                    <div class="viewer-loading" id="viewer-loading" style="display: none;">
                        <div class="loading-spinner"></div>
                        <span>Cargando imagen...</span>
                    </div>
                    
                    <img id="viewer-image" class="viewer-image" src="" alt="">
                    
                    <div class="viewer-info" id="viewer-info">
                        <div class="viewer-title" id="viewer-title">Título de la imagen</div>
                        <div class="viewer-description" id="viewer-description">Descripción de la imagen</div>
                    </div>
                    
                    <div class="viewer-thumbnails" id="viewer-thumbnails">
                        <!-- Los thumbnails se generan dinámicamente -->
                    </div>
                </div>
                
                <div class="swipe-indicator left" id="swipe-left">
                    <i class="fas fa-chevron-left"></i>
                </div>
                <div class="swipe-indicator right" id="swipe-right">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', viewerHTML);
    }

    bindEvents() {
        // Esperar un momento para asegurar que los elementos estén en el DOM
        setTimeout(() => {
            this.setupGalleryEvents();
            this.setupViewerEvents();
            this.setupKeyboardEvents();
            this.setupTouchEvents();
        }, 100);
    }

    setupGalleryEvents() {
        // Event listeners para abrir galería desde las tarjetas de proyecto
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const projectKeys = Object.keys(projectsData);
                if (projectKeys[index]) {
                    this.openGallery(projectKeys[index]);
                }
            });
        });

        // Event listeners para el modal de galería
        const galleryClose = document.getElementById('gallery-close');
        const galleryModal = document.getElementById('gallery-modal');
        
        if (galleryClose) {
            galleryClose.addEventListener('click', () => {
                this.closeGallery();
            });
        }

        if (galleryModal) {
            galleryModal.addEventListener('click', (e) => {
                if (e.target.id === 'gallery-modal') {
                    this.closeGallery();
                }
            });
        }
    }

    setupViewerEvents() {
        // Event listeners para el visor de imágenes
        const viewerClose = document.getElementById('viewer-close');
        const viewerPrev = document.getElementById('viewer-prev');
        const viewerNext = document.getElementById('viewer-next');
        const zoomIn = document.getElementById('zoom-in');
        const zoomOut = document.getElementById('zoom-out');
        const zoomReset = document.getElementById('zoom-reset');
        const imageViewer = document.getElementById('image-viewer');

        if (viewerClose) {
            viewerClose.addEventListener('click', () => this.closeImageViewer());
        }
        
        if (viewerPrev) {
            viewerPrev.addEventListener('click', () => this.previousImage());
        }
        
        if (viewerNext) {
            viewerNext.addEventListener('click', () => this.nextImage());
        }
        
        if (zoomIn) {
            zoomIn.addEventListener('click', () => this.zoomIn());
        }
        
        if (zoomOut) {
            zoomOut.addEventListener('click', () => this.zoomOut());
        }
        
        if (zoomReset) {
            zoomReset.addEventListener('click', () => this.resetZoom());
        }

        // Event listeners para cerrar al hacer click fuera
        if (imageViewer) {
            imageViewer.addEventListener('click', (e) => {
                if (e.target.id === 'image-viewer') {
                    this.closeImageViewer();
                }
            });
        }
    }

    setupKeyboardEvents() {
        // Event listeners de teclado
        document.addEventListener('keydown', (e) => this.handleKeydown(e));
    }

    handleKeydown(e) {
        if (this.isViewerOpen) {
            switch(e.key) {
                case 'Escape':
                    this.closeImageViewer();
                    break;
                case 'ArrowLeft':
                    this.previousImage();
                    break;
                case 'ArrowRight':
                    this.nextImage();
                    break;
                case '+':
                case '=':
                    this.zoomIn();
                    break;
                case '-':
                    this.zoomOut();
                    break;
                case '0':
                    this.resetZoom();
                    break;
            }
        } else if (this.isGalleryOpen && e.key === 'Escape') {
            this.closeGallery();
        }
    }

    setupTouchEvents() {
        let startX = 0;
        let startY = 0;
        const viewer = document.getElementById('image-viewer');

        if (!viewer) {
            console.warn('Image viewer not found for touch events');
            return;
        }

        viewer.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            }
        }, { passive: true });

        viewer.addEventListener('touchend', (e) => {
            if (!this.isViewerOpen || e.changedTouches.length !== 1) return;

            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX;
            const diffY = startY - endY;

            // Swipe horizontal (mínimo 50px)
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    this.nextImage();
                } else {
                    this.previousImage();
                }
            }
        }, { passive: true });
    }

    openGallery(projectKey) {
        const project = projectsData[projectKey];
        if (!project) {
            console.error(`Proyecto "${projectKey}" no encontrado`);
            return;
        }

        this.currentProject = projectKey;
        this.isGalleryOpen = true;

        // Actualizar contenido del modal
        document.getElementById('gallery-title').textContent = project.title;
        document.getElementById('gallery-description').textContent = project.description;

        // Mostrar tecnologías
        const techContainer = document.getElementById('gallery-tech-tags');
        techContainer.innerHTML = project.technologies
            .map(tech => `<span class="gallery-tech-tag">${tech}</span>`)
            .join('');

        // Crear grid de imágenes
        this.createImageGrid(project.images);

        // Mostrar modal
        document.getElementById('gallery-modal').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    createImageGrid(images) {
        const grid = document.getElementById('gallery-grid');
        grid.innerHTML = '';

        images.forEach((image, index) => {
            const imageItem = document.createElement('div');
            imageItem.className = 'gallery-item';
            
            imageItem.innerHTML = `
                <img class="gallery-image" 
                     src="${image.src}" 
                     alt="${image.caption}"
                     loading="lazy"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                <div class="gallery-placeholder" style="display: none;">
                    <i class="fas fa-image"></i>
                    <p>Agregar imagen:<br>${image.caption}</p>
                </div>
                <div class="gallery-caption">
                    <h4>${image.caption}</h4>
                    <p>${image.description}</p>
                </div>
            `;

            // Event listener para abrir imagen en visor
            const img = imageItem.querySelector('.gallery-image');
            img.addEventListener('click', () => {
                this.openImageViewer(index, images);
            });

            grid.appendChild(imageItem);
        });
    }

    openImageViewer(startIndex, images) {
        this.currentImages = images;
        this.currentImageIndex = startIndex;
        this.isViewerOpen = true;

        const viewer = document.getElementById('image-viewer');
        viewer.classList.add('active');

        this.showCurrentImage();
        this.createThumbnails();
        this.updateNavigation();
    }

    showCurrentImage() {
        if (!this.currentImages[this.currentImageIndex]) return;

        const image = this.currentImages[this.currentImageIndex];
        const viewerImage = document.getElementById('viewer-image');
        const viewerTitle = document.getElementById('viewer-title');
        const viewerDescription = document.getElementById('viewer-description');
        const viewerCounter = document.getElementById('viewer-counter');
        const loadingIndicator = document.getElementById('viewer-loading');

        // Mostrar loading
        if (loadingIndicator) {
            loadingIndicator.style.display = 'flex';
        }
        
        if (viewerImage) {
            viewerImage.style.opacity = '0.5';
        }

        // Actualizar información
        if (viewerTitle) viewerTitle.textContent = image.caption;
        if (viewerDescription) viewerDescription.textContent = image.description;
        if (viewerCounter) {
            viewerCounter.textContent = `${this.currentImageIndex + 1} / ${this.currentImages.length}`;
        }

        // Cargar imagen
        if (viewerImage) {
            viewerImage.onload = () => {
                if (loadingIndicator) loadingIndicator.style.display = 'none';
                viewerImage.style.opacity = '1';
                this.resetZoom();
            };

            viewerImage.onerror = () => {
                if (loadingIndicator) loadingIndicator.style.display = 'none';
                viewerImage.style.opacity = '1';
                console.warn(`Error cargando imagen: ${image.src}`);
            };

            viewerImage.src = image.src;
            viewerImage.alt = image.caption;
        }
    }

    createThumbnails() {
        const container = document.getElementById('viewer-thumbnails');
        if (!container) return;

        container.innerHTML = '';

        this.currentImages.forEach((image, index) => {
            const thumb = document.createElement('img');
            thumb.className = 'viewer-thumb';
            thumb.src = image.src;
            thumb.alt = image.caption;
            
            if (index === this.currentImageIndex) {
                thumb.classList.add('active');
            }

            thumb.addEventListener('click', () => {
                this.currentImageIndex = index;
                this.showCurrentImage();
                this.updateThumbnails();
                this.updateNavigation();
            });

            container.appendChild(thumb);
        });
    }

    updateThumbnails() {
        const thumbnails = document.querySelectorAll('.viewer-thumb');
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === this.currentImageIndex);
        });
    }

    updateNavigation() {
        const prevBtn = document.getElementById('viewer-prev');
        const nextBtn = document.getElementById('viewer-next');

        if (prevBtn) {
            prevBtn.classList.toggle('disabled', this.currentImageIndex === 0);
        }
        if (nextBtn) {
            nextBtn.classList.toggle('disabled', this.currentImageIndex === this.currentImages.length - 1);
        }
    }

    previousImage() {
        if (this.currentImageIndex > 0) {
            this.currentImageIndex--;
            this.showCurrentImage();
            this.updateThumbnails();
            this.updateNavigation();
        }
    }

    nextImage() {
        if (this.currentImageIndex < this.currentImages.length - 1) {
            this.currentImageIndex++;
            this.showCurrentImage();
            this.updateThumbnails();
            this.updateNavigation();
        }
    }

    zoomIn() {
        const viewerImage = document.getElementById('viewer-image');
        if (!viewerImage) return;

        this.zoomLevel = Math.min(this.zoomLevel * 1.2, 3);
        viewerImage.style.transform = `scale(${this.zoomLevel})`;
        viewerImage.style.cursor = this.zoomLevel > 1 ? 'move' : 'default';
    }

    zoomOut() {
        const viewerImage = document.getElementById('viewer-image');
        if (!viewerImage) return;

        this.zoomLevel = Math.max(this.zoomLevel / 1.2, 0.5);
        viewerImage.style.transform = `scale(${this.zoomLevel})`;
        viewerImage.style.cursor = this.zoomLevel > 1 ? 'move' : 'default';
    }

    resetZoom() {
        const viewerImage = document.getElementById('viewer-image');
        if (!viewerImage) return;

        this.zoomLevel = 1;
        viewerImage.style.transform = 'scale(1)';
        viewerImage.style.cursor = 'default';
    }

    closeImageViewer() {
        const viewer = document.getElementById('image-viewer');
        if (viewer) {
            viewer.classList.remove('active');
        }
        
        this.isViewerOpen = false;
        this.resetZoom();
    }

    closeGallery() {
        const modal = document.getElementById('gallery-modal');
        if (modal) {
            modal.classList.remove('active');
        }
        
        document.body.style.overflow = '';
        this.isGalleryOpen = false;
        this.currentProject = null;
    }

    // Métodos de utilidad para gestión dinámica
    addImageToProject(projectKey, imageData) {
        if (projectsData[projectKey]) {
            projectsData[projectKey].images.push(imageData);
            
            if (this.currentProject === projectKey && this.isGalleryOpen) {
                this.createImageGrid(projectsData[projectKey].images);
            }
        }
    }

    updateProjectDescription(projectKey, description) {
        if (projectsData[projectKey]) {
            projectsData[projectKey].description = description;
            
            if (this.currentProject === projectKey && this.isGalleryOpen) {
                document.getElementById('gallery-description').textContent = description;
            }
        }
    }
}

// Inicializar la galería cuando el DOM esté listo
let galleryInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    galleryInstance = new ProjectGallery();
});

// Exportar para uso externo
if (typeof window !== 'undefined') {
    window.ProjectGallery = ProjectGallery;
    window.projectsData = projectsData;
}
// Навигационная система
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            
            // Убираем активный класс у всех кнопок
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            showSection(sectionId);
        });
    });
    
    // Активируем первую кнопку по умолчанию
    if (navButtons.length > 0) {
        navButtons[0].classList.add('active');
        showSection(navButtons[0].getAttribute('data-section'));
    }
}

// Функция показа секции
function showSection(sectionId) {
    // Скрываем все секции
    const allSections = document.querySelectorAll('.content-section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Показываем выбранную секцию
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
        // Плавная прокрутка к секции
        setTimeout(() => {
            activeSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100);
    }
}

// Создаем секции контента
function createContentSections() {
    const sectionsConfig = [
        { 
            id: 'new-worldview', 
            title: 'НОВОЕ ОБЪЯСНЕНИЕ МИРА', 
            content: 'Здесь будет представлена мировоззренческая теория, предлагающая новое понимание устройства мира и места человека в нём.' 
        },
        { 
            id: 'practice', 
            title: 'Практика', 
            content: 'Практические методы и техники для применения знаний в повседневной жизни.' 
        },
        // ... остальные секции по аналогии
    ];
    
    const container = document.querySelector('.container');
    
    sectionsConfig.forEach(section => {
        const sectionElement = document.createElement('div');
        sectionElement.className = 'content-section section';
        sectionElement.id = section.id;
        
        sectionElement.innerHTML = `
            <h1 class="title">${section.title}</h1>
            <div class="text">${section.content}</div>
        `;
        
        container.appendChild(sectionElement);
    });
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    createContentSections();
    initNavigation();
});

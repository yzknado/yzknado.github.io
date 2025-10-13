// Функция для навигации
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Создаем секции если их нет
    if (contentSections.length === 0) {
        createContentSections();
    }
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            
            // Убираем активный класс у всех кнопок
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Скрываем все секции
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Показываем выбранную секцию
            const activeSection = document.getElementById(sectionId);
            if (activeSection) {
                activeSection.classList.add('active');
                activeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Активируем первую кнопку по умолчанию
    if (navButtons.length > 0) {
        navButtons[0].classList.add('active');
    }
}

// Функция для создания секций контента
function createContentSections() {
    const sections = [
        { id: 'new-worldview', title: 'НОВОЕ ОБЪЯСНЕНИЕ МИРА', content: 'Содержимое раздела мировоззренческой теории...' },
        { id: 'practice', title: 'Практика', content: 'Содержимое раздела практики...' },
        { id: 'learning', title: 'Обучение', content: 'Содержимое раздела обучения...' },
        { id: 'joint-actions', title: 'Совместные акции', content: 'Содержимое раздела совместных акций...' },
        { id: 'broadcasts', title: 'Трансляции', content: 'Содержимое раздела трансляций...' },
        { id: 'video', title: 'Видеотека', content: 'Содержимое видеотеки...' },
        { id: 'interesting-cases', title: 'Интересные случаи из жизни', content: 'Содержимое раздела интересных случаев...' },
        { id: 'reviews', title: 'Отзывы', content: 'Содержимое раздела отзывов...' },
        { id: 'contacts', title: 'Контакты', content: 'Содержимое раздела контактов...' },
        { id: 'cooperation', title: 'Сотрудничество', content: 'Содержимое раздела сотрудничества...' }
    ];
    
    const container = document.querySelector('.container');
    
    sections.forEach(section => {
        const sectionElement = document.createElement('div');
        sectionElement.className = 'content-section section';
        sectionElement.id = section.id;
        
        sectionElement.innerHTML = `
            <h1 class="title">${section.title}</h1>
            <p class="text">${section.content}</p>
        `;
        
        container.appendChild(sectionElement);
    });
}

// Инициализируем навигацию после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
});

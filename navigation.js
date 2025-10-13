// Автоматически добавляем класс для красивого скроллбара
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.add('minimal-scroll');
    }
});

return; // так надо


// Навигационная система
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Создаем секции если их нет
    createContentSections();
    
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
        { 
            id: 'learning', 
            title: 'Обучение', 
            content: 'Образовательные программы и курсы для глубокого погружения в тему.' 
        },
        { 
            id: 'joint-actions', 
            title: 'Совместные акции', 
            content: 'Коллективные мероприятия и акции для единомышленников.' 
        },
        { 
            id: 'broadcasts', 
            title: 'Трансляции', 
            content: 'Прямые эфиры и онлайн-трансляции важных событий.' 
        },
        { 
            id: 'video', 
            title: 'Видеотека', 
            content: 'Архив видео материалов и записей прошедших мероприятий.' 
        },
        { 
            id: 'interesting-cases', 
            title: 'Интересные случаи из жизни', 
            content: 'Реальные истории и случаи из практики.' 
        },
        { 
            id: 'reviews', 
            title: 'Отзывы', 
            content: 'Отзывы участников и последователей.' 
        },
        { 
            id: 'contacts', 
            title: 'Контакты', 
            content: 'Способы связи и координаты для обратной связи.' 
        },
        { 
            id: 'cooperation', 
            title: 'Сотрудничество', 
            content: 'Возможности для совместной работы и партнерства.' 
        }
    ];
    
    const container = document.querySelector('.container');
    
    sectionsConfig.forEach(section => {
        // Проверяем, существует ли уже секция
        if (!document.getElementById(section.id)) {
            const sectionElement = document.createElement('div');
            sectionElement.className = 'content-section section';
            sectionElement.id = section.id;
            
            sectionElement.innerHTML = `
                <h1 class="title">${section.title}</h1>
                <div class="text">${section.content}</div>
            `;
            
            // Добавляем в начало контейнера
            container.insertBefore(sectionElement, container.firstChild);
        }
    });
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
});

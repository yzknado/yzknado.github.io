// Универсальная навигация для всех страниц
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.add('minimal-scroll');
    }
    
    // Вешаем обработчики на все кнопки
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            const section = this.getAttribute('data-section');
            
            // Убираем активный класс у всех кнопок
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Обработка разных разделов
            switch(section) {
                case 'main':
                    // Для главной - прокрутка наверх
                    if (window.location.pathname === '/' || window.location.pathname.includes('index')) {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                        // Если на другой странице - переход на главную
                        window.location.href = '/';
                    }
                    break;
                    
                case 'practice':
                    // Для практики - переход на страницу практики
                    window.location.href = '/practice.html';
                    break;
                    
                case 'learning':
                    // Для обучения - переход на страницу обучения
                    window.location.href = '/learning.html';
                    break;
                    
                // Добавьте другие страницы по аналогии
                    
                default:
                    // Для остальных - просто меняем активную кнопку
                    console.log('Раздел:', section);
            }
        });
    });
    
    // Автоматически активируем кнопку текущей страницы
    activateCurrentPageButton();
});

// Функция для автоматической активации кнопки текущей страницы
function activateCurrentPageButton() {
    const currentPage = getCurrentPage();
    const activeButton = document.querySelector(`.nav-btn[data-section="${currentPage}"]`);
    
    if (activeButton) {
        // Убираем активный класс у всех кнопок
        const allButtons = document.querySelectorAll('.nav-btn');
        allButtons.forEach(btn => btn.classList.remove('active'));
        
        // Добавляем активный класс текущей странице
        activeButton.classList.add('active');
    }
}

// Функция для определения текущей страницы
function getCurrentPage() {
    const path = window.location.pathname;
    
    if (path === '/' || path.includes('index')) return 'main';
    if (path.includes('practice')) return 'practice';
    if (path.includes('learning')) return 'learning';
    // Добавьте другие страницы
    
    return 'main'; // По умолчанию главная
}

// Универсальная навигация для всех страниц
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.add('minimal-scroll');
    }
    
    // Восстанавливаем активную кнопку из localStorage ИЛИ определяем текущую страницу
    const savedActive = localStorage.getItem('activeNavButton');
    if (savedActive) {
        setActiveButton(savedActive);
    } else {
        activateCurrentPageButton();
    }
    
    // Вешаем обработчики на все кнопки
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            const section = this.getAttribute('data-section');
            
            // Сохраняем активную кнопку в localStorage
            localStorage.setItem('activeNavButton', section);
            
            // Обработка разных разделов
            switch(section) {
                case 'main':
                    if (isMainPage()) {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setActiveButton('main');
                    } else {
                        window.location.href = 'index.html';
                    }
                    break;
                    
                case 'practice':
                    window.location.href = 'practice.html';
                    break;
                    
                case 'learning':
                    window.location.href = 'learning.html';
                    break;
                    
                default:
                    console.log('Раздел:', section);
            }
        });
    });
});

// Функция для установки активной кнопки
function setActiveButton(section) {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-section') === section) {
            btn.classList.add('active');
        }
    });
}

// Функция для автоматической активации кнопки текущей страницы
function activateCurrentPageButton() {
    const currentPage = getCurrentPage();
    setActiveButton(currentPage);
}

// Проверка на главную страницу
function isMainPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    return (path === '/' || page === 'index.html' || page === '' || page === 'yzknado.github.io');
}

// Функция для определения текущей страницы
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    if (isMainPage()) return 'main';
    if (page === 'practice.html') return 'practice';
    if (page === 'learning.html') return 'learning';
    
    return 'main';
}

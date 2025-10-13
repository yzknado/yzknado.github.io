
// Универсальная навигация для всех страниц
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.add('minimal-scroll');
    }
    
    // Автоматически активируем кнопку текущей страницы
    activateCurrentPageButton();
    
    // Вешаем обработчики на все кнопки
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            const section = this.getAttribute('data-section');
            const currentPage = getCurrentPage();
            
            // Если кликаем на кнопку текущей страницы - прокрутка наверх
            if (section === currentPage) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveButton(section);
                return;
            }
            
            switch(section) {
                case 'main': window.location.href = '/'; break;
                case 'new-worldview': window.location.href = 'pages/new-worldview.html'; break;
                case 'practice': window.location.href = 'pages/practice.html'; break;
                case 'learning': window.location.href = 'pages/learning.html'; break;
                case 'joint-actions': window.location.href = 'pages/joint-actions.html'; break;
                case 'videos': window.location.href = 'pages/videos.html'; break;
                case 'publications': window.location.href = 'pages/publications.html'; break;
                case 'unpublished': window.location.href = 'pages/unpublished.html'; break;
                case 'interesting-cases': window.location.href = 'pages/interesting-cases.html'; break;
                case 'reviews': window.location.href = 'pages/reviews.html'; break;
                case 'contacts': window.location.href = 'pages/contacts.html'; break;
                default: console.log('Раздел:', section);
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

// Функция для определения текущей страницы
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    if (path === '/' || page === '' || page === 'index.html' || path.includes('yzknado')) return 'main';
    if (page === 'new-worldview') return 'new-worldview';
    if (page === 'practice') return 'practice';
    if (page === 'learning') return 'learning';
    if (page === 'joint-actions') return 'joint-actions';
    if (page === 'videos') return 'videos';
    if (page === 'publications') return 'publications';
    if (page === 'unpublished') return 'unpublished';
    if (page === 'interesting-cases') return 'interesting-cases';
    if (page === 'reviews') return 'reviews';
    if (page === 'contacts') return 'contacts';
    
    return 'main';
}

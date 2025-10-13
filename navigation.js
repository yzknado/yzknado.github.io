// Автоперенаправление URL
(function() {
    const routes = {
        'new-worldview': 'pages/new-worldview.html',
        'practice': 'pages/practice.html',
        'learning': 'pages/learning.html',
        'joint-actions': 'pages/joint-actions.html',
        'videos': 'pages/videos.html',
        'publications': 'pages/publications.html',
        'unpublished': 'pages/unpublished.html',
        'interesting-cases': 'pages/interesting-cases.html',
        'reviews': 'pages/reviews.html',
        'contacts': 'pages/contacts.html'
    };

    const currentPath = window.location.pathname.split('/').pop();
    
    // Если пользователь попал на красивый URL, перенаправляем его
    if (routes[currentPath] && !currentPath.includes('.') && currentPath !== '') {
        window.location.href = routes[currentPath];
    }
})();

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
            
            // Переход на страницы в папке pages/
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
    if (page === 'new-worldview.html' || page === 'pages/new-worldview.html') return 'new-worldview';
    if (page === 'practice.html' || page === 'pages/practice.html') return 'practice';
    if (page === 'learning.html' || page === 'pages/learning.html') return 'learning';
    if (page === 'joint-actions.html' || page === 'pages/joint-actions.html') return 'joint-actions';
    if (page === 'videos.html' || page === 'pages/videos.html') return 'videos';
    if (page === 'publications.html' || page === 'pages/publications.html') return 'publications';
    if (page === 'unpublished.html' || page === 'pages/unpublished.html') return 'unpublished';
    if (page === 'interesting-cases.html' || page === 'pages/interesting-cases.html') return 'interesting-cases';
    if (page === 'reviews.html' || page === 'pages/reviews.html') return 'reviews';
    if (page === 'contacts.html' || page === 'pages/contacts.html') return 'contacts';
    
    return 'main';
}

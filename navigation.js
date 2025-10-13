// Роутинг для красивых URL
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
    
    // Если это красивый URL (без .html) и файл существует в routes
    if (routes[currentPath] && !currentPath.includes('.html')) {
        // Проверяем, существует ли HTML файл
        fetch(routes[currentPath])
            .then(response => {
                if (response.ok) {
                    window.location.href = routes[currentPath];
                }
            })
            .catch(error => {
                console.log('Файл не найден');
            });
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
            
            // Иначе переход на другую страницу (без .html)
            switch(section) {
                case 'main': window.location.href = '/'; break;
                case 'new-worldview': window.location.href = 'new-worldview'; break;
                case 'practice': window.location.href = 'practice'; break;
                case 'learning': window.location.href = 'learning'; break;
                case 'joint-actions': window.location.href = 'joint-actions'; break;
                case 'videos': window.location.href = 'videos'; break;
                case 'publications': window.location.href = 'publications'; break;
                case 'unpublished': window.location.href = 'unpublished'; break;
                case 'interesting-cases': window.location.href = 'interesting-cases'; break;
                case 'reviews': window.location.href = 'reviews'; break;
                case 'contacts': window.location.href = 'contacts'; break;
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

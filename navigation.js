// РАБОЧАЯ ВЕРСИЯ
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.add('minimal-scroll');
    }
    
    // Определяем активную кнопку по текущему URL
    setActiveButtonByCurrentPage();
    
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
                return;
            }
            
            // Иначе переход на другую страницу
            switch(section) {
                case 'main': window.location.href = 'index.html'; break;
                case 'new-worldview': window.location.href = 'new-worldview.html'; break;
                case 'practice': window.location.href = 'practice.html'; break;
                case 'learning': window.location.href = 'learning.html'; break;
                case 'joint-actions': window.location.href = 'joint-actions.html'; break;
                case 'videos': window.location.href = 'videos.html'; break;
                case 'publications': window.location.href = 'publications.html'; break;
                case 'unpublished': window.location.href = 'unpublished.html'; break;
                case 'interesting-cases': window.location.href = 'interesting-cases.html'; break;
                case 'reviews': window.location.href = 'reviews.html'; break;
                case 'contacts': window.location.href = 'contacts.html'; break;
                default: console.log('Раздел:', section);
            }
        });
    });
});

function setActiveButtonByCurrentPage() {
    const currentPage = getCurrentPage();
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-section') === currentPage) {
            btn.classList.add('active');
        }
    });
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    if (path === '/' || page === 'index.html' || page === '' || path.includes('yzknado')) return 'main';
    if (page === 'practice.html') return 'practice';
    if (page === 'learning.html') return 'learning';
    
    return 'main';
}

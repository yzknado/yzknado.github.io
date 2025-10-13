// Универсальная навигация для всех страниц
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.add('minimal-scroll');
    }
    
    // Сразу активируем текущую страницу
    activateCurrentPageButton();
    
    // Остальной код обработчиков...
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            const section = this.getAttribute('data-section');
            const currentPage = getCurrentPage();
            
            if (section === currentPage) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            
            // Переход на страницы...
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
                case 'exclusive': window.location.href = 'exclusive.html'; break;
                default: console.log('Раздел:', section);
            }
        });
    });
});

function setActiveButton(section) {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-section') === section) {
            btn.classList.add('active');
        }
    });
}

function activateCurrentPageButton() {
    const currentPage = getCurrentPage();
    setActiveButton(currentPage);
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    if (path === '/' || page === 'index.html' || page === '' || path.includes('yzknado')) return 'main';
    if (page === 'new-worldview.html') return 'new-worldview';
    if (page === 'practice.html') return 'practice';
    if (page === 'learning.html') return 'learning';
    if (page === 'joint-actions.html') return 'joint-actions';
    if (page === 'videos.html') return 'videos';
    if (page === 'publications.html') return 'publications';
    if (page === 'unpublished.html') return 'unpublished';
    if (page === 'interesting-cases.html') return 'interesting-cases';
    if (page === 'reviews.html') return 'reviews';
    if (page === 'contacts.html') return 'contacts';
    if (page === 'exclusive.html') return 'exclusive';
    
    return 'main';
}

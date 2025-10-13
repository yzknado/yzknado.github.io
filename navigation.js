// Универсальная навигация для всех страниц
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.add('minimal-scroll');
    }
    
    activateCurrentPageButton();
    
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            const section = this.getAttribute('data-section');
            const currentPage = getCurrentPage();
            
            if (section === currentPage) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveButton(section);
                return;
            }
            
            // КРАСИВЫЕ ссылки (без .html и без pages/)
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

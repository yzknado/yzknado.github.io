// ДИАГНОСТИЧЕСКАЯ ВЕРСИЯ
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== NAVIGATION DEBUG ===');
    console.log('URL:', window.location.href);
    console.log('Path:', window.location.pathname);
    
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.add('minimal-scroll');
        console.log('Sidebar found');
    } else {
        console.log('Sidebar NOT found');
    }
    
    // ВСЕГДА определяем активную кнопку по текущему URL
    const currentPage = getCurrentPage();
    console.log('Current page detected:', currentPage);
    
    setActiveButtonByCurrentPage();
    
    // Вешаем обработчики на все кнопки
    const navButtons = document.querySelectorAll('.nav-btn');
    console.log('Nav buttons found:', navButtons.length);
    
    navButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('Button clicked:', this.getAttribute('data-section'));
            
            const section = this.getAttribute('data-section');
            const currentPage = getCurrentPage();
            
            // Если кликаем на кнопку текущей страницы - прокрутка наверх
            if (section === currentPage) {
                console.log('Same page, scrolling to top');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            
            // Иначе переход на другую страницу
            console.log('Navigating to:', section);
            switch(section) {
                case 'main': window.location.href = 'index.html'; break;
                case 'practice': window.location.href = 'practice.html'; break;
                case 'learning': window.location.href = 'learning.html'; break;
                default: console.log('Unknown section:', section);
            }
        });
    });
});

function setActiveButtonByCurrentPage() {
    const currentPage = getCurrentPage();
    console.log('Setting active button:', currentPage);
    
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        const btnSection = btn.getAttribute('data-section');
        console.log('Button:', btnSection, 'should be active:', btnSection === currentPage);
        
        btn.classList.remove('active');
        if (btnSection === currentPage) {
            btn.classList.add('active');
            console.log('ACTIVATED:', btnSection);
        }
    });
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    console.log('getCurrentPage - path:', path, 'page:', page);
    
    if (path === '/' || page === 'index.html' || page === '' || path.includes('yzknado')) return 'main';
    if (page === 'practice.html') return 'practice';
    if (page === 'learning.html') return 'learning';
    
    return 'main';
}

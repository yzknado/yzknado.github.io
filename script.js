// Функция для показа выбранной секции
function showSection(sectionId) {
    // Скрыть все секции
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Показать выбранную секцию
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
        
        // Прокрутить к секции
        activeSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Показываем первую секцию по умолчанию при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Показать первую секцию
    const firstSection = document.querySelector('.content-section');
    if (firstSection) {
        firstSection.classList.add('active');
    }
    
    // Добавляем обработчики для существующей навигации
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Скрыть все content-section
                const contentSections = document.querySelectorAll('.content-section');
                contentSections.forEach(section => {
                    section.classList.remove('active');
                });
                
                // Прокрутить к целевой секции
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

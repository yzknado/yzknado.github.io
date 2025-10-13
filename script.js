document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен'); // Отладка
    
    // Создание плавающих символов
    const symbolsContainer = document.querySelector('.floating-symbols');
    if (symbolsContainer) {
        console.log('Контейнер символов найден');
        const symbols = ['✧', '✦', '❖', '♰', '⚚', '☾', '☽', '⚕', '⚔', '🜁', '🜂', '🜃', '🜄'];
        
        for (let i = 0; i < 40; i++) {
            const symbol = document.createElement('div');
            symbol.className = 'symbol';
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            symbol.style.left = Math.random() * 100 + 'vw';
            symbol.style.animationDuration = (15 + Math.random() * 20) + 's';
            symbol.style.animationDelay = (i * 0.75) + 's';
            symbol.style.fontSize = (1 + Math.random() * 2) + 'rem';
            symbolsContainer.appendChild(symbol);
        }
    }

    // Кнопка открытия попапа
    const joinButton = document.querySelector('.join-button');
    console.log('Найдена кнопка:', joinButton); // Отладка
    
    if (joinButton) {
        joinButton.addEventListener('click', function() {
            console.log('Кнопка нажата'); // Отладка
            showPopup();
        });
    } else {
        console.log('Кнопка не найдена!'); // Отладка
    }
    
    // Закрытие по клику вне попапа
    document.addEventListener('click', function(e) {
        const popup = document.getElementById('paymentPopup');
        if (popup && popup.style.display === 'flex' && e.target === popup) {
            closePopup();
        }
    });
    
    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        const popup = document.getElementById('paymentPopup');
        if (e.key === 'Escape' && popup && popup.style.display === 'flex') {
            closePopup();
        }
    });
});

function showPopup() {
    console.log('showPopup вызвана'); // Отладка
    const popup = document.getElementById('paymentPopup');
    if (popup) {
        console.log('Попап найден, показываем');
        popup.style.display = 'flex';
    } else {
        console.log('Попап не найден!');
    }
}

function closePopup() {
    const popup = document.getElementById('paymentPopup');
    if (popup) {
        popup.style.display = 'none';
    }
}

<div class="video-item">
    <div class="video-title" data-fulltitle="Очень длинное полное название видео которое не помещается в одну строку">
        Очень длинное полное название видео которое не помещается в одну строку
    </div>
    <div class="video-wrapper">
        <iframe src="https://vk.com/video_ext.php?oid=87855351&id=456254815" allowfullscreen></iframe>
    </div>
</div>

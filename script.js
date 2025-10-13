document.addEventListener('DOMContentLoaded', function() {
    // Создание плавающих символов
    const symbolsContainer = document.getElementById('symbols');
    if (symbolsContainer) {
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
    if (joinButton) {
        joinButton.addEventListener('click', showPopup);
    }
    
    // Закрытие по клику вне попапа (делегирование)
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
    const popup = document.getElementById('paymentPopup');
    if (popup) {
        popup.style.display = 'flex';
    }
}

function closePopup() {
    const popup = document.getElementById('paymentPopup');
    if (popup) {
        popup.style.display = 'none';
    }
}

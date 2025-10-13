        const symbolsContainer = document.getElementById('symbols');
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

        function showPopup() {
            const popup = document.getElementById('paymentPopup');
            popup.style.display = 'flex';
        }

        function closePopup() {
            const popup = document.getElementById('paymentPopup');
            popup.style.display = 'none';
        }

        // Закрытие попапа при клике вне его
        document.getElementById('paymentPopup').addEventListener('click', function(e) {
            if (e.target === this) {
                closePopup();
            }
        });

        // Закрытие попапа по клавише ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closePopup();
            }
        });

document.addEventListener("DOMContentLoaded", function () {
    // Funkcija sugeneruoti sliders su reikšmėmis
    function generateRatingSliders() {
        const questions = [
            { id: "rating1", label: "Paslaugų kokybė", name: "klausimas1" },
            { id: "rating2", label: "Rekomendavimo tikimybė", name: "klausimas2" },
            { id: "rating3", label: "Bendravimo sklandumas", name: "klausimas3" }
        ];

        questions.forEach(question => {
            const container = document.getElementById(question.id);
            
            // Sukuriamas slider elementas
            const sliderContainer = document.createElement("div");
            sliderContainer.style.marginBottom = "20px";
            
            const label = document.createElement("label");
            label.textContent = question.label + ": ";
            label.style.display = "block";
            label.style.marginBottom = "8px";
            label.style.fontWeight = "bold";
            
            const sliderWrapper = document.createElement("div");
            sliderWrapper.style.display = "flex";
            sliderWrapper.style.alignItems = "center";
            sliderWrapper.style.gap = "15px";
            
            const slider = document.createElement("input");
            slider.type = "range";
            slider.min = "1";
            slider.max = "10";
            slider.value = "5";
            slider.name = question.name;
            slider.id = question.name + "_slider";
            slider.style.flex = "1";
            slider.style.cursor = "pointer";
            
            const valueDisplay = document.createElement("span");
            valueDisplay.id = question.name + "_value";
            valueDisplay.textContent = "5";
            valueDisplay.style.minWidth = "30px";
            valueDisplay.style.fontWeight = "bold";
            valueDisplay.style.color = "#2c3e50";
            
            // Rodyti reikšmę kai slider keičiasi
            slider.addEventListener("input", function() {
                valueDisplay.textContent = this.value;
            });
            
            // Skaičių žymekliai po slider
            const numbersContainer = document.createElement("div");
            numbersContainer.style.display = "flex";
            numbersContainer.style.justifyContent = "space-between";
            numbersContainer.style.width = "100%";
            numbersContainer.style.marginTop = "5px";
            numbersContainer.style.fontSize = "12px";
            numbersContainer.style.color = "#7f8c8d";
            
            for (let i = 1; i <= 10; i++) {
                const numberSpan = document.createElement("span");
                numberSpan.textContent = i;
                numberSpan.style.cursor = "pointer";
                numberSpan.addEventListener("click", function() {
                    slider.value = i;
                    valueDisplay.textContent = i;
                    slider.dispatchEvent(new Event('input'));
                });
                numbersContainer.appendChild(numberSpan);
            }
            
            sliderWrapper.appendChild(slider);
            sliderWrapper.appendChild(valueDisplay);
            
            sliderContainer.appendChild(label);
            sliderContainer.appendChild(sliderWrapper);
            sliderContainer.appendChild(numbersContainer);
            
            container.appendChild(sliderContainer);
            
            // Pridėti paslėptą input formai
            const hiddenInput = document.createElement("input");
            hiddenInput.type = "hidden";
            hiddenInput.name = question.name;
            hiddenInput.value = "5";
            
            // Atnaujinti hidden input kai slider keičiasi
            slider.addEventListener("input", function() {
                hiddenInput.value = this.value;
            });
            
            container.appendChild(hiddenInput);
        });
    }

    // Sukuriame visus 3 vertinimo sliderius
    generateRatingSliders();

    // FORMOS SUBMIT LOGIKA
    const form = document.getElementById("contactForm");
    const output = document.getElementById("form-output");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // sustabdo persikrovimą

        const formData = new FormData(form);

        // Tikriname ar visi 3 klausimai įvertinti
        if (
            !formData.get("klausimas1") ||
            !formData.get("klausimas2") ||
            !formData.get("klausimas3")
        ) {
            alert("Prašome įvertinti visus tris klausimus (1–10).");
            return;
        }

        // Gauti vertinimus ir apskaičiuoti vidurkį
        const vertinimas1 = parseInt(formData.get("klausimas1"));
        const vertinimas2 = parseInt(formData.get("klausimas2"));
        const vertinimas3 = parseInt(formData.get("klausimas3"));
        
        // Apskaičiuoti vidurkį (su vienu skaičiumi po kablelio)
        const vidurkis = ((vertinimas1 + vertinimas2 + vertinimas3) / 3).toFixed(1);
        
        // Gauti vardą ir pavardę
        const vardas = formData.get("vardas");
        const pavarde = formData.get("pavarde");

        // Atvaizduojame rezultatą
        let html = `
            <h3>Gauti duomenys:</h3>
            <p><strong>Vardas:</strong> ${vardas}</p>
            <p><strong>Pavardė:</strong> ${pavarde}</p>
            <p><strong>El. paštas:</strong> ${formData.get("email")}</p>
            <p><strong>Telefonas:</strong> ${formData.get("telefonas")}</p>
            <p><strong>Adresas:</strong> ${formData.get("adresas")}</p>
            <p><strong>Paslaugų kokybė:</strong> ${vertinimas1}</p>
            <p><strong>Rekomendavimo tikimybė:</strong> ${vertinimas2}</p>
            <p><strong>Bendravimo sklandumas:</strong> ${vertinimas3}</p>
            <hr>
            <h3>Klausimų įvertinimų vidurkis:</h3>
            <p style="font-size: 18px; font-weight: bold; color: #2c3e50; background-color: #f8f9fa; padding: 10px; border-radius: 5px;">${vardas} ${pavarde}: ${vidurkis}</p>
        `;

        output.innerHTML = html;
        output.style.display = "block";
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Game data with both Font Awesome icons and emoji/text alternatives
    const cardData = [
        { icon: 'fa-heart', text: '❤️', name: 'Heart' },
        { icon: 'fa-star', text: '⭐', name: 'Star' },
        { icon: 'fa-moon', text: '🌙', name: 'Moon' },
        { icon: 'fa-sun', text: '☀️', name: 'Sun' },
        { icon: 'fa-cloud', text: '☁️', name: 'Cloud' },
        { icon: 'fa-bolt', text: '⚡', name: 'Bolt' },
        { icon: 'fa-flag', text: '🚩', name: 'Flag' },
        { icon: 'fa-bell', text: '🔔', name: 'Bell' },
        { icon: 'fa-gem', text: '💎', name: 'Gem' },
        { icon: 'fa-key', text: '🔑', name: 'Key' },
        { icon: 'fa-tree', text: '🌲', name: 'Tree' },
        { icon: 'fa-car', text: '🚗', name: 'Car' }
    ];
    
    // Game state
    let gameState = {
        difficulty: 'easy',
        cards: [],
        flippedCards: [],
        matchedPairs: 0,
        moves: 0,
        gameStarted: false,
        gameOver: false,
        timer: 0,
        timerInterval: null,
        totalPairs: 0
    };
    
    // Best scores from localStorage
    let bestScores = {
        easy: localStorage.getItem('memoryBestEasy') || null,
        hard: localStorage.getItem('memoryBestHard') || null
    };
    
    // DOM Elements
    const gameBoard = document.getElementById('game-board');
    const difficultySelect = document.getElementById('difficulty');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const playAgainBtn = document.getElementById('play-again-btn');
    const movesCounter = document.getElementById('moves-counter');
    const pairsCounter = document.getElementById('pairs-counter');
    const timerElement = document.getElementById('timer');
    const winMessage = document.getElementById('win-message');
    const winMoves = document.getElementById('win-moves');
    const winTime = document.getElementById('win-time');
    const bestEasyElement = document.getElementById('best-easy');
    const bestHardElement = document.getElementById('best-hard');
    
    // Initialize game
    function initGame() {
        updateBestScoresDisplay();
        generateGameBoard();
        updateStats();
    }
    
    // Generate game board based on difficulty
    function generateGameBoard() {
        gameBoard.innerHTML = '';
        
        // Set grid size based on difficulty
        const isEasy = gameState.difficulty === 'easy';
        const rows = isEasy ? 3 : 4;
        const cols = isEasy ? 4 : 6;
        gameState.totalPairs = (rows * cols) / 2;
        
        // Set grid class
        gameBoard.className = 'game-board ' + gameState.difficulty;
        
        // Create card pairs
        let cardValues = [];
        const iconsNeeded = gameState.totalPairs;
        
        // Select data for this game
        const selectedData = [...cardData].slice(0, iconsNeeded);
        
        // Create pairs
        selectedData.forEach(data => {
            cardValues.push(data, data);
        });
        
        // Shuffle cards
        cardValues = shuffleArray(cardValues);
        gameState.cards = [];
        
        // Create card elements
        cardValues.forEach((data, index) => {
            const card = {
                id: index,
                value: data.text, // Use text/emoji for matching
                icon: data.icon,
                text: data.text,
                name: data.name,
                flipped: false,
                matched: false
            };
            
            gameState.cards.push(card);
            
            // Create card DOM element
            const cardElement = document.createElement('div');
            cardElement.className = 'memory-card';
            cardElement.dataset.id = index;
            
            const cardInner = document.createElement('div');
            cardInner.className = 'card-inner';
            
            const cardFront = document.createElement('div');
            cardFront.className = 'card-front';
            
            // Try to use Font Awesome icon first, fallback to text/emoji
            const iconElement = document.createElement('i');
            iconElement.className = 'fas ' + data.icon;
            iconElement.style.fontSize = '32px';
            
            // Add text alternative as well (hidden by default)
            const textElement = document.createElement('span');
            textElement.textContent = data.text;
            textElement.style.fontSize = '32px';
            textElement.style.display = 'none'; // Hide by default
            
            // Check if Font Awesome is loaded
            if (!document.querySelector('.fa')) {
                // If Font Awesome not detected, show text instead
                iconElement.style.display = 'none';
                textElement.style.display = 'inline';
            }
            
            cardFront.appendChild(iconElement);
            cardFront.appendChild(textElement);
            
            const cardBack = document.createElement('div');
            cardBack.className = 'card-back';
            cardBack.textContent = '?';
            cardBack.style.fontSize = '24px';
            cardBack.style.fontWeight = 'bold';
            
            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            cardElement.appendChild(cardInner);
            
            cardElement.addEventListener('click', () => flipCard(card));
            gameBoard.appendChild(cardElement);
        });
        
        // Reset game state
        resetGameState();
    }
    
    // Shuffle array using Fisher-Yates algorithm
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    // Flip a card
    function flipCard(card) {
        // Check if game is started, card can be flipped, and we haven't flipped 2 cards already
        if (!gameState.gameStarted || gameState.gameOver || 
            card.flipped || card.matched || 
            gameState.flippedCards.length >= 2) {
            return;
        }
        
        // Flip the card
        card.flipped = true;
        gameState.flippedCards.push(card);
        
        // Update card appearance
        const cardElement = document.querySelector(`.memory-card[data-id="${card.id}"]`);
        cardElement.classList.add('flipped');
        
        // Check if two cards are flipped
        if (gameState.flippedCards.length === 2) {
            gameState.moves++;
            updateStats();
            
            const [card1, card2] = gameState.flippedCards;
            
            if (card1.value === card2.value) {
                // Match found
                card1.matched = true;
                card2.matched = true;
                gameState.matchedPairs++;
                
                // Mark cards as matched
                document.querySelector(`.memory-card[data-id="${card1.id}"]`).classList.add('matched');
                document.querySelector(`.memory-card[data-id="${card2.id}"]`).classList.add('matched');
                
                // Clear flipped cards
                gameState.flippedCards = [];
                
                // Check for win
                if (gameState.matchedPairs === gameState.totalPairs) {
                    endGame();
                }
            } else {
                // No match - flip back after delay
                setTimeout(() => {
                    card1.flipped = false;
                    card2.flipped = false;
                    gameState.flippedCards = [];
                    
                    document.querySelector(`.memory-card[data-id="${card1.id}"]`).classList.remove('flipped');
                    document.querySelector(`.memory-card[data-id="${card2.id}"]`).classList.remove('flipped');
                }, 1000);
            }
        }
    }
    
    // Start game
    function startGame() {
        if (gameState.gameStarted) return;
        
        gameState.gameStarted = true;
        gameState.gameOver = false;
        
        // Start timer
        startTimer();
        
        // Enable card clicking
        const cards = document.querySelectorAll('.memory-card');
        cards.forEach(card => {
            card.style.cursor = 'pointer';
        });
    }
    
    // Start timer
    function startTimer() {
        gameState.timer = 0;
        clearInterval(gameState.timerInterval);
        
        gameState.timerInterval = setInterval(() => {
            gameState.timer++;
            timerElement.textContent = gameState.timer + 's';
        }, 1000);
    }
    
    // Stop timer
    function stopTimer() {
        clearInterval(gameState.timerInterval);
    }
    
    // Reset game state
    function resetGameState() {
        gameState.flippedCards = [];
        gameState.matchedPairs = 0;
        gameState.moves = 0;
        gameState.gameStarted = false;
        gameState.gameOver = false;
        gameState.timer = 0;
        
        clearInterval(gameState.timerInterval);
        timerElement.textContent = '0s';
        
        // Reset cards in game state
        gameState.cards.forEach(card => {
            card.flipped = false;
            card.matched = false;
        });
        
        // Reset card elements
        const cardElements = document.querySelectorAll('.memory-card');
        cardElements.forEach(card => {
            card.classList.remove('flipped', 'matched');
            card.style.cursor = 'default';
        });
        
        updateStats();
        winMessage.classList.add('hidden');
    }
    
    // Update statistics display
    function updateStats() {
        movesCounter.textContent = gameState.moves;
        pairsCounter.textContent = gameState.matchedPairs + ' / ' + gameState.totalPairs;
    }
    
    // End game - player wins
    function endGame() {
        gameState.gameOver = true;
        stopTimer();
        
        // Show win message
        winMoves.textContent = gameState.moves;
        winTime.textContent = gameState.timer + 's';
        winMessage.classList.remove('hidden');
        
        // Check and save best score
        checkAndSaveBestScore();
    }
    
    // Check and save best score to localStorage
    function checkAndSaveBestScore() {
        const scoreKey = 'memoryBest' + (gameState.difficulty === 'easy' ? 'Easy' : 'Hard');
        const currentBest = bestScores[gameState.difficulty];
        
        if (currentBest === null || gameState.moves < parseInt(currentBest)) {
            // New best score
            bestScores[gameState.difficulty] = gameState.moves;
            localStorage.setItem(scoreKey, gameState.moves);
            updateBestScoresDisplay();
        }
    }
    
    // Update best scores display
    function updateBestScoresDisplay() {
        bestEasyElement.textContent = bestScores.easy !== null ? bestScores.easy + ' ėjimų' : '-';
        bestHardElement.textContent = bestScores.hard !== null ? bestScores.hard + ' ėjimų' : '-';
    }
    
    // Event Listeners
    difficultySelect.addEventListener('change', function() {
        gameState.difficulty = this.value;
        generateGameBoard();
    });
    
    startBtn.addEventListener('click', function() {
        startGame();
    });
    
    restartBtn.addEventListener('click', function() {
        generateGameBoard();
    });
    
    playAgainBtn.addEventListener('click', function() {
        generateGameBoard();
        winMessage.classList.add('hidden');
    });
    
    // Initialize the game
    initGame();
});
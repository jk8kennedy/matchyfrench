// Get category emoji for the back of cards
function getSubjectEmoji(subject) {
    return subjectIcons[subject] || "✨";
}


// ======================================
// 2. GAME VARIABLES
// ======================================

let currentSubject = "";
let selectedCards = [];
let matchedPairs = 0;
let lockBoard = false;

// Dynamically set pairs: 8 pairs (16 cards, 4x4) for mobile, 10 pairs (20 cards, 5x4) for desktop
const numberOfPairs = window.innerWidth <= 700 ? 8 : 10;


// Sound Effect Generator (Web Audio API)
function playMatchSound() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();

    // Play a cheerful two-tone chime (E5 -> A5)
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 major chord arpeggio
    notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.value = freq;

        const startTime = ctx.currentTime + index * 0.08;
        const stopTime = startTime + 0.25;

        gain.gain.setValueAtTime(0.15, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, stopTime);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(stopTime);
    });
}


// ======================================
// 3. SUBJECT ICONS
// ======================================

const subjectIcons = {
    Food: "🍱",
    Numbers: "🔢",
    Greetings: "👋",
    People: "👥",
    "Everyday Objects": "🏠",
    "Travel & Places": "✈️"
};


// ======================================
// 4. SHUFFLE FUNCTION
// ======================================

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}


// ======================================
// 5. START THE GAME
// ======================================

function startGame(subject) {
    currentSubject = subject;
    selectedCards = [];
    matchedPairs = 0;
    lockBoard = false;

    // Change screens
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    // Update game heading
    document.getElementById("subjectTitle").textContent = subject;
    document.getElementById("gameIcon").textContent = subjectIcons[subject];

    // Reset progress
    updateProgress();
    document.getElementById("message").textContent = "";

    const board = document.getElementById("gameBoard");
    board.innerHTML = "";

    // Select random vocabulary entries based on numberOfPairs
    const words = shuffleArray(vocabulary[subject]);
    const selectedWords = words.slice(0, numberOfPairs);

    // Create two cards for each word
    let cards = [];
    const categoryEmoji = getSubjectEmoji(subject);

    selectedWords.forEach((word, index) => {
        cards.push({
            type: "french",
            content: word.fr,
            emojiWord: word.emoji,
            pair: index,
            backEmoji: categoryEmoji
        });

        cards.push({
            type: "english",
            content: word.en,
            emojiWord: word.emoji,
            pair: index,
            backEmoji: categoryEmoji
        });
    });

    // Shuffle all cards (16 on mobile, 20 on desktop)
    cards = shuffleArray(cards);

    // Create the cards on screen with classroom numbers on the back
    cards.forEach((card, index) => {
        const cardElement = document.createElement("button");

        cardElement.type = "button";
        cardElement.classList.add("card");
        cardElement.setAttribute("aria-label", `Hidden memory card ${index + 1}`);

        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-back">
                    <span class="card-back-number">${index + 1}</span>
                    <span class="card-back-label">Carte</span>
                </div>
                <div class="card-face card-front">
                    ${
                        card.type === "french"
                        ? `
                            <span class="french-word">${card.content}</span>
                            <span class="card-emoji-hint">${card.emojiWord}</span>
                          `
                        : `
                            <span class="english">${card.content}</span>
                          `
                    }
                </div>
            </div>
        `;

        // Add click event
        cardElement.addEventListener("click", () => {
            flipCard(cardElement, card);
        });

        board.appendChild(cardElement);
    });
}


// ======================================
// 6. FLIP A CARD
// ======================================

function flipCard(element, card) {
    // Don't allow clicks while checking a pair
    if (lockBoard) return;

    // Don't allow an already flipped card
    if (element.classList.contains("flipped")) return;

    // Don't allow a matched card
    if (element.classList.contains("matched")) return;

    // Flip the card
    element.classList.add("flipped");

    element.setAttribute(
        "aria-label",
        card.type === "french"
            ? `${card.content}`
            : card.content
    );

    // Add card to selected cards
    selectedCards.push({
        element: element,
        card: card
    });

    // Check when two cards have been selected
    if (selectedCards.length === 2) {
        checkMatch();
    }
}


// ======================================
// 7. CHECK FOR A MATCH
// ======================================

function checkMatch() {
    lockBoard = true;

    const first = selectedCards[0];
    const second = selectedCards[1];

    // Cards must have the same pair ID
    // but different types (French and English)
    const isMatch =
        first.card.pair === second.card.pair &&
        first.card.type !== second.card.type;

    if (isMatch) {
        // Correct match!
        first.element.classList.add("matched");
        second.element.classList.add("matched");

        // Play victory chime sound
        playMatchSound();

        matchedPairs++;
        selectedCards = [];
        lockBoard = false;

        updateProgress();

        // Check if all pairs have been found
        if (matchedPairs === numberOfPairs) {
            document.getElementById("message").textContent =
                `🎉 Amazing! You found all ${numberOfPairs} pairs!`;

            // Return to the main menu after 2 seconds
            setTimeout(() => {
                showMenu();
            }, 2000);
        }

    } else {
        // Incorrect match
        // Turn cards back over after one second
        setTimeout(() => {
            first.element.classList.remove("flipped");
            second.element.classList.remove("flipped");

            first.element.setAttribute("aria-label", "Hidden memory card");
            second.element.setAttribute("aria-label", "Hidden memory card");

            selectedCards = [];
            lockBoard = false;
        }, 1000);
    }
}


// ======================================
// 8. UPDATE PROGRESS
// ======================================

function updateProgress() {
    document.getElementById("score").textContent =
        `${matchedPairs} / ${numberOfPairs} pairs`;

    const percentage = (matchedPairs / numberOfPairs) * 100;

    document.getElementById("progressBar").style.width = percentage + "%";
}


// ======================================
// 9. RETURN TO MAIN MENU
// ======================================

function showMenu() {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
}

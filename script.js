// ======================================
// 1. VOCABULARY BANK
// ======================================

// ======================================
// 1. VOCABULARY BANK
// ======================================

const vocabulary = {

    Food: [
        { fr: "pomme", en: "Apple", emoji: "🍎" },
        { fr: "riz", en: "Rice", emoji: "🍚" },
        { fr: "eau", en: "Water", emoji: "💧" },
        { fr: "pain", en: "Bread", emoji: "🍞" },
        { fr: "œuf", en: "Egg", emoji: "🥚" },
        { fr: "poisson", en: "Fish", emoji: "🐟" },
        { fr: "viande", en: "Meat", emoji: "🥩" },
        { fr: "légumes", en: "Vegetables", emoji: "🥦" },
        { fr: "fruits", en: "Fruit", emoji: "🍇" },
        { fr: "thé", en: "Tea", emoji: "🍵" },
        { fr: "lait", en: "Milk", emoji: "🥛" },
        { fr: "fromage", en: "Cheese", emoji: "🧀" },
        { fr: "poulet", en: "Chicken", emoji: "🍗" },
        { fr: "porc", en: "Pork", emoji: "🥓" },
        { fr: "bœuf", en: "Beef", emoji: "🥩" },
        { fr: "sel", en: "Salt", emoji: "🧂" },
        { fr: "sucre", en: "Sugar", emoji: "🍬" },
        { fr: "soupe", en: "Soup", emoji: "🍲" },
        { fr: "chocolat", en: "Chocolate", emoji: "🍫" },
        { fr: "jus", en: "Juice", emoji: "🧃" }
    ],

    Numbers: [
        { fr: "un", en: "One", emoji: "1️⃣" },
        { fr: "deux", en: "Two", emoji: "2️⃣" },
        { fr: "trois", en: "Three", emoji: "3️⃣" },
        { fr: "quatre", en: "Four", emoji: "4️⃣" },
        { fr: "cinq", en: "Five", emoji: "5️⃣" },
        { fr: "six", en: "Six", emoji: "6️⃣" },
        { fr: "sept", en: "Seven", emoji: "7️⃣" },
        { fr: "huit", en: "Eight", emoji: "8️⃣" },
        { fr: "neuf", en: "Nine", emoji: "9️⃣" },
        { fr: "dix", en: "Ten", emoji: "🔟" },
        { fr: "onze", en: "Eleven", emoji: "🔢" },
        { fr: "douze", en: "Twelve", emoji: "🔢" },
        { fr: "treize", en: "Thirteen", emoji: "🔢" },
        { fr: "quatorze", en: "Fourteen", emoji: "🔢" },
        { fr: "quinze", en: "Fifteen", emoji: "🔢" },
        { fr: "seize", en: "Sixteen", emoji: "🔢" },
        { fr: "dix-sept", en: "Seventeen", emoji: "🔢" },
        { fr: "dix-huit", en: "Eighteen", emoji: "🔢" },
        { fr: "dix-neuf", en: "Nineteen", emoji: "🔢" },
        { fr: "vingt", en: "Twenty", emoji: "💯" }
    ],

    Greetings: [
        { fr: "bonjour", en: "Hello", emoji: "👋" },
        { fr: "bonjour", en: "Good morning", emoji: "🌅" },
        { fr: "salut", en: "Hi / Bye", emoji: "🌞" },
        { fr: "bonsoir", en: "Good evening", emoji: "🌆" },
        { fr: "au revoir", en: "Goodbye", emoji: "👋" },
        { fr: "à plus", en: "See you", emoji: "🤝" },
        { fr: "à plus tard", en: "See you later", emoji: "👋" },
        { fr: "bonne nuit", en: "Good night", emoji: "🌙" },
        { fr: "dormez bien", en: "Good night (polite)", emoji: "😴" },
        { fr: "merci", en: "Thank you", emoji: "🙏" },
        { fr: "merci beaucoup", en: "Thank you (polite)", emoji: "💐" },
        { fr: "de rien", en: "You're welcome", emoji: "😊" },
        { fr: "pardon", en: "Excuse me", emoji: "🙋" },
        { fr: "désolé", en: "I'm sorry", emoji: "🙇" },
        { fr: "oui", en: "Yes", emoji: "👍" },
        { fr: "non", en: "No", emoji: "🙅" },
        { fr: "s'il vous plaît", en: "Please", emoji: "🙏" },
        { fr: "enchanté", en: "Nice to meet you", emoji: "🤝" },
        { fr: "bon appétit", en: "Said before eating", emoji: "🍽️" },
        { fr: "merci", en: "Thanks for the meal", emoji: "😋" }
    ],

    People: [
        { fr: "personne", en: "Person", emoji: "🧑" },
        { fr: "homme", en: "Man", emoji: "👨" },
        { fr: "femme", en: "Woman", emoji: "👩" },
        { fr: "enfant", en: "Child", emoji: "🧒" },
        { fr: "ami", en: "Friend", emoji: "🫂" },
        { fr: "famille", en: "Family", emoji: "👨‍👩‍👧" },
        { fr: "mère", en: "Mother", emoji: "👩" },
        { fr: "père", en: "Father", emoji: "👨" },
        { fr: "sœur", en: "Sister", emoji: "👧" },
        { fr: "frère", en: "Brother", emoji: "👦" },
        { fr: "sœur cadette", en: "Younger sister", emoji: "👧" },
        { fr: "frère cadet", en: "Younger brother", emoji: "👦" },
        { fr: "professeur", en: "Teacher", emoji: "🧑‍🏫" },
        { fr: "étudiant", en: "Student", emoji: "🎒" },
        { fr: "médecin", en: "Doctor", emoji: "🧑‍⚕️" },
        { fr: "infirmier", en: "Nurse", emoji: "👩‍⚕️" },
        { fr: "employé", en: "Office worker", emoji: "💼" },
        { fr: "vendeur", en: "Shop assistant", emoji: "🛍️" },
        { fr: "grand-père", en: "Grandfather", emoji: "👴" },
        { fr: "grand-mère", en: "Grandmother", emoji: "👵" }
    ],

    "Everyday Objects": [
        { fr: "livre", en: "Book", emoji: "📚" },
        { fr: "stylo", en: "Pen", emoji: "🖊️" },
        { fr: "bureau", en: "Desk", emoji: "🗄️" },
        { fr: "chaise", en: "Chair", emoji: "🪑" },
        { fr: "sac", en: "Bag", emoji: "🎒" },
        { fr: "téléphone", en: "Telephone", emoji: "📞" },
        { fr: "montre", en: "Clock / Watch", emoji: "⏰" },
        { fr: "chaussures", en: "Shoes", emoji: "👟" },
        { fr: "clé", en: "Key", emoji: "🔑" },
        { fr: "fenêtre", en: "Window", emoji: "🪟" },
        { fr: "porte", en: "Door", emoji: "🚪" },
        { fr: "voiture", en: "Car", emoji: "🚗" },
        { fr: "vélo", en: "Bicycle", emoji: "🚲" },
        { fr: "parapluie", en: "Umbrella", emoji: "☂️" },
        { fr: "portefeuille", en: "Wallet", emoji: "👛" },
        { fr: "lunettes", en: "Glasses", emoji: "👓" },
        { fr: "crayon", en: "Pencil", emoji: "✏️" },
        { fr: "gomme", en: "Eraser", emoji: "🧽" },
        { fr: "appareil photo", en: "Camera", emoji: "📷" },
        { fr: "télévision", en: "Television", emoji: "📺" }
    ],

    "Travel & Places": [
        { fr: "gare", en: "Station", emoji: "🚉" },
        { fr: "aéroport", en: "Airport", emoji: "✈️" },
        { fr: "hôtel", en: "Hotel", emoji: "🏨" },
        { fr: "billet", en: "Ticket", emoji: "🎟️" },
        { fr: "carte", en: "Map", emoji: "🗺️" },
        { fr: "route", en: "Road / Way", emoji: "🛣️" },
        { fr: "pays", en: "Country", emoji: "🌍" },
        { fr: "ville", en: "Town / City", emoji: "🏙️" },
        { fr: "église", en: "Church", emoji: "⛪" },
        { fr: "château", en: "Castle", emoji: "🏰" },
        { fr: "mer", en: "Sea / Beach", emoji: "🌊" },
        { fr: "montagne", en: "Mountain", emoji: "⛰️" },
        { fr: "parc", en: "Park", emoji: "🌳" },
        { fr: "magasin", en: "Shop / Store", emoji: "🛍️" },
        { fr: "restaurant", en: "Restaurant", emoji: "🍽️" },
        { fr: "toilettes", en: "Restroom", emoji: "🚻" },
        { fr: "bus", en: "Bus", emoji: "🚌" },
        { fr: "train", en: "Train", emoji: "🚆" },
        { fr: "avion", en: "Airplane", emoji: "✈️" },
        { fr: "voyage", en: "Travel", emoji: "🧳" }
    ]

};


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

const numberOfPairs = 10;


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

    // Select 10 random vocabulary entries
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

    // Shuffle all 20 cards
    cards = shuffleArray(cards);

    // Create the cards on screen
    cards.forEach(card => {
        const cardElement = document.createElement("button");

        cardElement.type = "button";
        cardElement.classList.add("card");
        cardElement.setAttribute("aria-label", "Hidden memory card");

        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-back">
                    <span class="card-back-emoji" aria-hidden="true">${card.backEmoji}</span>
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
                "🎉 Amazing! You found all 10 pairs!";

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

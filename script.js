const words = [
    { word: "computer", clue: "An electronic device for processing data" },
    { word: "mountain", clue: "A large natural elevation of the Earth's surface" },
    { word: "ocean", clue: "A vast body of saltwater that covers most of the Earth's surface" },
    { word: "guitar", clue: "A musical instrument with strings played by strumming or plucking" },
    { word: "book", clue: "A written or printed work consisting of pages" },
    { word: "moon", clue: "The natural satellite of the Earth" },
    { word: "cloud", clue: "A visible mass of water droplets in the atmosphere" },
    { word: "camera", clue: "A device used to capture visual images or videos" },
    { word: "sunflower", clue: "A tall plant with large, yellow flowers that follows the sun" },
    { word: "butterfly", clue: "An insect with colorful wings that undergo metamorphosis" },
    { word: "umbrella", clue: "A portable device used for protection against rain or sun" },
    { word: "bicycle", clue: "A two-wheeled vehicle powered by pedals" },
    { word: "pizza", clue: "A round, flat baked bread topped with various ingredients" },
    { word: "elephant", clue: "A large mammal with a long trunk and tusks" },
    { word: "telescope", clue: "An optical instrument used for viewing distant objects" },
    { word: "chocolate", clue: "A sweet, brown treat made from cacao beans" },
    { word: "rainbow", clue: "A multicolored arc in the sky caused by sunlight and raindrops" },
    { word: "globe", clue: "A spherical representation of the Earth or other celestial body" },
    { word: "fireworks", clue: "Explosive devices used to create colorful displays in the sky" },
    { word: "rocket", clue: "A vehicle designed for space travel" },
    { word: "tiger", clue: "A large carnivorous feline with distinctive orange fur and black stripes" },
    { word: "piano", clue: "A musical instrument with black and white keys" },
    { word: "airplane", clue: "A powered flying vehicle with fixed wings and a weight greater than air" },
    { word: "giraffe", clue: "A tall African mammal with a long neck and spotted coat" },
    { word: "beach", clue: "A sandy or pebbly shore by the ocean or a lake" },
    { word: "desert", clue: "A dry, barren area with little vegetation" },
    { word: "volcano", clue: "A mountain that erupts with lava, ash, and gases" },
    { word: "robot", clue: "A machine capable of carrying out tasks autonomously" },
    { word: "diamond", clue: "A precious stone often used in jewelry" },
    { word: "dolphin", clue: "A highly intelligent marine mammal known for its playful behavior" },
    { word: "rainforest", clue: "A dense jungle with high levels of rainfall and biodiversity" },
    { word: "submarine", clue: "A watercraft capable of operating underwater" },
    { word: "vampire", clue: "A mythical creature that feeds on blood" },
    { word: "astronaut", clue: "A person trained to travel and work in outer space" },
    { word: "butterfly", clue: "An insect with colorful wings that undergo metamorphosis" },
    { word: "jungle", clue: "A dense, tropical forest with lush vegetation" },
    { word: "cactus", clue: "A spiky plant adapted to survive in arid environments" },
    { word: "dinosaur", clue: "An extinct reptile that lived millions of years ago" },
    { word: "chameleon", clue: "A lizard known for its ability to change color" },
    { word: "parachute", clue: "A device used to slow the descent of a person or object" },
    { word: "waterfall", clue: "A cascade of water flowing from a height" },
    { word: "leopard", clue: "A spotted feline found in various habitats" },
    { word: "astronomy", clue: "The study of celestial bodies and the universe" },
    { word: "penguin", clue: "A flightless bird native to the Southern Hemisphere" },
    { word: "raincoat", clue: "A waterproof garment worn to protect against rain" },
    { word: "palm", clue: "A tree with a tall, slender trunk and large leaves" },
    { word: "snorkel", clue: "A breathing tube used while swimming near the water's surface" },
    { word: "helicopter", clue: "A rotary-wing aircraft capable of vertical takeoff and landing" },
    { word: "dandelion", clue: "A flowering plant with yellow, fluffy seed heads" },
    { word: "pyramid", clue: "A triangular structure often built as a tomb or monument" },
    { word: "galaxy", clue: "A vast system of stars, gas, and dust bound by gravity" },
    { word: "spider", clue: "An eight-legged arachnid that spins webs to catch prey" },
    { word: "magnet", clue: "An object that attracts certain materials, such as iron" },
    // Add more words and clues here
];

let currentWord = {};
let guessedWord = [];

const wordDisplay = document.getElementById("word");
const clueDisplay = document.getElementById("clue");
const guessInput = document.getElementById("guess");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");

function newGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = Array(currentWord.word.length).fill("_");
    wordDisplay.textContent = guessedWord.join(" ");
    clueDisplay.textContent = `${currentWord.clue}`;
    guessInput.value = "";
    message.textContent = "";
}

function updateDisplay() {
    wordDisplay.textContent = guessedWord.join(" ");
}

function checkGuess() {
    const guess = guessInput.value.toLowerCase();
    if (guess === currentWord.word) {
        guessedWord = currentWord.word.split("");
        updateDisplay();
        message.textContent = "Congratulations! You guessed the word!";
    } else if (guess.length === 1) {
        let found = false;
        for (let i = 0; i < currentWord.word.length; i++) {
            if (currentWord.word[i] === guess) {
                guessedWord[i] = guess;
                found = true;
            }
        }
        if (!found) {
            message.textContent = "Incorrect guess. Try again.";
        }
        updateDisplay();
    } else {
        message.textContent = "Please enter a single letter or the whole word.";
    }
}

checkBtn.addEventListener("click", checkGuess);
newGame();
// Inside the checkGuess function, update the congratulations message
if (guess === currentWord.word) {
    guessedWord = currentWord.word.split("");
    updateDisplay();
    message.innerHTML = '<span class="congrats">Congratulations!</span> You guessed the word!';
    message.classList.add('bounce-animation');
}

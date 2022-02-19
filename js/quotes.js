const quotes = document.querySelector("#quotes");
const quotesText = ["Don't dwell on the past.", "Where there is a will, there's a way.",
    "Life is a journey.", "I was never less alone than when by my self.", "하늘은 만물을 움직이고, 천하는 태평하네"]


function randomnessQuote() {
    const quotesSequence = Math.floor(Math.random()*quotesText.length);
    quotes.innerText = quotesText[quotesSequence];
};

randomnessQuote();
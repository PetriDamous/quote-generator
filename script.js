const quoteContainer = document.getElementById("quote-container");
const quoteTxt = document.getElementById("quote");
const authorTxt = document.getElementById("author");

const twitterBtn = document.getElementById("twitter-btn");
const newQuoteBtn = document.getElementById("new-quote-btn");
const loader = document.getElementById("loader");

// Functions

const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const longQoute = () => {
    if (quoteTxt.textContent.length >= 170) {        
        if (window.innerWidth >= 600 && window.innerWidth <= 800) {            
            quoteTxt.classList.add("long-txt")
        } else {
            quoteTxt.classList.remove("long-txt")
        }
    }
}

const showLoader = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

const hideLoader = () => {
    if (!loader.hidden) {
        loader.hidden = true;
        quoteContainer.hidden = false;
    }
} 

const tweetQuote = () => {
    const quote = quoteTxt.textContent;    
    const author = authorTxt.textContent;
    const tweeterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(tweeterUrl, "_blank");
}

// Fetch Quote from API
async function getQuote () {    
    const apiUrl = "https://type.fit/api/quotes";

    showLoader();

    try {

        const response = await fetch(apiUrl);
        const data = await response.json();
        
        const quote = data[randomNum(0, data.length - 1)];

        let { text, author } = quote;

        longQoute();

        quoteTxt.textContent = text;
        authorTxt.textContent = author === null ? "unknown" : author;

        hideLoader();
        
    } catch (error) {
        getQuote();        
    }
}

// Event Listeners
window.addEventListener("resize", longQoute);

newQuoteBtn.addEventListener("click", getQuote);

twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuote();
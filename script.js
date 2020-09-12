const quoteContainer = document.getElementById("quote-container");
const quoteTxt = document.getElementById("quote");
const authorTxt = document.getElementById("author");

const twitterBtn = document.getElementById("twitter-btn");
const newQuoteBtn = document.getElementById("new-quote-btn");

const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Fetch Quote from API
async function getQuote () {    
    const apiUrl = "https://type.fit/api/quotes";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        console.log(data[randomNum(0, data.length - 1)]);

    } catch (error) {
        getQuote();        
        console.log("Nigga wtf is going on?", error);
    }
}

// On Load
getQuote();
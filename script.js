const quoteContainer = document.getElementById("quote-container");
const quoteTxt = document.getElementById("quote");
const authorTxt = document.getElementById("author");

const twitterBtn = document.getElementById("twitter-btn");
const newQuoteBtn = document.getElementById("new-quote-btn");

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

// Fetch Quote from API
async function getQuote () {    
    const apiUrl = "https://type.fit/api/quotes";

    const response = await fetch(apiUrl);
    const data = await response.json();
    
    const quote = data[randomNum(0, data.length - 1)];

    // let long = 0;

    // data.forEach((quote, idx) => {
        
    //     // if(long < quote.text.length) long = quote.text.length
        
    //     // long = long < quote.text.length ? quote.text.length : long;
        
    //     // console.log(long);   
        
    //     // if (quote.text.length === long) console.log(quote.text)

    //     if (quote.text.length === 130) console.log(quote.text)
        
    // })


    try {

        const response = await fetch(apiUrl);
        const data = await response.json();
        
        const quote = data[randomNum(0, data.length - 1)];

        let { text, author } = quote;

        author = author === null ? "unknown" : author;

        // quoteTxt.textContent = "Translation is the paradigm, the exemplar of all writing. It is translation that demonstrates most vividly the yearning for transformation that underlies every act involving speech, that supremely human gift.";

        // quoteTxt.textContent = "Intuition is the very force or activity of the soul in its experience through whatever has been the experience of the soul itself. fgkjsjgkjfsjg fdlksaj ldjflajlk dk dk lkdsjfa dlkfjaj fdlksflafjlda dlkajflka;faj aldsf;"

        console.log(quoteTxt.textContent.length)

        longQoute();

        quoteTxt.textContent = text;
        authorTxt.textContent = author;

        

    } catch (error) {
        getQuote();        
        console.log("Nigga wtf is going on?", error);
    }
}

window.addEventListener("resize", longQoute);

newQuoteBtn.addEventListener("click", getQuote);

// On Load
getQuote();
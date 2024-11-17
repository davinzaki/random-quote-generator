"use strict";

const quote = document.getElementById('quote');
const author = document.getElementById('author');

async function handleRandomQuotes() {
    try {
        const res = await fetch('https://dummyjson.com/quotes/random')
        const randomQuote = await res.json()
    
        quote.textContent = randomQuote.quote
        author.textContent = randomQuote.author
    
    } catch (err) {
        throw new Error(err)
    }
    
    
}

handleRandomQuotes()
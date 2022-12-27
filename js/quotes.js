var quotes = [
    {
        quote: "It's not what happens to you, but how you react to it that matters.",
        author: "--Epictetus"
    },
    {
        quote: "Do not take life too seriously. You will not get out alive.",
        author: "--Elbert Hubbard"
    },
    {
        quote: "The best revenge is massive success",
        author: "--Frank Sinatra"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "― Mae West"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "― Robert Frost"
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain"
    }
]

function getQuotes() {
    var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quotesCaption").innerHTML = randomQuotes.quote;
    document.getElementById("quotesAuthor").innerHTML = randomQuotes.author;
}

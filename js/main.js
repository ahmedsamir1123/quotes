document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "The way to get started is to quit talking and begin doing. ",
        "Your time is limited, so don't waste it living someone else's life. ",
        "If life were predictable it would cease to be life, and be without flavor.",
        "If you look at what you have in life, you'll always have more. ",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        "Life is what happens when you're busy making other plans.",
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "You only live once, but if you do it right, once is enough."
    ];

    const quoteButton = document.getElementById('quoteButton');
    const quoteDisplay = document.getElementById('quoteDisplay');

    quoteButton.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
    });
});

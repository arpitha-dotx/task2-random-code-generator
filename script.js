function newQuote() {
    const quotes = [
        "Believe in yourself",
        "Keep going",
        "Success takes time",
        "You are strong",
        "Never give up"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText = quotes[randomIndex];
}
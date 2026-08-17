const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkModeBtn.textContent = "Light Mode";
    } else {
        darkModeBtn.textContent = "Dark Mode";
    }
});


const quoteBtn = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quoteText");

quoteBtn.addEventListener("click", function () {
    quoteText.textContent = "Loading...";

    fetch("https://dummyjson.com/quotes/random")
        .then(response => response.json())
        .then(data => {
            quoteText.textContent = '"' + data.quote + '" - ' + data.author;
        })
        .catch(error => {
            quoteText.textContent = "Could not load the quote.";
        });
});


const message = document.getElementById("message");
const counter = document.getElementById("counter");

message.addEventListener("input", function () {
    counter.textContent = message.value.length + " characters";
});


const contactForm = document.getElementById("contactForm");
const result = document.getElementById("result");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    fetch("/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            message: message.value
        })
    });

    result.textContent = "Thank you, " + name + "!";
    contactForm.reset();
    counter.textContent = "0 characters";
});

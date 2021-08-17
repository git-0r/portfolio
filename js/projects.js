const cards = document.querySelector('.--cards');
const card = document.querySelector('.--card');

const cardData = [
    {
        img: "images/mark14.png",
        heading: "Profit/Loss Calculator",
        description: "Calculate Profit or Loss on stocks in absolute and percentage value.",
        live: "https://git-0r.github.io/mark14_profit-loss/",
        code: "https://github.com/git-0r/mark14_profit-loss",
    },
    {
        img: "images/mark13.png",
        heading: "Palindrome",
        description: "Check if your birthday is a palindrome or not.",
        live: "https://git-0r.github.io/mark13_palindrome/",
        code: "https://github.com/git-0r/mark13_palindrome",
    },
    {
        img: "images/mark12.png",
        heading: "Fun With Triangles",
        description: "In this app, learn about triangles, take a quiz about triangles or calculate the hypotenuse and area of a triangle",
        live: "https://git-0r.github.io/mark12_triangles/",
        code: "https://github.com/git-0r/mark12_triangles",
    },
    {
        img: "images/mark11.png",
        heading: "Lucky Birthday",
        description: "Check if your Birthday is lucky or not.",
        live: "https://git-0r.github.io/mark11_luckyBirthday/",
        code: "https://github.com/git-0r/mark11_luckyBirthday",
    },
    {
        img: "images/mark10.png",
        heading: "Cash Register",
        description: "This app tells the user how can he/she return the change to the customer with a minimum number of notes.",
        live: "https://git-0r.github.io/mark10_cashRegister/",
        code: "https://github.com/git-0r/mark10_cashRegister",
    },
    {
        img: "images/mark9.png",
        heading: "Movie recommendation app",
        description: "a list of recommended movies from different genre",
        live: "https://codesandbox.io/embed/github/git-0r/mark9_movieRecommendation/tree/main/?fontsize=14&hidenavigation=1&theme=dark",
        code: "https://github.com/git-0r/mark9_movieRecommendation",
    },
    {
        img: "images/mark8.png",
        heading: "Enoji Interpretor",
        description: "App to find the meaning of an emoji",
        live: "https://codesandbox.io/embed/github/git-0r/mark8_emojiApp/tree/main/?fontsize=14&hidenavigation=1&theme=dark",
        code: "https://github.com/git-0r/mark8_emojiApp",
    },
    {
        img: "images/mark7.png",
        heading: "Fun Translator",
        description: " Translator to convert your text from English to Mandalorian, Yoda, Norfolk, Groot and Klingon using fun translations api.",
        live: "https://git-0r.github.io/mark7_funTranslationsApp/",
        code: "https://github.com/git-0r/mark7_funTranslationsApp",
    },
    {
        img: "images/mark6.png",
        heading: "Banana Talk",
        description: "Translate English to Banana language using this app",
        live: "https://git-0r.github.io/mark6_translationApp/",
        code: "https://github.com/git-0r/mark6_translationApp",
    },
    {
        img: "images/mark2.png",
        heading: "Trivia Quiz",
        description: "Test your general knowledge with this quiz.",
        live: "https://replit.com/@player01x/neoGQuizApp?embed=1&output=1#index.js",
        code: "https://github.com/git-0r/mark2_quiz",
    },
]

for (let i = 0; i < cardData.length; i++) {
    cards.appendChild(card.cloneNode(true))

}

const images = document.querySelectorAll('.--card-img');
const heading = document.querySelectorAll('h3');
const description = document.querySelectorAll('.description');
const live = document.querySelectorAll('.live');
const code = document.querySelectorAll('.code');

for (let i = 0; i < cardData.length; i++) {
    images[i].src = cardData[i].img;
    heading[i].innerText = cardData[i].heading;
    description[i].innerText = cardData[i].description;
    live[i].href = cardData[i].live;
    code[i].href = cardData[i].code;
}
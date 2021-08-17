const cards = document.querySelector('.--cards');
const card = document.querySelector('.--card');

const cardData = [

    {
        img: "images/localstorage.png",
        heading: "Web Storage API - Local Storage",
        description: "HTML5 introduced localStorage as a way to store data without any expiry date in the web browser.",
        more: "https://git-0r.hashnode.dev/web-storage-api-localstorage",
    },

]

for (let i = 0; i < cardData.length; i++) {
    cards.appendChild(card.cloneNode(true))

}

const images = document.querySelectorAll('.--card-img');
const heading = document.querySelectorAll('h3');
const description = document.querySelectorAll('.description');
const more = document.querySelectorAll('.more');

for (let i = 0; i < cardData.length; i++) {
    images[i].src = cardData[i].img;
    heading[i].innerText = cardData[i].heading;
    description[i].innerText = cardData[i].description;
    more[i].href = cardData[i].more;
}
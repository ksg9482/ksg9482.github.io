const images = [
    "image (1).jpg",
    "image (2).jpg",
    "image (3).jpg",
    "image (4).jpg",
    "image (5).jpg"
];

const choosenImage = images[Math.floor(Math.random() * images.length)];
const style = document.body.style
const bgImage = document.createElement('img');
// bgImage.src = `src/image/${choosenImage}`
// document.body.appendChild(bgImage)
document.body.style.backgroundImage = `url( 'src/image/${choosenImage}')`
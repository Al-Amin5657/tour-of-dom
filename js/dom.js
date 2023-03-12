console.log('Hello from js');
console.log(document.body)

document.getElementById('places-title').innerText = 'My Tour List';

const liCollection = document.getElementsByTagName('li');
for (const li of liCollection) {
    // console.log(li);
}
const allheading = document.getElementsByTagName('h2');
for (const h2 of allheading) {
    // console.log(h2.innerText);
}

const places = document.getElementsByClassName('important-places');
for (const place of places) {
    // console.log(place.innerText);
}

const someLi = document.querySelectorAll('.fruits-container li');
for (const li of someLi) {
    // console.log(li.innerText);
}

const title = document.getElementById('fruits-title');
title.setAttribute('title', 'tooltip set by javascript.');

document.getElementsByClassName('fruits-container')[0]
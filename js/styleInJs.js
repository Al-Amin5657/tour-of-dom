const sections = document.querySelectorAll('section');
for (const section of sections) {
    console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.margin = '10px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightBlue';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'purple';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('text-size');

const li = document.createElement('li');
li.innerText = 'Brand new place to go';
console.log(li);

const li2 = document.createElement('li');
li2.innerText = 'Another brand new place';

const placesUL = document.querySelector('#places-container li');
console.log(placesUL)
placesUL.appendChild(li);
placesUL.appendChild(li2);

placesUL.parentNode

const placesList = document.getElementById('places-list');
const li3 = document.createElement('li');
li3.innerText = 'Pahartoli Bon';
placesList.appendChild(li3);

const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h2 = document.createElement('h2');
h2.innerText = 'My Food List';
section.appendChild(h2);

const ul = document.createElement('ul');
const li11 = document.createElement('li');
li11.innerText = 'Biryani';
ul.appendChild(li11);

const li22 = document.createElement('li');
li22.innerText = 'Halim';
ul.appendChild(li22);

const li33 = document.createElement('li');
li33.innerText = 'Mutton';
ul.appendChild(li33);

const li4 = document.createElement('li');
li4.innerText = 'Biff';
ul.appendChild(li4);

section.appendChild(ul);
mainContainer.appendChild(section);

// set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h2>My dress section</h2>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Sando Genji</li>

</ul>

`
mainContainer.appendChild(sectionDress);
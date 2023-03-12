console.log('first file')

const allFile = document.getElementsByTagName('li');
console.log(allFile);

const allTitle = document.getElementsByClassName('section-title');
console.log(allTitle);

const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color = 'violet';
secondSection.style.backgroundColor = 'Yellow'

const secondList = document.getElementById('second-list');

const li = document.createElement('li');
li.innerText = 'My Dynamic List';
secondList.appendChild(li);

const mainContainer = document.getElementById('main -container');

const section = document.createElement('section');
section.innerHTML = `
  <h2> This is main section</h2>
  <ul>
     <li>my dinamic number-1</li>
     <li>my dinamic number-2</li>
     <li>my dinamic number-3</li>
     <li>my dinamic number-4</li>
  
  
  </ul>

`;
mainContainer.appendChild(section);
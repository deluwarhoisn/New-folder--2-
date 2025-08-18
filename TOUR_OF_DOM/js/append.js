// 1. parent node

const mainContainer = document.getElementById('main-container');
 // 2. create child node

 const PlaceSection = document.createElement('section');


// crate h1
const h1 = document.createElement('h1');
h1.innerText = 'places i want to visit'
PlaceSection.appendChild(h1)

const ul = document.createElement('ul');

const li1 = document.createElement('li');

li1.innerText='bandor bone jaty chi'
ul.appendChild(li1)
PlaceSection.appendChild(ul);

const li2 = document.createElement('li2');
li2.innerText='bandor bon'
ul.appendChild(li2)

 // 3.append Placesection to the maincontainer

 mainContainer.appendChild(PlaceSection)



 // easier to create HTML

 const booksSection = document.createElement('section');
 booksSection.innerHTML = `
 <h1> Book I need to read </h1>
 <ul>
 <li>Physics</li>
 <li>Chemistry</li>
 <li> Math </li>
 <li> Bayolojy </li>
 </ul>`

 mainContainer.appendChild(booksSection);
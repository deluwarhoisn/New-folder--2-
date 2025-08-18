// 1. parent node

const mainContainer = document.getElementById('main-container');
 // 2. create child node

 const PlaceSection = document.createElement('section');


// crate h1
const h1 = document.createElement('h1');
h1.innerText = 'places i want to visit'

 // 3.append Placesection to the maincontainer

 mainContainer.appendChild(PlaceSection)
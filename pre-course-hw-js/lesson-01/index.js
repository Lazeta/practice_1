// const h1Element = document.createElement('h1'); // создали переменную с тегом h1
// h1Element.append('Hello from it-incubator'); // поместили в переменную строку

// document.body.append(h1Element); // добавили в дом дерево нашу переменную

// data 
const title = 'it-incubator';
const graduatesCount = 2000;
const areYouChampion = true;

// render
let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = areYouChampion;
document.body.append(areYouChampionElement);
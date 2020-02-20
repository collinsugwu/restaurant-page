import { nav, heroText } from './landingpage';
import menu from './menu';


let header = document.createElement('header');
let content = document.getElementById('content');

header.appendChild(nav());
content.appendChild(header);
let parentNode = document.querySelector('header').parentNode;
parentNode.insertBefore(heroText(), header.nextSibling);


const deleteDomElement = () => {
  parentNode.removeChild(header);
  let heroTextDiv = document.querySelector('.hero-text-box');
  let heroTextParentNode = heroTextDiv.parentNode;
  heroTextParentNode.removeChild(heroTextDiv);
};

document.querySelector('.menu').addEventListener('click', () => {
  deleteDomElement();
  let content = document.getElementById('content');
  content.appendChild(menu());
});

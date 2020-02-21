import { nav, heroText } from './landingpage';
import menu from './menu';

const header = document.createElement('header');
const content = document.getElementById('content');

header.appendChild(nav());
content.appendChild(header);
const parentNode = document.querySelector('header').parentNode;
parentNode.insertBefore(heroText(), header.nextSibling);


const deleteDomElement = () => {
  parentNode.removeChild(header);
  const heroTextDiv = document.querySelector('.hero-text-box');
  const heroTextParentNode = heroTextDiv.parentNode;
  heroTextParentNode.removeChild(heroTextDiv);
};

document.querySelector('.menu').addEventListener('click', () => {
  deleteDomElement();
  const content = document.getElementById('content');
  content.appendChild(menu());
});


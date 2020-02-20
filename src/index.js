import { nav, heroText } from './landingpage';


let header = document.createElement('header');
let content = document.getElementById('content');

header.appendChild(nav());
content.appendChild(header);
let parentNode = document.querySelector('header').parentNode;
parentNode.insertBefore(heroText(), header.nextSibling);

document.querySelector('.menu').addEventListener('click', () => {
  parentNode.removeChild(header);
  let heroTextDiv = document.querySelector('.hero-text-box');
  let heroTextParentNode = heroTextDiv.parentNode;
  heroTextParentNode.removeChild(heroTextDiv);
  let content = document.getElementById('content');
});
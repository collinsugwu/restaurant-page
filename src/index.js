import { nav, heroText } from './landingpage';
import menu from './menu';
import contact from './contact';

const header = document.createElement('header');
const content = document.getElementById('content');

header.appendChild(nav());
content.appendChild(header);
const { parentNode } = document.querySelector('header');
parentNode.insertBefore(heroText(), header.nextSibling);

const deleteDomElement = () => {
  content.innerHTML = '';
};

function home() {
  document.querySelector('.home').addEventListener('click', () => {
    window.location.reload();
  });
}

function menuButton() {
  document.querySelector('.menu').addEventListener('click', () => {
    deleteDomElement();
    const content = document.getElementById('content');
    content.appendChild(nav());
    content.appendChild(menu());
    contactButton();
    home();
  });
}

function contactButton() {
  document.querySelector('.contact').addEventListener('click', () => {
    deleteDomElement();
    const content = document.getElementById('content');
    content.appendChild(nav());
    content.appendChild(contact());
    menuButton();
    home();
  });
}


menuButton();
contactButton();
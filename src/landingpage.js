import './style.css';

const nav = () => {
  const navBar = document.createElement('nav');
  const navDiv = document.createElement('div');
  navDiv.setAttribute('class', 'row');
  navDiv.innerHTML = `
 <img src="img/logo-white.png" alt="logo" class="logo">
 <ul class="main-nav float-right">
   <li><a href="#" class="home">Home</a></li>
   <li><a href="#" class="menu">Menu</a></li>
   <li><a href="#" class="contact">Contact</a></li>
 </ul>`;
  navBar.appendChild(navDiv);
  return navBar;
};


const heroText = () => {
  const hereDiv = document.createElement('div');
  hereDiv.setAttribute('class', 'hero-text-box');
  hereDiv.innerHTML = `
  <h1>Goodbye junk food. <br>Hello super healthy meals.</h1>
  <a class="btn btn-full" href="#">I’m hungry</a>
  <a class="btn btn-ghost" href="#">Show me more</a>`;

  return hereDiv;
};

export {
  nav,
  heroText,
};
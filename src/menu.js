const menu = () => {
  const section = document.createElement('section');
  section.setAttribute('class', 'section-meals');
  section.innerHTML = `
    <ul class="meals-showcase">
    <li>
        <figure class="meal-photo">
            <img src="img/1.jpg" alt="fist meal">
        </figure>
    </li>
    <li>
        <figure class="meal-photo">
            <img src="img/2.jpg" alt="fist meal">
        </figure>
    </li>
    <li>
        <figure class="meal-photo">
            <img src="img/3.jpg" alt="fist meal">
        </figure>
    </li>
    <li>
        <figure class="meal-photo">
            <img src="img/4.jpg" alt="fist meal">
        </figure>
    </li>
</ul>
<ul class="meals-showcase clearfix">
    <li>
        <figure class="meal-photo">
            <img src="img/5.jpg" alt="fist meal">
        </figure>
    </li>
    <li>
        <figure class="meal-photo">
            <img src="img/6.jpg" alt="fist meal">
        </figure>
    </li>
    <li>
        <figure class="meal-photo">
            <img src="img/7.jpg" alt="fist meal">
        </figure>
    </li>
    <li>
        <figure class="meal-photo">
            <img src="img/8.jpg" alt="fist meal">
        </figure>
    </li>
</ul>

 `;
  return section;
};

export default menu;
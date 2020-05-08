import React from 'react';
import './Menu.css'
import EntertainmentIcon from '../../assets/entertainment_icon.svg';
import HealthIcon from '../../assets/health_icon.svg';
import LocalIcon from '../../assets/local_icon.svg';
import ScienceIcon from '../../assets/science_icon.svg';
import TechnologyIcon from '../../assets/technology_icon.svg';


const Menu = (props) => {
  return(
    <section className="title-and-menu-contianer">
      <h1>What's <span className="orange-color-title">New</span></h1>
        <nav>
          <div onClick={() => props.displaySelectedNews('local')} className="icon-menu-button-container">
            <img src={LocalIcon} alt="local icon"/>
            <button className={props.currentlyDisplayedString === 'local' ? 'menu-active-state' : null}>Local News</button>
          </div>
          <div onClick={() => props.displaySelectedNews('technology')} className="icon-menu-button-container" id="technology">
            <img src={TechnologyIcon} alt="technology icon"/>
            <button className={props.currentlyDisplayedString === 'technology' ? 'menu-active-state' : null}>Technology</button>
          </div>
          <div onClick={() => props.displaySelectedNews('entertainment')} className="icon-menu-button-container" id="entertainment">
            <img src={EntertainmentIcon} alt="entertainment icon"/>
            <button className={props.currentlyDisplayedString === 'entertainment' ? 'menu-active-state' : null}>Entertainment</button>
          </div>
          <div onClick={() => props.displaySelectedNews('science')} className="icon-menu-button-container" id="science">
            <img src={ScienceIcon} alt="science icon"/>
            <button className={props.currentlyDisplayedString === 'science' ? 'menu-active-state' : null}>Science</button>
          </div>
          <div onClick={() => props.displaySelectedNews('health')} className="icon-menu-button-container" id="health">
            <img src={HealthIcon} alt="health icon"/>
            <button className={props.currentlyDisplayedString === 'health' ? 'menu-active-state' : null}>Health</button>
          </div>
        </nav>
    </section>
  );
}

// const allMenuButtons = document.querySelectorAll('.menu-button');
// console.log('all menu buttons', allMenuButtons);
// const body = document.querySelector('body');
//
// const globalEventHandler = (event) => {
//   if (event.target.classList.contains('menu-button')) {
//     // allMenuButtons.classList.remove('menu-active-state');
//     event.target.closest('button').classList.add('menu-active-state');
//   } else if (event.target.classList.contains('icon-menu-button-container')) {
//     event.target.children.classList.add('menu-active-state');
//   }
// };
//
// body.addEventListener('click', globalEventHandler);

export default Menu;

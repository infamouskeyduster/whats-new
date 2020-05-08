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
            <button>Local News</button>
          </div>
          <div onClick={() => props.displaySelectedNews('technology')} className="icon-menu-button-container" id="technology">
            <img src={TechnologyIcon} alt="technology icon"/>
            <button>Technology</button>
          </div>
          <div onClick={() => props.displaySelectedNews('entertainment')} className="icon-menu-button-container" id="entertainment">
            <img src={EntertainmentIcon} alt="entertainment icon"/>
            <button>Entertainment</button>
          </div>
          <div onClick={() => props.displaySelectedNews('science')} className="icon-menu-button-container" id="science">
            <img src={ScienceIcon} alt="science icon"/>
            <button>Science</button>
          </div>
          <div onClick={() => props.displaySelectedNews('health')} className="icon-menu-button-container" id="health">
            <img src={HealthIcon} alt="health icon"/>
            <button>Health</button>
          </div>
        </nav>
    </section>
  );
}

export default Menu;

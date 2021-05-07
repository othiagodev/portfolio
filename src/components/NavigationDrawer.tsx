import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import '../styles/components/navigationDrawer.css';

let isOn = false;

function OpenCloseNavDrawer() {
  const className = 'isOnScreen';
  const root = document.querySelector('#navigation > div.nav-container');

  isOn = !isOn;
  if (isOn) root?.classList.add(className);
  else root?.classList.remove(className);
}

export default function NavigationDrawer() {
  return (
    <div id="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <div className="content-view"><div>nav</div></div>
        </div>
        <div className="nav-ornament">
          <div className="ornament-view" />
        </div>
        <div className="nav-close">
          <button type="button" onClick={OpenCloseNavDrawer}> </button>
        </div>
      </div>
    </div>
  );
}

function NavigationButton() {
  return (
    <div id="navBtn" className="nav-container">
      <button type="button" onClick={OpenCloseNavDrawer}>
        <AiOutlineMenu />
      </button>
    </div>
  );
}

export { NavigationDrawer, NavigationButton };

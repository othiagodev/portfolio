import React from 'react';
import { VscError } from 'react-icons/vsc';
import { loadTheme } from '../components/NightModeSwitch';

export default function NotFound() {
  loadTheme('html', 'dark-mode');
  return (
    <div id="notFound">
      <div className="content">
        <div className="message">
          <span>Oops!</span>
        </div>
        <div className="statusSpace">
          <span>404</span>
          <VscError />
        </div>
        <div className="typeError">
          <p>PÁGINA NÃO ENCONTRADA</p>
        </div>
      </div>
    </div>
  );
}

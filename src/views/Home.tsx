import React, { useEffect } from 'react';
import '../styles/views/home.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import ReactSwitch from 'react-switch';
import usePersistedState from '../utils/usePersistedState';

export default function Home() {
  const [switchState, setSwitchState] = usePersistedState<boolean>('theme', true);

  function setTheme() {
    const root = document.querySelector('html');
    root?.classList.toggle('dark-mode');
  }

  function switchTheme() {
    setTheme();
    setSwitchState(!switchState);
  }

  useEffect(() => {
    if (switchState) setTheme();
  }, []);

  return (
    <div id="home">
      <header className="header">
        <nav className="social-network">
          <div className="switch-container">
            <ReactSwitch
              className="switch"
              onChange={switchTheme}
              checked={switchState}
            />
            <span>Dark Mode</span>
          </div>
          <ul>
            <li>
              <a className="social-network-link github" target="_blank" rel="noreferrer" href="https://github.com/othiagodev">
                <FaGithub size={32} />
              </a>
              <a className="social-network-link linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/othiagodev/">
                <FaLinkedinIn size={32} />
              </a>
              <a className="social-network-link mail" href="mailto:thg.santos@outlook.com">
                <FiMail size={32} />
              </a>
            </li>
          </ul>
        </nav>
        <hr />
      </header>
      <div className="content" />
    </div>
  );
}

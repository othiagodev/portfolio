import React, { useEffect } from 'react';
import '../styles/views/home.css';
import { FaGithub, FaLinkedinIn, FaMoon, FaSun } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import ReactSwitch from 'react-switch';
import usePersistedState from '../utils/usePersistedState';

export default function Home() {
  const [switchState, setSwitchState] = usePersistedState<boolean>('theme', false);
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
        <section className="header-top">
          <div className="switch-container">
            <ReactSwitch
              className="switch"
              onChange={switchTheme}
              checked={switchState}
              onColor="#808080"
              offColor="#909090"
              checkedIcon={<FaMoon size={28} />}
              uncheckedIcon={<FaSun size={28} />}
            />
            <span>Dark Mode</span>
          </div>
          <nav className="social-network">
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
        </section>
        <hr />
        <section className="header-bottom"> </section>
      </header>
      <div className="content" />
    </div>
  );
}

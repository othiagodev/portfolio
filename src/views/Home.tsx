import React, { useEffect } from 'react';
import '../styles/views/home.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import ReactSwitch from 'react-switch';
import usePersistedState from '../utils/usePersistedState';

export default function Home() {
  const [switchState, setSwitchState] = usePersistedState<boolean>('theme', false);

  function setTheme(selectors: string, className: string) {
    const root = document.querySelector(selectors);
    if (switchState) root?.classList.add(className);
    else root?.classList.remove(className);
  }

  useEffect(() => {
    setTheme('html', 'dark-mode');
  }, [switchState]);

  return (
    <div id="home">
      <header className="header">
        <section className="header-top">
          <div className="switch-container">
            <ReactSwitch
              className="switch"
              onChange={() => setSwitchState(!switchState)}
              checked={switchState}
              onColor="#2D2D2D"
              offColor="#EBEBEB"
              checkedIcon={<span role="img" aria-label="moon">🌜</span>}
              uncheckedIcon={<span role="img" aria-label="sun">🌞</span>}
            />
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

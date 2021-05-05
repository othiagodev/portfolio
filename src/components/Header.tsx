import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import ReactSwitch from 'react-switch';
import usePersistedState from '../utils/usePersistedState';
import '../styles/components/header.css';

type Props = {
  linkSelected: number
}

export default function Header({ linkSelected }: Props) {
  const [switchState, setSwitchState] = usePersistedState<boolean>('theme', true);

  function setTheme(selectors: string, className: string) {
    const root = document.querySelector(selectors);
    if (switchState) root?.classList.add(className);
    else root?.classList.remove(className);
  }

  function setLinkSelected(number: number) {
    const className = 'selected';
    const element = document.querySelectorAll('.router-link a');

    const targetElement = element[number];
    targetElement.classList.add(className);

    const targetElementChildren = targetElement.children[0].children[1];
    targetElementChildren.classList.add(className);
  }

  useEffect(() => {
    setLinkSelected(linkSelected);
  });

  useEffect(() => {
    setTheme('html', 'dark-mode');
  }, [switchState]);

  return (
    <header id="header">
      <section className="header-left">
        <div className="switch-container">
          <ReactSwitch
            className="switch"
            onChange={() => setSwitchState(!switchState)}
            checked={switchState}
            onColor="#2D2D2D"
            offColor="#EBEBEB"
            onHandleColor="#202020"
            offHandleColor="#FAFAFA"
            activeBoxShadow="none"
            checkedIcon={<span role="img" aria-label="moon">🌜</span>}
            uncheckedIcon={<span role="img" aria-label="sun">🌞</span>}
          />
        </div>
        <div className="menu-container">
          <button type="button">
            <AiOutlineMenu />
          </button>
        </div>
      </section>
      <section className="header-center">
        <nav className="router-link">
          <ul>
            <li>
              <Link to="/">
                <div className="link-content">
                  <span>Início</span>
                  <div className="link-selected" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/projetos">
                <div className="link-content">
                  <span>Projetos</span>
                  <div className="link-selected" />
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="header-right">
        <nav className="social-network">
          <ul>
            <li>
              <a className="social-network-link github" target="_blank" rel="noreferrer" href="https://github.com/othiagodev">
                <FaGithub />
              </a>
            </li>
            <li>
              <a className="social-network-link linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/othiagodev/">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a className="social-network-link mail" href="mailto:thg.santos@outlook.com">
                <FiMail />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

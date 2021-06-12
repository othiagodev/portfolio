import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { NavigationButton } from './NavigationDrawer';
import NightModeSwitch from './NightModeSwitch';

type Props = {
  linkSelected: number
}

export default function Header({ linkSelected }: Props) {
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

  return (
    <header id="header">
      <section className="header-left">
        <NightModeSwitch />
        <div className="menu-container">
          <NavigationButton />
        </div>
      </section>
      <section className="header-center">
        <nav className="router-link">
          <ul>
            <li>
              <Link to="/h">
                <div className="link-content">
                  <span>Início</span>
                  <div className="link-selected" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/p">
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

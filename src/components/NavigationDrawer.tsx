import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
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
          <div className="content-view">
            <div>switch</div>
            <hr />
            <div>
              <ul>
                <li>
                  <div className="link-content">
                    <a
                      className="social-network-link mail"
                      href="mailto:thg.santos@outlook.com"
                    >
                      <div className="link-icon">
                        <FiMail />
                      </div>
                      <div className="link-name">
                        <p>Email</p>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="link-content">
                    <a
                      className="social-network-link github"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/othiagodev"
                    >
                      <div className="link-icon">
                        <FaGithub />
                      </div>
                      <div className="link-name">
                        <p>GitHub</p>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="link-content">
                    <a
                      className="social-network-link linkedin"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/othiagodev/"
                    >
                      <div className="link-icon">
                        <FaLinkedinIn />
                      </div>
                      <div className="link-name">
                        <p>Linkedin</p>
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
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

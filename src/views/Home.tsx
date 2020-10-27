import React from 'react';
import '../styles/views/home.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function Home() {
  return (
    <div id="home">
      <header className="header">
        <nav className="social-network">
          <ul>
            <li>
              <a className="social-network-link" target="_blank" rel="noreferrer" href="https://github.com/othiagodev">
                <FaGithub size={32} />
              </a>
              <a className="social-network-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/othiagodev/">
                <FaLinkedinIn size={32} />
              </a>
              <a className="social-network-link" target="_blank" rel="noreferrer" href="mailto:thg.santos@outlook.com">
                <FiMail size={32} />
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        <div className="my-name">
          <span>Thiago</span>
        </div>
      </header>
      <div className="content" />
    </div>
  );
}

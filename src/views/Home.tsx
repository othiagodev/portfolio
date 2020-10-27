/* eslint-disable arrow-body-style */
import React from 'react';
import '../styles/views/home.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Home() {
  const socialNetworkData = [
    {
      name: 'github',
      url: 'https://github.com/othiagodev',
      icon: (<FaGithub size={32} color="#FFF" />),
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/othiagodev',
      icon: (<FaLinkedinIn size={32} color="#FFF" />),
    },
  ];
  return (
    <div id="home">
      <header className="header">
        <div className="my-name">
          <span>Thiago</span>
        </div>
        <nav className="social-network">
          <ul>
            <li>
              {socialNetworkData.map((data) => {
                return (
                  <a className={data.name} href={data.url}>{data.icon}</a>
                );
              })}
            </li>
          </ul>
        </nav>
      </header>
      <div className="red" />
      <div className="green" />
      <div className="blue" />
    </div>
  );
}

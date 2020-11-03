import React from 'react';
import Header from '../components/Header';
import '../styles/views/project.css';

export default function Project() {
  return (
    <div id="project">
      <Header linkSelected={1} />
      <div className="content" />
    </div>
  );
}

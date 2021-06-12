import React from 'react';
import Header from '../components/Header';
import NavigationDrawer from '../components/NavigationDrawer';

export default function Project() {
  return (
    <div id="project">
      <NavigationDrawer />
      <Header linkSelected={1} />
      <div className="content" />
    </div>
  );
}

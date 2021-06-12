import React from 'react';
import Header from '../components/Header';
import { NavigationDrawer } from '../components/NavigationDrawer';

export default function Home() {
  return (
    <div id="home">
      <NavigationDrawer />
      <Header linkSelected={0} />
      <div className="content" />
    </div>
  );
}

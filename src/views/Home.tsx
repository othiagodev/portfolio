import React from 'react';
import Header from '../components/Header';
import { NavigationDrawer } from '../components/NavigationDrawer';
import '../styles/views/home.css';

export default function Home() {
  return (
    <div id="home">
      <NavigationDrawer />
      <Header linkSelected={0} />
      <div className="content" />
    </div>
  );
}

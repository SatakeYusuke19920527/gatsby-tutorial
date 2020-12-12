import React from 'react';
import Header from '../components/header';
import './about-css-modules.module.css';
export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" />
      <Header headerText="It's pretty cool" />
      <p>Such wow. Very React.</p>
    </div>
  );
}

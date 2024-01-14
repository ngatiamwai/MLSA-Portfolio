/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "I am Ngatia Mwai",
  title: "a UI/UX Designer & Web Designer",
  email: "ngatiamwai25@gmail.com",
  gitHub: "https://github.com/ngatiamwai",
  instagram: "https://www.instagram.com/ngatiamwai/",
  linkedIn: "https://www.linkedin.com/in/ngatia-mwai/",
  medium: "",
  twitter: "https://twitter.com/NgatiaMwai1",
  youTube: "https://www.youtube.com/channel/UClQL8S9LSIICoa8oXLClSGA",
};

const primaryColor = "#1182e9";
const secondaryColor = "#daeaf8";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;

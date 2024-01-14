/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/me.jpeg";

const imageAltText = "Ngatia Mwai";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Hardware Online",
    description:
      "Hardware Online marketplace which is the ultimate destination for buying and selling top-quality products.",
    url: "https://github.com/ngatiamwai/Hardware-Online",
  },
  {
    title: "Eagle Aviation Services",
    description: "Eagle Aviation Services is a design that was created for an Aviation site.",
    url: "https://www.figma.com/file/MYbKeVFNZpoHtyEiFuB5UV/Eagle-Aviation-Services?type=design&node-id=0%3A1&mode=design&t=IZoEcCLmY5xv6fD5-1",
  },
  {
    title: "My Portifolio Site",
    description: "This is my portifolio website that shows my different UI/UX work.",
    url: "https://ngatia-mwai-portfolio.netlify.app/",
  },
  {
    title: "Linart Care Solutions",
    description:
      "Linart Care Solutions is a health care platform that allows medical professionals to apply for remote jobs.",
    url: "https://www.figma.com/file/qYhPWQQJHQXfJBtAdBxxbv/Linart-Career-Solutions?type=design&node-id=0%3A1&mode=design&t=JEWr6FPHAOiY3q5u-1",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "35%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "80%", width: "90%", objectFit: "cover", marginLeft: "10vh" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

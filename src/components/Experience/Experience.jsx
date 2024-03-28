/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import "./Experience.css";
import barna from "../../assets/svgs/barna.svg";
import bts from "../../assets/svgs/bts.svg";
import mcraylet from "../../assets/svgs/mcraylet.svg";
import formations from "../../assets/svgs/meta.svg";
import Scrollspy from "react-scrollspy";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById("experience");
      if (experienceSection) {
        const topPos = experienceSection.getBoundingClientRect().top;
        const bottomPos = experienceSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Start animation when the section is in the viewport
        if (topPos < windowHeight && bottomPos > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="colorexperience">
      <div
        className={`experience ${isVisible ? "visible" : ""}`}
        id="experience"
      >
        <h1>Expérience</h1>
        <Scrollspy
          items={["barna", "bts", "mcraylet", "formations"]}
          currentClassName="is-current"
        >
          <div className="timeline">
            <div className="container left-container" id="barna">
              <a href="">
                <img src={barna} alt="BARNA Entreprise" />
              </a>
              <div className="text-box">
                <h2>BARNA - Stage de 6 mois</h2>
                <small>Janvier 2021 - Juin 2021</small>
                <p>
                  {" "}
                  Développement Web Fullstack - Utilisation base de données
                  MySQL - Déploiement Heroku - Utilisation d'outils de design et
                  de CLI.
                </p>
                <span className="left-container-arrow"></span>
              </div>
            </div>

            <div className="container right-container" id="bts">
              <a href="https://esj-lacordeille.com/" target="_blank">
                <img src={bts} alt="ESJ La Cordeille" />
              </a>
              <div className="text-box">
                <h2>BTS Informatique - ESJ La Cordeille</h2>
                <small>2020 - 2022</small>
                <p>
                  Développement web & applications (HTML, CSS, Python &
                  JavaScript) - Étude de systèmes informatiques - Projets,
                  instrumentation, incertitudes et mesures.
                </p>
                <span className="right-container-arrow"></span>
              </div>
            </div>

            <div className="container left-container" id="mcraylet">
              <a href="https://mcraylet.com/" target="_blank">
                <img src={mcraylet} alt="MCRaylet" />
              </a>
              <div className="text-box">
                <h2>MCRaylet - Freelance (DG)</h2>
                <small>2022 - aujourd'hui</small>
                <p>
                  {" "}
                  Développement web et CMS - Assistance HelpDesk N1/2
                  (maintenance et dépannage) - Formations Informatiques.
                </p>
                <span className="left-container-arrow"></span>
              </div>
            </div>

            <div className="container right-container" id="formations">
              <a
                href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                target="_blank"
              >
                <img src={formations} alt="Formations" />
              </a>
              <div className="text-box">
                <h2>Formations (freeCodeCamp, Udemy, WebDev et Meta) </h2>
                <small>2023 - aujourd'hui</small>
                <p>
                  HTML & CSS + Responsive Design - SASS - Tailwind CSS -
                  JavaScript - ES6+ - React (Redux + Toolkit / React Router)
                  avec 600+ heures.
                </p>
                <span className="right-container-arrow"></span>
              </div>
            </div>
          </div>
        </Scrollspy>
      </div>
    </div>
  );
}

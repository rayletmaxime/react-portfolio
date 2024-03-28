/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import html from "../../assets/svgs/html.svg";
import css from "../../assets/svgs/css.svg";
import js from "../../assets/svgs/javascript.svg";
import ts from "../../assets/svgs/typescript.svg";
import react from "../../assets/svgs/react.svg";
import ps from "../../assets/svgs/photoshop.svg";
import ai from "../../assets/svgs/illustrator.svg";
import figma from "../../assets/svgs/figma.svg";
import tailwind from "../../assets/svgs/tailwind.svg";
import mui from "../../assets/svgs/mui.svg";
import next from "../../assets/svgs/next.svg";
import mongo from "../../assets/svgs/mongodb.svg";
import git from "../../assets/svgs/git.svg";
import seo from "../../assets/svgs/seo.svg";
import cms from "../../assets/svgs/wordpress.svg";
import github from "../../assets/svgs/github.svg";

import "./Skill.css";

export default function Skill() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="colorskill">
      <div className="skill" id="skill">
        <div className="skill-title">
          <h1>Compétences</h1>
          <p>
            Voici les compétences que j'ai acquises et celles sur lesquelles je
            travaille
          </p>
        </div>
        <div className="skill-list">
          <div className="skill-left">
            <div
              className="front-end"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2>Front-End</h2>
              <div className="skill-icons">
                <img src={html} alt="Logo HTML" width={40} height={40} />
                <img src={css} alt="Logo HTML" width={40} height={40} />
                <img src={js} alt="Logo HTML" width={40} height={40} />
                <img src={ts} alt="Logo HTML" width={40} height={40} />
              </div>
            </div>
            <div
              className="uxui"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2>UX/UI Design</h2>
              <div className="skill-icons">
                <img src={ps} alt="" width={42} height={42} />
                <img src={ai} alt="" width={42} height={42} />
                <img src={figma} alt="" width={36} height={36} />
                <img src={mui} alt="" width={40} height={40} />
              </div>
            </div>
          </div>
          <div className="skill-right">
            <div
              className="back-end"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2>Frameworks & DB</h2>
              <div className="skill-icons">
                <img src={react} alt="" width={40} height={40} />
                <img src={tailwind} alt="" width={40} height={40} />
                <img src={next} alt="" width={40} height={40} />
                <img src={mongo} alt="" width={40} height={50} />
              </div>
            </div>
            <div
              className="tools"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2>Outils</h2>
              <div className="skill-icons">
                <img src={git} alt="" width={40} height={40} />
                <img src={seo} alt="" width={40} height={40} />
                <img src={cms} alt="" width={40} height={40} />
                <img src={github} alt="" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

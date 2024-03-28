import "./Hero.css";

import linkedin from "../../assets/svgs/linkedin.svg";
import github from "../../assets/svgs/github.svg";
import mcr from "../../assets/max.webp";

export default function Hero() {
  return (
    <div className="colorhero">
      <div className="hero">
        <div className="hero-left">
          <h2>
            <span>👋</span> Développeur React Front-End
          </h2>
          <p>
            Bonjour, je suis Maxime Raylet. Développeur Front-End React UX/UI
            vivant en 📍 France.
          </p>
          <div className="hero-left-icons">
            <a href="https://www.linkedin.com/in/mcraylet/" target="_blank">
              <img src={linkedin} alt="Logo LinkedIn" />
            </a>
            <a href="https://github.com/gitmcr" target="_blank">
              <img src={github} alt="Logo GitHub" />
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img src={mcr} alt="Photo de Maxime Raylet" width={400} />
          <div className="hero-right-btn">
            <button>
              <a href="#" target="_blank">
                <p>CV</p>
              </a>
            </button>
            <button>
              <a href="#contact">
                <p>Contact</p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

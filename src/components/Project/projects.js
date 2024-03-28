/* eslint-disable no-unused-vars */

import figma from "../../assets/svgs/figma.svg";
import html from "../../assets/svgs/html.svg";
import css from "../../assets/svgs/css.svg";
import js from "../../assets/svgs/javascript.svg";
import react from "../../assets/svgs/react.svg";
import ps from "../../assets/svgs/photoshop.svg";
import tailwind from "../../assets/svgs/tailwind.svg";
import sass from "../../assets/svgs/sass.svg";
import node from "../../assets/svgs/nodejs.svg";
import postgre from "../../assets/svgs/postgresql.svg";
import mongo from "../../assets/svgs/mongodb.svg";
import python from "../../assets/svgs/python.svg";
import git from "../../assets/svgs/git.svg";
import seo from "../../assets/svgs/seo.svg";
import cms from "../../assets/svgs/wordpress.svg";
import github from "../../assets/svgs/github.svg";
import mui from "../../assets/svgs/mui.svg";

import imgproject1 from "../../assets/projet1.webp";
import imgproject2 from "../../assets/projet2.webp";
import imgproject3 from "../../assets/max.webp";

export const projects = [
  {
    name: "MCRaylet",
    desc: "Site web pour ma Freelance. Fabriqué en 2022 avec un CMS et des fonctionnalités intégrées. Le design a été créé à l'aide de Figma pour les mockups et Photoshop et Illustrator pour la réalisation.",
    desc2:
      "SEO et référencement naturel avec un score de 98/100 dépassant les personnes implantées depuis des années sur le mot clé informatique en l'espace de quatre mois.",
    desc3:
      "Conceptualisé et réalisé en deux semaines en partant avec aucune connaissance des CMS avec un apprentissage en ligne en autodidacte.",
    languages: [figma, ps, cms, seo],
    image: [imgproject1],
    linkgit: "https://github.com/gitmcr",
    linklive: "https://www.mcraylet.com/",
  },
  {
    name: "Marie Ness",
    desc: "Portfolio d'un proche pour sa musique et ses compositions avec un lecteur de musique intégré, une section réseaux sociaux et plateformes de streaming ainsi qu'une newsletter fonctionnelle.",
    desc2:
      "Le design et les mock-ups ont été réalisés sur Figma, et la suite Adobe Illustrator et Photoshop. Ainsi que Headless et Material UI pour les icones.",
    desc3:
      'Portfolio d\'une musicienne démontrant ses actualités, sa musique et ses propres compositions construit avec React et Tailwind CSS hébergé pour le moment sur Netlify en "manual deploy".',
    languages: [react, tailwind, js, mui],
    image: [imgproject2],
    linkgit: "https://github.com/gitmcr/marie-ness",
    linklive:
      "https://6601e9caed368c4be0b09b3b--dashing-halva-d2e0a0.netlify.app/",
  },
  {
    name: "Projet 3",
    desc: "Ongoing",
    desc2: "Ongoing",
    desc3: "Ongoing",
    languages: [tailwind, tailwind, tailwind],
    image: [imgproject2],
    linkgit: "https://github.com/gitmcr",
    linklive: "https://www.mcraylet.com/",
  },
];

import Git from "../../assets/icons/git.svg";
import Vitest from "../../assets/icons/vitest.svg";
import Figma from "../../assets/icons/figma.svg";
import Confluence from "../../assets/icons/confluence.svg";
import Jest from "../../assets/icons/Jest.svg";
import Cypress from "../../assets/icons/cypress.svg";

import style from "../Cv/Cv.module.scss";

const experience = [
  {
    date: "2022 - 2025",
    position: "Associate Front-End Engineer",
    place: "Australia Post, Melbourne, Australia",
  },
  {
    date: "2021 - 2022",
    position: "Junior Front-End Engineer",
    place: "Fusion Networks, Auckland, New Zealand",
  },
  {
    date: "2019 - 2021",
    position: "Full-stack Software Engineer",
    place: "Sisters United, Auckland, New Zealand",
  },
];

const volunteer = [
  {
    date: "2025 - Present",
    position: "Front-End Huddle Facilitator",
    place: "Australia Post, Melbourne, Australia",
  },
  {
    date: "2024 - Present",
    position: "HEROES Program",
    place: "Fusion Networks, Auckland, New Zealand",
  },
  {
    date: "2019 - 2022",
    position: "Coding Teacher",
    place: "Code Club Aotearoa, Auckland, New Zealand",
  },
];

const feSkills = [
  {
    skill: "JavaScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    skill: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    skill: "TypeScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    skill: "Sass",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
  },
  {
    skill: "HTML",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    skill: "Vue",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  },
];

const testingSkills = [
  { skill: "Jest", icon: Jest },
  { skill: "Vitest", icon: Vitest },
  { skill: "Cypress", icon: Cypress },
];
const utilitySkills = [
  // { skill: "Snyk", icon: null },
  { skill: "Git", icon: Git },

  { skill: "Figma", icon: Figma },
  { skill: "Confluence", icon: Confluence },
];

const Cv: React.FC = () => {
  return (
    <div className={style.page}>
      <div className={style.panel}>
        <h1>Experience</h1>
        {experience.map((exp) => {
          return (
            <div className={style.content}>
              <div>
                <h2>{exp.date}</h2>
              </div>
              <div>
                <h2>{exp.place}</h2>
                <p>{exp.position}</p>
              </div>
            </div>
          );
        })}
        <div className={style.volunteer}>
          <h1>Volunteer work</h1>
          {volunteer.map((vol) => {
            return (
              <div className={style.content}>
                <div>
                  <h2>{vol.date}</h2>
                </div>
                <div>
                  <h2>{vol.place}</h2>
                  <p>{vol.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.skillsPanel}>
        <h1>Skills</h1>
        <h2>Languages and frameworks</h2>
        <div className={style.skills}>
          {feSkills.map((skill) => {
            return (
              <div className={style.skill}>
                <img src={skill.icon} alt={`${skill.skill} icon`} />
                <h3>{skill.skill}</h3>
              </div>
            );
          })}
        </div>
        <h2>Testing</h2>
        <div className={style.skills}>
          {testingSkills.map((skill) => {
            return (
              <div className={style.skill}>
                <img src={skill.icon} alt={`${skill.skill} icon`} />
                <h3>{skill.skill}</h3>
              </div>
            );
          })}
        </div>
        <h2>Development tools and Utilities</h2>
        <div className={style.skills}>
          {utilitySkills.map((skill) => {
            return (
              <div className={style.skill}>
                <img src={skill.icon} alt={`${skill.skill} icon`} />
                <h3>{skill.skill}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Cv;

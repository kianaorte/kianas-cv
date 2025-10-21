import style from "../About/About.module.scss";

import Photo from ".././../assets/photo.png";

const About: React.FC = () => {
  return (
    <div className={style.page}>
      <div className={style.card}>
        <div className={style.content}>
          <h1>Hey,</h1>
          <h1>I'm Kiana</h1>
          <p className={style.about}>
            A front-end developer based in Melbourne who loves building clean,
            accessible, and user-friendly web experiences. I enjoy turning ideas
            into interactive interfaces using React, TypeScript, and a sprinkle
            of design thinking. I care a lot about good UX, performance, and
            writing code that’s easy to read and maintain. When I’m not coding,
            you’ll probably find me gaming, travelling, eating out, or geeking
            out over cool UI designs.
          </p>
        </div>
        <div className={style.link}>
          <a href="http://linkedin.com/in/kianaortega">
            linkedin.com/in/kianaortega{" "}
          </a>
        </div>
      </div>
      {/* placeholder until i find cute photo */}
      <img src={Photo} alt="Photo" />
    </div>
  );
};
export default About;

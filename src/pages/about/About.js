import Programmer from "../../assets/about_me.svg";
import styles from "./About.module.css";

import { SocialMedia } from "../../components";

const About = () => {
  return (
    <div className={styles.about}>
      <img
        src={Programmer}
        alt="My Pic"
        title="My picture"
        height={500}
        width={650}
      />
      <div className={styles.right}>
        <h1>About Me</h1>
        <p className={styles.info}>
          Hello World! I'm Pratap a web developer based out of India. From
          swimming in pool to lines of code on a web page. I love to combine
          worlds of logic and creative design to make eye-catching, user
          friendly and highly extensible and modular designs.
        </p>
        <SocialMedia />
      </div>
    </div>
  );
};

export default About;

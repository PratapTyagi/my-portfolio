import Programmer from "../../assets/programmer.svg";
import styles from "./Home.module.css";

import Type from "./Type";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <h1>Pratap Tyagi</h1>
        <p className={styles.info}>
          A passionate individual who always thrive to work on end to end
          products which develop sustainable and scalable social and technical
          systems to create impact.
        </p>
        <div
          style={{
            fontSize: "25px",
            paddingTop: 30,
            paddingLeft: 5,
            color: "grey",
          }}
        >
          <Type />
        </div>
        <a
          className={styles.watch_resume}
          href="https://drive.google.com/file/d/14XOQmNxE0nM_EXiJhySD_x8JE9UyoU1Q/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <hr />
          <span class="material-symbols-outlined">play_circle</span>
          <p>Watch resume</p>
        </a>
      </div>
      <img
        src={Programmer}
        alt="programmer"
        height={500}
        width={650}
        title="programmer"
      />
    </div>
  );
};

export default Home;

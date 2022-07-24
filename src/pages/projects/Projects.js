import ProgrammingBoy from "../../assets/programming_boy.svg";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <section className={styles.projects_top}>
        <div className={styles.left}>
          <h1>Projects</h1>
          <p className={styles.info}>
            In my development journey I built various projects.
          </p>
        </div>
        <img
          src={ProgrammingBoy}
          alt="Programming Boy"
          title="Programming Boy"
          height={500}
          width={650}
        />
      </section>
    </div>
  );
};

export default Projects;

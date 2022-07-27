import ProgrammingBoy from "../../assets/programming_boy.svg";
import styles from "./Projects.module.css";

import { ProjectCard } from "../../components";
import { projects } from "../../portfolioInformaton";

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
      <section className={styles.projects_bottom}>
        <p>My Work</p>
        <div className={styles.my_projects}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.project_id} />
          ))}
        </div>
        <a
          href="https://github.com/PratapTyagi?tab=repositories"
          className={styles.more_projects}
        >
          More Projects
        </a>
      </section>
    </div>
  );
};

export default Projects;

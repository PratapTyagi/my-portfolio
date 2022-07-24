import CareerMirror from "../../assets/career_mirror.svg";
import styles from "./Experience.module.css";

import { workExperience } from "../../portfolioInformaton";
import { WorkCard } from "../../components";

const Experience = () => {
  return (
    <div className={styles.experience}>
      <section className={styles.experience_top}>
        <img
          src={CareerMirror}
          alt="career mirror"
          title="career mirror"
          height={500}
          width={650}
        />
        <div className={styles.right}>
          <h1>Experience</h1>
          <p className={styles.info}>
            I've worked majorly with startups in Web development(Full Stack) and
            blockchain development.
          </p>
        </div>
      </section>
      <section className={styles.experience_bottom}>
        <p>Industrial Work</p>
        <div className={styles.my_work}>
          {workExperience.map((data) => (
            <WorkCard key={data.serialNumber} data={data} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;

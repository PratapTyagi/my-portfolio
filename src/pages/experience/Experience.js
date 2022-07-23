import CareerMirror from "../../assets/career_mirror.svg";
import styles from "./Experience.module.css";

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
    </div>
  );
};

export default Experience;

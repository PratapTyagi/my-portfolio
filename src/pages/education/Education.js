import GraduationCap from "../../assets/graduation_cap.svg";
import styles from "./Education.module.css";

import { CompetitiveSites } from "../../components";
import Github from "../../components/github/Github";

const Education = () => {
  return (
    <div className={styles.education}>
      <div className={styles.education_top}>
        <div className={styles.left}>
          <h1>Education</h1>
          <p className={styles.platforms}>Basic qualification</p>
          <CompetitiveSites />
        </div>
        <img
          src={GraduationCap}
          alt="graduation_cap"
          title="graduation_cap"
          height={500}
          width={650}
        />
      </div>
      <div className={styles.github}>
        <p>Days I Code</p>
        <Github />
      </div>
    </div>
  );
};

export default Education;

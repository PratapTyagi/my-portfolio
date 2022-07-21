import GraduationCap from "../../assets/graduation_cap.svg";
import styles from "./Education.module.css";

import { CompetitiveSites } from "../../components";

const Education = () => {
  return (
    <div className={styles.education}>
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
  );
};

export default Education;

import Programmer from "../../assets/programmer.svg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <img
        src={Programmer}
        alt="programmer"
        height={500}
        width={650}
        title="programmer"
      />
      <div className={styles.right}>
        <p>
          <span className="theme">Hi</span> There!
        </p>
        <p>
          I'm <span className="theme">Pratap Tyagi</span>
        </p>
      </div>
    </div>
  );
};

export default Home;

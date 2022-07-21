import styles from "./CompetitiveSites.module.css";

const CompetitiveSites = () => {
  return (
    <div className={styles.competitive_sites}>
      <a
        href="https://www.hackerrank.com/tyagipratap111"
        target="_blank"
        rel="noreferrer"
      >
        <span
          className="iconify"
          data-icon="simple-icons:hackerrank"
          style={{ color: "#2EC866" }}
          data-inline="false"
        ></span>
      </a>
      <a
        href="https://auth.geeksforgeeks.org/user/tyagipratap111/"
        target="_blank"
        rel="noreferrer"
      >
        <span
          className="iconify"
          data-icon="simple-icons:geeksforgeeks"
          style={{
            color: "#2EC866",
            backgroundColor: "whitesmoke",
          }}
          data-inline="false"
        ></span>
      </a>
    </div>
  );
};

export default CompetitiveSites;

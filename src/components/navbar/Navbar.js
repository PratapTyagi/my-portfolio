import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.my_logo}>My logo</div>
      <div className={styles.right}>
        <p>Home</p>
        <p>About</p>
        <p>Education</p>
        <p>Experience</p>
        <p>Projects</p>
      </div>
    </div>
  );
};

export default Navbar;

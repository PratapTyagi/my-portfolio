import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  let navigate = useNavigate();

  let handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.my_logo} onClick={() => handleNavigate("/")}>
        My logo
      </div>
      <div className={styles.right}>
        <p onClick={() => handleNavigate("/home")}>Home</p>
        <p onClick={() => handleNavigate("/about")}>About</p>
        <p onClick={() => handleNavigate("/education")}>Education</p>
        <p onClick={() => handleNavigate("/experience")}>Experience</p>
        <p onClick={() => handleNavigate("/projects")}>Projects</p>
      </div>
    </div>
  );
};

export default Navbar;

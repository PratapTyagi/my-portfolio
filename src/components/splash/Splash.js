import "./Splash.css";
import SplashGif from "../../assets/splash.gif";

const Splash = () => {
  return (
    <div className="splash">
      <img src={SplashGif} alt="Splash" />
    </div>
  );
};

export default Splash;

import { useEffect, useState } from "react";

import "./Splash.css";
import SplashGif from "../../assets/splash.gif";

import { Navigate } from "react-router-dom";

const Splash = () => {
  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    let id = setTimeout(() => setIsRedirect(true), 5500);
    return () => {
      clearTimeout(id);
    };
  }, []);

  return isRedirect ? (
    <Navigate to="/home" />
  ) : (
    <div className="splash">
      <img src={SplashGif} alt="Splash" />
    </div>
  );
};

export default Splash;

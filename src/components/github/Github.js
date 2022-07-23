import GitHubCalendar from "react-github-calendar";
import "./Github.css";

const Github = () => {
  return (
    <GitHubCalendar
      username="PratapTyagi"
      blockSize={15}
      blockMargin={5}
      color="#2EC866"
      fontSize={16}
    />
  );
};

export default Github;

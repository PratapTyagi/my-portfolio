import "./WorkCard.css";

const WorkCard = ({ data }) => {
  const {
    companyName,
    companyLink,
    companyPic,
    certification,
    designation,
    duration,
  } = data;
  return (
    <div className="work_card">
      <a href={companyLink} target="_blank" rel="noreferrer">
        {companyName}
      </a>
      <img src={companyPic} alt={companyName} />
      <div className="bottom">
        <p>{designation}</p>
        <span>{duration}</span>
        <br />
        <a
          href={certification}
          target="_blank"
          rel="noreferrer"
          className={`certification ${!certification ? "disable" : ""}`}
        >
          Certificate
        </a>
      </div>
    </div>
  );
};

export default WorkCard;

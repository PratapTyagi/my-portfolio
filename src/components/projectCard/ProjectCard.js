import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project_card">
      <p>{project.name}</p>
      <img src={project.pic} alt="project_image" />
      <div className="call_to_actions">
        <a href={project.githubLink} target="_blank" rel="noreferrer">
          Github
        </a>
        <a href={project.projectLink} target="_blank" rel="noreferrer">
          ProjectLink
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

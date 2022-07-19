import styles from "./SocialMedia.module.css";
import { socialMediaLinks } from "../../portfolioInformaton";
import style from "styled-components";

const IconWrapper = style.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: #6c63ff;
    transition: 0.3s ease-in;
  }
`;

const SocialMedia = () => {
  return (
    <div className={styles.social_media_div}>
      {socialMediaLinks.map((data) => {
        return (
          <a
            href={data.link}
            className={styles.icon_button}
            target="_blank"
            rel="noreferrer"
            key={data.name}
          >
            <IconWrapper {...data}>
              <i className={`fa ${data.icon}`}></i>
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;

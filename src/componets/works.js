import classes from "../Style/works.module.css";
import ExtLinkIcon from "./externalLinksIcon";
function Works(props) {
  return (
    <div
      className={classes.bigDiv}
      data-aos="fade-down"
      data-aos-delay="150"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <img
        src={props.imgSnip}
        className={classes.imgSnip}
        alt={"soundmac snip "}
      />

      <br />

      {/* Git Personal Link */}

      <ExtLinkIcon link={props.worksGitLink} icon={props.worksIcon} />
      {/* Behance Personal Link */}

      {/* Website Personal Link */}
      <ExtLinkIcon
        style={{ background: "yellow" }}
        link={props.worksWebLink}
        icon={props.worksWebIcon}
      />

      <h2 className={classes.heading}>{props.heading}</h2>
      <h3 className={classes.heading2}>{props.techStack}</h3>
      <p className={classes.description}>{props.description} </p>
    </div>
  );
}
export default Works;

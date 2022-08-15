import classes from '../Style/externalLinksicon.module.css'
function ExtLinkIcon(props) {
    return(
        <div className={classes.ExtLinkIcon}>
            <a href={props.link} target="_blank" rel="noreferrer">
                <img 
                src={props.icon} 
                alt="git icon"
                className={classes.icon}>
                 </img>
                </a>
        </div>
    )
}
export default ExtLinkIcon
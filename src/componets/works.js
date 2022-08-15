import classes from '../Style/works.module.css'
import ExtLinkIcon from './externalLinksIcon' 
function Works (props) {
    return(
        <div className={classes.bigDiv} data-aos="fade-down" data-aos-delay="150"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out" >
            <img src={props.imgSnip} className={classes.imgSnip} alt={'soundmac snip '}/>
           
           <br/>

           {/* Git Personal Link */}
            <ExtLinkIcon 
                link={props.worksGitLink}
                icon = {props.worksIcon}
                />       
            {/* Behance Personal Link */}
                <ExtLinkIcon 
                link={props.worksBeLink}
                icon = {props.worksBeIcon}
                /> 

            {/* Website Personal Link */}
            <ExtLinkIcon 
                link={props.worksWebLink}
                icon = {props.worksWebIcon}
                />    

        </div>
    )
}
export default Works
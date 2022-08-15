import classes from '../Style/ptBox.module.css'

function PTTerms(props) {
    return(
        <div className={classes.bgColorCon}
        data-aos="fade-up" data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
            <div style={{background: props.bgColor}} className={classes.bgColor}>
            <img src={props.spIcon} className={classes.spIcon} alt='sp Icon'/>
            <h1 className={classes.title}>{props.title}</h1>
            </div>
            <h1 className={classes.iValue}>{props.subTitle}</h1> 
<br/>

            <h1 style={{background: props.bgColor}}  className={classes.tools}>{props.tools}</h1>
            
<br/>

            <h1 className={classes.iValue2}>{props.toolsText}</h1> 
        </div>
        
    )
}
export default PTTerms
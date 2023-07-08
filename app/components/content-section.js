import classes from './content-section.module.scss';

const ContentSection = (props) => {

    return (
        <section className={classes.ContentSection} style={props.style}>{props.children}</section>
    )
}

export default ContentSection
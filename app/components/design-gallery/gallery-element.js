import classes from './gallery.module.scss';

const GalleryElement = (props) => {

    return (
        <li className={classes.Gallery__Element}>
            <div className={classes.background}></div>
            <p>{props.title}</p>
        </li>
    )

}

export default GalleryElement;
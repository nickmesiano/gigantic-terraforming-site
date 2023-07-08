import GalleryElement from "./gallery-element";
import classes from './gallery.module.scss';

const Gallery = () => {
    return (
        <ul className={classes.Gallery__Outer}>
            <GalleryElement title='Preserved Farmland'  />
            <GalleryElement title='Farm Market' />
            <GalleryElement title='Ranchette' />
            <GalleryElement title='Single Family' />
            <GalleryElement title='Cottages' />
            <GalleryElement title='5-Over-1' />
            <GalleryElement title='Garden Lot' />
            <GalleryElement title='Light Rail Station' />
        </ul>
    )

}

export default Gallery;
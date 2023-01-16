// import { Component } from "react"
import PropTypes from 'prop-types';
import '../styles.css'
const ImageGalleryItem=({onClick, webformatURL, largeImageURL}) => {
    return(
        <li onClick={onClick}  className="ImageGalleryItem">
  <img src={webformatURL} alt={largeImageURL} />
</li>
    )
}

const ImageGallery = ({items, onClick})=> {

    
return(
  <div>
  <ul className='ImageGallery'>
    {items.map((item) => (
    <ImageGalleryItem key={item.id}  onClick={onClick}  webformatURL={item.webformatURL} largeImageURL={item.largeImageURL} />
//     <li onClick={onClick} key={item.id} className="gallery-item">
//   <img src={item.webformatURL} alt={item.largeImageURL} />
// </li>
  ))}
  </ul>
  </div>
)
}
ImageGallery.propTypes = {
  onClick: PropTypes.elementType.isRequired,
  items: PropTypes.array.isRequired
 }
 ImageGalleryItem.propTypes = {
  onClick: PropTypes.elementType.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
 }
export default ImageGallery;
// import { Component } from "react"
// const ImageGalleryItem=({id, webformatURL, largeImageURL}) => {
//     return(
//         <li key={id} className="gallery-item">
//   <img src={webformatURL} alt={largeImageURL} />
// </li>
//     )
// }

const ImageGallery = ({items})=> {

    
return(
  <div>
  <ul>
    {items.map((item) => (
    // <ImageGalleryItem id={item.id} webformatURL={item.webformatURL} largeImageURL={item.largeImageURL} />
    <li key={item.id} className="gallery-item">
  <img src={item.webformatURL} alt={item.largeImageURL} />
</li>
  ))}
  </ul>
  </div>
)
}

export default ImageGallery;
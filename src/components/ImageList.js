import '../css/ImageList.css';
import Image from './Image';

function ImageList({ images }) {
  const imagesJSX = images.map((image) => <Image details={image} key={image.id} />); 
  return (
    <div className="image-list">
      {imagesJSX}
    </div>
  );
}
export default ImageList;

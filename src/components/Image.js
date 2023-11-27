import '../css/Image.css';

function Image({ details }) {
  console.log(details);
  return <img src={details.urls.thumb} alt={details.alt_description} />;
}
export default Image;

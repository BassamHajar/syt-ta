import "./YachtPhoto.scss";
// utils
import { useYachtPhoto } from "./yachtPhotoUtils";

const YachtPhoto = ({ photo, primary, last }) => {
  const { imgRef, isPortrait, setDisplayLightbox } = useYachtPhoto();

  return (
    <div
      ref={imgRef}
      onClick={() => setDisplayLightbox(true)}
      style={{ backgroundImage: `url(${photo?.url?.medium})` }}
      className={`yacht-photo ${isPortrait ? "portrait" : "landscape"} ${
        primary ? "primary" : "secondary"
      }`}
    >
      {last && <div className="photos-count-overlay">{last}</div>}
    </div>
  );
};

export default YachtPhoto;

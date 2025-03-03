import "../css/main.css";
import "../scss/gallery.css";
import Header from "../components/Header";

import img1 from "../photo/photo_2024-07-25_14-05-45.jpg";
import img2 from "../photo/photo_2024-09-12_00-42-40(ai).jpg";
import img3 from "../photo/DSC_3855(2).jpg";

export default function Gallery() {
  return (
    <>
      <Header />

      <div className="gallery">
        <img className="gallery_img" alt="img1" src={img3} />
        <img className="gallery_img" alt="img2" src={img1} />
        <img className="gallery_img" alt="img3" src={img2} />
      </div>
    </>
  );
}

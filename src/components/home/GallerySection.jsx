import { galleryImages } from "../../data/businessData";
import "./GallerySection.css";

function GallerySection() {
  return (
    <section className="section-space bg-light-subtle">
      <div className="container">
        <div className="section-title-wrap text-center mb-5">
          <h2>Real Gallery</h2>
          <p className="text-muted">A glimpse of the care, comfort, and happiness we maintain every day.</p>
        </div>
        <div className="row g-4">
          {galleryImages.map((image) => (
            <div className="col-6 col-md-4" key={image.src}>
              <div className="gallery-card">
                <img src={image.src} alt={image.alt} loading="lazy" className="img-fluid w-100"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;

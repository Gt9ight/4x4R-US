import React, { useEffect, useState, useRef } from 'react';
import './gallery.css';
import img1 from './IMG_7905.jpg';
import img2 from './IMG_8242.jpg';
import img3 from './IMG_7907.jpg';
import img4 from './IMG_7908.jpg';
import img5 from './IMG_8187.jpg';
import img6 from './IMG_8188.jpg';
import img7 from './IMG_8189.jpg';
import img8 from './IMG_8202.jpg';
import img9 from './IMG_8241.jpg';
import img11 from './IMG_8372.jpg';
import img12 from './IMG_8518.jpg';
import img13 from './IMG_8524.jpg';

function Gallery() {
  const imagePaths = [
    { src: img1, alt: 'Image 1' },
    { src: img2, alt: 'Image 2' },
    { src: img3, alt: 'Image 3' },
    { src: img4, alt: 'Image 4' },
    { src: img5, alt: 'Image 5' },
    { src: img6, alt: 'Image 6' },
    { src: img7, alt: 'Image 7' },
    { src: img8, alt: 'Image 8' },
    { src: img9, alt: 'Image 9' },
    { src: img11, alt: 'Image 11' },
    { src: img12, alt: 'Image 12' },
    { src: img13, alt: 'Image 13' },
  ];

  const [visibleImages, setVisibleImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleImages((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item) => observerRef.current.observe(item));

    return () => observerRef.current.disconnect();
  }, []);

  const openModal = (index) => {
    setSelectedImage(imagePaths[index].src);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const goToNextImage = () => {
    const nextIndex = (currentIndex + 1) % imagePaths.length;
    setSelectedImage(imagePaths[nextIndex].src);
    setCurrentIndex(nextIndex);
  };

  const goToPreviousImage = () => {
    const prevIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
    setSelectedImage(imagePaths[prevIndex].src);
    setCurrentIndex(prevIndex);
  };

  const getAdjacentImages = () => {
    const prevImages = [
      imagePaths[(currentIndex - 2 + imagePaths.length) % imagePaths.length],
      imagePaths[(currentIndex - 1 + imagePaths.length) % imagePaths.length],
    ];
    const nextImages = [
      imagePaths[(currentIndex + 1) % imagePaths.length],
      imagePaths[(currentIndex + 2) % imagePaths.length],
    ];
    return { prevImages, nextImages };
  };

  return (
    <div>
      <div className="galleryHero">
        <p className="galleryHeroText">SEE SOME OF OUR WORK!</p>
      </div>

      <div className="gallery-container">
        {imagePaths.map((img, index) => (
          <div
            key={index}
            className={`gallery-item ${visibleImages.includes(index) ? 'visible' : ''}`}
            data-index={index}
            style={{ backgroundImage: `url(${img.src})` }}
            onClick={() => openModal(index)}
          >
            <p className="image-text">{img.alt}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close-button">&times;</span>
          <div className="modal-content">
            <div className="modal-navigation">
              <button
                className="nav-button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPreviousImage();
                }}
              >
                &lt;
              </button>
              <img src={selectedImage} alt="Expanded view" className="modal-image" />
              <button
                className="nav-button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNextImage();
                }}
              >
                &gt;
              </button>
            </div>
            <div className="thumbnail-container">
              {/* Previous Images */}
              <div className="thumbnail-row">
                {getAdjacentImages().prevImages.map((img, index) => (
                  <img
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    className={`thumbnail ${imagePaths.indexOf(img) === currentIndex ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(imagePaths.indexOf(img));
                    }}
                  />
                ))}
              </div>
              {/* Current Image (Center) */}
              <div className="thumbnail-current">
                <img
                  src={imagePaths[currentIndex].src}
                  alt={imagePaths[currentIndex].alt}
                  className="thumbnail active"
                />
              </div>
              {/* Next Images */}
              <div className="thumbnail-row">
                {getAdjacentImages().nextImages.map((img, index) => (
                  <img
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    className={`thumbnail ${imagePaths.indexOf(img) === currentIndex ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(imagePaths.indexOf(img));
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;

import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ title, images }) => {
    return (
        <div className="image-gallery">
            <h2>{title}</h2>
            <div className="prayers-grid">
                {images.map((image, index) => (
                    <div key={index} className="prayer-item">
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            loading="lazy" 
                            width="300"    
                            height="200"   
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;

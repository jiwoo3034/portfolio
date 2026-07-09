// IoTMobileApp.js - Fixed carousel with proper ARIA
<div className="image-carousel">
  <button 
    className="carousel-arrow prev" 
    onClick={() => navigateWireframe('prev')}
    aria-label="Previous wireframe image"
  >❮</button>
  <div 
    className="carousel-container" 
    style={{ transform: `translateX(-${wireframeCurrentIndex * 100}%)` }}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={() => handleTouchEnd('wireframe')}
    role="region"
    aria-label="Wireframe images carousel"
  >
    {wireframeImages.map((img, index) => (
      <div className="carousel-slide" key={index}>
        <img src={img} alt={`Wireframe ${index + 1}`} className="project-image" />
      </div>
    ))}
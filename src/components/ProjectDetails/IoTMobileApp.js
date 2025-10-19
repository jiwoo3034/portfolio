import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './IoTMobileApp.css'; 
import PageTransition from '../PageTransition'; 

function IoTMobileApp() {
  const navigate = useNavigate();
  
  // States for wireframe and prototype carousels
  const [wireframeCurrentIndex, setWireframeCurrentIndex] = useState(0);
  const [prototypeCurrentIndex, setPrototypeCurrentIndex] = useState(0);
  
  // References to wireframe images and prototype images
  const wireframeImages = [
    "/images/W_Start.png",
    "/images/W_LogIn.png",
    "/images/W_Homepage.png",
    "/images/W_LivingRoom.png",
    "/images/W_Statistics.png",
    "/images/W_Menu.png",
    "/images/W_Security.png",
    "/images/W_Camera.png",
    "/images/W_Scenes.png",
    "/images/W_Smart Actions.png",
    "/images/W_Create Scene.png",
    "/images/W_Profile.png"
  ];
  
  const prototypeImages = [
    "/images/P_Start.png",
    "/images/P_LogIn.png",
    "/images/P_Homepage.png",
    "/images/P_LivingRoom.png",
    "/images/P_Statistics.png",
    "/images/P_Menu.png",
    "/images/P_Security.png",
    "/images/P_Camera.png",
    "/images/P_Scenes.png",
    "/images/P_Smart Actions.png",
    "/images/P_Create Scene.png",
    "/images/P_Profile.png"
  ];
  
  // Functions for carousel navigation
  const navigateWireframe = (direction) => {
    if (direction === 'next') {
      setWireframeCurrentIndex((prevIndex) => 
        prevIndex === wireframeImages.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setWireframeCurrentIndex((prevIndex) => 
        prevIndex === 0 ? wireframeImages.length - 1 : prevIndex - 1
      );
    }
  };
  
  const navigatePrototype = (direction) => {
    if (direction === 'next') {
      setPrototypeCurrentIndex((prevIndex) => 
        prevIndex === prototypeImages.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setPrototypeCurrentIndex((prevIndex) => 
        prevIndex === 0 ? prototypeImages.length - 1 : prevIndex - 1
      );
    }
  };
  
  // Go to specific slide
  const goToWireframeSlide = (index) => {
    setWireframeCurrentIndex(index);
  };
  
  const goToPrototypeSlide = (index) => {
    setPrototypeCurrentIndex(index);
  };
  
  // Touch event handling for swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Minimum swipe distance required (in px)
  const minSwipeDistance = 50;
  
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = (carouselType) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      // Handle left swipe - go to next slide
      if (carouselType === 'wireframe') {
        navigateWireframe('next');
      } else {
        navigatePrototype('next');
      }
    }
    
    if (isRightSwipe) {
      // Handle right swipe - go to previous slide
      if (carouselType === 'wireframe') {
        navigateWireframe('prev');
      } else {
        navigatePrototype('prev');
      }
    }
    
    // Reset values
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <PageTransition>
      <section className="project-detail">
      {/* Project Header */}
      <header className="section" style={{ background: 'transparent' }}>
        <br/>
        <h1>🌱 Smart Home IoT Mobile App</h1>
        <h2 className="project-subtitle">UX Design</h2>
        <img src="/images/iot-overview.jpg" alt="IoT Mobile App Overview" className="project-image" />
      </header>

      {/* Project Overview */}
      <section className="section">
        <h2>Project Overview</h2>
        <div className="section-content">
          <p>
            As part of a 3-person team, I was responsible for market research, personas, wireframes, and the final prototype. Using Figma as our primary design tool, we developed an IoT-based smart home mobile app that helps homeowners optimize irrigation, conserve energy, and improve safety.
          </p>
          <p>
            Outdated sprinkler controllers lead to over 50% water wastage, and existing solutions for water usage adjustments are often complex and time-consuming. In addition, seniors experiencing cognitive issues may forget essential tasks—such as turning off the stove—creating potential safety risks.
          </p>
          <p>
            <strong>Our solution:</strong> an intuitive, user-friendly smart home system that integrates IoT to optimize irrigation control, conserve energy, and enhance overall safety.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Project Details */}
      <section className="project-info-grid">
        <div className="info-cards-container">
          <article className="info-card">
            <h3>Timeframe</h3>
            <p>12 weeks</p>
          </article>
          
          <article className="info-card">
            <h3>My Role</h3>
            <p>UX Researcher<br/>UI Designer<br/>Prototype Developer</p>
          </article>
          
          <article className="info-card">
            <h3>Tools</h3>
            <p>Figma<br/>Adobe XD<br/>Miro<br/>Google Analytics</p>
          </article>
        </div>
      </section>

      {/* Divider */}
      <div className="divider"></div>

      {/* Process */}
      <div className="section">
        <h2>Process</h2>
        <div className="section-content">
          <ol className="process-list">
            <li>User Research</li>
            <li>Personas</li>
            <li>Problem Statement</li>
            <li>Ideation</li>
            <li>Prototyping</li>
            <li>Usability Testing</li>
            <li>Final Solution</li>
            <li>Design Process</li>
            <li>UX Principles</li>
            <li>Reflection</li>
          </ol>
        </div>
      </div>

      {/* User Research */}
      <div className="section">
        <h2>User Research</h2>
        <div className="section-content">
          <h3>Market Research</h3>
          <ul>
            <li>Smart Home Market Growth – projected to reach $338B by 2030.</li>
            <li>IoT & Irrigation Systems – experiments show up to 35% water savings using smart irrigation.</li>
            <li>Senior Safety & Smart Home Solutions – 75% of older adults want to age at home, making safety-oriented smart home systems essential.</li>
          </ul>
          <h3>Online Survey</h3>
          <ul>
            <li>70% of respondents admitted forgetting to turn off appliances.</li>
            <li>50% were concerned about water conservation.</li>
            <li>Strong interest in optimizing irrigation, conserving energy, and enhancing safety.</li>
          </ul>
          <h3>Interviews</h3>
          <ul>
            <li>Manual irrigation scheduling is tedious and imprecise.</li>
            <li>Forgotten appliances create safety risks and anxiety.</li>
            <li>Desired features include weather-based irrigation scheduling, remote monitoring, automated shutoff, and a simple mobile interface.</li>
          </ul>
        </div>
      </div>

      {/* Personas */}
      <div className="section">
        <h2>Personas</h2>
        <div className="section-content">
          <img src="/images/iot-personas.png" alt="Personas" className="project-image" />
          <img src="/images/iot-personas-2.png" alt="Personas" className="project-image" />
        </div>
      </div>

      {/* Problem Statement */}
      <div className="section">
        <h2>Problem Statement</h2>
        <div className="section-content">
          <p>
            Homeowners and renters — especially those who are environmentally conscious, busy, or concerned about senior safety — lack user-friendly and accessible smart home systems to manage their environments efficiently and safely.
          </p>
          <p>
            This results in water waste due to outdated irrigation, wasted energy from manual appliance control, and safety risks for forgetful users or those with cognitive limitations. Current smart home solutions are often complex and overwhelming, hindering adoption and reducing the benefits of a truly connected home environment.
          </p>
        </div>
      </div>

      {/* Ideation */}
      <div className="section">
        <h2>Ideation</h2>
        <div className="section-content">
          <p>
            We applied design thinking to ideate solutions:
          </p>
          <ul>
            <li><strong>Sketching:</strong> Four different sketches from each team member; combined the strongest ideas.</li>
          </ul>
          <div className="image-grid-2x2">
            <img src="/images/iot-sketch-2.png" alt="Sketch 2" className="project-image" />
            <img src="/images/iot-sketch-3.png" alt="Sketch 3" className="project-image" />
            <img src="/images/iot-sketch-4.png" alt="Sketch 4" className="project-image" />
            <img src="/images/iot-sketch-1.png" alt="Sketch 1" className="project-image" />
          </div>
        </div>
      </div>

      {/* Prototyping */}
      <div className="section">
        <h2>Prototyping</h2>
        <div className="section-content">
          <h3>Wireframes</h3>
          <p>
            We created low-fidelity wireframes for:
          </p>
          {/* Desktop grid view */}
          <div className="image-grid-4-columns wireframes-desktop-grid">
            <img src="/images/W_Start.png" alt="Start page wireframe" className="project-image" />
            <img src="/images/W_LogIn.png" alt="LogIn page wireframe" className="project-image" />
            <img src="/images/W_Homepage.png" alt="Homepage wireframe" className="project-image" />
            <img src="/images/W_LivingRoom.png" alt="Living room wireframes" className="project-image" />
            <img src="/images/W_Statistics.png" alt="Statistics wireframes" className="project-image" />
            <img src="/images/W_Menu.png" alt="Menu wireframes" className="project-image" />
            <img src="/images/W_Security.png" alt="Security wireframes" className="project-image" />
            <img src="/images/W_Camera.png" alt="Camera wireframes" className="project-image" />
            <img src="/images/W_Scenes.png" alt="Scenes wireframes" className="project-image" />
            <img src="/images/W_Smart Actions.png" alt="Smart Actions wireframes" className="project-image" />
            <img src="/images/W_Create Scene.png" alt="Create Scene wireframes" className="project-image" />
            <img src="/images/W_Profile.png" alt="Profile wireframes" className="project-image" />
          </div>
          
          {/* Mobile/Tablet carousel view */}
          <div className="image-carousel">
            <button className="carousel-arrow prev" onClick={() => navigateWireframe('prev')} aria-label="Previous wireframe image">❮</button>
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
            </div>
            <button className="carousel-arrow next" onClick={() => navigateWireframe('next')} aria-label="Next wireframe image">❯</button>
            <div className="carousel-dots" role="tablist">
              {wireframeImages.map((_, index) => (
                <button 
                  key={index} 
                  className={`dot ${index === wireframeCurrentIndex ? 'active' : ''}`} 
                  onClick={() => goToWireframeSlide(index)}
                  aria-label={`Go to wireframe slide ${index + 1}`}
                  aria-selected={index === wireframeCurrentIndex}
                  role="tab"
                />
              ))}
            </div>
            <div className="carousel-caption">
              Wireframe {wireframeCurrentIndex + 1} of {wireframeImages.length}
            </div>
          </div>


          <h3>High-Fidelity Prototypes (Figma)</h3>
          <p>
            We developed interactive prototypes with consistent UI patterns and accessibility-friendly colors.
          </p>
          {/* Desktop grid view */}
          <div className="image-grid-4-columns prototypes-desktop-grid">
            <img src="/images/P_Start.png" alt="Start page prototype" className="project-image" />
            <img src="/images/P_LogIn.png" alt="LogIn page prototype" className="project-image" />
            <img src="/images/P_Homepage.png" alt="Homepage prototype" className="project-image" />
            <img src="/images/P_LivingRoom.png" alt="Living room prototype" className="project-image" />
            <img src="/images/P_Statistics.png" alt="Statistics prototype" className="project-image" />
            <img src="/images/P_Menu.png" alt="Menu prototype" className="project-image" />
            <img src="/images/P_Security.png" alt="Security prototype" className="project-image" />
            <img src="/images/P_Camera.png" alt="Camera prototype" className="project-image" />
            <img src="/images/P_Scenes.png" alt="Scenes prototype" className="project-image" />
            <img src="/images/P_Smart Actions.png" alt="Smart Actions prototype" className="project-image" />
            <img src="/images/P_Create Scene.png" alt="Create Scene prototype" className="project-image" />
            <img src="/images/P_Profile.png" alt="Profile prototype" className="project-image" />
          </div>
          
          {/* Mobile/Tablet carousel view */}
          <div className="image-carousel">
            <button className="carousel-arrow prev" onClick={() => navigatePrototype('prev')} aria-label="Previous prototype image">❮</button>
            <div 
              className="carousel-container" 
              style={{ transform: `translateX(-${prototypeCurrentIndex * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => handleTouchEnd('prototype')}
              role="region"
              aria-label="Prototype images carousel"
            >
              {prototypeImages.map((img, index) => (
                <div className="carousel-slide" key={index}>
                  <img src={img} alt={`Prototype ${index + 1}`} className="project-image" />
                </div>
              ))}
            </div>
            <button className="carousel-arrow next" onClick={() => navigatePrototype('next')} aria-label="Next prototype image">❯</button>
            <div className="carousel-dots" role="tablist">
              {prototypeImages.map((_, index) => (
                <button 
                  key={index} 
                  className={`dot ${index === prototypeCurrentIndex ? 'active' : ''}`} 
                  onClick={() => goToPrototypeSlide(index)}
                  aria-label={`Go to prototype slide ${index + 1}`}
                  aria-selected={index === prototypeCurrentIndex}
                  role="tab"
                />
              ))}
            </div>
            <div className="carousel-caption">
              Prototype {prototypeCurrentIndex + 1} of {prototypeImages.length}
            </div>
          </div>
        </div>
      </div>

      {/* Usability Testing */}
      <div className="section">
        <h2>Usability Testing</h2>
        <div className="section-content">
          <p>
            We conducted comprehensive usability testing with 12 participants across different age groups to validate our design decisions and measure user satisfaction.
          </p>
          
          <div className="testing-metrics">
            <div className="metric-card">
              <div className="circular-progress" data-percentage="95">
                <svg className="progress-ring" width="120" height="120">
                  <circle className="progress-ring-circle-bg" cx="60" cy="60" r="50"></circle>
                  <circle className="progress-ring-circle" cx="60" cy="60" r="50"></circle>
                </svg>
                <div className="percentage-text">95%</div>
              </div>
              <h3>Task Completion Rate</h3>
              <p>Users successfully completed core irrigation setup tasks</p>
            </div>

            <div className="metric-card">
              <div className="circular-progress" data-percentage="88">
                <svg className="progress-ring" width="120" height="120">
                  <circle className="progress-ring-circle-bg" cx="60" cy="60" r="50"></circle>
                  <circle className="progress-ring-circle" cx="60" cy="60" r="50"></circle>
                </svg>
                <div className="percentage-text">88%</div>
              </div>
              <h3>User Satisfaction</h3>
              <p>Participants rated the app as intuitive and helpful</p>
            </div>

            <div className="metric-card">
              <div className="circular-progress" data-percentage="92">
                <svg className="progress-ring" width="120" height="120">
                  <circle className="progress-ring-circle-bg" cx="60" cy="60" r="50"></circle>
                  <circle className="progress-ring-circle" cx="60" cy="60" r="50"></circle>
                </svg>
                <div className="percentage-text">92%</div>
              </div>
              <h3>Feature Discovery</h3>
              <p>Users found key features without guidance</p>
            </div>
          </div>

          <div className="testing-insights">
            <h3>Key Insights</h3>
            <ul>
              <li>Users appreciated the weather-based scheduling automation</li>
              <li>The safety alerts system was highly valued by senior participants</li>
              <li>Dashboard customization improved user engagement significantly</li>
              <li>Mobile responsiveness enabled seamless usage across devices</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final Solution */}
      <div className="section">
        <h2>Final Solution</h2>
        <div className="section-content">
          <p>
            After gathering usability feedback from our prototype testing, I iterated on the design to improve alignment, sizing, and navigation clarity.
          </p>
          <ul>
            <li><strong>Improved Layout:</strong> Adjusted card sizes and margins to ensure consistent spacing across screens.</li>
            <li><strong>Optimized Visual Hierarchy:</strong> Changed the colours of icons to ensure the difference between active and inactive states was clear.</li>
            <li><strong>Alignment & Fit:</strong> Ensured UI elements fit well within different screen sizes and orientations</li>
          </ul>
          
          <h3>Changes</h3>
          <div className="before-after-section">
            <h4>Living Room Screen Improvements</h4>
            <div className="before-after-container">
              <div className="before-after-item">
                <span className="before-after-label">Before</span>
                <img src="/images/LivingRoomBefore.png" alt="Living Room Before" className="project-image" />
              </div>
              <div className="arrow-container">
                <div className="arrow">→</div>
              </div>
              <div className="before-after-item">
                <span className="before-after-label">After</span>
                <img src="/images/LivingRoomAfter.png" alt="Living Room After" className="project-image" />
              </div>
            </div>
          </div>

          <div className="before-after-section">
            <h4>Statistics Screen Improvements</h4>
            <div className="before-after-container">
              <div className="before-after-item">
                <span className="before-after-label">Before</span>
                <img src="/images/StatisticsBefore.png" alt="Statistics Before" className="project-image" />
              </div>
              <div className="arrow-container">
                <div className="arrow">→</div>
              </div>
              <div className="before-after-item">
                <span className="before-after-label">After</span>
                <img src="/images/StatisticsAfter.png" alt="Statistics After" className="project-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Process */}
      <div className="section">
        <h2>Design Process</h2>
        <div className="section-content">
          <p>
            Throughout the entire project design process, we ensured that we followed the principles of design thinking every step of the way. Our sketches, wireframes, and final prototypes were based on the information we gained from researching and defining the problem, making sure that our design was user-centered and user-friendly, and could genuinely solve the user's problem and meet the user's needs.
          </p>
        </div>
      </div>

      {/* UX Principles */}
      <div className="section">
        <h2>UX Principles</h2>       

        <div className="section-content">   
        <h3>Applying Laws of UX</h3>
          <ul>
            <li><strong>Fitts's Law:</strong> We applied Fitts's Law in our design by making interactive elements like the Login button, Going Out Mode button, and Create button larger and more prominent than other elements in their immediate area, making them easier for users to target and click.</li>
            <li><strong>Law of Proximity:</strong> We utilized proximity by grouping related elements together, such as the control areas of the door locks in the Security screen, which are positioned next to each other so users can easily understand that they belong to a group with related functional properties. The same principle applies to the Set Conditions area in the Create Scene screen.</li>
            <li><strong>Law of Similarity:</strong> Similarity is consistently applied throughout our designs. Almost all pages feature similar elements, such as the Scenes screen and Smart Actions screen, where we designed the main interface areas with rectangles and squares of uniform size and color to create visual consistency and help users understand functionality patterns.</li>
          </ul>
        </div>
      </div>

      {/* Reflection */}
      <div className="section">
        <h2>Reflection</h2>
        <div className="section-content">
          <p>
            This project taught me the importance of balancing simplicity with functionality. Many users were unfamiliar with IoT, so prioritizing clear navigation, guided setup, and data privacy was essential.
          </p>
          <p>
            By combining quantitative research (surveys) and qualitative insights (interviews), I defined the problem more accurately and designed a solution that was both practical and desirable.
          </p>
        </div>
      </div>

      <br/>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // Navigate back in history
        style={{
          backgroundColor: '#DB9291',
          color: 'white',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontFamily: 'Lato, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(219, 146, 145, 0.3)'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#c87f7e';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 20px rgba(219, 146, 145, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#DB9291';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 15px rgba(219, 146, 145, 0.3)';
        }}
        aria-label="Go back to previous page"
      >
        Back to Previous Page
      </button>
    </section>
    </PageTransition>
  );
}

export default IoTMobileApp;

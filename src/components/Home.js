import React, { useEffect, useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import PageTransition from './PageTransition';

function Home() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillsSection = skillsRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when skills section comes into view
            const skillCards = entry.target.querySelectorAll('.skill-card');
            skillCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fill');
              }, index * 200); // Stagger the animations
            });
          } else {
            // Remove animation class when skills section leaves view
            const skillCards = entry.target.querySelectorAll('.skill-card');
            skillCards.forEach((card) => {
              card.classList.remove('animate-fill');
            });
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-50px 0px'
      }
    );

    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  return (
    <PageTransition>
      <section id="home">
      <section id="landing">
      <div className="split-screen">
        {/* Left Side: Design-related */}
        <div className="left-side interactive-section">
          <div className="title">Designer</div>
          <div className="details">
            <h2>Design</h2>
            <p>
              Crafting aesthetically pleasing and user-friendly experiences.
            </p>
            <ul>
              <li>UI/UX Design</li>
              <li>Graphic Design</li>
              <li>Prototyping</li>
              <li>Wireframing</li>
            </ul>
            <Link to="/projects" className="view-works-btn design-btn" onClick={() => localStorage.setItem('selectedCategory', 'UX')}>
              View My Design Works
            </Link>
          </div>
        </div>

        {/* Right Side: Code-related */}
        <div className="right-side interactive-section">
          <div className="title">Developer</div>
          <div className="details">
            <h2>Development</h2>
            <p>
              Building functional and scalable solutions with clean, efficient code and modern technologies.
            </p>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
            <Link to="/projects" className="view-works-btn code-btn" onClick={() => localStorage.setItem('selectedCategory', 'Programming')}>
              View My Code Works
            </Link>
          </div>
        </div>
      </div>

      {/* Center Ampersand */}
      <div className="center-ampersand">
        <span className="ampersand">&</span>
      </div>
    </section>

    <section id="skills" ref={skillsRef}>
      <h2>My Skills & Services</h2>

      <div className="skills-grid">
        {/* UI/UX Design */}
        <div className="skill-card" data-percentage="90" style={{'--target-height': '90%'}}>
          <div className="skill-content">
            <div className="skill-icon">🖼️</div>
            <div className="skill-percentage">90%</div>
            <h3>UI/UX Design</h3>
            <div className="skill-details">
              <ul>
                <li>User Research</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Design Systems</li>
              </ul>
            </div>
          </div>
          <div className="skill-fill"></div>
        </div>

        {/* Frontend Development */}
        <div className="skill-card" data-percentage="85" style={{'--target-height': '85%'}}>
          <div className="skill-content">
            <div className="skill-icon">💻</div>
            <div className="skill-percentage">85%</div>
            <h3>Web Development</h3>
            <div className="skill-details">
              <ul>
                <li>HTML/CSS/JS</li>
                <li>React</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>
          <div className="skill-fill"></div>
        </div>

        {/* Graphic Design */}
        <div className="skill-card" data-percentage="80" style={{'--target-height': '80%'}}>
          <div className="skill-content">
            <div className="skill-icon">📐</div>
            <div className="skill-percentage">80%</div>
            <h3>Graphic Design</h3>
            <div className="skill-details">
              <ul>
                <li>Brand Identity</li>
                <li>Logo Design</li>
                <li>Print Design</li>
                <li>Typography</li>
              </ul>
            </div>
          </div>
          <div className="skill-fill"></div>
        </div>

        {/* Backend Development */}
        <div className="skill-card" data-percentage="75" style={{'--target-height': '75%'}}>
          <div className="skill-content">
            <div className="skill-icon">⚙️</div>
            <div className="skill-percentage">75%</div>
            <h3>Backend Development</h3>
            <div className="skill-details">
              <ul>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div className="skill-fill"></div>
        </div>

        {/* Mobile Development */}
        <div className="skill-card" data-percentage="70" style={{'--target-height': '70%'}}>
          <div className="skill-content">
            <div className="skill-icon">📱</div>
            <div className="skill-percentage">70%</div>
            <h3>Mobile Development</h3>
            <div className="skill-details">
              <ul>
                <li>Flutter</li>
                <li>Mobile UI/UX</li>
              </ul>
            </div>
          </div>
          <div className="skill-fill"></div>
        </div>

        {/* Digital Marketing */}
        <div className="skill-card" data-percentage="65" style={{'--target-height': '65%'}}>
          <div className="skill-content">
            <div className="skill-icon">📊</div>
            <div className="skill-percentage">65%</div>
            <h3>Digital Marketing</h3>
            <div className="skill-details">
              <ul>
                <li>Social Media</li>
                <li>Content Strategy</li>
                <li>Event Planning</li>
              </ul>
            </div>
          </div>
          <div className="skill-fill"></div>
        </div>
      </div>
    </section>

    <section id="experience">
      <h2>My Experiences</h2>

      <div className="experience-grid">
        {/* Experience 1 - UX Designer */}
        <div className="experience-card">
          <div className="experience-header">
            <div className="experience-role">
              <h3>UX Designer (Co-op)</h3>
              <span className="experience-duration">Jan 2025 - Aug 2025</span>
            </div>
            <div className="experience-company">Purolator</div>
          </div>
          <div className="experience-description">
            Designed user-friendly interfaces and improved the overall user experience for internal tools.
          </div>
        </div>

        {/* Experience 2 - Web Developer */}
        <div className="experience-card">
          <div className="experience-header">
            <div className="experience-role">
              <h3>Web Developer (Co-op)</h3>
              <span className="experience-duration">Jan 2024 - Aug 2024</span>
            </div>
            <div className="experience-company">Ontario Public Service</div>
          </div>
          <div className="experience-description">
            Developed responsive web applications and maintained government websites to ensure accessibility.
          </div>
        </div>
      </div>
    </section>

    <section id="projects-overview">
      <h2>Projects Overview</h2>

      <div className="projects-container">
        {/* Project 1 */}
        <Link to="/projects/1" className="project-link">
          <div className="project">
            <img src={process.env.PUBLIC_URL + "/images/iot-overview.jpg"} alt="Project 1 Thumbnail" className="project-thumbnail" />
            <div className="project-subtitle">UX Design</div>
            <h3>IoT Mobile App</h3>
            <p>A user-friendly app design to improve customer experience.</p>
            <div className="project-details-link">
              View Project Details →
            </div>
          </div>
        </Link>

        {/* Project 2 */}
        <Link to="/projects/2" className="project-link">
          <div className="project">
            <img src={process.env.PUBLIC_URL + "/images/project2-thumbnail.jpg"} alt="Project 2 Thumbnail" className="project-thumbnail" />
            <div className="project-subtitle">Web Development</div>
            <h3>Sales Management Website</h3>
            <p>A responsive and scalable sales management platform.</p>
            <div className="project-details-link">
              View Project Details →
            </div>
          </div>
        </Link>
      </div>

      {/* See More Projects Button */}
      <div className="see-more">
        <Link to="/projects">
          <button>See More Projects</button>
        </Link>
      </div>
    </section>

    </section>
    </PageTransition>
  );
}

export default Home;

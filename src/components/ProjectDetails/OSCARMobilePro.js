import React from 'react';
import './IoTMobileApp.css';
import PageTransition from '../PageTransition';

function OSCARMobilePro() {
  const oscarImage = (filePath) =>
    encodeURI(`${process.env.PUBLIC_URL}/images/oscar/${filePath}`);

  const heroImage = oscarImage('oscar-overview.jpg');

  const heroMeta = [
    { label: 'Role', value: 'Project Lead • UX/UI Designer • Frontend Developer' },
    { label: 'Company', value: 'Conestoga College Capstone Project' },
    { label: 'Team', value: '2 Active Contributors' },
    { label: 'Project Type', value: 'Healthcare Mobile Application' }
  ];

  const tech = ['React Native', 'Express.js', 'PostgreSQL', 'Node.js', 'REST APIs', 'GitHub', 'Figma'];

  const processSteps = [
    'Research',
    'Clinical Workflow Analysis',
    'Information Architecture',
    'Wireframes',
    'Interactive Prototypes',
    'Frontend Development',
    'Backend Integration',
    'User Acceptance Testing',
    'Iteration'
  ];

  const wireframes = [
    { title: 'Splash Page', src: oscarImage('Wireframes/Splash page.png') },
    { title: 'Sign In', src: oscarImage('Wireframes/Sign in.png') },
    { title: 'Homepage', src: oscarImage('Wireframes/Homepage.png') },
    { title: 'Patient List', src: oscarImage('Wireframes/Patient List.png') },
    { title: 'Patient Record Summary', src: oscarImage('Wireframes/Patient Record Summary.png') },
    { title: 'Patient Record Notes', src: oscarImage('Wireframes/Patient Record Notes.png') },
    { title: 'Schedule - Daily', src: oscarImage('Wireframes/Schedule - Daily.png') },
    { title: 'Inbox', src: oscarImage('Wireframes/Inbox.png') }
  ];

  const prototypes = [
    { title: 'Homepage', src: oscarImage('Prorotypes/Homepage.png') },
    { title: 'Patient List', src: oscarImage('Prorotypes/Patient List.png') },
    { title: 'Patient Record Summary', src: oscarImage('Prorotypes/Patient Record Summary.png') },
    { title: 'Clinical Note', src: oscarImage('Prorotypes/Clinical Note.png') },
    { title: 'Edit Appointment', src: oscarImage('Prorotypes/Edit Appointment.png') },
    { title: 'Toast Messages', src: oscarImage('Prorotypes/Toast Messages.png') },
    { title: 'Validation & Toast Sample', src: oscarImage('Prorotypes/Validation & Toast Sample.png') },
    { title: 'Sync Status', src: oscarImage('Prorotypes/Sync Status.png') }
  ];

  const diagrams = [
    { title: 'Use Case Diagram', src: oscarImage('Diagrams/Use Case Diagram.jpg') },
    { title: 'Navigation Diagram', src: oscarImage('Diagrams/Navigation Diagram.jpg') }
  ];

  return (
    <PageTransition>
      <section className="project-detail oscar-project">
        <header className="section project-hero">
          <br />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <h1>OSCAR Mobile Pro</h1>
            <span className="placeholder-kicker">Featured Capstone Project</span>
          </div>
          <h2 className="project-subtitle">Product Design • UX/UI • Frontend Development</h2>
          <p className="hero-description">
            Leading design and development of a modern EMR mobile application to improve clinical workflows for healthcare professionals.
          </p>

          <div className="hero-mockup-grid hero-mockup-single" aria-label="OSCAR Mobile Pro preview">
            <img src={heroImage} alt="OSCAR Mobile Pro preview thumbnail" className="project-image" />
          </div>

          <div className="hero-meta-grid">
            {heroMeta.map((item) => (
              <article key={item.label} className="hero-meta-card">
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </article>
            ))}
          </div>
        </header>

        <section className="section">
          <h2>Project Overview</h2>
          <div className="section-content">
            <p>
              This capstone project started from a real-world clinical need. A team member&apos;s co-op experience with OSCAR
              highlighted that the existing EMR offered only a legacy desktop app and lacked a modern mobile experience.
              The goal was to design and build a mobile-first EMR focused on clinician workflows rather than recreating the desktop UI.
            </p>
          </div>
        </section>

        <div className="divider"></div>

        <section className="project-info-grid">
          <div className="info-cards-container">
            <article className="info-card">
              <h3>My Role</h3>
              <p>
                Project Lead<br />UX Research<br />UI Design<br />Frontend Development<br />Developer Collaboration
              </p>
            </article>

            <article className="info-card">
              <h3>Tech Stack</h3>
              <p>{tech.join('\n')}</p>
            </article>

            <article className="info-card">
              <h3>Process</h3>
              <p>{processSteps.join(' • ')}</p>
            </article>
          </div>
        </section>

        <section className="section">
          <h2>Problem</h2>
          <div className="section-content">
            <p>
              Clinicians need mobile access to patient information while moving between rooms. The legacy desktop EMR
              was not optimized for quick search, SOAP note entry, appointment management, or a mobile-friendly layout.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Design Goals</h2>
          <div className="section-content">
            <ul>
              <li>Improve clinical workflow efficiency</li>
              <li>Reduce documentation friction</li>
              <li>Support fast patient lookup</li>
              <li>Design for mobile-first interactions</li>
              <li>Maintain data clarity</li>
              <li>Create intuitive navigation</li>
              <li>Support secure, reliable workflows</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>System Design</h2>
          <div className="section-content">
            <p>
              The application was designed as a scalable mobile product with a React Native frontend, Express.js backend,
              and PostgreSQL database. The structure kept the product maintainable while supporting clinician-focused workflows.
            </p>
            <p>
              Navigation was organized around a small set of core tasks: dashboard, patient search, records, appointments,
              notes, messages, and profile settings.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Diagrams</h2>
          <div className="section-content">
            <p>
              Core system and navigation diagrams were used to define how clinicians move through the app and how the major
              workflows connect across the product.
            </p>
            <div className="image-grid-2x2">
              {diagrams.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <img src={item.src} alt={item.title} className="project-image" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Wireframes</h2>
          <div className="section-content">
            <p>
              Low-fidelity wireframes mapped the main information flow before visual design work started.
            </p>
            <div className="image-grid-4-columns">
              {wireframes.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <img src={item.src} alt={`${item.title} wireframe`} className="project-image" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Prototypes</h2>
          <div className="section-content">
            <p>
              Interactive prototypes refined the core experience and covered validation, appointment changes, messaging,
              and sync feedback.
            </p>
            <div className="image-grid-4-columns">
              {prototypes.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <img src={item.src} alt={`${item.title} prototype`} className="project-image" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Collaboration</h2>
          <div className="section-content">
            <p>
              I worked closely with one other primary developer on feature planning, backend integration, code reviews,
              and sprint discussions. The role required balancing product direction with implementation feasibility.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Final Outcome</h2>
          <div className="section-content">
            <p>
              Delivered a production-quality mobile EMR with workflows optimized for clinicians, focusing on mobile-first
              interactions, data clarity, and developer-ready components.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Reflection</h2>
          <div className="section-content">
            <p>
              Leading this capstone project strengthened leadership, communication, and product thinking while reinforcing
              the importance of user needs, technical constraints, and teamwork.
            </p>
          </div>
        </section>

        <br />
        <button
          onClick={() => window.history.back()}
          style={{
            backgroundColor: '#2D9CAA',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontFamily: 'Lato, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            cursor: 'pointer'
          }}
          aria-label="Go back to previous page"
        >
          Back to Previous Page
        </button>
      </section>
    </PageTransition>
  );
}

export default OSCARMobilePro;

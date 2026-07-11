import React from 'react';
import './IoTMobileApp.css';
import PageTransition from '../PageTransition';

function OSCARMobilePro() {
  const oscarImage = (fileName) =>
    encodeURI(`${process.env.PUBLIC_URL}/images/oscar-mobile-pro/${fileName}`);

  const heroImages = [
    oscarImage('Hero-Dashboard.png'),
    oscarImage('Hero-PatientRecord.png'),
    oscarImage('Hero-Schedule.png')
  ];

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
    'High-Fidelity UI',
    'Frontend Development',
    'Backend Integration',
    'User Acceptance Testing',
    'Iteration'
  ];

  const keyFeatures = [
    'Patient Search',
    'Patient Record',
    'SOAP Notes',
    'Appointment Scheduling',
    'Secure Messaging',
    'Profile & Sync'
  ];

  return (
    <PageTransition>
      <section className="project-detail">
        <header className="section project-hero">
          <br />
          <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
            <h1>OSCAR Mobile Pro</h1>
            <span className="placeholder-kicker">Featured Capstone Project</span>
          </div>
          <h2 className="project-subtitle">Product Design • UX/UI • Frontend Development</h2>
          <p className="hero-description">Leading design and development of a modern EMR mobile application to improve clinical workflows for healthcare professionals.</p>

          <div className="hero-mockup-grid" aria-label="OSCAR Mobile Pro mockups">
            {heroImages.map((src, i) => (
              <div key={i} className="mockup-placeholder">
                <img src={src} alt={`Hero ${i + 1}`} className="project-image" />
              </div>
            ))}
          </div>

          <div className="hero-meta-grid">
            {heroMeta.map((m) => (
              <article key={m.label} className="hero-meta-card">
                <h3>{m.label}</h3>
                <p>{m.value}</p>
              </article>
            ))}
          </div>
        </header>

        <section className="section">
          <h2>Project Overview</h2>
          <div className="section-content">
            <p>
              This capstone project started from a real-world clinical need. A team member's co-op experience with OSCAR highlighted that the existing EMR offered only a legacy desktop app and lacked a modern mobile experience. Our goal was to design and build a mobile-first EMR focused on clinician workflows rather than recreating the desktop UI.
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
              Clinicians need mobile access to patient information while moving between rooms. The legacy desktop EMR wasn't optimized for mobile workflows like quick search, SOAP notes entry, and appointment management. The project focused on designing mobile-friendly workflows that retained the EMR's necessary functionality.
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
              Building a healthcare application required careful planning of both the user experience and technical architecture. The goal was to create a scalable, maintainable, mobile-first EMR while keeping the interface intuitive for healthcare professionals.
            </p>

            <article className="comparison-block">
              <h3>System Architecture</h3>
              <div className="supporting-page-placeholder">
                <span className="placeholder-kicker">TODO</span>
                <strong>System Architecture Diagram</strong>
              </div>
              <p>React Native Frontend 10 Express.js Backend 10 PostgreSQL Database. Separating frontend and backend enabled independent development while improving scalability and maintainability.</p>
            </article>

            <article className="comparison-block">
              <h3>Information Architecture</h3>
              <div className="supporting-page-placeholder">
                <span className="placeholder-kicker">TODO</span>
                <strong>Information Architecture Diagram</strong>
              </div>
              <p>The IA was organized around primary clinical workflows: Dashboard, Patients, Appointments, SOAP Notes, Messages, Profile. Navigation hierarchy was intentionally simplified to reduce cognitive load for clinicians.</p>
            </article>

            <article className="comparison-block">
              <h3>User Flow</h3>
              <div className="supporting-page-placeholder">
                <span className="placeholder-kicker">TODO</span>
                <strong>User Flow Diagram</strong>
              </div>
              <p>Login 10 Patient Search 10 Patient Record 10 SOAP Notes 10 Save 10 Schedule 10 Messages. Reducing navigation depth helped clinicians complete common tasks more efficiently.</p>
            </article>

            <article className="comparison-block">
              <h3>Development Planning</h3>
              <div className="supporting-page-placeholder">
                <span className="placeholder-kicker">TODO</span>
                <strong>Planning artifacts / Roadmap</strong>
              </div>
              <p>Planning artifacts included feature roadmap, sprint planning board, task breakdowns, and a GitHub project board to coordinate design and development throughout the capstone.</p>

              <p><strong>Development Workflow</strong></p>
              <p>Figma 10 GitHub Issues 10 Development 10 Pull Request Review 10 Testing 10 Deployment</p>
            </article>

          </div>
        </section>

        <section className="section">
          <h2>My Role (Highlights)</h2>
          <div className="section-content">
            <p>
              As Project Lead I managed planning, coordinated sprints, led UX research, designed information architecture and high-fidelity UI, implemented core frontend features in React Native, and reviewed pull requests. Much of the design and development work was completed by two active contributors.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Key Features</h2>
          <div className="section-content">
            {keyFeatures.map((f) => (
              <article className="comparison-block" key={f}>
                <h3>{f}</h3>
                <div className="comparison-grid">
                  <div className="comparison-panel">
                    <div className="supporting-page-placeholder">
                      <span className="placeholder-kicker">TODO</span>
                      <strong>{f} screenshot</strong>
                    </div>
                  </div>
                  <div className="comparison-panel">
                    <p>Key UX decisions and rationale for {f}.</p>
                    <ul className="comparison-bullets">
                      <li>Design decision 1</li>
                      <li>Design decision 2</li>
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Frontend Development</h2>
          <div className="section-content">
            <p>
              Implemented reusable components, navigation, and API integrations using React Native. Worked closely with backend contributors to integrate secure endpoints and offline sync.
            </p>
            <div className="supporting-page-placeholder">
              <span className="placeholder-kicker">TODO</span>
              <strong>Architecture / GitHub screenshots</strong>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>User Acceptance Testing</h2>
          <div className="section-content">
            <p>
              Testing covered task scenarios such as patient search, viewing records, creating SOAP notes, and scheduling. Results informed refinements to interaction patterns and validation flows.
            </p>
            <div className="supporting-page-placeholder">
              <span className="placeholder-kicker">TODO</span>
              <strong>Testing screenshots or charts</strong>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Design Decisions</h2>
          <div className="section-content">
            <article className="comparison-block">
              <h3>Patient Search optimization</h3>
              <div className="comparison-grid">
                <div className="comparison-panel">
                  <div className="supporting-page-placeholder"><span className="placeholder-kicker">TODO</span><strong>Before</strong></div>
                </div>
                <div className="comparison-panel">
                  <div className="supporting-page-placeholder"><span className="placeholder-kicker">TODO</span><strong>After</strong></div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section">
          <h2>Collaboration</h2>
          <div className="section-content">
            <p>
              Paired closely with one other primary developer on feature planning, backend integration, code reviews, and sprint discussions. Leadership involved balancing product direction with implementation feasibility.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Final Outcome</h2>
          <div className="section-content">
            <p>
              Delivered a production-quality mobile EMR with workflows optimized for clinicians — focusing on mobile-first interactions, data clarity, and developer-ready components.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Reflection</h2>
          <div className="section-content">
            <p>
              Leading this capstone project strengthened leadership, communication, and product thinking. It reinforced balancing user needs, technical constraints, and teamwork to deliver meaningful products.
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

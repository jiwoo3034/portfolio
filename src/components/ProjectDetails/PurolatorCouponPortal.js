import React from 'react';
import './IoTMobileApp.css';
import PageTransition from '../PageTransition';

function PurolatorCouponPortal() {
  const purolatorCouponImage = (fileName) =>
    encodeURI(`${process.env.PUBLIC_URL}/images/purolator-coupon-portal/${fileName}`);

  const heroImages = [
    purolatorCouponImage('DektopTablet Coupon page.png'),
    purolatorCouponImage('Mobile Coupon page.png'),
    purolatorCouponImage('purolator-coupon-portal-overview.jpg')
  ];

  const heroMeta = [
    { label: 'Role', value: 'UI / UX Designer' },
    { label: 'Company', value: 'Purolator Digital Lab' },
    { label: 'Platform', value: 'Responsive Internal Web Portal' },
    { label: 'Project Type', value: 'Enterprise Internal Tool' }
  ];

  const designGoals = [
    'Create a simple user experience',
    'Minimize the number of interactions',
    'Support desktop and mobile devices',
    'Provide clear loading feedback',
    'Handle loading failures gracefully'
  ];

  const processSteps = [
    'Requirements Gathering',
    'User Flow',
    'Wireframes',
    'High-Fidelity Design',
    'Responsive Optimization',
    'Developer Collaboration'
  ];

  const keyScreens = [
    { title: 'Login Screen', src: purolatorCouponImage('DektopTablet Login.png') },
    { title: 'Coupon Dashboard', src: purolatorCouponImage('DektopTablet Coupon page.png') },
    { title: 'Responsive Desktop View', src: purolatorCouponImage('DektopTablet Coupon page.png') },
    { title: 'Responsive Mobile View', src: purolatorCouponImage('Mobile Coupon page.png') }
  ];

  const progressiveStages = [
    { title: 'Login Feedback', desc: 'Button transforms into an animated progress indicator immediately after login.', src: purolatorCouponImage('DektopTablet Login Redirect.png') },
    { title: 'Skeleton Loading', desc: 'Skeleton placeholders with subtle shimmer reduce perceived wait time.', src: purolatorCouponImage('DektopTablet Loading Skeleton (for 3 seconds).png') },
    { title: 'Extended Loading', desc: 'Circular progress with percentage for longer waits.', src: purolatorCouponImage('DektopTablet Loading Coupon (taking more than 3 seconds).png') },
    { title: 'Coupon Ready', desc: 'Coupon appears with clear actions to copy, email, or use online.', src: purolatorCouponImage('DektopTablet Coupon page.png') }
  ];

  const features = [
    { title: 'Copy Coupon', desc: 'Quickly copy the coupon code to clipboard.' },
    { title: 'Online Shipping', desc: 'Shortcut to Purolator Online Shipping.' },
    { title: 'Email Coupon', desc: 'Send coupon to employee email for later use.' }
  ];

  return (
    <PageTransition>
      <section className="project-detail">
        <header className="section" style={{ background: 'transparent' }}>
          <br />
          <h1>🎟️ Purolator Employee Coupon Portal</h1>
          <h2 className="project-subtitle">UI / UX Design</h2>

          <div className="hero-mockup-grid">
            <img src={heroImages[2]} alt="Coupon mockup" className="project-image" />
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
              Designed a lightweight internal portal that enables employees to quickly access shipping discount coupons. Focused on speed, clarity, and responsiveness.
            </p>
          </div>
        </section>

        <div className="divider"></div>

        <section className="project-info-grid">
          <div className="info-cards-container">
            <article className="info-card">
              <h3>My Role</h3>
              <p>UI / UX Design<br/>Responsive Design<br/>Wireframing<br/>High-Fidelity UI</p>
            </article>

            <article className="info-card">
              <h3>Tools</h3>
              <p>Figma<br/>Adobe Creative Suite<br/>Jira<br/>Microsoft Teams</p>
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
              Employees needed a fast and intuitive way to retrieve shipping coupons. The portal minimizes steps and surface clear feedback.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Design Goals</h2>
          <div className="section-content">
            <ul>
              {designGoals.map((g) => <li key={g}>{g}</li>)}
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>User Flow</h2>
          <div className="section-content">
            <p>Login → Loading → Coupon Loaded → Copy → Use / Email</p>
          </div>
        </section>

        <section className="section">
          <h2>Key Screens</h2>
          <div className="section-content">
            <div className="image-grid-2x2">
              {keyScreens.map((s) => (
                <div key={s.title} className="mockup-placeholder">
                  <strong>{s.title}</strong>
                  {s.src ? (
                    <div className="supporting-page-placeholder">
                      <img src={s.src} alt={`${s.title} screenshot`} className="project-image" />
                    </div>
                  ) : (
                    <div className="supporting-page-placeholder">
                      <span className="placeholder-kicker">TODO</span>
                      <strong>{s.title} screenshot</strong>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Progressive Loading Experience</h2>
          <div className="section-content">
            <div className="projects-grid">
              {progressiveStages.map((s) => (
                <div key={s.title} className="info-card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  {s.src ? (
                    <div className="supporting-page-placeholder">
                      <img src={s.src} alt={`${s.title} screenshot`} className="project-image" />
                    </div>
                  ) : (
                    <div className="supporting-page-placeholder">
                      <span className="placeholder-kicker">TODO</span>
                      <strong>{s.title} screenshot</strong>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Coupon Experience</h2>
          <div className="section-content">
            <div className="supporting-pages-grid">
              {features.map((f) => (
                <div key={f.title} className="supporting-page-card">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Error Handling</h2>
          <div className="section-content">
            <p>Clear error states with a prominent reload action to retry coupon retrieval.</p>
            <div className="image-placeholder">
              <img src={purolatorCouponImage('DektopTablet Coupon page Error.png')} alt="Error screen desktop" className="project-image" />
              <img src={purolatorCouponImage('Mobile Coupon page Error.png')} alt="Error screen mobile" className="project-image" />
            </div>
          </div>
        </section>

        <section className="section">
          <h2>UX Decisions</h2>
          <div className="section-content">
            <div className="projects-grid">
              <div className="info-card"><h3>Minimal Navigation</h3><p>Single primary task focus.</p></div>
              <div className="info-card"><h3>Progressive Feedback</h3><p>Appropriate loading states.</p></div>
              <div className="info-card"><h3>Responsive First</h3><p>Designed for all devices.</p></div>
              <div className="info-card"><h3>Quick Actions</h3><p>Copy, Email, Use.</p></div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Final Outcome</h2>
          <div className="section-content">
            <p>Simple, responsive portal with clear feedback and easy coupon access.</p>
          </div>
        </section>

        <section className="section">
          <h2>Reflection</h2>
          <div className="section-content">
            <p>Small internal tools benefit from focused UX: fewer steps, clearer feedback, and simple recovery paths.</p>
          </div>
        </section>

        <br />
        <button
          onClick={() => window.history.back()}
          style={{
            backgroundColor: '#D71920',
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

export default PurolatorCouponPortal;

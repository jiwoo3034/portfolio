import React from 'react';
import './IoTMobileApp.css';
import PageTransition from '../PageTransition';

function PurolatorCouponPortal() {
  const purolatorCouponImage = (fileName) =>
      encodeURI(`${process.env.PUBLIC_URL}/images/purolator-coupon-portal/${fileName}`);

  const heroMeta = [
    { label: 'Role', value: 'UI / UX Designer' },
    { label: 'Company', value: 'Purolator Digital Lab' },
    { label: 'Platform', value: 'Responsive Internal Web Portal' },
    { label: 'Project Type', value: 'Enterprise Internal Tool' }
  ];

  const processSteps = [
    'Requirements Gathering',
    'User Flow',
    'Wireframes',
    'High-Fidelity Design',
    'Responsive Optimization',
    'Developer Collaboration'
  ];

  const uxGoals = [
    { title: 'Minimize interactions', desc: 'Get users to their coupon in the fewest possible steps.' },
    { title: 'Reduce perceived wait time', desc: 'Communicate system state at every point — especially during loading.' },
    { title: 'Provide continuous feedback', desc: 'No silent states. Every stage of the process should be visible to the user.' },
    { title: 'Design for all devices', desc: 'Work across desktop, tablet, and mobile without a separate mobile experience.' },
    { title: 'Make recovery obvious', desc: 'When something fails, the path to retry should be the dominant element on screen.' }
  ];

  const loadingStages = [
    {
      step: '01',
      title: 'Button Feedback',
      desc: 'The login button transforms into an animated progress indicator the moment the user submits. The system is already working — the user sees it immediately.',
      why: 'Eliminates the dead moment between tap and response. Users know their input registered.',
      src: purolatorCouponImage('DektopTablet Login Redirect.png')
    },
    {
      step: '02',
      title: 'Skeleton Screen',
      desc: 'A skeleton placeholder with a subtle shimmer replaces the content area. The page structure appears — but no coupon yet.',
      why: 'Skeleton loading reduces perceived wait time by giving users a preview of what\'s coming. The page doesn\'t feel empty — it feels almost ready.',
      src: purolatorCouponImage('DektopTablet Loading Skeleton (for 3 seconds).png')
    },
    {
      step: '03',
      title: 'Progress Indicator',
      desc: 'If generation takes longer than 3 seconds, a circular progress indicator with a percentage appears. Users can see real movement.',
      why: 'At this stage, "almost ready" isn\'t enough. Users need confirmation the system is still running — a percentage gives them a sense of how much longer.',
      src: purolatorCouponImage('DektopTablet Loading Coupon (taking more than 3 seconds).png')
    },
    {
      step: '04',
      title: 'Coupon Ready',
      desc: 'The coupon appears with three clear actions surfaced immediately: Copy to clipboard, Email to my account, Use for online shipping.',
      why: 'Actions are presented at the moment of arrival — no secondary menu, no hunting.',
      src: purolatorCouponImage('DektopTablet Coupon page.png')
    }
  ];

  const uxDecisions = [
    { title: 'Minimal Navigation', desc: 'The portal has one job. There\'s no navigation header competing for attention — just the flow: login, wait, coupon. Fewer decisions means faster completion.' },
    { title: 'Progressive Feedback', desc: 'Three distinct loading states matched to three distinct user expectations. Each stage is tuned to the timeframe it represents.' },
    { title: 'Responsive First', desc: 'Designed in a single responsive layout rather than a separate mobile view. One codebase, one experience, every device.' },
    { title: 'Actionable Errors', desc: 'Errors don\'t just explain what went wrong — they put the retry action front and center. Recovery is one tap, not a navigation decision.' }
  ];

  const features = [
    { title: 'Copy Coupon', desc: 'Copy the coupon code to clipboard instantly — the most common action, made the most prominent.' },
    { title: 'Email Coupon', desc: 'Send the coupon to the employee\'s account email for later use on a different device.' },
    { title: 'Use Online', desc: 'Direct shortcut to Purolator Online Shipping — coupon can be applied in one step.' }
  ];

  return (
      <PageTransition>
        <section className="project-detail purolator-project">
          <header className="section project-hero">
            <br />
            <h1>🎟️ Purolator Employee Coupon Portal</h1>
            <h2 className="project-subtitle">UI / UX Design · Internal Web Tool</h2>
            <p className="hero-description">
              A lightweight internal portal for Purolator employees to retrieve shipping discount coupons — designed around one insight: the hardest part of a simple tool is what happens while it's loading.
            </p>
            <div style={{ background: 'transparent' }}>
              <img src={purolatorCouponImage('purolator-coupon-portal-overview.jpg')} alt="Coupon portal overview" className="project-image" />
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
            <h2>Overview</h2>
            <div className="section-content">
              <p>
                Designed a responsive internal web portal that lets Purolator employees retrieve shipping discount coupons in as few steps as possible. The scope was narrow. The UX challenge wasn't the coupon — it was everything between login and coupon appearing.
              </p>
            </div>
          </section>

          <div className="divider"></div>

          <section className="project-info-grid">
            <div className="info-cards-container">
              <article className="info-card">
                <h3>My Role</h3>
                <p>UI / UX Design<br />Responsive Design<br />Wireframing<br />High-Fidelity UI</p>
              </article>
              <article className="info-card">
                <h3>Tools</h3>
                <p>Figma<br />Adobe Creative Suite<br />Jira<br />Microsoft Teams</p>
              </article>
              <article className="info-card">
                <h3>Process</h3>
                <p>{processSteps.join(' → ')}</p>
              </article>
            </div>
          </section>

          <div className="divider"></div>

          <div className="section">
            <h2>The Problem</h2>
            <div className="section-content">
              <p>
                Employees needed to log in, wait for a coupon to be generated, and then act on it — copy it, email it, or use it immediately. The original experience had no meaningful feedback during the wait. If the coupon was slow to load, there was no indication it was coming. If it failed, there was no clear path to retry.
              </p>
              <p>
                For an internal tool used regularly, that absence of feedback eroded trust in the product itself.
              </p>
            </div>
          </div>

          <div className="section">
            <h2>UX Goals</h2>
            <div className="section-content">
              <ul>
                {uxGoals.map((g) => (
                    <li key={g.title}>
                      <strong>{g.title}. </strong>{g.desc}
                    </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="section">
            <h2>User Journey</h2>
            <div className="section-content">
              <p>Login → Authentication redirect → Skeleton load (&lt; 3s) → Progress load (&gt; 3s) → Coupon displayed → Copy / Email / Use online</p>
            </div>
          </div>

          <div className="section">
            <h2>The UX Challenge</h2>
            <div className="section-content">
              <p>
                The core challenge of this project had nothing to do with the coupon itself.
              </p>
              <p>
                Coupon generation took a variable amount of time — sometimes seconds, sometimes longer. Users had no way to know if the system was working or broken. The instinct is to add a spinner and move on. But a spinner alone doesn't tell you how long to wait, and it doesn't tell you something has gone wrong until you've already waited too long.
              </p>
              <p>
                The real design problem: <strong>how do you make waiting feel productive, not abandoned?</strong>
              </p>
            </div>
          </div>

          <div className="section">
            <h2>Progressive Loading</h2>
            <div className="section-content">
              <p>
                The solution was a staged loading system — each stage matched to a different user mental model of "this is taking a while."
              </p>
              {loadingStages.map((stage) => (
                  <article className="comparison-block" key={stage.title}>
                    <h3>{stage.step} — {stage.title}</h3>
                    <p>{stage.desc}</p>
                    <p><strong>Why: </strong>{stage.why}</p>
                    {stage.src && (
                        <div className="image-placeholder" style={{ marginTop: '1rem' }}>
                          <img src={stage.src} alt={stage.title} className="comparison-image" />
                        </div>
                    )}
                  </article>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Error Recovery</h2>
            <div className="section-content">
              <p>
                When coupon retrieval fails, the error state does two things: it tells the user what happened in plain language, and it gives them one clear action — retry. There's no ambiguity about what to do next. The reload button is the dominant element on the error screen.
              </p>
              <p style={{ fontStyle: 'italic', color: '#555' }}>
                Error copy: "We couldn't load your coupon. Check your connection and try again."
              </p>
              <div className="image-placeholder">
                <img src={purolatorCouponImage('DektopTablet Coupon page Error.png')} alt="Error screen desktop" className="comparison-image" />
                <img src={purolatorCouponImage('Mobile Coupon page Error.png')} alt="Error screen mobile" className="comparison-image" />
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Responsive Experience</h2>
            <div className="section-content">
              <p>
                The portal was designed for all contexts — employees might access it from a work laptop, a shared tablet in a warehouse, or a personal phone. The layout adapts without sacrificing functionality. The coupon card, action buttons, and loading states are all equally usable at any viewport size.
              </p>
              <div className="image-placeholder">
                <img src={purolatorCouponImage('DektopTablet Coupon page.png')} alt="Desktop view" className="comparison-image" />
                <img src={purolatorCouponImage('Mobile Coupon page.png')} alt="Mobile view" className="comparison-image" />
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Key UX Decisions</h2>
            <div className="section-content">
              <ul>
                {uxDecisions.map((d) => (
                    <li key={d.title}>
                      <strong>{d.title}. </strong>{d.desc}
                    </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="section">
            <h2>Coupon Actions</h2>
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
          </div>

          <div className="section">
            <h2>Final Screens</h2>
            <div className="section-content">
              <div className="image-grid-2x2">
                <img src={purolatorCouponImage('DektopTablet Login.png')} alt="Login screen" className="project-image" />
                <img src={purolatorCouponImage('DektopTablet Coupon page.png')} alt="Coupon loaded" className="project-image" />
                <img src={purolatorCouponImage('DektopTablet Loading Skeleton (for 3 seconds).png')} alt="Skeleton loading" className="project-image" />
                <img src={purolatorCouponImage('Mobile Coupon page.png')} alt="Mobile view" className="project-image" />
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Final Outcome</h2>
            <div className="section-content">
              <p>
                Employees can log in and retrieve a coupon in under a minute, with clear feedback at every step and a reliable path to retry if something goes wrong. The portal is fast, focused, and works on any device.
              </p>
            </div>
          </div>

          <div className="section">
            <h2>Reflection</h2>
            <div className="section-content">
              <p>
                Internal tools are easy to under-design — they're not customer-facing, they're not in the roadmap, and no one is watching closely. But employees interact with internal tools constantly, and bad feedback loops compound over time.
              </p>
              <p>
                This project reinforced something worth carrying: <strong>even simple workflows deserve careful UX.</strong> The difference between a spinner and a staged loading system is small in implementation terms and significant in user trust.
              </p>
            </div>
          </div>

          <br />
          <button
              onClick={() => window.history.back()}
              style={{
                backgroundColor: '#D71920', color: 'white', border: 'none',
                padding: '1rem 2rem', borderRadius: '8px', fontSize: '1.1rem',
                fontFamily: 'Lato, sans-serif', textTransform: 'uppercase',
                letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(215, 25, 32, 0.3)'
              }}
              onMouseEnter={(e) => { e.target.style.backgroundColor = '#b81218'; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.target.style.backgroundColor = '#D71920'; e.target.style.transform = 'translateY(0)'; }}
              aria-label="Go back to previous page"
          >
            Back to Previous Page
          </button>
        </section>
      </PageTransition>
  );
}

export default PurolatorCouponPortal;
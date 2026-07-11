import React from 'react';
import './IoTMobileApp.css';
import PageTransition from '../PageTransition';

function PurolatorMobileApp() {
  const purolatorImage = (fileName) =>
    encodeURI(`${process.env.PUBLIC_URL}/images/purolator-mobile-app/${fileName}`);

  const heroImage = purolatorImage('purolator-mobile-redesign-overview.jpg');

  const heroMeta = [
    { label: 'Role', value: 'UX Designer' },
    { label: 'Timeline', value: '8 Months' },
    { label: 'Company', value: 'Purolator Digital Lab' },
    { label: 'Team', value: 'UX Team + Developers' },
    { label: 'Project Type', value: 'Enterprise Mobile Application' }
  ];

  const responsibilities = [
    'Reviewed existing redesigned screens and legacy pages',
    'Created updated interfaces aligned with the design system',
    'Collaborated with developers, my manager, and senior UX designers',
    'Ran design reviews and iterated based on feedback'
  ];

  const processSteps = [
    'Design Audit',
    'UI Analysis',
    'Design System Alignment',
    'Wireframing',
    'High-Fidelity Design',
    'Design Reviews',
    'Developer Collaboration',
    'Iteration'
  ];

  const designGoals = [
    'Create a modern user interface',
    'Maintain consistency with the updated design system',
    'Improve usability',
    'Strengthen Purolator branding',
    'Simplify navigation',
    'Create a more intuitive user flow'
  ];

  const keyImprovements = [
    {
      title: 'Homepage Experience',
      description:
        "The homepage was redesigned to provide a cleaner, more personalized experience while keeping the updated content structure consistent with Purolator's evolving design system.",
      bullets: [
        'Redesigned homepage using customizable content blocks',
        'Users can reorder Favorite shortcuts',
        'Reduced the oversized Recent Announcement section into a compact notification banner',
        'Updated Locator section to match the redesigned Location experience',
        'Updated Tracking Pad styling',
        'Redesigned Quick Pickup cards',
        'Removed the outdated Drop Off shortcut',
        'Updated Favorite Location icons and visual language'
      ],
        before: purolatorImage('Before-Homepage.png'),
      after: purolatorImage('After-Home-Page.png'),
      beforeLabel: 'Before homepage screenshot',
      afterLabel: 'After homepage screenshot'
    },
    {
      title: 'Tracking Improvements',
      description: 'Enhanced the tracking experience with new features and improved usability.',
      bullets: [
        'Introduced a custom filtering system',
        'Updated Tracking Pins',
        'Added nickname support for tracking pins',
        'Improved shipment organization',
        'Redesigned Tracking Pin Details page',
      ],
      before: purolatorImage('Before-Tracking.png'),
      after: purolatorImage('After-Nickname.png'),
      beforeLabel: 'Before tracking pins screenshot',
      afterLabel: 'After tracking pins screenshot'
    },
    {
      title: 'Transit History',
      description:
        'Shipment history was completely redesigned to make progress easier to understand at a glance.',
      bullets: [
        'Improved visual hierarchy',
        'Easier shipment progress tracking',
        'Better readability',
        'Timeline redesign',
        'Clearer shipment status'
      ],
      before: purolatorImage('Before-Tracking-Pin-Deatils.png'),
      after: purolatorImage('After-Tacking-Pin-Deatils.png'),
      beforeLabel: 'Before transit history screenshot',
      afterLabel: 'After transit history screenshot'
    }
  ];

  const supportingPages = [
    { title: 'Favorite Locations', description: 'Organized location shortcuts for faster access.', src: purolatorImage('After-Favourite-Locations.png') },
    { title: "What's New", description: 'Release highlights and app updates in one place.', src: purolatorImage("After-What's-new.png") },
    { title: 'App Update', description: 'Update prompt and version messaging.', src: purolatorImage('After-App-Update.png') },
    { title: 'Terms & Conditions', description: 'Legal content presented in the same mobile system.', src: purolatorImage('After-Term& Conditions.png') },
    { title: 'Side Menu', description: 'Navigation shell and supporting destinations.', src: purolatorImage('After-Side-Menu.png') },
    { title: 'Contact Page', description: 'Support entry point and contact details.', src: purolatorImage('After-Contacts.png') }
  ];

  const iterationPlaceholders = [
    { label: 'Iteration 1', src: purolatorImage('After-Home-Page.png') },
    { label: 'Iteration 2', src: purolatorImage('After-Filters-Selected.png') },
    { label: 'Iteration 3', src: purolatorImage('After-Tacking-Pin-Nickname.png') }
  ];

  // Flexible image placeholders usable for single or multiple images
  const proofOfDeliveryImages = [
    purolatorImage('After-Tacking-Pin-Deatils.png'),
    purolatorImage('After-Tacking-Pin-Nickname.png')
  ];

  return (
    <PageTransition>
      <section className="project-detail purolator-project">
        <header className="section project-hero">
          <br />
          <h1>📦 Purolator Mobile App Redesign</h1>
          <h2 className="project-subtitle">UX Design</h2>
          <p className="hero-description">
            Modernizing an enterprise mobile experience by redesigning legacy screens while maintaining consistency with Purolator's evolving design system.
          </p>

          <div style={{ background: 'transparent' }}>
            <img src={heroImage} alt="Purolator Mobile App Redesign overview" className="project-image" />
          </div>

          <div className="hero-meta-grid">
            {heroMeta.map((item) => (
              <article className="hero-meta-card" key={item.label}>
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
              During my co-op at Purolator Digital Lab, I was responsible for redesigning multiple legacy screens within the company's mobile application.
            </p>
            <p>
              Several key pages had already been modernized by another designer, while many remaining screens still used outdated UI patterns.
            </p>
            <p>
              My responsibility was to redesign those remaining screens so they aligned seamlessly with the updated product while improving usability, consistency, and the overall user experience.
            </p>
            <p>
              This work was completed in close collaboration with developers, my manager, and senior UX designers through frequent design reviews and implementation discussions.
            </p>
          </div>
        </section>

        <div className="divider"></div>

        <section className="project-info-grid">
          <div className="info-cards-container">
            <article className="info-card">
              <h3>Timeframe</h3>
              <p>8 Months</p>
            </article>

            <article className="info-card">
              <h3>My Role &amp; Responsibilities</h3>
              <p>UX Designer<br />UI Designer<br />Design System Extension<br />Developer Collaboration</p>
              <p>In this role, I:</p>
              <ul className="responsibilities-list">
                {responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="info-card">
              <h3>Tools</h3>
              <p>Figma<br />Adobe Creative Suite<br />Miro<br />Jira<br />Microsoft Teams</p>
            </article>
          </div>
        </section>

        <div className="divider"></div>

        <div className="section">
          <h2>Process</h2>
          <div className="section-content">
            <ol className="process-list">
              {processSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="section">
          <h2>Context</h2>
          <div className="section-content">
            <h3>The Challenge</h3>
            <p>
              The mobile application contained a mixture of recently redesigned screens and older legacy interfaces.
            </p>
            <p>
              This created inconsistencies in branding, visual hierarchy, navigation patterns, and overall user experience.
            </p>
            <p>
              The goal was not to redesign the entire application from scratch, but to modernize the remaining legacy screens while ensuring they felt like a natural extension of the existing product.
            </p>
          </div>
        </div>

        <div className="section">
          <h2>Design Goals</h2>
          <div className="section-content">
            <ul>
              {designGoals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section">
          <h2>Design Process</h2>
          <div className="section-content">
            <p>
              The workflow began by reviewing existing redesigned screens and auditing legacy pages to identify inconsistencies.
            </p>
            <p>
              From there, I designed updated interfaces, discussed direction with the UX team, collaborated with developers, and refined the screens through feedback.
            </p>
            <ol className="process-list">
              <li>Reviewed existing redesigned screens</li>
              <li>Audited legacy pages</li>
              <li>Identified inconsistencies</li>
              <li>Designed updated interfaces</li>
              <li>Conducted design reviews with UX team</li>
              <li>Collaborated with developers</li>
              <li>Refined designs through feedback</li>
            </ol>
          </div>
        </div>

        <div className="section">
          <h2>Key Design Improvements</h2>
          <div className="section-content">
            <p>
              The redesign focused on modernizing legacy interfaces while maintaining consistency with Purolator's updated design system.
            </p>

            {keyImprovements.map((section) => (
              <article className="comparison-block" key={section.title}>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <ul className="comparison-bullets">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="comparison-grid">
                  <div className="comparison-panel">
                  <strong>Before</strong>
                  <img src={section.before} alt={section.beforeLabel} className="comparison-image" />
                </div>
                <div className="comparison-panel">
                  <strong>After</strong>
                  <img src={section.after} alt={section.afterLabel} className="comparison-image" />
                </div>
              </div>
              {section.supportingShots ? (
                <div className="supporting-shots-grid">
                  {section.supportingShots.map((shot) => (
                    <div className="supporting-shot" key={shot.label}>
                      <img src={shot.src} alt={shot.label} className="comparison-image" />
                      <span>{shot.label}</span>
                    </div>
                  ))}
                </div>
              ) : null}
              </article>
            ))}

            <article className="comparison-block feature-highlight">
              <h3>Proof of Delivery</h3>
              <p>
                Added a Proof of Delivery feature to improve shipment transparency and provide users with quick access to delivery confirmation.
              </p>
              <div className="image-placeholder">
                {proofOfDeliveryImages && proofOfDeliveryImages.length ? (
                  proofOfDeliveryImages.map((src, idx) => (
                    <img key={idx} src={src} alt={`Proof of Delivery ${idx + 1}`} className="comparison-image" />
                  ))
                ) : (
                  <div className="supporting-page-placeholder">
                    <span className="placeholder-kicker">TODO</span>
                    <strong>Proof of Delivery screenshot</strong>
                  </div>
                )}
              </div>
            </article>

            <article className="comparison-block feature-highlight">
              <h3>Extending an Existing Design System</h3>
              <p>
                Instead of creating a new visual language, I focused on extending Purolator's evolving design system. By studying previously redesigned screens, I ensured that every new interface followed the same design principles, resulting in a consistent and unified product experience.
              </p>
              <div className="image-placeholder">
                <img src={purolatorImage('After-Find-Location-Search-Active.png')} alt="Find location search screenshot" className="comparison-image" />
                <img src={purolatorImage('After-Location-Details-Page.png')} alt="Location details page screenshot" className="comparison-image" />
              </div>
            </article>

            <article className="comparison-block">
              <h3>Supporting Pages</h3>
              <p>
              Additional support screens were refreshed so the full product felt cohesive and consistent across the experience.
              </p>
              <div className="supporting-pages-grid">
              {supportingPages.map((page) => (
                <div className="supporting-page-card" key={page.title}>
                  <h4>{page.title}</h4>
                  <p>{page.description}</p>
                  {page.src ? (
                    <div className="supporting-page-placeholder">
                      <img src={page.src} alt={page.title} className="comparison-image" />
                    </div>
                  ) : (
                    <div className="supporting-page-placeholder">
                      <span className="placeholder-kicker">TODO</span>
                      <strong>Side Menu screenshot</strong>
                    </div>
                  )}
                </div>
              ))}
              </div>
            </article>

            <article className="comparison-block">
              <h3>Design Consistency</h3>
              <p>
                One of the biggest challenges was extending an existing design system instead of creating a completely new one.
              </p>
              <p>
                Every updated screen was carefully aligned with typography, spacing, iconography, colors, interaction patterns, component styles, and visual hierarchy so new and existing screens felt like one cohesive product.
              </p>
            </article>
          </div>
        </div>

        <div className="section">
          <h2>Working Within an Existing Design System</h2>
          <div className="section-content">
            <p>
              This project was not about creating a brand-new interface from scratch. The main challenge was understanding the updated product, the existing design language, and the work that had already been completed so the new screens would feel cohesive.
            </p>
            <p>
              I focused on consistency through typography, spacing, components, visual hierarchy, interaction patterns, and brand colors. Every update needed to feel like part of the same evolving system rather than a separate design direction.
            </p>
            <p>
              That approach made the work more about design system thinking and adaptation than novelty, which was essential for a large enterprise product.
            </p>
          </div>
        </div>

        <div className="section">
          <h2>Collaboration</h2>
          <div className="section-content">
            <p>
              I worked closely with developers, my project manager, and senior UX designers throughout the project.
            </p>
            <p>
              Frequent meetings and design discussions helped us balance user experience, technical feasibility, and business requirements while keeping the redesigned screens aligned with the broader product direction.
            </p>
          </div>
        </div>

        <div className="section">
          <h2>Design Iterations</h2>
          <div className="section-content">
            <p>
              The iteration screens show how the designs evolved through feedback rounds and implementation constraints.
            </p>
            <div className="iteration-grid">
              {iterationPlaceholders.map((label) => (
                <div className="iteration-placeholder" key={label.label}>
                  <img src={label.src} alt={label.label} className="comparison-image" />
                  <strong>{label.label}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Final Outcome</h2>
          <div className="section-content">
            <p>
              The redesigned screens improved visual consistency across the mobile experience and created a more modern, intuitive interface.
            </p>
            <p>
              The work also strengthened Purolator branding and produced a more cohesive product experience that can scale more cleanly as future updates are introduced.
            </p>
            <p>
              Most importantly, the project established repeatable design patterns that support future enterprise product iterations.
            </p>
          </div>
        </div>

        <div className="section">
          <h2>Reflection</h2>
          <div className="section-content">
            <p>
              Working on a real enterprise product taught me that strong design is often about consistency rather than novelty.
            </p>
            <p>
              This project strengthened my understanding of working within an existing design system, communicating design decisions clearly, and balancing business goals with user needs through cross-functional collaboration.
            </p>
            <p>
              It also reinforced how important it is to design thoughtfully for continuity so a product can evolve without losing coherence.
            </p>
          </div>
        </div>

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
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(215, 25, 32, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#b81218';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(215, 25, 32, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#D71920';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(215, 25, 32, 0.3)';
          }}
          aria-label="Go back to previous page"
        >
          Back to Previous Page
        </button>
      </section>
    </PageTransition>
  );
}

export default PurolatorMobileApp;

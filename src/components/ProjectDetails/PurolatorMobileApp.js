import React from 'react';
import './IoTMobileApp.css';
import PageTransition from '../PageTransition';

function PurolatorMobileApp() {
  const purolatorImage = (fileName) =>
      encodeURI(`${process.env.PUBLIC_URL}/images/purolator-mobile-app/${fileName}`);

  const heroImage = purolatorImage('purolator-mobile-redesign-overview.jpg');

  const heroMeta = [
  ];

  const responsibilities = [
    'Audited legacy screens and mapped gaps against the updated design system',
    'Created updated interfaces aligned with previously redesigned screens',
    'Collaborated with developers, manager, and senior UX designers',
    'Ran design reviews and iterated based on feedback and implementation constraints',
    'Documented new component additions to the evolving design system'
  ];

  const processSteps = [
    'Audit',
    'Design System Analysis',
    'Digital Draft',
    'Hi-fidelity Prototypes',
    'Team Review',
    'Iteration'
  ];

  const constraints = [
    { title: 'Work within the existing system', desc: 'No new visual language. Every screen had to feel like it already belonged.' },
    { title: 'Reuse existing components', desc: 'New components only when legacy UI had no modern equivalent — and only with documentation.' },
    { title: "Align with screens I didn't design", desc: 'The design language was already set. My job was to read it accurately and extend it faithfully.' },
    { title: 'Respect implementation constraints', desc: 'Developer check-ins happened before high-fidelity, not after. Feasibility shaped every decision.' },
    { title: "Don't disrupt what already works", desc: 'Resist the instinct to improve things that were already working. Coherence over novelty.' }
  ];

  const auditFindings = [
    {
      screen: 'Homepage',
      image: purolatorImage('Before/Before-Homepage.png'),
      problems: [
        'Oversized announcement banner consumed primary real estate',
        'Quick shortcuts were buried below the fold',
        'Visual weight was unfocused — nothing clear to act on first'
      ]
    },
    {
      screen: 'Tracking',
      image: purolatorImage('Before/Before-Tracking.png'),
      problems: [
        'Pins had no differentiation — all shipments looked identical',
        'No way to organize or label active shipments',
        'Details page was dense with low-priority information'
      ]
    },
    {
      screen: 'Transit History',
      image: purolatorImage('Before/Before-Tracking-Pin-Deatils.png'),
      problems: [
        'Progress timeline was hard to scan',
        'Status labels were ambiguous',
        'Hierarchy was flat — no clear indication of current state'
      ]
    }
  ];

  const keyImprovements = [
    {
      title: 'Homepage Experience',
      description:
          'The homepage was the first screen users saw — and the most visually inconsistent. The redesign reduced noise, elevated the shortcuts users actually relied on, and restructured content using the same modular block system applied to newly redesigned screens. The announcement banner was compressed into a notification badge: always visible, never dominant.',
      bullets: [
        'Redesigned homepage using customizable content blocks',
        'Users can reorder Favorite shortcuts',
        'Reduced oversized Recent Announcement to a compact notification banner',
        'Updated Locator section to match redesigned Location experience',
        'Updated Tracking Pad styling and Quick Pickup cards',
        'Updated Favorite Location icons and visual language'
      ],
      before: purolatorImage('Before/Before-Homepage.png'),
      after: purolatorImage('After/After-Home-Page.png'),
      beforeLabel: 'Before homepage',
      afterLabel: 'After homepage'
    },
    {
      title: 'Tracking',
      description:
          'The original view treated every pin identically. The redesign introduced filtering and nickname support, giving users a way to organize shipments without adding complexity to the default view. The details page was restructured around what users need first: status, estimated delivery, and next step.',
      bullets: [
        'Introduced a custom filtering system for shipment organization',
        'Added nickname support for tracking pins',
        'Updated Tracking Pin visual design',
        'Redesigned Tracking Pin Details page — status and ETA lead'
      ],
      before: purolatorImage('Before/Before-Tracking.png'),
      after: purolatorImage('After/After-Nickname.png'),
      beforeLabel: 'Before tracking',
      afterLabel: 'After tracking'
    },
    {
      title: 'Transit History',
      description:
          'Timeline readability was the core problem. The redesign replaced the flat list with a clear visual timeline — each event anchored to a status label, the current state always highlighted. Users can now scan progress in seconds instead of reading top to bottom.',
      bullets: [
        'Replaced flat list with a clear visual timeline',
        'Each event anchored to an unambiguous status label',
        'Current shipment state always highlighted',
        'Improved visual hierarchy and readability throughout'
      ],
      before: purolatorImage('Before/Before-Tracking-Pin-Deatils.png'),
      after: purolatorImage('After/After-Tacking-Pin-Deatils.png'),
      beforeLabel: 'Before transit history',
      afterLabel: 'After transit history'
    }
  ];

  const supportingPages = [
    { title: 'Favorite Locations', description: 'Organized location shortcuts for faster access.', src: purolatorImage('After/After-Favourite-Locations.png') },
    { title: "What's New", description: 'Release highlights and app updates in one place.', src: purolatorImage("After/After-What's-new.png") },
    { title: 'App Update', description: 'Update prompt and version messaging.', src: purolatorImage('After/After-App-Update.png') },
    { title: 'Terms & Conditions', description: 'Legal content presented in the same mobile system.', src: purolatorImage('After/After-Term& Conditions.png') },
    { title: 'Side Menu', description: 'Navigation shell and supporting destinations.', src: purolatorImage('After/After-Side-Menu.png') },
    { title: 'Contact Page', description: 'Support entry point and contact details.', src: purolatorImage('After/After-Contacts.png') }
  ];

  const iterationPlaceholders = [
    { label: 'Iteration 1', note: 'Initial concept focused on spacing and hierarchy', images: [{ src: purolatorImage('Design Iterations/Inital Draft.png'), desc: 'Iteration 1 — Initial Draft' }] },
    { label: 'Design Review', note: 'Team + PM + Manager feedbacks', images: [{ src: purolatorImage('Design Iterations/Design Review.png'), desc: 'Design Review — annotated screens' }] },
    { label: 'Design Exploration', note: 'Multiple Design Directions', images: [
      { src: purolatorImage('Design Iterations/Option 1.png'), desc: 'Design Exploration — Option 1' },
      { src: purolatorImage('Design Iterations/Option 2.png'), desc: 'Design Exploration — Option 2' },
      { src: purolatorImage('Design Iterations/Option 3.png'), desc: 'Design Exploration — Option 3' }
    ] },
    { label: 'UX Review', note: 'Refinement, accessibility and scanability', images: [{ src: purolatorImage('Design Iterations/UX Review.png'), desc: 'UX Review — accessibility refinements' }] },
    { label: 'Final', note: 'Implementation-ready screens and documented components', images: [{ src: purolatorImage('Design Iterations/Final.png'), desc: 'Final — implementation-ready screens' }] }
  ];

  const proofOfDeliveryImages = [
    purolatorImage('proofOfDeliveryImages/PoD locked.png'),
    purolatorImage('proofOfDeliveryImages/PoD authentication.png'),
    purolatorImage('proofOfDeliveryImages/PoD authenticated.png')
  ];

  return (
      <PageTransition>
        <section className="project-detail purolator-project">
          <header className="section project-hero">
            <br />
            <h1>📦 Purolator Mobile App Redesign</h1>
            <h2 className="project-subtitle">UX Design · Enterprise Mobile</h2>
            <p className="hero-description">
              Modernizing a fragmented enterprise mobile experience — redesigning legacy screens within Purolator's evolving design system without disrupting what already worked.
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
            <h2>Overview</h2>
            <div className="section-content">
              <p>
                During an 8-month UX design co-op at Purolator Digital Lab, I was embedded in the team responsible for the company's consumer-facing mobile application. My role wasn't to redesign the product from scratch — it was harder than that.
              </p>
              <p>
                Several screens had already been modernized by another designer. My job was to close the gap: audit what remained, understand the updated design language, and bring every legacy screen into alignment with the product that already existed.
              </p>
              <p>
                That constraint shaped everything. Success meant new screens that felt indistinguishable from the ones already there — not novel, but coherent.
              </p>
            </div>
          </section>

          <div className="divider"></div>

          <section className="project-info-grid">
            <div className="info-cards-container">
              <article className="info-card">
                <h3>Timeframe</h3>
                <p>4 Months</p>
              </article>
              <article className="info-card">
                <h3>My Role &amp; Responsibilities</h3>
                <p>UX Designer · UI Designer<br />Design System Extension<br />Developer Collaboration</p>
              </article>
              <article className="info-card">
                <h3>Tools</h3>
                <p>Figma<br />Adobe Creative Suite<br />Azure<br />Microsoft Teams</p>
              </article>
            </div>
          </section>

          <div className="divider"></div>

          <div className="section">
            <h2>Business Context</h2>
            <div className="section-content">
              <p>
                Purolator's mobile app had evolved unevenly. A previous design initiative had modernized core flows, but dozens of supporting screens still carried legacy patterns — mismatched typography, outdated components, inconsistent spacing, and navigation that didn't reflect the new product direction.
              </p>
              <p>
                For users, this showed up as a jarring experience: the app felt like two products stapled together. The business goal wasn't a redesign. It was a consolidation — close the visual and interaction debt without disrupting the experience or creating new inconsistency.
              </p>
            </div>
          </div>

          <div className="section">
            <h2>Constraints</h2>
            <div className="section-content">
              <p>
                This project required designing <em>within</em> a system, not around it. Every decision had to answer the same question: does this feel like it already belongs here?
              </p>
              <ul>
                {constraints.map((c) => (
                    <li key={c.title}>
                      <strong>{c.title}. </strong>{c.desc}
                    </li>
                ))}
              </ul>
            </div>
          </div>

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
            <h2>Product Audit</h2>
            <div className="section-content">
              <p>
                Before touching a single screen, I mapped the gap. I reviewed every existing redesigned screen to extract the implicit design language, then walked through remaining legacy pages to identify where they broke from it.
              </p>
              {auditFindings.map((f) => (
                  <article className="comparison-block audit-row" key={f.screen}>
                    <div className="audit-issues">
                      <h3>{f.screen}</h3>
                      <ul className="comparison-bullets">
                        {f.problems.map((p) => <li key={p}>{p}</li>)}
                      </ul>
                    </div>
                  </article>
              ))}
            </div>
          </div>

          <div className="section">
            <h2>Design Strategy</h2>
            <div className="section-content">
              <p>Rather than redesigning from a blank slate, I focused on three principles:</p>
              <ul>
                <li><strong>Extend, don't invent.</strong> I used existing components wherever possible and created new ones only when the legacy UI genuinely had no modern equivalent.</li>
                <li><strong>Hierarchy over novelty.</strong> Most legacy screens weren't wrong — they were visually flat. Small changes in type weight, spacing, and grouping made the biggest difference.</li>
                <li><strong>Collaborate early.</strong> Developer check-ins happened before high-fidelity. Knowing constraints upfront shaped better solutions than post-hoc negotiation.</li>
              </ul>
            </div>
          </div>

          <div className="section">
            <h2>Key Improvements</h2>
            <div className="section-content">
              {keyImprovements.map((section) => (
                  <article className="comparison-block" key={section.title}>
                    <h3>{section.title}</h3>
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
                    <p><strong>Why:</strong> {section.description}</p>
                    <p><strong>Impact:</strong> Improved scanability and reduced task time across the affected flows.</p>
                    <ul className="comparison-bullets">
                      {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
              ))}

              <article className="comparison-block feature-highlight">
                <h3>Proof of Delivery</h3>
                <p>
                  Added as a net-new feature within the existing design system. Delivery confirmation — signature, timestamp, and photo — is surfaced directly from the tracking details page, reducing the need for users to contact support.
                </p>
                <div className="image-placeholder pod-image-row">
                  {proofOfDeliveryImages.map((src, idx) => (
                      <img key={idx} src={src} alt={`Proof of Delivery ${idx + 1}`} className="comparison-image" />
                  ))}
                </div>
              </article>

              <article className="comparison-block feature-highlight">
                <h3>Extending the Design System</h3>
                <p>
                  The most disciplined part of this project was restraint. Every updated screen had to answer: does this component already exist? Is this spacing token already in use? Does this interaction match what the user just experienced two screens ago?
                </p>
                <p>
                  I catalogued design tokens across redesigned screens — type scale, spacing grid, elevation, icon set, button variants, card styles — and applied them consistently. When a legacy screen needed something genuinely new, I documented it as a system addition rather than a one-off exception.
                </p>
                <div className="image-placeholder">
                  <img src={purolatorImage('After/After-Find-Location-Search-Active.png')} alt="Find location search" className="comparison-image" />
                  <img src={purolatorImage('After/After-Location-Details-Page.png')} alt="Location details page" className="comparison-image" />
                </div>
              </article>

              <article className="comparison-block">
               <h3>Supporting Pages</h3>
               <p>
                 Key supporting screens (thumbnails) — click to expand.
               </p>
               <div className="supporting-thumbs-grid">
                 {supportingPages.map((page) => (
                     <div className="supporting-thumb-card" key={page.title}>
                       <img src={page.src} alt={page.title} className="supporting-thumb" />
                       <h4>{page.title}</h4>
                     </div>
                 ))}
               </div>
              </article>
            </div>
          </div>

          <div className="section">
            <h2>Collaboration</h2>
            <div className="section-content">
              <p>
                Weekly design reviews with senior UX designers and the product manager kept every decision grounded in both user needs and implementation reality. Developer check-ins happened before high-fidelity — which meant fewer revision cycles and no late-stage surprises.
              </p>
              <p>
                Most design changes were shaped by feedback from those sessions, not just my own judgment. Cross-functional alignment was built into the process, not treated as a final approval step.
              </p>
            </div>
          </div>

          <div className="section">
            <h2>Design Iterations</h2>
            <div className="section-content">
              <p>
                The designs didn't land right the first time. Interim checks changed the homepage layout in the second pass. A design review caught an inconsistency in the tracking pin system before it reached production. The final screens are the result of that loop — not the first draft.
              </p>
              <div className="iteration-grid">
                {iterationPlaceholders.map((item, idx) => (
                  <React.Fragment key={item.label}>
                    <div className={`iteration-card ${item.label === 'Design Exploration' ? 'design-exploration' : ''}`}>
                      <div className="iteration-thumbs">
                        {item.images.map((img, i) => (
                          img && img.src ? (
                            <img key={i} src={img.src} alt={`${item.label} ${i + 1}`} className="iteration-thumb" />
                          ) : (
                            <div key={i} className="update-note">Update Expected: {img && img.desc}</div>
                          )
                        ))}
                      </div>
                      <strong>{item.label}</strong>
                      <p className="iteration-note">{item.note}</p>
                    </div>
                    {idx < iterationPlaceholders.length - 1 && <div className="iteration-arrow">→</div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Final Outcome</h2>
            <div className="section-content">
              <p>
                The redesigned screens closed the visual gap across the application. Users now move through a consistent interface from end to end. Updated components were documented and handed to the team as part of the evolving design system — reusable for future iterations without starting from scratch.
              </p>
            </div>
          </div>

          <div className="section">
            <h2>Reflection</h2>
            <div className="section-content">
              <h3>Key Takeaways</h3>
              <ul>
                <li>Designing within an existing design system requires consistency over creativity.</li>
                <li>Cross-functional collaboration leads to implementation-ready designs.</li>
                <li>Great enterprise UX is often invisible — consistency makes the experience feel natural.</li>
              </ul>
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

export default PurolatorMobileApp;
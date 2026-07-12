import React, { useState } from 'react';
import './IoTMobileApp.css';
import PageTransition from '../PageTransition';

function OSCARMobilePro() {
  const oscarImage = (filePath) =>
    encodeURI(`${process.env.PUBLIC_URL}/images/oscar/${filePath}`);

  const heroImage = oscarImage('oscar-overview.jpg');
  const [activeIteration, setActiveIteration] = useState(0);
  const overviewStats = [
    { label: 'Scope', value: '11 Core Clinical Workflows' },
    { label: 'Outcome', value: '98% Task Completion Rate' },
    { label: 'Role', value: 'Product + UX + Front-end' }
  ];

  // SECTION 0: Hero metrics - displayed in Project Overview section instead

  // SECTION 1: Problem statement with friction pillars
  const frictionPillars = [
    {
      title: 'Documentation Friction',
      description: 'SOAP notes written hours after consultations from memory, losing clinical context and detail.'
    },
    {
      title: 'Access Friction',
      description: 'Patient records unavailable between examination rooms, forcing clinicians back to desks.'
    },
    {
      title: 'Scheduling Friction',
      description: 'Appointment updates required desktop workstation access, breaking mobile-first workflows.'
    }
  ];

  // Updated Design Principles aligned with Canada UX standards
  const designPrinciples = [
    {
      title: 'Prioritize Essential Workflows',
      description: 'Rather than exposing every feature available in the desktop EMR, we focused on the tasks clinicians perform most frequently. Every screen was evaluated based on whether it supported real clinical workflows and reduced the time needed to access critical information.'
    },
    {
      title: 'Reduce Cognitive Load',
      description: 'Healthcare professionals often work under significant time pressure. We intentionally simplified layouts, minimized unnecessary interactions, and progressively disclosed secondary information so users could focus on patient care instead of navigating the interface.'
    },
    {
      title: 'Design Specifically for Mobile',
      description: 'Instead of adapting desktop layouts to fit a smaller screen, we designed interactions specifically for mobile use. Navigation, information hierarchy, and touch targets were optimized for quick, one-handed interactions during clinical workflows.'
    },
    {
      title: 'Build a Scalable Foundation',
      description: 'Reusable UI components, consistent interaction patterns, and a structured design system were established early to support future expansion while maintaining consistency across the application.'
    }
  ];

  // Key Takeaways for each section
  const researchKeyTakeaways = [
    '13 Use Cases Analyzed',
    '11 Features Prioritized',
    '4 Core Design Principles',
    'Offline-First Strategy'
  ];

  const designKeyTakeaways = [
    'Wireframes → High-Fidelity',
    '5 Design Iterations',
    'UAT-Driven Refinement',
    '98% Task Success Rate'
  ];

  const developmentKeyTakeaways = [
    'React Native',
    'TypeScript',
    'Offline-First Sync',
    'Component-Based Architecture'
  ];

  const processSteps = [
    { label: 'Research', detail: 'Workflow analysis' },
    { label: 'Information Architecture', detail: 'Core navigation' },
    { label: 'Wireframing', detail: 'Low-fidelity layout' },
    { label: 'High Fidelity', detail: 'Visual system + prototypes' },
    { label: 'Development', detail: 'React Native build' },
    { label: 'Testing', detail: 'UAT + refinement' }
  ];

  const tradeoffs = [
    {
      title: 'Feature Completeness vs. Usability',
      description: 'Rather than replicating every desktop feature, we intentionally limited the mobile experience to the workflows clinicians rely on most frequently. A focused product provides greater value than an interface filled with rarely used functionality.'
    },
    {
      title: 'Visual Polish vs. Development Scope',
      description: 'While richer animations and micro-interactions could have enhanced the overall experience, we prioritized completing core clinical workflows before refining secondary interactions. This allowed us to deliver a stable and functional product within the project\'s timeline.'
    },
    {
      title: 'Real-Time Synchronization vs. Reliability',
      description: 'Instead of requiring a constant internet connection, we adopted an offline-first approach that prioritizes local data entry and synchronizes information when connectivity becomes available. Although this introduced additional implementation complexity, it significantly improved reliability in real-world clinical environments.'
    }
  ];

  // SECTION 5: Design Process - specific decisions
  const designDecisions = [
    {
      title: 'The Allergy Banner',
      rationale: 'Placed full-width, amber, above tab navigation. A clinician who opens the wrong patient record and prescribes the wrong medication is a patient safety event. The banner cannot be missed.',
      designDetail: 'Full-width, amber background, contrasting text, positioned above all navigation layers.'
    },
    {
      title: 'Four-Tab Bottom Navigation',
      rationale: 'Touch targets optimized for one-handed use. Clinicians hold devices while examining patients. Bottom tabs are thumb-accessible.',
      designDetail: 'Tab targets: 48px minimum. Positioned for thumb reach. Icons + labels for clarity.'
    },
    {
      title: 'SOAP Note as Sequential Form',
      rationale: 'Structured sections (S/O/A/P) enable future billing queries and clinical analytics. This was a design decision with a technical downstream benefit.',
      designDetail: 'Four labeled, mandatory sections. Each section clearly marked. Assessment includes category dropdown for structured data.'
    }
  ];


  const techHighlights = [
    { label: 'Mobile app', value: 'React Native' },
    { label: 'Local storage', value: 'Encrypted SQLite' },
    { label: 'Server layer', value: 'Node / Express' },
    { label: 'Testing', value: 'Vitest, 16 suites' }
  ];

  const technicalFlow = [
    'User action',
    'Local SQLite save',
    'Sync queue',
    'Server / PostgreSQL',
    'EMR state update'
  ];

  const reflectionCards = [
    {
      title: 'What changed',
      body: 'I stopped treating design and development as separate phases. The best decisions were the ones that worked for both the clinician and the codebase.'
    },
    {
      title: 'What I learned',
      body: 'Simplifying the product mattered more than adding features. The strongest design move was removing things clinicians did not need on mobile.'
    },
    {
      title: 'What I would do next',
      body: 'Bring practicing clinicians into research earlier, then design the conflict-resolution flow with real-world sync cases in mind.'
    },
    {
      title: 'Constraints I would revisit',
      body: 'The project timeline and limited end-user access shaped several choices. I would treat those as design inputs earlier in the process, not just delivery constraints.'
    }
  ];

  const uatFindings = [
    {
      issue: 'Cancel modal button labeled "Cancel" caused users to dismiss instead of confirm',
      resolution: 'Renamed to "Go Back" to distinguish dismiss action from confirmation'
    },
    {
      issue: 'Search bar placeholder "Search patient" caused scan delay',
      resolution: 'Updated to "Search patients by name or ID" for clarity'
    },
    {
      issue: 'Appointment status labels were harder to scan under time pressure',
      resolution: 'Added color-coded pills to surface status at a glance'
    },
    {
      issue: 'Save feedback initially required extra attention to understand',
      resolution: 'Replaced blocking alerts with transient toast messages'
    }
  ];

  // SECTION 9: Reflection (displayed inline)

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

  const decisionVisuals = [
    {
      title: 'Patient Safety First',
      decisionIndex: 0,
      image: prototypes[2].src,
      annotation: 'Highlight the allergy banner at the top of the patient record.',
      bullets: ['Always visible', 'Supports patient safety', 'Reduces medication errors']
    },
    {
      title: 'Bottom Navigation',
      decisionIndex: 1,
      image: prototypes[0].src,
      annotation: 'Highlight the bottom tab bar for one-handed reach.',
      bullets: ['Four primary workflows', '48px touch targets', 'Thumb-accessible']
    },
    {
      title: 'Structured SOAP Notes',
      decisionIndex: 2,
      image: prototypes[3].src,
      annotation: 'Highlight the Subjective / Objective / Assessment / Plan layout.',
      bullets: ['Reduces cognitive load', 'Typed clinical data', 'Future billing-ready']
    }
  ];

  const iterationEvidence = [
    {
      label: 'Search',
      before: wireframes[2].src,
      after: prototypes[0].src,
      beforeLabel: 'Search tab',
      afterLabel: 'Persistent bar on Home',
      reason: 'Search is an entry point, not a destination.'
    },
    {
      label: 'Status',
      before: wireframes[6].src,
      after: prototypes[4].src,
      beforeLabel: 'Text-only status',
      afterLabel: 'Color-coded badge',
      reason: 'Color scans faster under time pressure.'
    },
    {
      label: 'Cancel',
      before: prototypes[4].src,
      after: prototypes[6].src,
      beforeLabel: 'Blocking cancel modal',
      afterLabel: 'Transient confirmation feedback',
      reason: 'One word was doing two jobs in the same interaction.'
    },
    {
      label: 'SOAP',
      before: wireframes[5].src,
      after: prototypes[3].src,
      beforeLabel: 'Single text box',
      afterLabel: 'Structured form',
      reason: 'Explicit sections reduce cognitive load.'
    },
    {
      label: 'Feedback',
      before: prototypes[6].src,
      after: prototypes[5].src,
      beforeLabel: 'Blocking modal',
      afterLabel: 'Transient toast',
      reason: 'Clinicians should not stop documenting just to dismiss a dialog.'
    }
  ];

  const diagrams = [
    { title: 'Use Case Diagram', src: oscarImage('Diagrams/Use Case Diagram.jpg') },
    { title: 'Navigation Diagram', src: oscarImage('Diagrams/Navigation Diagram.jpg') }
  ];

  return (
    <PageTransition>
      <section className="project-detail oscar-project">
        <header className="section" style={{ background: 'transparent' }}>
          <br />
          <h1>OSCAR Mobile Pro</h1>
          <h2 className="project-subtitle">Product Design • UX Research • Front-end Development • Healthcare EMR</h2>
          <img src={heroImage} alt="OSCAR Mobile Pro preview" className="project-image" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {overviewStats.map((stat) => (
              <div key={stat.label} style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '10px', padding: '1rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2D9CAA', marginBottom: '0.35rem' }}>{stat.label}</div>
                <div style={{ fontSize: '0.95rem', color: '#0f1f35', fontWeight: '600', lineHeight: '1.4' }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </header>

        <section className="section">
          <h2>Project Overview</h2>
          <div className="section-content">
            <p>
              OSCAR Mobile Pro extended a desktop EMR into a mobile-first experience for clinicians working between rooms,
              with offline-first sync and workflows designed for point-of-care use.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '10px', padding: '1rem' }}>
                <strong>Problem</strong>
                <p style={{ margin: '0.5rem 0 0', color: '#555' }}>Desktop-only EMR left clinicians without access between patient rooms.</p>
              </div>
              <div style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '10px', padding: '1rem' }}>
                <strong>Solution</strong>
                <p style={{ margin: '0.5rem 0 0', color: '#555' }}>A focused mobile app for search, records, notes, scheduling, and messages.</p>
              </div>
              <div style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '10px', padding: '1rem' }}>
                <strong>Impact</strong>
                <p style={{ margin: '0.5rem 0 0', color: '#555' }}>98% task success rate across 11 use cases in UAT.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="section">
          <h2>Process Overview</h2>
          <div className="section-content">
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', gap: '0.65rem' }}>
              {processSteps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div style={{ flex: '1 1 160px', minWidth: '150px', background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '12px', padding: '1rem' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#2D9CAA', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.82rem', fontWeight: '700', marginBottom: '0.8rem' }}>
                      {idx + 1}
                    </div>
                    <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#1F4E79' }}>{step.label}</div>
                    <div style={{ fontSize: '0.76rem', color: '#777', marginTop: '0.25rem', lineHeight: '1.5' }}>{step.detail}</div>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div style={{ flex: '0 0 24px', alignSelf: 'center', textAlign: 'center', color: '#2D9CAA', fontSize: '1.1rem', fontWeight: '700' }}>→</div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p style={{ marginTop: '1rem' }}>
              The project moved from research to implementation, not research to prototype. I stayed involved across design and frontend work.
            </p>
          </div>
        </section>

        <div className="divider"></div>

        <section className="section">
          <h2>The Problem</h2>
          <div className="section-content">
            <div className="friction-pillars">
              {frictionPillars.map((pillar) => (
                <div key={pillar.title} className="friction-pillar-card">
                  <h4>{pillar.title}</h4>
                  <p>{pillar.description}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.25rem', padding: '1rem 1.15rem', background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '10px' }}>
              <strong style={{ color: '#1F4E79' }}>Opportunity</strong>
              <p style={{ margin: '0.5rem 0 0', color: '#555', lineHeight: '1.65' }}>
                Rather than recreating the desktop EMR, we identified an opportunity to redesign only the workflows clinicians rely on during patient care.
              </p>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="section">
          <h2>My Contribution</h2>
          <div className="section-content">
            <div style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderLeft: '4px solid #2D9CAA', borderRadius: '12px', padding: '1.25rem', marginBottom: '1.25rem' }}>
              <p style={{ margin: '0 0 1rem', color: '#444', lineHeight: '1.75' }}>
                I led product direction through research, IA, design, and implementation. That meant prioritizing scope,
                facilitating sprint decisions, and keeping the UI aligned with what was technically feasible.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem' }}>
                {[
                  'Product Direction',
                  'UX Research',
                  'Information Architecture',
                  'UI Design',
                  'Front-end Development',
                  'Sprint Planning',
                  'User Testing'
                ].map((item) => (
                  <div key={item} style={{ background: 'white', border: '1px solid #e8edf2', borderRadius: '999px', padding: '0.7rem 0.9rem', textAlign: 'center', fontSize: '0.82rem', fontWeight: '600', color: '#1F4E79' }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', margin: '0 0 1.5rem' }}>
              {[
                ['Timeline', '16 weeks'],
                ['Team', '4 members'],
                ['Role', 'Project Lead']
              ].map(([label, value]) => (
                <div key={label} style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '10px', padding: '1rem' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2D9CAA', marginBottom: '0.3rem' }}>{label}</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: '600', color: '#0f1f35' }}>{value}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
              {[
                ['Project Lead', 'Kept scope, sprint planning, and feature priority moving'],
                ['UX/UI Designer', 'Mapped workflows and designed the mobile experience'],
                ['Frontend Developer', 'Implemented core screens and reusable UI patterns']
              ].map(([title, text]) => (
                <div key={title} style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '10px', padding: '1rem' }}>
                  <h4 style={{ margin: '0 0 0.4rem', color: '#1F4E79' }}>{title}</h4>
                  <p style={{ margin: 0, color: '#555', fontSize: '0.9rem', lineHeight: '1.6' }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="section">
          <h2>Research & Discovery</h2>
          <div className="section-content">
            <p>
              We didn’t jump into screens first. We started by understanding clinician workflows, OSCAR documentation,
              and how mobile use changes the task.
            </p>

            <div style={{ margin: '1.5rem 0', padding: '1.25rem', background: '#f8fafb', borderRadius: '10px', border: '1px solid #e8edf2', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem' }}>
              {researchKeyTakeaways.map((takeaway) => (
                <div key={takeaway} style={{ background: 'white', border: '1px solid #e8edf2', borderRadius: '999px', padding: '0.7rem 0.9rem', textAlign: 'center', fontSize: '0.84rem', fontWeight: '600' }}>
                  {takeaway}
                </div>
              ))}
            </div>

            <h3>Key Insights</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {[
                ['Clinicians use a small subset of features on mobile', 'Patient search, appointments, and documentation came up repeatedly.', 'Prioritized the top workflows in the primary UI.'],
                ['Speed matters more than completeness', 'Users need information immediately between patient rooms.', 'Reduced interaction depth and kept common actions direct.'],
                ['The interface should stay out of the way', 'Too much information at once slows decision-making.', 'Used hierarchy, whitespace, and progressive disclosure.'],
                ['Offline is not an edge case', 'Connectivity is inconsistent in real clinical environments.', 'Built offline-first with local write + background sync.']
              ].map(([title, body, impact]) => (
                <div key={title} style={{ background: 'white', border: '1px solid #e8edf2', borderRadius: '10px', padding: '1.1rem' }}>
                  <h4 style={{ margin: '0 0 0.5rem', color: '#1F4E79', fontSize: '0.95rem' }}>{title}</h4>
                  <p style={{ margin: '0 0 0.5rem', color: '#555', fontSize: '0.9rem', lineHeight: '1.6' }}>{body}</p>
                  <p style={{ margin: 0, color: '#2D9CAA', fontSize: '0.82rem', fontWeight: '600' }}>{impact}</p>
                </div>
              ))}
            </div>

            <h3 style={{ marginTop: '2rem' }}>Design Principles</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {designPrinciples.map((principle) => (
                <div key={principle.title} style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '10px', padding: '1rem' }}>
                  <h4 style={{ margin: '0 0 0.4rem', color: '#1F4E79', fontSize: '0.95rem' }}>{principle.title}</h4>
                  <p style={{ margin: 0, color: '#555', fontSize: '0.88rem', lineHeight: '1.65' }}>{principle.description}</p>
                </div>
              ))}
            </div>

            <h3 style={{ marginTop: '2rem' }}>Clinical Feedback</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '10px', padding: '1rem' }}><em>"This is laid out like a real chart."</em></div>
              <div style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '10px', padding: '1rem' }}><em>"I know something happened because of the green message at the bottom."</em></div>
              <div style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '10px', padding: '1rem' }}><em>"The Synced badge provided a clear audit trail."</em></div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="section">
          <h2>Information Architecture</h2>
          <div className="section-content">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                ['Home', "What's happening today?"],
                ['Patients', 'Who is my next patient?'],
                ['Schedule', "What's on my schedule?"],
                ['Inbox', 'What messages need attention?']
              ].map(([tab, q]) => (
                <div key={tab} style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '10px', padding: '1rem' }}>
                  <h4 style={{ margin: '0 0 0.35rem', color: '#1F4E79' }}>{tab}</h4>
                  <p style={{ margin: 0, color: '#555', fontSize: '0.88rem' }}>{q}</p>
                </div>
              ))}
            </div>
            <p><strong>Two-Tap Rule:</strong> Every core screen is reachable in two taps or fewer.</p>
            <div className="image-grid-2x2" style={{ marginTop: '1.25rem' }}>
              {diagrams.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <img src={item.src} alt={item.title} className="project-image" />
                </div>
              ))}
            </div>

            <h3 style={{ marginTop: '2rem' }}>Evolution</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)', gap: '1rem', alignItems: 'start' }}>
              <div style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '12px', padding: '1rem' }}>
                <strong style={{ color: '#1F4E79' }}>Low Fidelity</strong>
                <p style={{ margin: '0.4rem 0 1rem', color: '#555', fontSize: '0.88rem' }}>Wireframes established layout, hierarchy, and core navigation.</p>
                <div className="image-grid-4-columns" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))' }}>
                  {wireframes.slice(0, 4).map((item) => (
                    <div key={item.title}>
                      <h4>{item.title}</h4>
                      <img src={item.src} alt={`${item.title} wireframe`} className="project-image" />
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2D9CAA', fontSize: '1.4rem', fontWeight: '700', paddingTop: '6rem' }}>→</div>
              <div style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '12px', padding: '1rem' }}>
                <strong style={{ color: '#1F4E79' }}>Final</strong>
                <p style={{ margin: '0.4rem 0 1rem', color: '#555', fontSize: '0.88rem' }}>High-fidelity prototypes refined the visual system and interaction details.</p>
                <div className="image-grid-4-columns" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))' }}>
                  {prototypes.slice(0, 4).map((item) => (
                    <div key={item.title}>
                      <h4>{item.title}</h4>
                      <img src={item.src} alt={`${item.title} prototype`} className="project-image" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="section">
          <h2>Design Process & Decisions</h2>
          <div className="section-content">
            <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f8fafb', borderRadius: '8px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem' }}>
              {designKeyTakeaways.map((takeaway) => (
                <div key={takeaway} style={{ padding: '0.8rem', backgroundColor: 'white', borderRadius: '999px', textAlign: 'center', border: '1px solid #e8edf2', fontSize: '0.84rem', fontWeight: '600' }}>
                  {takeaway}
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {decisionVisuals.map((decision) => (
                <article key={decision.title} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', alignItems: 'start', background: 'white', border: '1px solid #e8edf2', borderRadius: '12px', padding: '1rem' }}>
                  <div>
                    <img src={decision.image} alt={decision.title} className="project-image" />
                    <div style={{ marginTop: '0.65rem', padding: '0.7rem 0.85rem', background: '#f8fafb', borderRadius: '8px', border: '1px solid #e8edf2', fontSize: '0.82rem', color: '#555', lineHeight: '1.6' }}>
                      <strong style={{ color: '#1F4E79' }}>Annotate:</strong> {decision.annotation}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem', color: '#1F4E79' }}>{decision.title}</h4>
                    <p style={{ margin: '0 0 0.85rem', color: '#555', fontSize: '0.9rem', lineHeight: '1.7' }}>{designDecisions[decision.decisionIndex].rationale}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem' }}>
                      {decision.bullets.map((bullet) => (
                        <div key={bullet} style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '999px', padding: '0.65rem 0.8rem', fontSize: '0.82rem', fontWeight: '600', color: '#0f1f35', textAlign: 'center' }}>
                          {bullet}
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: '0.85rem', padding: '0.75rem', background: '#f8fafb', borderRadius: '8px', border: '1px solid #e8edf2' }}>
                      <div style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2D9CAA', marginBottom: '0.25rem' }}>Implementation</div>
                      <div style={{ fontSize: '0.84rem', color: '#444', lineHeight: '1.55' }}>{designDecisions[decision.decisionIndex].designDetail}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <h3 style={{ marginTop: '2rem' }}>Iteration Notes</h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {iterationEvidence.map((item, idx) => {
                const open = activeIteration === idx;
                return (
                  <div key={item.label} style={{ border: '1px solid #e8edf2', borderRadius: '10px', overflow: 'hidden', background: 'white' }}>
                    <button
                      type="button"
                      onClick={() => setActiveIteration(open ? null : idx)}
                      style={{ width: '100%', textAlign: 'left', padding: '1rem', background: '#fff', border: 'none', cursor: 'pointer' }}
                    >
                      <strong style={{ color: '#1F4E79' }}>{item.label}</strong>
                    </button>
                    {open && (
                      <div style={{ padding: '1rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '0.85rem', alignItems: 'center' }}>
                          <div>
                            <div style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '0.4rem' }}>Before</div>
                            <img src={item.before} alt={`${item.label} before`} className="project-image" />
                            <p style={{ margin: '0.5rem 0 0', fontSize: '0.82rem', color: '#555' }}>{item.beforeLabel}</p>
                          </div>
                          <div>
                            <div style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '0.4rem' }}>After</div>
                            <img src={item.after} alt={`${item.label} after`} className="project-image" />
                            <p style={{ margin: '0.5rem 0 0', fontSize: '0.82rem', color: '#555' }}>{item.afterLabel}</p>
                          </div>
                        </div>
                        <p style={{ margin: '0', color: '#555', fontSize: '0.88rem', lineHeight: '1.65' }}><strong>Reason:</strong> {item.reason}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="section">
          <h2>High-Fidelity Prototypes</h2>
          <div className="section-content">
            <h3>Interactive Prototypes</h3>
            <div className="image-grid-4-columns" style={{ marginTop: '1rem' }}>
              {prototypes.map((item) => (
                <div key={item.title}>
                  <h4>{item.title}</h4>
                  <img src={item.src} alt={`${item.title} prototype`} className="project-image" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="section">
          <h2>Trade-offs & Strategic Decisions</h2>
          <div className="section-content">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {tradeoffs.map((tradeoff) => (
                <div key={tradeoff.title} style={{ background: 'white', border: '1px solid #e8edf2', borderRadius: '10px', padding: '1rem' }}>
                  <h4 style={{ margin: '0 0 0.4rem', color: '#1F4E79' }}>{tradeoff.title}</h4>
                  <p style={{ margin: 0, color: '#555', fontSize: '0.88rem', lineHeight: '1.65' }}>{tradeoff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="section">
          <h2>Technical Architecture & Development</h2>
          <div className="section-content">
            <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f8fafb', borderRadius: '8px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem' }}>
              {developmentKeyTakeaways.map((takeaway) => (
                <div key={takeaway} style={{ padding: '0.8rem', backgroundColor: 'white', borderRadius: '999px', textAlign: 'center', border: '1px solid #e8edf2', fontSize: '0.84rem', fontWeight: '600' }}>
                  {takeaway}
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {techHighlights.map((item) => (
                <div key={item.label} style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '10px', padding: '1rem' }}>
                  <strong style={{ color: '#1F4E79' }}>{item.label}</strong>
                  <p style={{ margin: '0.35rem 0 0', color: '#555' }}>{item.value}</p>
                </div>
              ))}
            </div>

            <h3>Offline Sync Flow</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              {technicalFlow.map((item, idx) => (
                <React.Fragment key={item}>
                  <div style={{ flex: '1 1 150px', minWidth: '140px', background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '10px', padding: '0.9rem 1rem', textAlign: 'center', color: '#0f1f35', fontWeight: '600' }}>{item}</div>
                  {idx < technicalFlow.length - 1 && <div style={{ color: '#2D9CAA', fontSize: '1.2rem', fontWeight: '700' }}>→</div>}
                </React.Fragment>
              ))}
            </div>

            <h3>Offline-First Design Pattern</h3>
            <p>Every write saves locally first, then syncs in the background when connectivity returns.</p>

            <h3>SOAP Schema Decision</h3>
            <p>The note schema moved from one text field to four structured fields so the UI, validation, and data model stayed aligned.</p>

            <h3>Bridging Design and Development</h3>
            <p>
              I translated design concepts into reusable front-end components while checking feasibility early, so design and implementation stayed aligned.
            </p>
          </div>
        </section>

        <div className="divider"></div>

        <section className="section">
          <h2>User Testing Results</h2>
          <div className="section-content">
            <div style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '14px', padding: '1.25rem', marginBottom: '1.5rem' }}>
              <p style={{ margin: 0, color: '#555', lineHeight: '1.75' }}>
                The final build was validated across five user types and 11 core workflows, with strong task completion and no critical failures.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
                {[
                  ['98%', 'Task Completion'],
                  ['38s', 'Avg. Time-on-Task'],
                  ['0', 'Critical Failures'],
                  ['5', 'User Types Tested']
                ].map(([value, label]) => (
                  <div key={label} style={{ background: 'white', border: '1px solid #e8edf2', borderRadius: '999px', padding: '0.7rem 0.9rem', display: 'flex', gap: '0.55rem', alignItems: 'baseline' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1F4E79' }}>{value}</span>
                    <span style={{ fontSize: '0.82rem', color: '#555' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {uatFindings.map((finding, idx) => (
                <div key={idx} style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '10px', padding: '1rem' }}>
                  <h4 style={{ margin: '0 0 0.5rem', color: '#1F4E79' }}>Issue {idx + 1}</h4>
                  <p style={{ margin: '0 0 0.5rem', color: '#555', fontSize: '0.88rem', lineHeight: '1.6' }}>{finding.issue}</p>
                  <p style={{ margin: 0, color: '#2D9CAA', fontSize: '0.85rem', fontWeight: '600' }}>{finding.resolution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="section">
          <h2>Reflection</h2>
          <div className="section-content">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {reflectionCards.map((card) => (
                <div key={card.title} style={{ background: 'white', border: '1px solid #e8edf2', borderRadius: '10px', padding: '1rem' }}>
                  <h4 style={{ margin: '0 0 0.4rem', color: '#1F4E79' }}>{card.title}</h4>
                  <p style={{ margin: 0, color: '#555', fontSize: '0.88rem', lineHeight: '1.7' }}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="section">
          <h2>Outcome & Impact</h2>
          <div className="section-content">
            <div style={{ background: '#f8fafb', border: '1px solid #e8edf2', borderRadius: '14px', padding: '1.25rem' }}>
              <p style={{ margin: '0 0 1rem', color: '#444', lineHeight: '1.75' }}>
                Delivered a production-ready clinical mobile app validated by five user types across 11 workflows.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
                {[
                  'Mobile-first EMR',
                  '98% task completion',
                  '11 workflows',
                  'Offline-first architecture',
                  'Reusable design system'
                ].map((item) => (
                  <div key={item} style={{ background: 'white', border: '1px solid #e8edf2', borderRadius: '999px', padding: '0.75rem 1rem', textAlign: 'center', fontSize: '0.84rem', fontWeight: '600', color: '#1F4E79' }}>
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <h3 style={{ marginTop: 0 }}>What was delivered</h3>
                  <ul>
                    <li>Complete product design from research through high-fidelity prototypes</li>
                    <li>React Native frontend with offline-first sync</li>
                    <li>Reusable component patterns and a structured design system</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ marginTop: 0 }}>Next Priorities</h3>
                  <ul>
                    <li>Accessibility audit (WCAG 2.1 Level AA)</li>
                    <li>Conflict resolution UX for sync scenarios</li>
                    <li>Expanded research with practicing physicians</li>
                  </ul>
                </div>
              </div>
            </div>
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

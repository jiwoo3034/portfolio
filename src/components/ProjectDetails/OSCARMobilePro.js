import React from 'react';
import './IoTMobileApp.css';
import PageTransition from '../PageTransition';

function OSCARMobilePro() {
  const oscarImage = (filePath) =>
    encodeURI(`${process.env.PUBLIC_URL}/images/oscar/${filePath}`);

  const heroImage = oscarImage('oscar-overview.jpg');

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

  const projectConstraints = [
    {
      title: 'Working Within the Existing OSCAR Ecosystem',
      description: 'OSCAR is an established EMR platform with existing workflows and data structures. Our goal was not to redesign OSCAR itself, but to extend the experience to mobile while maintaining consistency with the existing system.'
    },
    {
      title: 'Limited Access to End Users',
      description: 'Direct access to practicing clinicians was limited during the early research phase. This required us to validate assumptions through workflow analysis, healthcare domain research, and continuous feedback throughout usability testing.'
    },
    {
      title: 'Project Timeline',
      description: 'With fixed academic milestones and limited development time, every feature required prioritization. Rather than attempting to deliver every possible capability, we focused on building a reliable MVP that solved the most important clinical workflows first.'
    },
    {
      title: 'Balancing Design and Development',
      description: 'Because our team was responsible for both designing and developing the application, every design decision needed to be technically achievable within the available timeframe. This encouraged close collaboration between design and implementation from the beginning.'
    }
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

  const colorSystem = [
    { name: 'Primary Blue', hex: '#1F4E79', use: 'Brand, navigation, primary actions' },
    { name: 'Accent Blue', hex: '#2E75B6', use: 'Secondary actions, draft state toast' },
    { name: 'Success Green', hex: '#28A745', use: 'Synced, Finished, confirmed states' },
    { name: 'Warning Amber', hex: '#FFC107', use: 'Sync failure, offline, caution states' },
    { name: 'Danger Red', hex: '#DC3545', use: 'Cancelled, error, destructive actions' }
  ];

  // SECTION 6: Technical Architecture (displayed inline)
  const challenges = [
    {
      title: 'Scope Containment Under Clinical Complexity',
      insight: 'Every workflow mapped revealed new edge cases: conflict resolution, suspended SOAP notes, no-show handling. We made explicit decisions to handle some states (offline sync, SOAP suspension) and defer others (full conflict UI, biometric auth) based on clinical impact.',
      lesson: 'Scope discipline saves development velocity.'
    },
    {
      title: 'Designing for Clinicians You Couldn\'t Access',
      insight: 'UAT participants were proxies—acquaintances briefed on clinical context. Design decisions had to be grounded in workflow logic and domain research, not direct observation. The 98% UAT success rate validated the approach.',
      lesson: 'Direct clinical observation should be the first priority in follow-up iteration.'
    },
    {
      title: 'Balancing Design Leadership with Implementation',
      insight: 'Leading design while co-developing created productive tension. I was aware of implementation cost at every decision. The toast system went through three design iterations before landing on the implementation balancing quality with velocity.',
      lesson: 'Embedded designers ship smarter, faster designs.'
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

  const diagrams = [
    { title: 'Use Case Diagram', src: oscarImage('Diagrams/Use Case Diagram.jpg') },
    { title: 'Navigation Diagram', src: oscarImage('Diagrams/Navigation Diagram.jpg') }
  ];

  return (
    <PageTransition>
      <section className="project-detail oscar-project">
        {/* Project Header */}
        <header className="section" style={{ background: 'transparent' }}>
          <br/>
          <h1>OSCAR Mobile Pro</h1>
          <h2 className="project-subtitle">Healthcare Mobile Application • Product Design • UX/UI • Frontend Development</h2>
          <img src={heroImage} alt="OSCAR Mobile Pro preview" className="project-image" />
        </header>

        {/* Hero metrics and role */}
        <section className="section">
          <h2>Project Overview</h2>
          <div className="section-content">
            <p>
              <strong>The Clinical Problem:</strong> Clinicians using OSCAR EMR throughout the day had no access to patient information while moving between examination rooms. This created a two-system workflow: desktop access for comprehensive chart review, manual memory-based documentation when away from the desk. Appointment updates and message responses required returning to a workstation.
            </p>
            
            <p>
              <strong>The Design Challenge:</strong> OSCAR is a comprehensive desktop system. The task wasn't to replicate it on mobile. It was to identify which workflows clinicians actually needed on mobile, design specifically for point-of-care use, and solve the connectivity and data consistency problems that mobile introduces.
            </p>

            <p>
              <strong>My Approach:</strong> Led a complete product design cycle from research through implementation. Conducted workflow analysis to prioritize the highest-value use cases, designed the complete information architecture and user flows, created high-fidelity prototypes, and implemented the frontend in React Native. Achieved 98% task success rate in UAT with zero critical failures.
            </p>
          </div>
        </section>

        <div className="divider"></div>

        {/* Project Details */}
        <section className="project-info-grid">
          <div className="info-cards-container">
            <article className="info-card">
              <h3>My Role</h3>
              <p>Project Lead<br/>UX/UI Designer<br/>Frontend Developer</p>
            </article>
            
            <article className="info-card">
              <h3>Tech Stack</h3>
              <p>React Native<br/>Express.js<br/>PostgreSQL<br/>SQLite<br/>Vitest</p>
            </article>
            
            <article className="info-card">
              <h3>Key Metrics</h3>
              <p>11 Use Cases<br/>14 DB Tables<br/>16 Test Suites<br/>98% UAT Success</p>
            </article>
          </div>
        </section>

        <div className="divider"></div>

        {/* SECTION 1: THE PROBLEM */}
        <section className="section">
          <h2>The Problem</h2>
          <div className="section-content">
            <h3>Three Friction Points in Clinical Workflows</h3>
            
            <div className="friction-pillars">
              {frictionPillars.map((pillar) => (
                <div key={pillar.title} className="friction-pillar-card">
                  <h4>{pillar.title}</h4>
                  <p>{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* SECTION 2: MY ROLE - Enhanced with Product Lead emphasis */}
        <section className="section">
          <h2>My Role & Leadership</h2>
          <div className="section-content">
            <p>
              Beyond designing the user experience, I guided the overall product direction throughout the project.
            </p>
            
            <p>
              As <strong>Project Lead</strong>, I coordinated design discussions, facilitated sprint planning, prioritized features as project scope evolved, and worked closely with development to ensure design decisions remained technically feasible. I conducted clinical workflow analysis to define our use case scope, designed the complete information architecture, and produced both wireframe and high-fidelity prototypes in Figma. I implemented core frontend screens in React Native alongside our development team.
            </p>

            <p className="role-impact-box">
              <strong>Why this matters:</strong> Because I was embedded in both design and implementation, every design decision was informed by technical feasibility. This prevented designs that looked good on paper but created implementation bottlenecks. The reverse was equally important—implementation decisions were continuously evaluated from a user perspective, catching usability issues before they shipped.
            </p>
          </div>
        </section>

        <div className="divider"></div>

        {/* SECTION 3: RESEARCH & DISCOVERY - Enhanced */}
        <section className="section">
          <h2>Research & Discovery</h2>
          <div className="section-content">
            {/* Key Takeaways */}
            <div style={{ marginBottom: '2.5rem', padding: '1.5rem', backgroundColor: '#f8fafb', borderRadius: '8px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
              {researchKeyTakeaways.map((takeaway) => (
                <div key={takeaway} style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '6px', textAlign: 'center', borderLeft: '4px solid #2D9CAA', fontSize: '0.95rem', fontWeight: '500', color: '#1a1a1a' }}>
                  ✨ {takeaway}
                </div>
              ))}
            </div>

            <h3>Research Approach</h3>
            <p>
              Rather than jumping directly into interface design, we first focused on understanding how clinicians actually interact with an EMR throughout a typical workday.
            </p>
            <p>
              Because direct access to practicing clinicians was limited during the early stages of the project, we relied on workflow analysis, healthcare domain research, existing OSCAR documentation, and continuous feedback from our healthcare advisor and usability testing participants. Instead of treating these limitations as obstacles, we used them to build a more structured and evidence-based design process.
            </p>

            <h3 style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(45, 156, 170, 0.2)' }}>Scope Decision: 13 Use Cases → 11 Features</h3>
            <p>
              We initially scoped 13 use cases. After workflow analysis, we removed Book Appointment (UC-08) and Send Message (UC-12). Both required complex administrative logic better suited to the desktop system. Removing them sharpened the mobile product to its core value: <strong>point-of-care access and real-time documentation.</strong>
            </p>

            <h3 style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(45, 156, 170, 0.2)' }}>Design Principles</h3>
            <ul>
              {designPrinciples.map((principle) => (
                <li key={principle.title}>
                  <strong>{principle.title}:</strong> {principle.description}
                </li>
              ))}
            </ul>

            <h3 style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(45, 156, 170, 0.2)' }}>Key Research Insights</h3>
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ marginBottom: '2rem', paddingLeft: '1.5rem', borderLeft: '4px solid #2D9CAA' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#1F4E79' }}>Insight 01 — Mobile Usage Prioritizes Only a Small Subset of Features</h4>
                <p style={{ margin: '0 0 0.5rem 0', color: '#555' }}>Although OSCAR contains hundreds of functions, clinicians only rely on a relatively small number of workflows while using mobile devices. Patient search, appointments, and clinical documentation consistently emerged as the highest-priority tasks.</p>
                <p style={{ margin: '0', color: '#2D9CAA', fontStyle: 'italic', fontSize: '0.95rem' }}>💡 Design Impact: Simplified navigation structure, prioritized only the most frequently used workflows within the primary interface.</p>
              </div>

              <div style={{ marginBottom: '2rem', paddingLeft: '1.5rem', borderLeft: '4px solid #2D9CAA' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#1F4E79' }}>Insight 02 — Speed Is More Valuable Than Feature Completeness</h4>
                <p style={{ margin: '0 0 0.5rem 0', color: '#555' }}>In clinical environments, users often need information immediately. Reducing the number of interactions required to complete common tasks became more valuable than exposing every available feature.</p>
                <p style={{ margin: '0', color: '#2D9CAA', fontStyle: 'italic', fontSize: '0.95rem' }}>💡 Design Impact: Prioritized direct access to high-frequency actions while moving secondary features deeper into the interface.</p>
              </div>

              <div style={{ marginBottom: '2rem', paddingLeft: '1.5rem', borderLeft: '4px solid #2D9CAA' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#1F4E79' }}>Insight 03 — Information Should Support, Not Distract</h4>
                <p style={{ margin: '0 0 0.5rem 0', color: '#555' }}>Clinicians should spend their attention on patients rather than software. Presenting too much information simultaneously increases cognitive load and slows decision-making.</p>
                <p style={{ margin: '0', color: '#2D9CAA', fontStyle: 'italic', fontSize: '0.95rem' }}>💡 Design Impact: Information hierarchy, whitespace, progressive disclosure, and simplified card layouts reduced unnecessary visual complexity.</p>
              </div>

              <div style={{ marginBottom: '0', paddingLeft: '1.5rem', borderLeft: '4px solid #2D9CAA' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#1F4E79' }}>Insight 04 — Mobile Experiences Must Remain Reliable</h4>
                <p style={{ margin: '0 0 0.5rem 0', color: '#555' }}>Clinical work continues regardless of internet connectivity. The application needed to support uninterrupted workflows even when network conditions were unstable.</p>
                <p style={{ margin: '0', color: '#2D9CAA', fontStyle: 'italic', fontSize: '0.95rem' }}>💡 Design Impact: Offline-first approach allowed clinicians to continue documenting information while synchronization occurred automatically when connectivity returned.</p>
              </div>
            </div>

            <h3 style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(45, 156, 170, 0.2)' }}>Clinical Feedback Validation</h3>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <em>"This is laid out like a real chart."</em> — Attending Physician
              </li>
              <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <em>"I know something happened because of the green message at the bottom."</em> — Clinic Nurse (on toast notifications)
              </li>
              <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                <em>"The Synced badge provided a clear audit trail."</em> — Clinical Quality Officer
              </li>
            </ul>
          </div>
        </section>

        <div className="divider"></div>

        {/* SECTION 3B: PROJECT CONSTRAINTS - New */}
        <section className="section">
          <h2>Project Constraints</h2>
          <div className="section-content">
            <p>
              Every product is shaped by constraints. Rather than treating them as limitations, we used them to guide priorities and make more intentional design decisions throughout the project.
            </p>

            <div style={{ marginTop: '1.5rem' }}>
              {projectConstraints.map((constraint, idx) => (
                <div key={idx} style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: idx < projectConstraints.length - 1 ? '1px solid rgba(45, 156, 170, 0.2)' : 'none' }}>
                  <h4 style={{ color: '#1F4E79', marginBottom: '0.5rem' }}>{constraint.title}</h4>
                  <p style={{ color: '#555', margin: '0' }}>{constraint.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* SECTION 4: INFORMATION ARCHITECTURE */}
        <section className="section">
          <h2>Information Architecture</h2>
          <div className="section-content">
            <p>
              The <strong>Four-Flow Architecture</strong> organized the entire app around four clinical workflows: Home, Patients, Schedule, and Inbox. This maps to four core questions clinicians ask: What's happening today? Who is my next patient? What's on my schedule? What messages need attention?
            </p>
            <p><strong>Two-Tap Rule:</strong> Every screen is reachable in two taps or fewer, critical for clinical urgency.</p>
            
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

        <div className="divider"></div>

        {/* SECTION 5: DESIGN PROCESS */}
        <section className="section">
          <h2>Design Process & Decisions</h2>
          <div className="section-content">
            {/* Key Takeaways */}
            <div style={{ marginBottom: '2.5rem', padding: '1.5rem', backgroundColor: '#f8fafb', borderRadius: '8px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
              {designKeyTakeaways.map((takeaway) => (
                <div key={takeaway} style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '6px', textAlign: 'center', borderLeft: '4px solid #2D9CAA', fontSize: '0.95rem', fontWeight: '500', color: '#1a1a1a' }}>
                  ✨ {takeaway}
                </div>
              ))}
            </div>

            <h3>Wireframe Decisions with Clinical Rationale</h3>
            {designDecisions.map((decision, idx) => (
              <div key={idx} className="design-decision-item">
                <p><strong>{decision.title}:</strong> {decision.rationale}</p>
              </div>
            ))}

            <h3 style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(45, 156, 170, 0.2)' }}>
              Design Iterations: How Decisions Evolved
            </h3>
            <p style={{ marginTop: '0.5rem' }}>
              Design doesn't move from wireframe to final prototype in one step. These are the key decisions that changed between iterations — and why they changed.
            </p>

            <div style={{ marginTop: '2rem' }}>
              <h4>Iteration 1 → 2: Navigation Structure</h4>
              <p>
                <strong>What changed:</strong> The initial navigation included five tabs: Home, Patients, Schedule, Inbox, and a dedicated Search tab. After reviewing clinical workflow patterns, Search was removed as a standalone tab and merged into the Home Dashboard as an always-visible search bar.
              </p>
              <p style={{ marginLeft: '0', borderLeft: '4px solid #2D9CAA', paddingLeft: '1rem', color: '#555', fontStyle: 'italic' }}>
                <strong>Why:</strong> Search is not a destination — it's the starting point of almost every clinical workflow. Giving it a dedicated tab added a tap to the most frequent action in the app. Moving it to the Home screen made it immediately accessible on login without any navigation.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#2D9CAA', fontStyle: 'italic' }}>💡 Removed one tap from the most frequent clinical action.</p>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4>Iteration 1 → 2: Appointment Status Display</h4>
              <p>
                <strong>What changed:</strong> In Iteration 1, appointment status was shown as text labels only (Scheduled, Cancelled, Updated). In Iteration 2, color-coded pill badges were added alongside the text.
              </p>
              <p style={{ marginLeft: '0', borderLeft: '4px solid #2D9CAA', paddingLeft: '1rem', color: '#555', fontStyle: 'italic' }}>
                <strong>Why:</strong> A clinician scanning a day schedule under time pressure reads color before text. The color-coded badges allow status recognition in a glance — the same principle used in physical clinical scheduling boards and EMR desktop systems. Text alone required reading each item individually.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#2D9CAA', fontStyle: 'italic' }}>💡 Instant status recognition on schedule scan.</p>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4>Iteration 2 → 3: Cancel Appointment Modal (UAT-Driven)</h4>
              <p>
                <strong>What changed:</strong> The modal confirmation buttons were originally labeled <strong>"Yes" / "Cancel"</strong> — where "Cancel" meant dismiss the modal, not cancel the appointment. One UAT participant (P-02, Clinic Nurse) tapped "Cancel" to confirm the appointment cancellation and dismissed the modal instead.
              </p>
              <p style={{ marginLeft: '0', borderLeft: '4px solid #2D9CAA', paddingLeft: '1rem', color: '#555', fontStyle: 'italic' }}>
                <strong>Why:</strong> The word "Cancel" was doing two jobs in the same interaction. It meant both "dismiss this dialog" and "this is the Cancel Appointment screen." Under task pressure, a participant read the button as the action, not the dismiss. One word change — <strong>"Cancel" → "Go Back"</strong> — eliminated the ambiguity entirely.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#2D9CAA', fontStyle: 'italic' }}>💡 Eliminated the only Major UAT finding.</p>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4>Iteration 1 → 3: SOAP Note Schema and Form</h4>
              <p>
                <strong>What changed:</strong> The SOAP Note form originally had a single large text area for clinical content. In Iteration 3 the form was restructured into four discrete, labeled sections: Subjective, Objective (with structured vitals fields), Assessment (with a diagnosis category dropdown), and Plan (with checkboxes for common actions plus a free-text treatment plan field).
              </p>
              <p style={{ marginLeft: '0', borderLeft: '4px solid #2D9CAA', paddingLeft: '1rem', color: '#555', fontStyle: 'italic' }}>
                <strong>Why:</strong> A free-text field is easy to build and hard to use. Clinicians filling a blank text box have to recall the SOAP structure from memory while simultaneously documenting a patient encounter. Explicit section headers reduce cognitive load by externalizing the structure the clinician already knows. The structured vitals fields in the Objective section also created typed data — blood pressure as two numbers, not as "130/85 mmHg" buried in prose — which is queryable, auditable, and compatible with future analytics.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#2D9CAA', fontStyle: 'italic' }}>💡 Four typed columns, NOT NULL constraints, future billing-compatible.</p>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h4>Iteration 1 → 3: Toast Notification System</h4>
              <p>
                <strong>What changed:</strong> The feedback system went through three versions. Iteration 1 had no feedback system — the app showed nothing after a save action, which was the default React Native behavior. Iteration 2 added basic alert dialogs (modal popups requiring dismissal). Iteration 3 replaced all alerts with the transient toast system.
              </p>
              <p style={{ marginLeft: '0', borderLeft: '4px solid #2D9CAA', paddingLeft: '1rem', color: '#555', fontStyle: 'italic' }}>
                <strong>Why:</strong> A modal alert that requires dismissal is a clinical interruption. Any dialog requiring user action before continuing created friction during note documentation — the clinician had to stop, read, and tap before returning to the patient encounter. Toasts communicate outcome without demanding response. The system confirms; the clinician continues.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#2D9CAA', fontStyle: 'italic' }}>💡 Zero-interaction feedback system — three iterations to eliminate one unnecessary tap.</p>
            </div>

            <h4 style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(45, 156, 170, 0.2)' }}>
              Iteration Summary
            </h4>
            <table className="iteration-table">
              <thead>
                <tr>
                  <th>Iteration</th>
                  <th>What Changed</th>
                  <th>Why</th>
                  <th>Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1 → 2</strong></td>
                  <td>Search moved from tab to persistent bar</td>
                  <td>Search is the start of every workflow, not a destination</td>
                  <td>Removed one tap from the most frequent action</td>
                </tr>
                <tr>
                  <td><strong>1 → 2</strong></td>
                  <td>Appointment text labels → color-coded badges</td>
                  <td>Color reads faster than text under time pressure</td>
                  <td>Instant status recognition on schedule scan</td>
                </tr>
                <tr>
                  <td><strong>2 → 3</strong></td>
                  <td>"Cancel" button → "Go Back" in modal</td>
                  <td>One word was doing two jobs in the same interaction</td>
                  <td>Eliminated the only Major UAT finding</td>
                </tr>
                <tr>
                  <td><strong>1 → 3</strong></td>
                  <td>Single SOAP text area → structured form with typed fields</td>
                  <td>Free-text loses clinical structure and produces unqueryable data</td>
                  <td>Four typed columns, NOT NULL constraints, future billing-compatible</td>
                </tr>
                <tr>
                  <td><strong>2 → 3</strong></td>
                  <td>Modal alerts → transient toast notifications</td>
                  <td>Modal dismissal interrupts clinical documentation flow</td>
                  <td>Zero-interaction feedback — app confirms, clinician continues</td>
                </tr>
              </tbody>
            </table>

            <h3 style={{ marginTop: '2.5rem' }}>Wireframe Gallery</h3>
            <p>The complete set of wireframes showing the low-fidelity information architecture and layout decisions:</p>

            <div className="image-grid-4-columns" style={{ marginTop: '2rem' }}>
              {wireframes.map((item) => (
                <div key={item.title}>
                  <h4>{item.title}</h4>
                  <img src={item.src} alt={`${item.title} wireframe`} className="project-image" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="section">
          <h2>High-Fidelity Prototypes</h2>
          <div className="section-content">
            <h3>Color System</h3>
            <table className="color-system-table">
              <thead>
                <tr>
                  <th>Color</th>
                  <th>Hex</th>
                  <th>Use Case</th>
                </tr>
              </thead>
              <tbody>
                {colorSystem.map((color) => (
                  <tr key={color.name}>
                    <td>
                      <span className="color-swatch" style={{ backgroundColor: color.hex }}></span>
                      {color.name}
                    </td>
                    <td>{color.hex}</td>
                    <td>{color.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3>Interactive Prototypes</h3>
            <p>Screenshots showing the complete clinical workflow from login through SOAP note creation:</p>
            <div className="image-grid-4-columns" style={{ marginTop: '1.5rem' }}>
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

        {/* SECTION 5B: TRADE-OFFS - New */}
        <section className="section">
          <h2>Trade-offs & Strategic Decisions</h2>
          <div className="section-content">
            <p>
              Every product decision involved balancing competing priorities. Instead of maximizing features, we focused on maximizing usability and long-term maintainability.
            </p>

            <div style={{ marginTop: '1.5rem' }}>
              {tradeoffs.map((tradeoff, idx) => (
                <div key={idx} style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: idx < tradeoffs.length - 1 ? '1px solid rgba(45, 156, 170, 0.2)' : 'none' }}>
                  <h4 style={{ color: '#1F4E79', marginBottom: '0.5rem' }}>{tradeoff.title}</h4>
                  <p style={{ color: '#555', margin: '0' }}>{tradeoff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* SECTION 6: TECHNICAL ARCHITECTURE */}
        <section className="section">
          <h2>Technical Architecture & Development</h2>
          <div className="section-content">
            {/* Key Takeaways */}
            <div style={{ marginBottom: '2.5rem', padding: '1.5rem', backgroundColor: '#f8fafb', borderRadius: '8px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
              {developmentKeyTakeaways.map((takeaway) => (
                <div key={takeaway} style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '6px', textAlign: 'center', borderLeft: '4px solid #2D9CAA', fontSize: '0.95rem', fontWeight: '500', color: '#1a1a1a' }}>
                  ✨ {takeaway}
                </div>
              ))}
            </div>

            <h3>Offline-First Design Pattern</h3>
            <p>
              Clinical environments have inconsistent connectivity. A WiFi dead spot cannot cause data loss. Every write saves to an encrypted local SQLite database first. A background sync worker monitors connectivity and pushes pending changes when re-established. From the user perspective, the app never fails—it only syncs.
            </p>

            <h3>SOAP Schema Decision</h3>
            <p>
              We restructured the ClinicalNote table from a single content column into four discrete SOAP columns (subjective, objective, assessment, plan). This enabled NOT NULL constraints on mandatory sections, prevented incomplete notes from syncing, and created a data structure compatible with future billing integrations. <strong>The schema drove the form design—not the other way around.</strong>
            </p>

            <h3>Technology Choices</h3>
            <ul>
              <li><strong>React Native:</strong> Single codebase for future iOS/Android expansion</li>
              <li><strong>Node.js + Express:</strong> Lightweight REST API layer between mobile and database</li>
              <li><strong>PostgreSQL:</strong> Relational integrity required for clinical data with foreign key constraints</li>
              <li><strong>SQLite (encrypted):</strong> Local store for offline-first persistence</li>
              <li><strong>Vitest:</strong> Native ESM support aligned with Vite build pipeline</li>
            </ul>

            <h3 style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(45, 156, 170, 0.2)' }}>Bridging Design and Development</h3>
            <p>
              Unlike many academic UX projects that end at high-fidelity prototypes, OSCAR Mobile Pro continued through full implementation.
            </p>
            <p>
              Using React Native, I translated design concepts into reusable front-end components while maintaining consistency with the established design system. Working directly within the implementation also allowed me to identify technical constraints early and adjust design decisions before they became development bottlenecks.
            </p>
            <p>
              This end-to-end involvement strengthened my understanding of how thoughtful design and practical engineering work together to create scalable products. It revealed that the most important design decisions often aren't visual—they're architectural. The offline-first sync pattern, SOAP schema structure, and component hierarchy had more impact on usability than any visual refinement could have achieved.
            </p>
          </div>
        </section>

        <div className="divider"></div>

        {/* SECTION 7: CHALLENGES & TRADE-OFFS */}
        <section className="section">
          <h2>Challenges & Trade-offs</h2>
          <div className="section-content">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="challenge-item">
                <h3>{challenge.title}</h3>
                <p><strong>The Insight:</strong> {challenge.insight}</p>
                <p><strong>The Lesson:</strong> {challenge.lesson}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider"></div>

        {/* SECTION 8: USER TESTING RESULTS */}
        <section className="section">
          <h2>User Testing Results</h2>
          <div className="section-content">
            <h3>Metrics</h3>
            <ul>
              <li><strong>Task Success Rate:</strong> 98%</li>
              <li><strong>Average Time-on-Task:</strong> 38 seconds</li>
              <li><strong>Critical Failures:</strong> Zero</li>
            </ul>

            <h3>Issues Found & Fixed</h3>
            {uatFindings.map((finding, idx) => (
              <div key={idx} className="finding-item">
                <p><strong>Issue {idx + 1}:</strong> {finding.issue}</p>
                <p><strong>Resolution:</strong> {finding.resolution}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider"></div>

        {/* SECTION 9: REFLECTION */}
        <section className="section">
          <h2>Reflection: What I Learned</h2>
          <div className="section-content">
            <p>
              This project fundamentally changed the way I approach product design. At the beginning, I viewed design and development as separate phases—design first, implementation second. Through building OSCAR Mobile Pro, I realized they constantly influence one another. Every design decision introduced technical considerations, while every implementation challenge revealed opportunities to improve the user experience.
            </p>

            <h3 style={{ marginTop: '2rem' }}>The Biggest Lesson: Design Is Not About Pixels</h3>
            <p>
              I expected the biggest challenges to be visual. They turned out to be structural. The decision to split ClinicalNote into discrete SOAP columns was the most consequential design decision I made on this project. It reduced cognitive load for clinicians, prevented data quality issues, enabled future analytics, and simplified implementation. It came from understanding how clinicians work and how data flows through the system—not from visual design.
            </p>
            <p>
              This reinforced a principle I now apply to all product work: the most impactful decisions are usually invisible. Users notice good visual design, but they live with system design.
            </p>

            <h3 style={{ marginTop: '2rem' }}>What I'd Do Differently</h3>
            <p>
              Involve clinicians earlier in the research process. The UAT insight about the allergy banner also needing to appear in the SOAP note editor—a genuine clinical safety insight—only came from a practicing clinician during testing. That observation should come from research, not UAT. Earlier access to healthcare professionals would have strengthened several design decisions and reduced the need for later revisions.
            </p>

            <h3 style={{ marginTop: '2rem' }}>Key Takeaway for Future Work</h3>
            <p>
              Effective product design is not simply about creating polished interfaces. It's about understanding problems deeply, making thoughtful decisions that balance user needs, technical feasibility, and long-term scalability, and then having the discipline to simplify rather than add.
            </p>
            <p>
              The biggest challenge on this project wasn't designing more features. It was identifying which workflows mattered most and intentionally removing everything that didn't support them. In a healthcare context where clinician time directly impacts patient care, that discipline was both a design principle and a strategic one.
            </p>
          </div>
        </section>

        <div className="divider"></div>

        {/* SECTION 10: OUTCOME */}
        <section className="section">
          <h2>Outcome & Impact</h2>
          <div className="section-content">
            <p>
              Delivered a production-ready clinical mobile app validated by five clinician user types across 11 core use cases, with a 98% task success rate and zero critical failures.
            </p>
            
            <h3 style={{ marginTop: '1.5rem' }}>What Was Delivered</h3>
            <ul>
              <li>Complete product design from research through high-fidelity prototypes</li>
              <li>Fully implemented React Native frontend with offline-first sync</li>
              <li>Component library and design system for future expansion</li>
              <li>UAT-validated workflows with practicing clinicians</li>
              <li>Detailed technical documentation and implementation guides</li>
            </ul>

            <h3 style={{ marginTop: '1.5rem' }}>Future Priorities</h3>
            <ul>
              <li>Accessibility audit (WCAG 2.1 Level AA compliance)</li>
              <li>Expanded clinical user research with practicing physicians</li>
              <li>Biometric authentication implementation</li>
              <li>Conflict resolution UX design for sync scenarios</li>
              <li>Analytics integration for clinical workflow optimization</li>
            </ul>
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

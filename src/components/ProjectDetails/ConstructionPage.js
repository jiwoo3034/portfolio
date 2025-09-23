import React, { useState, useEffect } from 'react';
import './ConstructionPage.css';
import PageTransition from '../PageTransition';

function ConstructionPage() {
  const [dots, setDots] = useState('');

  // Animate the loading dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);


  return (
    <PageTransition>
      <div className="construction-page">
      {/* Construction Icon Animation */}
      <div style={{
        fontSize: '8rem',
        marginBottom: '2rem',
        animation: 'bounce 2s infinite'
      }}>
        🚧
      </div>

      {/* Main Heading */}
      <h1 style={{
        fontSize: '3rem',
        color: '#DB9291',
        textAlign: 'center',
        marginBottom: '1rem',
        fontWeight: '500'
      }}>
        Project Under Construction
      </h1>

      {/* Subtitle */}
      <h2 style={{
        fontSize: '1.5rem',
        color: '#2D3E5B',
        textAlign: 'center',
        marginBottom: '2rem',
        fontFamily: 'Lato, sans-serif',
        fontWeight: 'normal',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Ready Soon{dots}
      </h2>

      {/* Description */}
      <div style={{
        maxWidth: '600px',
        textAlign: 'center',
        marginBottom: '3rem',
        margin: '0 auto' /* Center the description horizontally */
      }}>
        <p style={{
          fontSize: '1.2rem',
          color: '#555',
          lineHeight: '1.8',
          marginBottom: '1.5rem'
        }}>
          This project is currently being crafted with attention to detail and user experience in mind.
        </p>
        <p style={{
          fontSize: '1rem',
          color: '#777',
          fontFamily: 'Lato, sans-serif'
        }}>
          Check back soon to see the complete case study, including research insights, design process, and final solutions.
        </p>
      </div>

      {/* Progress Visual */}
      <div style={{
        width: '100%',
        maxWidth: '400px',
        marginBottom: '3rem',
        margin: '0 auto' /* Center the progress visual horizontally */
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          <span style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '0.9rem',
            color: '#2D3E5B',
            textTransform: 'uppercase',
            fontWeight: 'bold'
          }}>
            Progress
          </span>
          <span style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '0.9rem',
            color: '#DB9291',
            fontWeight: 'bold'
          }}>
            75%
          </span>
        </div>
        <div style={{
          width: '100%',
          height: '10px',
          backgroundColor: '#e0e0e0',
          borderRadius: '5px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '75%',
            height: '100%',
            background: 'linear-gradient(90deg, #DB9291 0%, #2D3E5B 100%)',
            borderRadius: '5px',
            animation: 'progressGlow 2s ease-in-out infinite alternate'
          }} />
        </div>
      </div>

      {/* Construction Tools */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        marginBottom: '3rem',
        fontSize: '2.5rem',
        justifyContent: 'center' /* Center the construction tools horizontally */
      }}>
        <div style={{ animation: 'float 3s ease-in-out infinite' }}>⚒️</div>
        <div style={{ animation: 'float 3s ease-in-out infinite 0.5s' }}>🔧</div>
        <div style={{ animation: 'float 3s ease-in-out infinite 1s' }}>📐</div>
        <div style={{ animation: 'float 3s ease-in-out infinite 1.5s' }}>✏️</div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
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
      >
        Back to Previous Page
      </button>

      {/* Alternative Navigation */}
      <div style={{
        marginTop: '2rem',
        textAlign: 'center'
      }}>
        <p style={{
          color: '#777',
          marginBottom: '1rem',
          fontFamily: 'Lato, sans-serif',
          fontSize: '0.9rem'
        }}>
          Or explore other completed projects:
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a 
            href="/projects/1"
            style={{
              color: '#2D3E5B',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              border: '2px solid #2D3E5B',
              borderRadius: '6px',
              fontSize: '0.9rem',
              fontFamily: 'Lato, sans-serif',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2D3E5B';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#2D3E5B';
            }}
          >
            IoT Mobile App
          </a>
          <a 
            href="/projects"
            style={{
              color: '#DB9291',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              border: '2px solid #DB9291',
              borderRadius: '6px',
              fontSize: '0.9rem',
              fontFamily: 'Lato, sans-serif',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#DB9291';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#DB9291';
            }}
          >
            View All Projects
          </a>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes progressGlow {
          0% {
            box-shadow: 0 0 5px rgba(219, 146, 145, 0.5);
          }
          100% {
            box-shadow: 0 0 20px rgba(219, 146, 145, 0.8), 0 0 30px rgba(45, 62, 91, 0.3);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
          }
          h2 {
            font-size: 1.2rem !important;
          }
          p {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2rem !important;
          }
          h2 {
            font-size: 1rem !important;
          }
          .construction-icon {
            font-size: 6rem !important;
          }
        }
      `}</style>
    </div>
    </PageTransition>
  );
}

export default ConstructionPage;
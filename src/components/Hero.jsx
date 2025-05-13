import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Supercharge Your B2B Growth with Agentic AI Marketing</h1>
          <p className="hero-subheadline">Growth Rick combines cutting-edge AI agents with human expertise to drive customer acquisition for B2B brands.</p>
          <a href="/schedule" className="schedule-btn">
            Schedule a Growth Strategy Session
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

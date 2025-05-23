import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Your Marketing Team, Amplified by Intelligence</h1>
          <p className="hero-subheadline">The first truly autonomous AI that strategizes, creates, and optimizes campaigns while you focus on what matters most—growth.</p>
          <a href="https://outlook.office365.com/owa/calendar/GrowthRickConsultation@growthrick.com/bookings/" target="_blank" rel="noopener noreferrer" className="schedule-btn">
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

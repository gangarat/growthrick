import '../styles/OurApproach.css';

const OurApproach = () => {
  return (
    <section className="our-approach">
      <div className="container">
        <h2>Our Approach</h2>
        <p className="section-description">
          Growth Rick operates through our proprietary methodology that combines specialized AI agents with human expertise:
        </p>
        
        <div className="approach-content">
          <div className="platform-info">
            <h3>The Growth Rick Platform</h3>
            <p>
              Our platform integrates industry-leading AI models to power 26 specialized marketing agents, 
              each addressing specific customer acquisition functions for B2B brands, delivering 
              unprecedented personalization and performance.
            </p>
          </div>
          <div className="platform-visual">
            {/* Placeholder for platform visualization */}
            <div className="platform-visual-placeholder">
              <span>AI Platform Visualization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;

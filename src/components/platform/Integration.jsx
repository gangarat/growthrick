import '../../styles/platform/Integration.css';

const Integration = () => {
  return (
    <section className="integration">
      <div className="container">
        <h2>Integration and Customization</h2>
        
        <div className="integration-grid">
          <div className="integration-column">
            <div className="integration-card">
              <h3>Customization Capabilities</h3>
              <ul className="integration-list">
                <li>
                  <strong>Brand-Specific Configuration:</strong> 
                  <p>Tailored setup for each client's unique voice and audience</p>
                </li>
                <li>
                  <strong>Industry Playbooks:</strong> 
                  <p>Pre-built strategies for software, services, manufacturing, fintech, and healthcare verticals</p>
                </li>
                <li>
                  <strong>Performance Optimization:</strong> 
                  <p>Continuous improvement based on campaign results</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="integration-column">
            <div className="integration-card">
              <h3>Integration Capabilities</h3>
              <ul className="integration-list">
                <li>
                  <p>Seamless connection with all major CRM and marketing automation platforms</p>
                </li>
                <li>
                  <p>Direct API integration with ad platforms and analytics tools</p>
                </li>
                <li>
                  <p>Custom dashboards for real-time performance monitoring</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="integration-visual">
          <div className="integration-visual-placeholder">
            <span>Integration Architecture Diagram</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;

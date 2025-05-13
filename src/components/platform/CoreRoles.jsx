import '../../styles/platform/CoreRoles.css';

const CoreRoles = () => {
  return (
    <section className="core-roles">
      <div className="container">
        <h2>Core Platform Roles</h2>
        
        <p className="roles-description">
          Growth Rick's platform is organized around four AI-powered strategic roles that work together to drive B2B customer acquisition:
        </p>
        
        <div className="roles-grid">
          <div className="role-card">
            <div className="role-number">1</div>
            <div className="role-content">
              <h3>Market Insights Specialist</h3>
              <ul>
                <li>Market research and buyer behavior analysis</li>
                <li>Trend identification and opportunity mapping</li>
                <li>Competitive landscape assessment</li>
                <li>Buyer journey analysis</li>
              </ul>
            </div>
          </div>
          
          <div className="role-card">
            <div className="role-number">2</div>
            <div className="role-content">
              <h3>Content Strategist</h3>
              <ul>
                <li>Brand voice development and consistency</li>
                <li>Thought leadership development</li>
                <li>Multimedia content planning</li>
                <li>Solution storytelling and narrative development</li>
              </ul>
            </div>
          </div>
          
          <div className="role-card">
            <div className="role-number">3</div>
            <div className="role-content">
              <h3>Growth Marketer</h3>
              <ul>
                <li>Channel strategy and optimization</li>
                <li>Performance marketing management</li>
                <li>Budget allocation and ROAS optimization</li>
                <li>A/B testing and experimentation</li>
              </ul>
            </div>
          </div>
          
          <div className="role-card">
            <div className="role-number">4</div>
            <div className="role-content">
              <h3>Demand Generation Designer</h3>
              <ul>
                <li>Personalization strategy implementation</li>
                <li>Lead generation optimization</li>
                <li>Conversion rate optimization</li>
                <li>Lead nurturing and pipeline acceleration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreRoles;

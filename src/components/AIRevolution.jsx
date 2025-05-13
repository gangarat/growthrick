import React from 'react';
import '../styles/AIRevolution.css';

const AIRevolution = () => {
  return (
    <section className="ai-revolution">
      <div className="container">
        <div className="revolution-header">
          <h2 className="section-subtitle">Growth Rick: The AI-Powered Marketing Revolution</h2>
          <h3 className="section-title">Our AI Ecosystem: Strategic Intelligence in Action</h3>
        </div>
        
        <div className="ecosystem-section">
          
          <div className="ecosystem-grid">
            <div className="ecosystem-card">
              <div className="card-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h4>Customer Intelligence Agents</h4>
              <p>Analyze market trends, competitor positioning, and audience behaviors to uncover actionable insights that human marketers might miss</p>
            </div>
            
            <div className="ecosystem-card">
              <div className="card-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h4>Creative Development Agents</h4>
              <p>Generate and refine compelling content across formats—from social media posts to long-form articles—always aligned with your brand voice</p>
            </div>
            
            <div className="ecosystem-card">
              <div className="card-icon">
                <i className="fas fa-user-tag"></i>
              </div>
              <h4>Personalization Suite</h4>
              <p>Tailors messaging to individual customer journeys, increasing relevance and emotional connection at every touchpoint</p>
            </div>
            
            <div className="ecosystem-card">
              <div className="card-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h4>Performance Optimization Agents</h4>
              <p>Continuously learn from campaign metrics, automatically adjusting strategies to maximize ROI</p>
            </div>
          </div>
        </div>
        
        <div className="advantage-card">
          <div className="advantage-content">
            <h3 className="advantage-title">The Growth Rick Advantage: Human Expertise Amplified</h3>
            <p className="advantage-text">
              Experience the future of marketing with Growth Rick—where artificial intelligence and human creativity converge to drive exceptional growth for forward-thinking brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRevolution;

import React from 'react';
import '../styles/AIRevolution.css';
import { FiSearch, FiEdit3, FiUsers, FiBarChart, FiRefreshCw, FiShield, FiBarChart2 } from 'react-icons/fi';

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
                <FiSearch size={24} />
              </div>
              <h4>Customer Intelligence Agents</h4>
              <p>Analyze market trends, competitor positioning, and audience behaviors to uncover actionable insights that human marketers might miss</p>
            </div>
            
            <div className="ecosystem-card">
              <div className="card-icon">
                <FiEdit3 size={24} />
              </div>
              <h4>Creative Development Agents</h4>
              <p>Generate and refine compelling content across formats—from social media posts to long-form articles—always aligned with your brand voice</p>
            </div>
            
            <div className="ecosystem-card">
              <div className="card-icon">
                <FiUsers size={24} />
              </div>
              <h4>Personalization Suite</h4>
              <p>Tailors messaging to individual customer journeys, increasing relevance and emotional connection at every touchpoint</p>
            </div>
            
            <div className="ecosystem-card">
              <div className="card-icon">
                <FiBarChart size={24} />
              </div>
              <h4>Performance Optimization Agents</h4>
              <p>Continuously learn from campaign metrics, automatically adjusting strategies to maximize ROI</p>
            </div>
          </div>
        </div>
        
        <div className="advantage-section">
  <h3 className="advantage-title">The Growth Rick Advantage: Human Expertise Amplified</h3>
  <div className="advantage-grid">
    <div className="advantage-card">
      <div className="card-icon"><FiUsers size={32} color="#9333EA" /></div>
      <h4>Human-AI Collaboration</h4>
      <p>Combine the strategic vision of marketing experts with the analytical power of AI agents for superior results.</p>
    </div>
    <div className="advantage-card">
      <div className="card-icon"><FiRefreshCw size={32} color="#9333EA" /></div>
      <h4>Always-On Optimization</h4>
      <p>Our platform constantly learns and adapts, ensuring campaigns are always performing at their peak.</p>
    </div>
    <div className="advantage-card">
      <div className="card-icon"><FiShield size={32} color="#9333EA" /></div>
      <h4>Brand Consistency</h4>
      <p>Maintain a unified brand voice and standards across every channel, every campaign, every time.</p>
    </div>
    <div className="advantage-card">
      <div className="card-icon"><FiBarChart2 size={32} color="#9333EA" /></div>
      <h4>Data-Driven Creativity</h4>
      <p>Leverage insights and analytics to fuel innovative, high-impact marketing ideas that drive growth.</p>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default AIRevolution;

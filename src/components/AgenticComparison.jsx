import React from 'react';
import '../styles/AgenticComparison.css';

const AgenticComparison = () => {
  return (
    <section className="agentic-comparison">
      <div className="container">
        <h2 className="section-title">Why Choose Agentic AI Marketing?</h2>
        
        <div className="comparison-grid">
          {/* Traditional Marketing Column */}
          <div className="comparison-column">
            <h3 className="column-title">Traditional Marketing</h3>
            
            <div className="comparison-card">
              <h4>Slow Manual Processes</h4>
              <p>Limited by time-consuming traditional process of creating, strategizing and optimizing content and adverts manually, preventing marketing process to keep up with business needs</p>
            </div>
            
            <div className="comparison-card">
              <h4>Generic one-size fits all approach</h4>
              <p>Lacks personalization and customization based on evolving business needs and reactive optimization instead of proactive optimization of campaigns</p>
            </div>
            
            <div className="comparison-card">
              <h4>Inconsistent Execution</h4>
              <p>Quality varies based on team availability and human bandwidth factors. Creative block also causes mediocre quality of content or campaigns at times</p>
            </div>
            
            <div className="comparison-card">
              <h4>Static Capabilities</h4>
              <p>Unable to adapt to specific needs or evolve with changing market needs, never enabling the brand to reach its full potential of awareness, engagement and activation</p>
            </div>
            
            <div className="comparison-card">
              <h4>Limited by human bandwidth</h4>
              <p>Cannot efficiently scale content or campaign production keeping up with the business needs and attention to other clients simultaneously</p>
            </div>
          </div>
          
          {/* Growth Rick's Agentic AI Column */}
          <div className="comparison-column ai-column">
            <h3 className="column-title">Growth Rick's Agentic AI Approach</h3>
            
            <div className="comparison-card">
              <h4>AI-powered speed and efficiency</h4>
              <p>Delivers content, creatives or reports in hours which would take traditional agencies days, if not weeks to develop. Can setup customized agents for business needs in days</p>
            </div>
            
            <div className="comparison-card">
              <h4>Hyper-personalized at scale</h4>
              <p>Ability to create personalized content and campaigns for each product, buyer persona, campaign type or channel simultaneously while sticking with brand guardrails</p>
            </div>
            
            <div className="comparison-card">
              <h4>Virtually unlimited execution capacity</h4>
              <p>Can scale or optimize marketing activities at all times of the day, week or the year. No holidays, no 'family emergencies' will cause any challenges to campaigns</p>
            </div>
            
            <div className="comparison-card">
              <h4>Consistent quality across all channels</h4>
              <p>Maintains brand standards and performance metrics reliably while ensuring the quality, tone, quantum of content required by the client is consistent.</p>
            </div>
            
            <div className="comparison-card">
              <h4>Adaptable agents that evolve with business</h4>
              <p>AI systems that learn and improve with every campaign, every interaction, every input and every feedback that enables the agent to evolve, very similar to a full time employees learning</p>
            </div>
            
            <div className="comparison-card">
              <h4>Custom agents developed for unique challenges</h4>
              <p>Developing specialized AI solutions tailored to business needs and requirements in an agile manner and with complete integration into clients marketing and tech stack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticComparison;

import React from 'react';
import { FiClock, FiUser, FiZap, FiLayers, FiRepeat, FiCheckCircle } from 'react-icons/fi';
import { MdOutlineDynamicFeed } from 'react-icons/md';
import '../styles/AgenticComparison.css';

const AgenticComparison = () => {
  return (
    <section className="agentic-comparison">
      <h2 className="comparison-title">Why Choose Agentic AI Marketing?</h2>
      <div className="comparison-grid">
        {/* Traditional Marketing Column */}
        <div className="comparison-column traditional">
          <div className="comparison-header traditional-header">Traditional Marketing</div>
          <div className="comparison-cards-container">
            <div className="comparison-card">
              <h4><span className="comparison-icon"><FiClock size={18} /></span>Slow Manual Processes</h4>
              <p>Limited by time consuming traditional process of creating, strategizing and optimizing content and adverts manually, preventing marketing process to keep up with business needs</p>
            </div>
            
            <div className="comparison-card">
              <h4><span className="comparison-icon"><FiUser size={18} /></span>Generic one-size fits all approach</h4>
              <p>Lacks personalization and customization based on evolving business needs and reactive optimization instead of proactive optimization of campaigns</p>
            </div>
            
            <div className="comparison-card">
              <h4><span className="comparison-icon"><FiCheckCircle size={18} /></span>Inconsistent Execution</h4>
              <p>Quality varies based on team availability and human bandwidth factors. Creative block also causes mediocre quality of content or campaigns at times</p>
            </div>
            
            <div className="comparison-card">
              <h4><span className="comparison-icon"><FiLayers size={18} /></span>Static Capabilities</h4>
              <p>Unable to adapt to specific needs or evolve with changing market needs, never enabling the brand to reach its full potential of awareness, engagement and activation</p>
            </div>
            
            <div className="comparison-card">
              <h4><span className="comparison-icon"><FiRepeat size={18} /></span>Limited by human bandwidth</h4>
              <p>Cannot efficiently scale content or campaign production keeping up with the business needs and attention to other clients simultaneously</p>
            </div>
          </div>
        </div>

        {/* Growth Rick's Agentic AI Approach Column */}
        <div className="comparison-column agentic">
          <div className="comparison-header agentic-header">Growth Rick's Agentic AI Approach</div>
          <div className="comparison-cards-container">
            <div className="comparison-card">
              <h4><span className="comparison-icon"><FiZap size={18} /></span>AI-powered speed and efficiency</h4>
              <p>Delivers content, creatives or reports in hours which would take traditional agencies days, if not weeks to develop. Can setup customized agents for business needs in days</p>
            </div>
            
            <div className="comparison-card">
              <h4><span className="comparison-icon"><FiLayers size={18} /></span>Hyper-personalized at scale</h4>
              <p>Ability to create personalized content and campaigns for each product, buyer persona, campaign type or channel simultaneously while sticking with brand guardrails</p>
            </div>
            
            <div className="comparison-card">
              <h4><span className="comparison-icon"><FiRepeat size={18} /></span>Virtually unlimited execution capacity</h4>
              <p>Can scale or optimize marketing activities at all times of the day, week or the year. No holidays, no 'family emergencies' will cause any challenges to campaigns</p>
            </div>
            
            <div className="comparison-card">
              <h4><span className="comparison-icon"><FiCheckCircle size={18} /></span>Consistent quality across all channels</h4>
              <p>Maintains brand standards and performance metrics reliably while ensuring the quality, tone, quantum of content required by the client is consistent.</p>
            </div>
            
            <div className="comparison-card">
              <h4><span className="comparison-icon"><MdOutlineDynamicFeed size={18} /></span>Adaptable agents that evolve with business</h4>
              <p>AI systems that learn and improve with every campaign, every interaction, every input and every feedback that enables the agent to evolve, very similar to a full time employees learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticComparison;

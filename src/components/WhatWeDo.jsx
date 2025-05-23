import '../styles/WhatWeDo.css';
import { FiCheckCircle, FiUsers, FiZap, FiTrendingUp } from 'react-icons/fi';

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="container">
        <h2 className="section-title what-we-do-title">What We Do</h2>
        <p className="section-description text-justify content-block">
          At Growth Rick, we're revolutionizing how brands approach customer acquisition, branding and retention.
          Our AI-powered platform harnesses 50 specialized marketing agents to
          deliver hyper-personalized, data-driven campaigns that drive measurable results.
        </p>
        
        <div className="key-benefits">
          <h2 className="section-title">Key Benefits</h2>
          <div className="benefits-grid">
  <div className="benefit-card">
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
      <FiCheckCircle size={40} color="#9333EA" />
    </div>
    <h4>Precision Targeting</h4>
    <p>Reach the right prospects at the right time with AI-driven account insights</p>
  </div>
  <div className="benefit-card">
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
      <FiUsers size={40} color="#9333EA" />
    </div>
    <h4>Content Excellence</h4>
    <p>Generate high-converting assets across all digital channels</p>
  </div>
  <div className="benefit-card">
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
      <FiZap size={40} color="#9333EA" />
    </div>
    <h4>Accelerated Growth</h4>
    <p>Shorten sales cycles and increase conversion rates</p>
  </div>
  <div className="benefit-card">
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
      <FiTrendingUp size={40} color="#9333EA" />
    </div>
    <h4>Scalable<br />Solutions</h4>
    <p>Expand marketing efforts without expanding headcount</p>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

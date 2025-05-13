import '../styles/WhatWeDo.css';

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="container">
        <h2>What We Do</h2>
        <p className="section-description">
          At Growth Rick, we're revolutionizing how B2B brands approach customer
          acquisition. Our AI-powered platform harnesses 26 specialized marketing agents to
          deliver hyper-personalized, data-driven campaigns that drive measurable results.
        </p>
        
        <div className="key-benefits">
          <h3>Key Benefits</h3>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h4>Precision Targeting</h4>
              <p>Reach the right prospects at the right time with AI-driven account insights</p>
            </div>
            <div className="benefit-card">
              <h4>Content Excellence</h4>
              <p>Generate high-converting assets across all digital channels</p>
            </div>
            <div className="benefit-card">
              <h4>Accelerated Growth</h4>
              <p>Shorten sales cycles and increase conversion rates</p>
            </div>
            <div className="benefit-card">
              <h4>Scalable Solutions</h4>
              <p>Expand marketing efforts without expanding headcount</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

import { Link } from 'react-router-dom';
import '../styles/CaseStudies.css';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 'vpersonalize',
      client: 'vPersonalize',
      challenge: 'vPersonalize, a customizable fashion platform, struggled with high CAC and low conversion rates due to ineffective targeting and generic messaging. They needed a solution to deliver personalized marketing at scale while maintaining their unique brand voice.',
      solution: [
        'Implemented HypeCraft AI to create personalized ABM campaigns targeting key prospects',
        'Deployed Content Flow AI to generate compelling website copy highlighting their solution\'s benefits',
        'Utilized Social Media Visual Creator to develop platform-specific visual content showcasing their platform',
        'Leveraged Market Pulse to identify emerging industry trends and buyer preferences'
      ],
      results: [
        '63% increase in conversion rates',
        '41% reduction in customer acquisition costs',
        '47% improvement in email engagement metrics',
        '2.8x increase in social media engagement'
      ],
      testimonial: '\"Growth Rick\'s AI agents understood our unique value proposition and translated it into personalized marketing that resonated with our target audience. The results have been nothing short of transformative."',
      author: 'CEO, vPersonalize'
    },
    {
      id: 'illuvia',
      client: 'Illuvia',
      challenge: 'Illuvia, a premium SaaS platform, was struggling to differentiate itself in a crowded market and efficiently target high-value prospects who would appreciate their premium positioning.',
      solution: [
        'Deployed Insight Forge to identify high-value account segments and their specific pain points',
        'Used PitchCraft AI to develop contextual value propositions for different buyer personas',
        'Implemented Ad Copy Generator to create high-converting paid media assets',
        'Leveraged Content Performance Analyzer to continuously optimize messaging and creative'
      ],
      results: [
        '52% increase in qualified lead generation',
        '38% improvement in ROAS across digital channels',
        '44% reduction in customer acquisition costs',
        '73% increase in sales pipeline velocity'
      ],
      testimonial: '\"The Growth Rick team understood our premium positioning and helped us communicate our value to exactly the right audience. Their AI-powered approach delivered personalization at a scale we couldn\'t have achieved otherwise."',
      author: 'Marketing Director, Illuvia'
    },
    {
      id: 'harmony-ai',
      client: 'Harmony AI',
      challenge: 'Harmony AI, an AI productivity tool for creative professionals, needed to rapidly scale customer acquisition while educating the market about their innovative solution. They faced challenges in targeting the right audience segments and explaining their complex value proposition.',
      solution: [
        'Utilized Competitive Analysis Tool to identify market gaps and positioning opportunities',
        'Deployed Content Flow AI to create educational content explaining AI productivity benefits',
        'Implemented Video Script Generator for product demos and tutorials',
        'Used Multi-Channel Campaign Planner to orchestrate a cohesive launch strategy'
      ],
      results: [
        '83% increase in qualified lead generation',
        '47% reduction in sales cycle length',
        '56% improvement in demo-to-signup conversion',
        '3.2x increase in organic traffic through educational content'
      ],
      testimonial: '\"As an AI company ourselves, we had high standards for what AI marketing could deliver. Growth Rick exceeded our expectations, helping us explain our complex product in simple terms and reaching exactly the right audience segments."',
      author: 'COO, Harmony AI'
    }
  ];

  return (
    <main className="case-studies-page">
      <section className="case-studies-hero">
        <div className="container">
          <h1>Case Studies</h1>
          <p className="subtitle">See how Growth Rick has transformed B2B marketing for leading companies</p>
        </div>
      </section>

      <section className="case-studies-list">
        <div className="container">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`case-study-card ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="case-study-content">
                <h2>{study.client}</h2>
                
                <div className="case-study-section">
                  <h3>Challenge</h3>
                  <p>{study.challenge}</p>
                </div>

                <div className="case-study-section">
                  <h3>Solution</h3>
                  <ul>
                    {study.solution.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="case-study-section">
                  <h3>Results</h3>
                  <ul className="results-list">
                    {study.results.map((result, i) => (
                      <li key={i}>
                        <span className="result-icon">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="testimonial">
                  <p className="quote">{study.testimonial}</p>
                  <p className="author">— {study.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to transform your B2B marketing?</h2>
          <p>See what Growth Rick can do for your business</p>
          <Link to="/schedule" className="cta-button">Schedule a Free Consultation</Link>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;

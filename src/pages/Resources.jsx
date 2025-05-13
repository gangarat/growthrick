import { Link } from 'react-router-dom';
import { FaFileAlt, FaTools, FaVideo, FaDownload, FaArrowRight } from 'react-icons/fa';
import '../styles/Resources.css';

const Resources = () => {
  const whitepapers = [
    {
      id: 1,
      title: 'The D2C Growth Playbook: AI-Powered Strategies for Sustainable Customer Acquisition',
      description: 'An in-depth guide to using AI to overcome the most common growth challenges facing D2C brands today, with actionable frameworks and case studies.',
      type: 'PDF',
      pages: '42',
      icon: <FaFileAlt className="resource-icon" />,
      category: 'whitepaper'
    },
    {
      id: 2,
      title: 'Personalization at Scale: How AI is Transforming D2C Customer Experiences',
      description: 'A comprehensive analysis of how leading D2C brands are using AI to deliver personalized experiences across the entire customer journey.',
      type: 'PDF',
      pages: '36',
      icon: <FaFileAlt className="resource-icon" />,
      category: 'whitepaper'
    },
    {
      id: 3,
      title: 'The Future of Creative: AI-Generated Content for D2C Brands',
      description: 'An exploration of how AI is transforming creative production for D2C brands, with examples, best practices, and ethical considerations.',
      type: 'PDF',
      pages: '28',
      icon: <FaFileAlt className="resource-icon" />,
      category: 'whitepaper'
    }
  ];

  const tools = [
    {
      id: 1,
      title: 'CAC Calculator',
      description: 'Calculate your true customer acquisition cost across channels and compare it to industry benchmarks.',
      icon: <FaTools className="resource-icon" />,
      category: 'tool',
      link: '/cac-calculator'
    },
    {
      id: 2,
      title: 'Personalization Readiness Assessment',
      description: 'Evaluate your brand\'s readiness to implement AI-powered personalization and identify key opportunities.',
      icon: <FaTools className="resource-icon" />,
      category: 'tool',
      link: '/personalization-assessment'
    },
    {
      id: 3,
      title: 'Channel Mix Optimizer',
      description: 'Input your current marketing allocation and performance metrics to receive AI-powered recommendations for optimal channel distribution.',
      icon: <FaTools className="resource-icon" />,
      category: 'tool',
      link: '/channel-mix-optimizer'
    }
  ];

  const webinars = [
    {
      id: 1,
      title: 'Mastering Customer Acquisition in a Post-Cookie World',
      description: 'Join Growth Rick CEO Vamsi Krishna Kaki and a panel of D2C marketing leaders as they discuss strategies for effective targeting in the new privacy landscape.',
      date: 'June 15, 2025',
      duration: '45 min',
      icon: <FaVideo className="resource-icon" />,
      category: 'webinar',
      link: '/webinar/customer-acquisition-post-cookie'
    },
    {
      id: 2,
      title: 'AI Creative Testing: Maximizing Performance Through Automated Experimentation',
      description: 'Learn how leading D2C brands are using AI to test and optimize creative assets at scale, dramatically improving campaign performance.',
      date: 'July 7, 2025',
      duration: '52 min',
      icon: <FaVideo className="resource-icon" />,
      category: 'webinar',
      link: '/webinar/ai-creative-testing'
    },
    {
      id: 3,
      title: 'Building a Data-Driven D2C Growth Engine',
      description: 'Discover the essential data infrastructure and analysis techniques needed to power effective AI marketing for your D2C brand.',
      date: 'July 22, 2025',
      duration: '38 min',
      icon: <FaVideo className="resource-icon" />,
      category: 'webinar',
      link: '/webinar/data-driven-growth'
    }
  ];

  return (
    <main className="resources-page">
      {/* Hero Section */}
      <section className="resources-hero">
        <div className="container">
          <h1>Resources</h1>
          <p className="subtitle">Expert insights, tools, and guides to accelerate your D2C growth</p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="resources-tabs">
        <div className="container">
          <div className="tabs-container">
            <button className="tab-btn active">All Resources</button>
            <button className="tab-btn">Whitepapers</button>
            <button className="tab-btn">Tools</button>
            <button className="tab-btn">Webinars</button>
          </div>
        </div>
      </div>

      {/* Whitepapers Section */}
      <section className="resources-section">
        <div className="container">
          <div className="section-header">
            <h2>Whitepapers</h2>
            <p>In-depth guides and research on AI-powered D2C growth strategies</p>
          </div>
          
          <div className="resources-grid">
            {whitepapers.map(whitepaper => (
              <div key={whitepaper.id} className="resource-card">
                <div className="resource-icon-container">
                  {whitepaper.icon}
                </div>
                <div className="resource-content">
                  <h3>{whitepaper.title}</h3>
                  <p className="resource-description">{whitepaper.description}</p>
                  <div className="resource-meta">
                    <span className="resource-type">{whitepaper.type}</span>
                    <span className="resource-pages">{whitepaper.pages} pages</span>
                  </div>
                  <button className="download-btn">
                    <FaDownload className="download-icon" />
                    Download Whitepaper
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="resources-section tools-section">
        <div className="container">
          <div className="section-header">
            <h2>Interactive Tools</h2>
            <p>Free tools to help you optimize your marketing strategy</p>
          </div>
          
          <div className="tools-grid">
            {tools.map(tool => (
              <div key={tool.id} className="tool-card">
                <div className="tool-icon-container">
                  {tool.icon}
                </div>
                <h3>{tool.title}</h3>
                <p className="tool-description">{tool.description}</p>
                <Link to={tool.link} className="tool-link">
                  Try Now <FaArrowRight className="arrow-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="resources-section">
        <div className="container">
          <div className="section-header">
            <h2>On-Demand Webinars</h2>
            <p>Watch our expert-led sessions on AI-powered marketing strategies</p>
          </div>
          
          <div className="webinars-grid">
            {webinars.map(webinar => (
              <div key={webinar.id} className="webinar-card">
                <div className="webinar-video">
                  <div className="play-button">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="webinar-content">
                  <div className="webinar-meta">
                    <span className="webinar-date">{webinar.date}</span>
                    <span className="webinar-duration">{webinar.duration}</span>
                  </div>
                  <h3>{webinar.title}</h3>
                  <p className="webinar-description">{webinar.description}</p>
                  <Link to={webinar.link} className="watch-now">
                    Watch Now <FaArrowRight className="arrow-icon" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="resources-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your D2C Marketing?</h2>
            <p>Discover how Growth Rick's AI-powered platform can help you acquire and retain more customers.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-btn primary">Schedule a Demo</Link>
              <Link to="/pricing" className="cta-btn secondary">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resources;

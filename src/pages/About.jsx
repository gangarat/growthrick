import { Link } from 'react-router-dom';
// Using a placeholder image URL
const vamsiPhoto = 'https://via.placeholder.com/300x300?text=Vamsi+Krishna+Kaki';
import '../styles/About.css';

const About = () => {
  const values = [
    {
      title: 'Innovation Through Intelligence',
      description: 'We constantly push the boundaries of what\'s possible in marketing through advanced AI research and application, staying at the forefront of marketing technology.'
    },
    {
      title: 'Results-Driven Approach',
      description: 'Everything we do is measured by its impact on our clients\' growth metrics. We\'re obsessed with generating measurable, sustainable results.'
    },
    {
      title: 'Human-AI Collaboration',
      description: 'We believe the future of marketing lies in the perfect balance between human creativity and AI capabilities, creating solutions that combine the best of both worlds.'
    },
    {
      title: 'Continuous Learning',
      description: 'Our AI systems and our team are committed to continuous improvement, constantly evolving based on performance data and emerging best practices.'
    },
    {
      title: 'Client Partnership',
      description: 'We view ourselves as an extension of our clients\' teams, deeply invested in their success and committed to their long-term growth.'
    }
  ];

  const methodology = [
    {
      title: 'Discovery',
      description: 'We begin by deeply understanding your brand, products, customers, and growth challenges through data analysis and stakeholder interviews.'
    },
    {
      title: 'Strategy Development',
      description: 'Our AI systems analyze your market position, competitive landscape, and growth opportunities to develop a comprehensive acquisition strategy.'
    },
    {
      title: 'AI Configuration',
      description: 'We configure our suite of AI agents specifically for your brand, products, and target audience, ensuring alignment with your unique value proposition.'
    },
    {
      title: 'Campaign Execution',
      description: 'Our platform deploys coordinated campaigns across all relevant channels, continuously monitoring performance and optimizing in real-time.'
    },
    {
      title: 'Analysis & Optimization',
      description: 'We provide transparent reporting on all key metrics, with our AI systems continuously learning and improving based on performance data.'
    }
  ];

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Growth Rick</h1>
          <p className="subtitle">Pioneering the future of AI-powered marketing</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <h2>Our Story</h2>
          <p className="story-intro">Transforming Marketing Through Agentic AI</p>
          
          <div className="story-content">
            <p>Growth Rick was founded in 2025 by Vamsi Krishna & Tathagat Bagchi, digital marketing veterans who previously worked with companies like Zomato, Flipkart, Inmobi and Leena.ai. Recognizing that traditional marketing approaches were failing to meet the unique needs of brands in an increasingly complex digital landscape they built a platform of specialized AI marketing agents designed specifically for marketing led growth.</p>
            <p>What began as an experimental project quickly demonstrated unprecedented results for early clients, leading to the development of our comprehensive Growth Rick platform. Today, we're proud to serve innovative brands across multiple industries, helping them achieve sustainable growth in an increasingly competitive landscape.</p>
            <p>Our mission is simple: to empower brands with AI-driven marketing solutions that deliver measurable, sustainable growth through intelligent automation and data-driven strategies.</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="our-methodology">
        <div className="container">
          <h2>Our Methodology</h2>
          <div className="methodology-steps">
            {methodology.map((step, index) => (
              <div key={index} className="methodology-step">
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Marketing?</h2>
          <p>Discover how Growth Rick's AI-powered solutions can drive growth for your brand</p>
          <Link to="/schedule" className="cta-button">Schedule a Free Consultation</Link>
        </div>
      </section>
    </main>
  );
};

export default About;

import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      id: 'strategic-planning',
      title: 'Strategic Planning',
      description: 'Data-driven strategies to fuel your D2C brand\'s growth and market positioning',
      items: [
        {
          title: 'Growth Strategy Development',
          description: 'We create comprehensive growth roadmaps tailored to your D2C brand\'s unique challenges and opportunities. Our AI-powered analysis identifies the most promising acquisition channels, audience segments, and messaging approaches to drive sustainable growth.'
        },
        {
          title: 'Brand Positioning',
          description: 'Our AI agents analyze your competitive landscape, customer perceptions, and market trends to develop a distinctive brand position that resonates with your target audience and creates a sustainable competitive advantage.'
        },
        {
          title: 'Customer Journey Mapping',
          description: 'We use advanced AI to map the complete customer journey, identifying key touchpoints, friction points, and opportunities for personalization to create seamless experiences that drive conversion and loyalty.'
        }
      ]
    },
    {
      id: 'performance-marketing',
      title: 'Performance Marketing',
      description: 'Data-driven campaigns that deliver measurable results and maximize ROAS',
      items: [
        {
          title: 'Paid Media Optimization',
          description: 'Our AI agents continuously monitor and optimize your paid media campaigns across all channels, ensuring maximum ROAS and efficient customer acquisition. We leverage predictive analytics to identify the best-performing creative, audiences, and placements.'
        },
        {
          title: 'Search Engine Marketing',
          description: 'Growth Rick\'s specialized search agents optimize both paid and organic search strategies, identifying high-intent keywords, optimizing landing pages, and managing bid strategies to maximize visibility and conversion.'
        },
        {
          title: 'Social Media Marketing',
          description: 'Our platform delivers platform-optimized content, engagement strategies, and paid campaigns across all social channels, creating a cohesive brand presence that drives awareness, consideration, and conversion.'
        }
      ]
    },
    {
      id: 'creative-development',
      title: 'Creative Development',
      description: 'Compelling content and visuals that capture attention and drive engagement',
      items: [
        {
          title: 'AI-Generated Content',
          description: 'Our advanced language models create compelling content across all formats—copy, blog posts, product descriptions, emails, and social media—tailored to your brand voice and optimized for conversion.'
        },
        {
          title: 'Visual Asset Creation',
          description: 'Growth Rick\'s visual AI agents generate stunning product imagery, lifestyle content, ad creative, and social assets that maintain brand consistency while driving engagement and conversion.'
        },
        {
          title: 'Video Production',
          description: 'From concept development to script generation and optimization, our AI tools streamline the video production process, creating compelling video content that showcases your products and brand story.'
        }
      ]
    },
    {
      id: 'conversion-optimization',
      title: 'Conversion Optimization',
      description: 'Data-driven strategies to maximize conversion rates and customer lifetime value',
      items: [
        {
          title: 'Landing Page Optimization',
          description: 'Our AI analyzes user behavior and tests variations to continuously improve landing page performance, identifying the optimal layout, messaging, and offers to maximize conversion rates.'
        },
        {
          title: 'Email Marketing Automation',
          description: 'Growth Rick\'s email agents create personalized, behavior-triggered email campaigns that nurture prospects, convert customers, and drive repeat purchases through relevant, timely communication.'
        },
        {
          title: 'Shopping Experience Enhancement',
          description: 'We optimize the complete shopping experience, from product discovery to checkout, implementing personalization, social proof, and friction reduction strategies to maximize conversion rates.'
        }
      ]
    }
  ];

  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p className="subtitle">AI-powered marketing solutions designed to accelerate your D2C brand's growth</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {services.map((service, index) => (
            <div key={service.id} className={`service-category ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="service-category-header">
                <h2>{service.title}</h2>
                <p className="category-description">{service.description}</p>
              </div>
              
              <div className="service-items">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="service-item">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to transform your marketing?</h2>
          <p>Discover how Growth Rick's AI-powered solutions can drive growth for your brand</p>
          <Link to="/schedule" className="cta-button">Schedule a Free Consultation</Link>
        </div>
      </section>
    </main>
  );
};

export default Services;

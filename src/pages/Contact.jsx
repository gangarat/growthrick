import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    budget: '',
    challenge: '',
    hearAboutUs: '',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend
    alert('Thank you for your message! We\'ll be in touch soon.');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      website: '',
      budget: '',
      challenge: '',
      hearAboutUs: '',
      message: ''
    });
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'What makes Growth Rick different from traditional marketing agencies?',
      answer: 'Unlike traditional agencies that rely primarily on human teams, Growth Rick leverages specialized AI agents to execute marketing functions at scale while maintaining quality and brand consistency. This allows us to deliver more personalized, data-driven marketing at a fraction of the time and cost.'
    },
    {
      question: 'What types of businesses do you work with?',
      answer: 'We specialize in working with B2B brands across various industries, including SaaS, technology, professional services, manufacturing, and financial services. Our platform is particularly effective for companies with complex sales cycles and multiple buyer personas.'
    },
    {
      question: 'What\'s your pricing model?',
      answer: 'Growth Rick operates on a tiered subscription model based on your company size and marketing needs. Each plan includes access to our AI platform and a dedicated strategy team. We offer flexible plans starting at $3,500/month, with enterprise solutions available for larger brands.'
    },
    {
      question: 'How quickly can we expect to see results?',
      answer: 'While every business is different, most of our clients begin seeing significant improvements in key metrics within the first 30-60 days. Our platform continually learns and optimizes based on performance data, so results typically improve over time.'
    },
    {
      question: 'Do you replace our existing marketing team?',
      answer: 'No—we enhance your team\'s capabilities. Growth Rick works best as an extension of your existing marketing function, allowing your team to focus on strategy and creative direction while our AI agents handle execution and optimization.'
    }
  ];

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Ready to Accelerate Your D2C Growth?</h1>
          <p className="subtitle">Fill out the form below to schedule a free strategy session.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company*</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="website">Website URL*</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Current Monthly Marketing Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="Under $5,000">Under $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="Over $50,000">Over $50,000</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="challenge">Primary Growth Challenge</label>
                  <select
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="Lead Generation">Lead Generation</option>
                    <option value="Customer Acquisition Cost">High Customer Acquisition Cost</option>
                    <option value="Conversion Rate">Low Conversion Rate</option>
                    <option value="Marketing ROI">Proving Marketing ROI</option>
                    <option value="Scaling">Scaling Marketing Efforts</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="hearAboutUs">How did you hear about us?</label>
                  <select
                    id="hearAboutUs"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="Search Engine">Search Engine (Google, Bing, etc.)</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Referral">Referral</option>
                    <option value="Podcast">Podcast</option>
                    <option value="Event">Event or Conference</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Schedule My Strategy Session
                  <FaArrowRight className="icon" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Have questions? Reach out to us directly using the information below.</p>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:growth@growthrick.ai">growth@growthrick.ai</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:16505557428">(650) 555-7428</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3>Address</h3>
                  <p>548 Market St, San Francisco, CA 94104</p>
                </div>
              </div>

              <div className="office-hours">
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <p className="section-subtitle">Find answers to common questions about our services and process.</p>
          
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-${index}`}
                >
                  {faq.question}
                  <span className="faq-toggle"></span>
                </button>
                <div 
                  id={`faq-${index}`}
                  className="faq-answer"
                  style={{
                    maxHeight: activeFaq === index ? '500px' : '0',
                    opacity: activeFaq === index ? '1' : '0'
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribed with email:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset subscription message after 5 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Company */}
            <div className="footer-widget">
              <h3 className="widget-title">Company</h3>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/about#team">Our Team</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-widget">
              <h3 className="widget-title">Services</h3>
              <ul className="footer-links">
                <li><Link to="/services#strategy">Strategy Development</Link></li>
                <li><Link to="/services#performance">Performance Marketing</Link></li>
                <li><Link to="/services#creative">Creative Development</Link></li>
                <li><Link to="/services#conversion">Conversion Optimization</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-widget">
              <h3 className="widget-title">Resources</h3>
              <ul className="footer-links">
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
                <li><Link to="/resources#whitepapers">Whitepapers</Link></li>
                <li><Link to="/resources#webinars">Webinars</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-widget">
              <h3 className="widget-title">Legal</h3>
              <ul className="footer-links">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service">Terms of Service</Link></li>
                <li><Link to="/cookie-policy">Cookie Policy</Link></li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="footer-widget">
              <h3 className="widget-title">Connect With Us</h3>
              <div className="social-links">
                <a href="https://linkedin.com/company/growthrick" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="social-icon" />
                </a>
                <a href="https://twitter.com/growthrick" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter className="social-icon" />
                </a>
                <a href="https://instagram.com/growthrick" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="social-icon" />
                </a>
                <a href="https://youtube.com/growthrick" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutube className="social-icon" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-widget newsletter-widget">
              <h3 className="widget-title">Newsletter</h3>
              <p className="newsletter-text">Subscribe to receive the latest D2C growth insights and AI marketing trends.</p>
              
              {isSubscribed ? (
                <div className="subscription-success">
                  <FaEnvelope className="success-icon" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="newsletter-form">
                  <div className="form-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="newsletter-input"
                    />
                    <button type="submit" className="newsletter-btn">
                      <FaEnvelope className="btn-icon" />
                      <span>Subscribe</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            © {new Date().getFullYear()} Growth Rick. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

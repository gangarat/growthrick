import '../styles/Leadership.css';
import { FaLinkedin } from 'react-icons/fa';

const Leadership = () => {
  return (
    <section className="leadership">
      <div className="container">
        <h2>Our Leadership</h2>
        
        <div className="leadership-profile">
          <div className="profile-image">
            <img 
              src="https://media.licdn.com/dms/image/v2/C5603AQHCXErE1bRGfg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1610531762911?e=1752710400&v=beta&t=uSTDRHlI3htWWDmagtHgDWQ070LR7yVwumrYh0TGseI" 
              alt="Vamsi Krishna Kaki" 
              className="profile-photo" 
            />
          </div>
          <div className="profile-info">
            <h3>Vamsi Krishna Kaki</h3>
            <h4>Founder & CEO</h4>
            <p>
              A visionary entrepreneur with over 15 years of experience in digital marketing 
              and AI applications. Vamsi founded Growth Rick with a mission to revolutionize 
              how D2C brands approach customer acquisition through the power of agentic AI.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/vamsi-krishna-kaki-3a502229/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                {/* <FaLinkedin className="linkedin-icon" /> */}
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;

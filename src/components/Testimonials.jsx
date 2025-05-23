import '../styles/Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="text-center" style={{textAlign: 'center', margin: '0 auto 2rem', width: '100%'}}>What Our Clients Say</h2>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                "Growth Rick transformed our approach to customer acquisition. Their AI-powered 
                platform delivered personalization at scale that we simply couldn't achieve before, 
                resulting in a 52% increase in conversion rates within just three months."
              </p>
            </div>
            <div className="testimonial-author">
              <p className="author-name">CEO, vPersonalize</p>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                "The team at Growth Rick understands the unique challenges D2C brands face. 
                Their agentic AI solutions helped us identify and target high-value customer 
                segments with incredible precision, dramatically improving our ROI."
              </p>
            </div>
            <div className="testimonial-author">
              <p className="author-name">Marketing Director, Illuvia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

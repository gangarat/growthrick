import '../styles/Results.css';

const Results = () => {
  return (
    <section className="results">
      <div className="container">
        <h2>Driving Measurable Growth for Leading B2B Brands</h2>
        
        <div className="results-grid">
          <div className="result-card">
            <div className="result-number">47%</div>
            <p>average increase in conversion rates</p>
          </div>
          
          <div className="result-card">
            <div className="result-number">32%</div>
            <p>reduction in customer acquisition costs</p>
          </div>
          
          <div className="result-card">
            <div className="result-number">56%</div>
            <p>improvement in campaign personalization metrics</p>
          </div>
          
          <div className="result-card">
            <div className="result-number">3.8x</div>
            <p>average ROI on marketing spend</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;

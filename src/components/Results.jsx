import '../styles/Results.css';

const Results = () => {
  return (
    <section className="results">
      <div className="container">
        <h2 className="section-title">Driving Measurable Growth for Leading Brands</h2>
        
        <div className="results-grid">
          <div className="result-card">
            <div className="result-number">47%</div>
            <p>Average increase in conversion rates</p>
          </div>
          
          <div className="result-card">
            <div className="result-number">32%</div>
            <p>Reduction in customer acquisition costs</p>
          </div>
          
          <div className="result-card">
            <div className="result-number">56%</div>
            <p>Improvement in campaign metrics</p>
          </div>
          
          <div className="result-card">
            <div className="result-number">3.8x</div>
            <p>Average ROI on marketing spend</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;

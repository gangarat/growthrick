import '../styles/FeaturedClients.css';

const FeaturedClients = () => {
  return (
    <section className="featured-clients">
      <div className="container">
        <h2 className="section-title text-center" style={{textAlign: 'center', margin: '0 10rem 2rem'}}>Trusted by leading brands</h2>
        
        <div className="clients-grid">
          {/* Placeholder for client logos */}
          <div className="client-logo">vPersonalize</div>
          <div className="client-logo">BrokenAtom</div>
          <div className="client-logo">Illuvia</div>
          <div className="client-logo">Fego Innovations</div>
          <div className="client-logo">Especial Rentals</div>
          <div className="client-logo">Harmony AI</div>
          <div className="client-logo">Optimhire</div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClients;

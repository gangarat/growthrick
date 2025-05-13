import '../styles/FeaturedClients.css';

const FeaturedClients = () => {
  return (
    <section className="featured-clients">
      <div className="container">
        <h2>Trusted by Innovative B2B Brands</h2>
        
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

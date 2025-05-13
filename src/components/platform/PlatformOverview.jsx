import '../../styles/platform/PlatformOverview.css';

const PlatformOverview = () => {
  return (
    <section className="platform-overview">
      <div className="container">
        <h1>The Growth Rick Platform: AI-Powered Customer Acquisition</h1>
        
        <p className="overview-description">
          Growth Rick leverages cutting-edge AI to deliver unprecedented results for B2B brands:
        </p>
        
        <div className="ai-models">
          <h2>Core AI Models</h2>
          <div className="models-grid">
            <div className="model-card">
              <h3>Claude</h3>
              <p>Powers sophisticated content creation and copywriting</p>
            </div>
            
            <div className="model-card">
              <h3>Perplexity AI</h3>
              <p>Delivers in-depth market and research capabilities</p>
            </div>
            
            <div className="model-card">
              <h3>Grok</h3>
              <p>Provides advanced reasoning and data analysis capabilities</p>
            </div>
            
            <div className="model-card">
              <h3>Stability GPT</h3>
              <p>Creates stunning visuals and creative assets</p>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default PlatformOverview;

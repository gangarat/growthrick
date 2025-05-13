import '../../styles/platform/CoreRoles.css';

const CoreRoles = () => {
  const roles = [
    {
      id: 1,
      title: 'Market Insights Specialist',
      items: [
        'Market research and buyer behavior analysis',
        'Trend identification and opportunity mapping',
        'Competitive landscape assessment',
        'Buyer journey analysis'
      ]
    },
    {
      id: 2,
      title: 'Content Strategist',
      items: [
        'Brand voice development and consistency',
        'Thought leadership development',
        'Multimedia content planning',
        'Solution storytelling and narrative development'
      ]
    },
    {
      id: 3,
      title: 'Growth Marketer',
      items: [
        'Channel strategy and optimization',
        'Performance marketing management',
        'Budget allocation and ROAS optimization',
        'A/B testing and experimentation'
      ]
    },
    {
      id: 4,
      title: 'Demand Generation Designer',
      items: [
        'Personalization strategy implementation',
        'Lead generation optimization',
        'Conversion rate optimization',
        'Lead nurturing and pipeline acceleration'
      ]
    }
  ];

  return (
    <section className="core-roles">
      <div className="container">
        <h2>Core Platform Roles</h2>
        
        <p className="roles-description">
          Growth Rick's platform is organized around four AI-powered strategic roles that work together to drive B2B customer acquisition:
        </p>
        
        <div className="roles-grid">
          {roles.map((role) => (
            <div className="role-card" key={role.id}>
              <div className="role-number">{role.id}</div>
              <div className="role-content">
                <h3>{role.title}</h3>
                <ul>
                  {role.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreRoles;

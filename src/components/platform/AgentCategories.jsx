import { useState } from 'react';
import '../../styles/platform/AgentCategories.css';

const AgentCategories = () => {
  const [activeCategory, setActiveCategory] = useState('content');
  
  const categories = {
    content: {
      title: 'Content Creation Agents',
      agents: [
        {
          name: 'Content Flow AI',
          description: 'Generates compelling website copy, landing pages, and blog content'
        },
        {
          name: 'Social Media Content Generator',
          description: 'Creates engaging posts optimized for each platform'
        },
        {
          name: 'Ad Copy Generator',
          description: 'Crafts high-converting ad copy for performance marketing'
        },
        {
          name: 'White Paper Generator',
          description: 'Develops in-depth thought leadership content'
        }
      ]
    },
    personalization: {
      title: 'Personalization Agents',
      agents: [
        {
          name: 'HypeCraft AI',
          description: 'Creates hyper-personalized ABM campaigns based on account profiles'
        },
        {
          name: 'EngageCraft AI',
          description: 'Generates personalized email content at scale for prospect nurturing'
        },
        {
          name: 'PitchCraft AI',
          description: 'Develops contextual value propositions for different customer segments'
        },
        {
          name: 'Decision-Maker Profiler',
          description: 'Delivers personalized messaging for specific buying roles'
        }
      ]
    },
    insight: {
      title: 'Customer Insight Agents',
      agents: [
        {
          name: 'Insight Forge',
          description: 'Uncovers deep account insights from diverse data sources'
        },
        {
          name: 'Market Pulse',
          description: 'Analyzes trends and industry sentiment to inform positioning'
        },
        {
          name: 'Social Listening AI',
          description: 'Monitors brand mentions and industry conversations across platforms'
        },
        {
          name: 'Competitive Analysis Tool',
          description: 'Tracks competitor activities and identifies market gaps'
        }
      ]
    },
    performance: {
      title: 'Performance Marketing Agents',
      agents: [
        {
          name: 'Score Blitz AI',
          description: 'Automates lead qualification with machine learning'
        },
        {
          name: 'Meta Ad Optimizer',
          description: 'Tracks and continuously improves Meta ad campaigns'
        },
        {
          name: 'Google Ads Enhancer',
          description: 'Optimizes search campaigns for maximum ROAS'
        },
        {
          name: 'Multi-Channel Campaign Planner',
          description: 'Plans and manages campaigns across platforms'
        }
      ]
    },
    growth: {
      title: 'Growth Optimization Agents',
      agents: [
        {
          name: 'Content Performance Analyzer',
          description: 'Evaluates and optimizes content across channels'
        },
        {
          name: 'Social Media Post Optimizer',
          description: 'Identifies optimal posting times and content types'
        },
        {
          name: 'Conversion Path Analyzer',
          description: 'Identifies friction points in the buyer journey'
        },
        {
          name: 'Lead Nurture Optimizer',
          description: 'Develops strategies to accelerate sales pipeline velocity'
        }
      ]
    },
    visual: {
      title: 'Visual Content Agents',
      agents: [
        {
          name: 'Ad Diffusion GPT',
          description: 'Generates advertising visuals from text descriptions'
        },
        {
          name: 'Image Flux GPT',
          description: 'Creates branded imagery and professional content'
        },
        {
          name: 'Banner Generator',
          description: 'Creates dynamic banner ads for retargeting campaigns'
        },
        {
          name: 'Social Media Visual Creator',
          description: 'Designs platform-specific visual content'
        }
      ]
    }
  };
  
  // Function to determine grid columns based on number of agents
  const getGridColumns = (agentCount) => {
    if (agentCount <= 4) return 2; // 2x2 grid for 4 or fewer agents
    if (agentCount === 5) return 3; // 2x3 grid (with one empty space) for 5 agents
    return 3; // 3x3 grid for 6 or more agents
  };

  const currentCategory = categories[activeCategory];
  const agentCount = currentCategory.agents.length;
  const gridColumns = getGridColumns(agentCount);

  return (
    <section className="agent-categories">
      <div className="container">
        <h2>Key Agent Categories</h2>
        
        <div className="category-tabs">
          {Object.entries(categories).map(([key, category]) => (
            <button 
              key={key}
              className={`category-tab ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              {category.title.split(' ')[0]} {/* Show just the first word */}
            </button>
          ))}
        </div>
        
        <div className="category-content">
          <h3>{currentCategory.title}</h3>
          <div 
            className="agents-grid"
            style={{
              '--agent-count': agentCount,
              '--grid-columns': gridColumns
            }}
          >
            {currentCategory.agents.map((agent, index) => (
              <div className="agent-card" key={index}>
                <h4>{agent.name}</h4>
                <p>{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentCategories;

import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import '../styles/Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The B2B AI Revolution: How AI is Leveling the Playing Field for Tech Companies',
      excerpt: 'The B2B technology landscape has transformed dramatically over the past five years, with thousands of new solutions entering the market and competing for buyer attention. While this innovation has created unprecedented opportunities, it has also intensified competition for customer acquisition...',
      date: 'May 10, 2025',
      readTime: '8 min read',
      category: 'AI Marketing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      slug: 'b2b-ai-revolution'
    },
    {
      id: 2,
      title: 'Beyond Generic: How AI Personalization is Transforming B2B Conversion Rates',
      excerpt: 'In the early days of B2B marketing, personalization meant simply adding a prospect\'s first name to an email. Today, advanced AI is enabling B2B brands to personalize every aspect of the buyer experience—from content recommendations and landing pages to ad creative and email sequences...',
      date: 'April 28, 2025',
      readTime: '6 min read',
      category: 'Personalization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      slug: 'ai-personalization-b2b-conversion'
    },
    {
      id: 3,
      title: 'First-Party Data Strategy: The New Competitive Advantage for B2B Brands',
      excerpt: 'As third-party cookies disappear and privacy regulations tighten, B2B brands that master first-party data collection and activation gain a significant competitive advantage. AI-powered marketing systems are revolutionizing how companies leverage this valuable resource...',
      date: 'April 15, 2025',
      readTime: '7 min read',
      category: 'Data Strategy',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      slug: 'first-party-data-strategy'
    }
  ];

  return (
    <main className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1>Growth Rick Blog</h1>
          <p className="subtitle">Insights, strategies, and trends in AI-powered B2B marketing</p>
          
          <div className="blog-categories">
            <button className="category-btn active">All Articles</button>
            <button className="category-btn">AI Marketing</button>
            <button className="category-btn">Personalization</button>
            <button className="category-btn">Data Strategy</button>
            <button className="category-btn">Growth Hacks</button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.length > 0 && (
        <section className="featured-post">
          <div className="container">
            <div className="featured-post-content">
              <div className="featured-text">
                <span className="category-tag">{blogPosts[0].category}</span>
                <h2>{blogPosts[0].title}</h2>
                <p className="excerpt">{blogPosts[0].excerpt}</p>
                <div className="post-meta">
                  <span className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    {blogPosts[0].date}
                  </span>
                  <span className="meta-item">
                    <FaClock className="meta-icon" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <Link to={`/blog/${blogPosts[0].slug}`} className="read-more">
                  Read Full Article <FaArrowRight className="arrow-icon" />
                </Link>
              </div>
              <div className="featured-image">
                <img src={blogPosts[0].image} alt={blogPosts[0].title} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="blog-posts">
        <div className="container">
          <h2 className="section-title">Latest Articles</h2>
          
          <div className="posts-grid">
            {blogPosts.slice(1).map(post => (
              <article key={post.id} className="post-card">
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <span className="category-tag">{post.category}</span>
                </div>
                <div className="post-content">
                  <h3>{post.title}</h3>
                  <p className="excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="meta-item">
                      <FaCalendarAlt className="meta-icon" />
                      {post.date}
                    </span>
                    <span className="meta-item">
                      <FaClock className="meta-icon" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="read-more">
                    Read More <FaArrowRight className="arrow-icon" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="pagination">
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <span className="pagination-ellipsis">...</span>
            <button className="pagination-btn">Next <FaArrowRight className="arrow-icon" /></button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-cta">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated with the Latest Insights</h2>
            <p>Subscribe to our newsletter for the latest articles, case studies, and marketing resources.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required 
              />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;

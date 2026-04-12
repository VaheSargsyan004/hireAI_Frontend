import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const handleScrollTo = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="page home">
      <header className="brand-row simple">
        <div className="brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          AI <span>HireAI Armenia</span>
        </div>
        <div className="mini-links">
          <span className="nav-link" onClick={() => handleScrollTo('.why-choose')}>Features</span>
          <span className="nav-link" onClick={() => handleScrollTo('.how-it-works')}>How It Works</span>
          <span className="nav-link" onClick={() => handleScrollTo('.results')}>Results</span>
          <span className="nav-link" onClick={() => handleScrollTo('.testimonial-section')}>About</span>
        </div>
        <div className="inline-actions">
          <button className="btn-link" onClick={() => navigate('/login')}>Sign In</button>
          <button className="btn-dark" onClick={() => navigate('/signup')}>Get Started</button>
        </div>
      </header>

      <section className="hero">
        <div>
          <p className="tag">🇦🇲 Made for Armenia</p>
          <h1>AI-Driven Fair Hiring for Armenia's Future</h1>
          <p className="muted big">Transform your recruitment process with intelligent candidate matching and eliminate bias in hiring.</p>
          <div className="inline-actions">
            <button className="btn-dark" onClick={() => navigate('/signup')}>Start Free Trial</button>
            <button className="btn-light" onClick={() => navigate('/login')}>Watch Demo</button>
          </div>
        </div>
        <div className="photo-panel">🚀 Team Collaboration</div>
      </section>

      <section className="section-block why-choose">
        <h2>Why Choose HireAI Armenia?</h2>
        <p className="muted">Our platform combines cutting-edge AI technology with local expertise to revolutionize hiring in Armenia.</p>
        <div className="grid-3">
          <article className="card">
            <h4>🤖 AI-Powered Matching</h4>
            <p className="muted">Advanced algorithms match candidates with positions based on skills, experience, and cultural fit.</p>
          </article>
          <article className="card">
            <h4>⚖️ Bias-Free Hiring</h4>
            <p className="muted">Remove unconscious bias from your recruitment process and make fair, objective decisions.</p>
          </article>
          <article className="card">
            <h4>🌈 Diversity Promotion</h4>
            <p className="muted">Build diverse teams and access talent from all backgrounds across Armenia.</p>
          </article>
          <article className="card">
            <h4>📊 Smart Analytics</h4>
            <p className="muted">Get detailed insights and reports on your hiring process, performance, and trends.</p>
          </article>
          <article className="card">
            <h4>⚡ Faster Recruitment</h4>
            <p className="muted">Reduce time-to-hire with streamlined workflows and intelligent automation.</p>
          </article>
          <article className="card">
            <h4>🌐 Local Expertise</h4>
            <p className="muted">Built with understanding of the Armenian job market and local business culture.</p>
          </article>
        </div>
      </section>

      <section className="section-block how-it-works">
        <h2>How It Works</h2>
        <p className="muted">Get started in four simple steps</p>
        <div className="grid-4">
          <article className="card">
            <h4>01 Upload Requirements</h4>
            <p className="muted">Define your job requirements and company culture preferences.</p>
          </article>
          <article className="card">
            <h4>02 AI Matching</h4>
            <p className="muted">Our AI analyzes candidates and finds the best matches for your needs.</p>
          </article>
          <article className="card">
            <h4>03 Review Shortlist</h4>
            <p className="muted">Review a curated, diverse shortlist of qualified candidates.</p>
          </article>
          <article className="card">
            <h4>04 Make Fair Decisions</h4>
            <p className="muted">Interview, evaluate, and hire with complete transparency and fairness.</p>
          </article>
        </div>
      </section>

      <section className="section-block results">
        <h2>Real Results from Armenian Companies</h2>
        <div className="grid-3">
          <div className="stat-box">
            <h3>45%</h3>
            <p className="muted">Faster hiring process on average</p>
          </div>
          <div className="stat-box">
            <h3>89%</h3>
            <p className="muted">Match accuracy with candidates</p>
          </div>
          <div className="stat-box">
            <h3>156</h3>
            <p className="muted">Companies using HireAI</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <h2>What Our Users Say</h2>
        <div className="grid-2">
          <article className="testimonial-card">
            <p className="quote">"HireAI transformed our hiring process. We found amazing talent we would have missed before."</p>
            <p className="author">— Armen S., CEO at Tech Armenia</p>
          </article>
          <article className="testimonial-card">
            <p className="quote">"The platform is intuitive and fair. We're building a truly diverse team now."</p>
            <p className="author">— Gayane M., HR Manager at Innovation Hub</p>
          </article>
        </div>
      </section>

      <section className="section-block dark-cta">
        <h2>Ready to Transform Your Hiring?</h2>
        <p>Join leading Armenian companies using AI to build diverse, talented teams.</p>
        <button className="btn-light" onClick={() => navigate('/signup')}>Start Free Trial Today</button>
      </section>

      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>HireAI Armenia</h4>
            <p className="muted">Revolutionizing hiring with fair, intelligent technology for Armenia.</p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#features" onClick={(e) => { e.preventDefault(); handleScrollTo('.why-choose'); }}>Features</a></li>
              <li><a href="#pricing" onClick={(e) => { e.preventDefault(); navigate('/signup'); }}>Pricing</a></li>
              <li><a href="#security" onClick={(e) => { e.preventDefault(); alert('Security page coming soon!'); }}>Security</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); alert('About page coming soon!'); }}>About</a></li>
              <li><a href="#blog" onClick={(e) => { e.preventDefault(); alert('Blog coming soon!'); }}>Blog</a></li>
              <li><a href="#careers" onClick={(e) => { e.preventDefault(); alert('Careers page coming soon!'); }}>Careers</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Policy coming soon!'); }}>Privacy Policy</a></li>
              <li><a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service coming soon!'); }}>Terms of Service</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); alert('Contact: support@hireai.am'); }}>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 HireAI Armenia. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

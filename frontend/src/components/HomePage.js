import React from 'react';

const features = [
  {
    icon: '🎨',
    title: 'Stunning Templates',
    desc: 'Choose from beautifully crafted templates or build your own with our drag-and-drop editor.',
    color: '#6366f1',
  },
  {
    icon: '⚡',
    title: 'Lightning Fast',
    desc: 'Optimized for performance. Your portfolio loads instantly and looks great on every device.',
    color: '#8b5cf6',
  },
  {
    icon: '🛠️',
    title: 'Full Customization',
    desc: 'Add, remove, and reorder sections. Personalize every detail to match your unique style.',
    color: '#06b6d4',
  },
  {
    icon: '📊',
    title: 'Skills Showcase',
    desc: 'Display your technical skills with animated progress bars and category groupings.',
    color: '#f59e0b',
  },
  {
    icon: '🚀',
    title: 'Project Gallery',
    desc: 'Showcase your work with rich project cards, GitHub links, and live demo previews.',
    color: '#10b981',
  },
  {
    icon: '🔗',
    title: 'Shareable Links',
    desc: 'Get a unique URL for your portfolio and share it with recruiters and clients instantly.',
    color: '#ec4899',
  },
];

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Full Stack Developer',
    avatar: '👨‍💻',
    text: 'PortMate helped me land my dream job. The glassmorphism design made my portfolio stand out from hundreds of applicants.',
  },
  {
    name: 'Sarah Kim',
    role: 'UI/UX Designer',
    avatar: '👩‍🎨',
    text: 'The customization options are incredible. I built my entire portfolio in under an hour and it looks absolutely stunning.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Backend Engineer',
    avatar: '🧑‍💼',
    text: 'Finally a portfolio builder that understands developers. The project showcase feature is exactly what I needed.',
  },
];

function HomePage({ onNavigate }) {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 1 }}>

          <div style={{ marginBottom: '1.5rem' }}>
            <span className="badge badge-primary">
              ✦ The #1 Portfolio Builder for Developers
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}>
            Build Your{' '}
            <span className="gradient-text">Dream Portfolio</span>
            <br />
            in Minutes
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}>
            Create stunning, customizable portfolios that showcase your skills, projects, and professional journey.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <button
              className="btn-primary"
              onClick={() => onNavigate('portfolios')}
              style={{ padding: '0.9rem 2.5rem', fontSize: '1rem' }}
            >
              🚀 Start Building Free
            </button>

            
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-primary">Features</span>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '2.5rem',
              fontWeight: 700,
              marginTop: '1rem',
            }}>
              Everything You Need to <span className="gradient-text">Shine</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {features.map((f, i) => (
              <div
                key={i}
                className="glass-card"
                style={{ padding: '2rem', borderRadius: '20px' }}
              >
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '1rem',
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontWeight: 700 }}>{f.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-primary">Testimonials</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginTop: '1rem' }}>
              Loved by Developers
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
                <div style={{ fontSize: '1.5rem' }}>★★★★★</div>
                <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>
                  "{t.text}"
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <strong>{t.name}</strong>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', textAlign: 'center' }}>
        <button
          className="btn-primary"
          onClick={() => onNavigate('portfolios')}
          style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}
        >
          Get Started for Free →
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        color: 'rgba(255,255,255,0.4)',
      }}>
        <div style={{ fontWeight: 600 }}>PortMate</div>
        <div>© 2026 All rights reserved</div>
      </footer>
    </div>
  );
}

export default HomePage;
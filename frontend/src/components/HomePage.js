import React, { useEffect, useRef } from 'react';

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

const stats = [
  { value: '10K+', label: 'Portfolios Created' },
  { value: '50+', label: 'Templates Available' },
  { value: '99%', label: 'Uptime Guarantee' },
  { value: '4.9★', label: 'Average Rating' },
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

function AnimatedCounter({ value }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease', display: 'inline-block' }}>
      {value}
    </span>
  );
}

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
        {/* Floating orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div style={{ marginBottom: '1.5rem', animation: 'fadeInUp 0.6s ease' }}>
            <span className="badge badge-primary" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}>
              ✦ The #1 Portfolio Builder for Developers
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            animation: 'fadeInUp 0.6s ease 0.1s both',
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
            animation: 'fadeInUp 0.6s ease 0.2s both',
          }}>
            Create stunning, customizable portfolios that showcase your skills, projects, and professional journey. Stand out from the crowd with beautiful glassmorphism designs.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
            animation: 'fadeInUp 0.6s ease 0.3s both',
          }}>
            <button
              className="btn-primary"
              onClick={() => onNavigate('portfolios')}
              style={{ padding: '0.9rem 2.5rem', fontSize: '1rem' }}
            >
              🚀 Start Building Free
            </button>
            <button
              className="btn-secondary"
              onClick={() => onNavigate('templates')}
              style={{ padding: '0.9rem 2.5rem', fontSize: '1rem' }}
            >
              🎨 Browse Templates
            </button>
          </div>

          {/* Hero card preview */}
          <div style={{
            marginTop: '4rem',
            animation: 'fadeInUp 0.8s ease 0.4s both',
          }}>
            <div className="glass-strong" style={{
              borderRadius: '24px',
              padding: '2rem',
              maxWidth: '700px',
              margin: '0 auto',
              position: 'relative',
            }}>
              {/* Fake browser bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                <div style={{
                  flex: 1, height: '28px', background: 'rgba(255,255,255,0.06)',
                  borderRadius: '6px', marginLeft: '0.5rem',
                  display: 'flex', alignItems: 'center', paddingLeft: '0.75rem',
                  fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)',
                }}>
          portmate.dev/alex-chen
                </div>
              </div>

              {/* Fake portfolio preview */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '60px', height: '60px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', flexShrink: 0,
                }}>
                  👨‍💻
                </div>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Alex Chen</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>Full Stack Developer · San Francisco, CA</div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['React', 'Node.js', 'Python', 'AWS'].map(skill => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="divider" />

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {[
                  { label: 'Projects', value: '24', icon: '🚀' },
                  { label: 'Skills', value: '18', icon: '⚡' },
                  { label: 'Experience', value: '5yr', icon: '📅' },
                ].map(stat => (
                  <div key={stat.label} style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '10px',
                    padding: '0.75rem',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{stat.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{stat.value}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.51)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Features Section */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge badge-primary" style={{ marginBottom: '1rem', display: 'inline-block' }}>Features</span>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
              marginBottom: '1rem',
            }}>
              Everything You Need to{' '}
              <span className="gradient-text">Shine</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              Powerful tools designed specifically for developers and creatives to build impressive portfolios.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            {features.map((feature, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  borderRadius: '20px',
                  padding: '2rem',
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div style={{
                  width: '52px', height: '52px',
                  borderRadius: '14px',
                  background: `${feature.color}20`,
                  border: `1px solid ${feature.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: '1.25rem',
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.6rem' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, fontSize: '0.9rem' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge badge-primary" style={{ marginBottom: '1rem', display: 'inline-block' }}>Testimonials</span>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
            }}>
              Loved by <span className="gradient-text">Developers</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card" style={{ borderRadius: '20px', padding: '2rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#f59e0b' }}>★★★★★</div>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem',
                  }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div className="glass-strong" style={{
            borderRadius: '28px',
            padding: '4rem 3rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '-50px', right: '-50px',
              width: '200px', height: '200px',
              background: 'radial-gradient(circle, rgba(99,102,241,0.3), transparent)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: '-50px', left: '-50px',
              width: '200px', height: '200px',
              background: 'radial-gradient(circle, rgba(139,92,246,0.3), transparent)',
              borderRadius: '50%',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 700,
                marginBottom: '1rem',
              }}>
                Ready to Build Your <span className="gradient-text">Portfolio?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', lineHeight: 1.7 }}>
                Join thousands of developers who've already built stunning portfolios. It's free to get started.
              </p>
              <button
                className="btn-primary"
                onClick={() => onNavigate('portfolios')}
                style={{ padding: '1rem 3rem', fontSize: '1.05rem' }}
              >
                Get Started for Free →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        color: 'rgba(255,255,255,0.3)',
        fontSize: '0.85rem',
      }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <span style={{ fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>PortMate</span>
          {' · '}Built with ❤️ for developers
        </div>
        <div>© 2026 PortMate. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default HomePage;

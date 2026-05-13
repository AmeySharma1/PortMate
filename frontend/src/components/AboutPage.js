import React from 'react';

// ─────────────────────────────────────────────────────────────
//  TEAM MEMBERS — update GitHub / LinkedIn links here
//  File: frontend/src/components/AboutPage.js
// ─────────────────────────────────────────────────────────────
const TEAM = [
  {
    name: 'Amey Sharma',
    role: 'Full Stack Developer',
    avatar: '👨‍💻',
    color: '#6366f1',
    github:   'https://github.com/AmeySharma1',        // ← change this
    linkedin: 'https://linkedin.com/in/ameysh',   // ← change this
  },
  {
    name: 'Bendamuri Sri Surya Kartheek',
    role: 'Full Stack Developer',
    avatar: '🧑‍💻',
    color: '#8b5cf6',
    github:   'https://github.com/KartheekGitty',        // ← change this
    linkedin: 'https://www.linkedin.com/in/bendamuri-kartheek07',   // ← change this
  },
  {
    name: 'Kriti Sharma',
    role: 'Full Stack Developer',
    avatar: '👩‍💻',
    color: '#06b6d4',
    github:   'https://github.com/Krity2004',        // ← change this
    linkedin: 'https://www.linkedin.com/in/krity-sharma',   // ← change this
  },
];

const VALUES = [
  { icon: '🎯', title: 'Developer First', desc: 'Built by developers, for developers. Every feature is designed with the developer experience in mind.' },
  { icon: '✨', title: 'Beautiful by Default', desc: 'We believe great portfolios should look stunning without requiring design expertise.' },
  { icon: '🚀', title: 'Fast & Reliable', desc: 'Performance and uptime are non-negotiable. Your portfolio is always available when recruiters come knocking.' },
  
];

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function AboutPage({ onNavigate }) {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

      {/* ── HERO ── */}
      <section style={{ padding: '5rem 2rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <span className="badge badge-primary" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>
            👥 About Us
          </span>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            margin: '0 0 1.25rem',
          }}>
            Built by Students,{' '}
            <span className="gradient-text">For Everyone</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: '0 0 2rem' }}>
            PortMate was born in the classrooms of{' '}
            <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Lovely Professional University</strong>.
            Three B.Tech Computer Science students who were tired of boring, cookie-cutter portfolio sites decided to build something better — a platform that makes every developer look like a rockstar.
          </p>
          <button
            className="btn-primary"
            onClick={() => onNavigate('portfolios')}
            style={{ padding: '0.85rem 2.25rem', fontSize: '0.95rem' }}
          >
            🚀 Try PortMate Free
          </button>
        </div>
      </section>

      {/* ── STORY ── */}
      <section style={{ padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <div className="glass-strong" style={{ borderRadius: '24px', padding: '2.5rem 3rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(99,102,241,0.2), transparent)', borderRadius: '50%', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎓</div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem' }}>
              Our Story
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, fontSize: '0.97rem', marginBottom: '1rem' }}>
              It started with a simple frustration — applying for internships and jobs, we kept hearing the same feedback: <em>"Do you have a portfolio?"</em> Existing tools were either too expensive, too complex, or produced portfolios that looked identical to everyone else's.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, fontSize: '0.97rem', marginBottom: '1rem' }}>
              So we built <strong style={{ color: '#a5b4fc' }}>PortMate</strong> — a portfolio builder that combines beautiful glassmorphism design with real developer tools. Add your skills with proficiency bars, showcase your GitHub projects, and choose from professional templates that actually stand out.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, fontSize: '0.97rem', margin: 0 }}>
              From the labs of <strong style={{ color: '#a5b4fc' }}>LPU's Computer Science department</strong>, we're proud to share PortMate with the world. Whether you're a fresher or a seasoned developer, your portfolio deserves to be stunning.
            </p>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, marginBottom: '0.5rem' }}>
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem' }}>
            B.Tech Computer Science · Lovely Professional University
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {TEAM.map((member, i) => (
            <div
              key={i}
              className="glass-card"
              style={{ borderRadius: '22px', padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            >
              {/* Glow */}
              <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', width: '120px', height: '120px', background: `radial-gradient(circle, ${member.color}25, transparent)`, borderRadius: '50%', pointerEvents: 'none' }} />

              {/* Avatar */}
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%',
                background: `linear-gradient(135deg, ${member.color}40, ${member.color}20)`,
                border: `2px solid ${member.color}50`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2.2rem', margin: '0 auto 1.25rem',
                position: 'relative', zIndex: 1,
              }}>
                {member.avatar}
              </div>

              {/* Info */}
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.3rem', position: 'relative', zIndex: 1 }}>
                {member.name}
              </h3>
              <p style={{ color: member.color, fontSize: '0.82rem', fontWeight: 500, marginBottom: '0.4rem', position: 'relative', zIndex: 1 }}>
                {member.role}
              </p>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', marginBottom: '1.25rem', position: 'relative', zIndex: 1 }}>
                B.Tech CSE · LPU
              </p>

              {/* Social links */}
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.45rem 1rem',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '8px',
                    color: 'rgba(255,255,255,0.75)',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
                >
                  <GitHubIcon /> GitHub
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.45rem 1rem',
                    background: `${member.color}15`,
                    border: `1px solid ${member.color}35`,
                    borderRadius: '8px',
                    color: member.color,
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${member.color}28`; }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${member.color}15`; }}
                >
                  <LinkedInIcon /> LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700 }}>
            What We <span className="gradient-text">Stand For</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          {VALUES.map((v, i) => (
            <div key={i} className="glass-card" style={{ borderRadius: '18px', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{v.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{v.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.83rem', lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '4rem 2rem 5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <div className="glass-strong" style={{ borderRadius: '24px', padding: '3rem 2rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              Join the <span className="gradient-text">PortMate</span> Community
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '1.75rem', fontSize: '0.9rem' }}>
              Start building your professional portfolio today. It's free, fast, and built with love from LPU.
            </p>
            <button
              className="btn-primary"
              onClick={() => onNavigate('portfolios')}
              style={{ padding: '0.85rem 2.5rem', fontSize: '0.95rem' }}
            >
              Build Your Portfolio →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
        <div style={{ marginBottom: '0.4rem' }}>
          <span style={{ fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>PortMate</span>
          {' · '}Made with ❤️ at LPU
        </div>
        <div>© 2026 PortMate. All rights reserved.</div>
      </footer>
    </div>
  );
}

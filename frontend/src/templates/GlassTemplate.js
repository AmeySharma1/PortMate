import React from 'react';

export default function GlassTemplate({ data }) {
  const { portfolio, skills = [], projects = [], sections = [] } = data;
  const about = sections.find(s => s.section_type === 'about');
  const experience = sections.find(s => s.section_type === 'experience');
  const education = sections.find(s => s.section_type === 'education');
  const contact = sections.find(s => s.section_type === 'contact');

  const glass = {
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '20px',
    padding: '2rem',
  };

  return (
    <div style={{ minHeight: '100vh', background: '#060612', color: 'white', fontFamily: 'Inter, sans-serif', position: 'relative', overflow: 'hidden' }}>
      {/* Orbs */}
      <div style={{ position: 'fixed', top: '-150px', left: '-150px', width: '500px', height: '500px', background: 'radial-gradient(circle,rgba(99,102,241,0.18),transparent)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: '-150px', right: '-150px', width: '450px', height: '450px', background: 'radial-gradient(circle,rgba(139,92,246,0.18),transparent)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', top: '40%', right: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle,rgba(6,182,212,0.1),transparent)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero */}
        <div style={{ padding: '5rem 2rem 4rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '20px', padding: '0.35rem 1rem', fontSize: '0.78rem', color: '#a5b4fc', marginBottom: '1.5rem' }}>
            ✦ Portfolio
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem,7vw,5rem)', fontWeight: 800, lineHeight: 1.05, margin: '0 0 1.25rem', background: 'linear-gradient(135deg,#ffffff,#a5b4fc,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {portfolio.title}
          </h1>
          {portfolio.description && (
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.55)', maxWidth: '550px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              {portfolio.description}
            </p>
          )}
          <a href="https://ameysharma.vercel.app" target="_blank" rel="noreferrer"
            style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '0.85rem 2.25rem', borderRadius: '12px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', boxShadow: '0 4px 20px rgba(99,102,241,0.5)' }}>
            ✦ ameysharma.vercel.app
          </a>
        </div>

        {/* Content */}
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 2rem' }}>

          {about && (
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1rem' }}>About</h2>
              <div style={glass}>
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, margin: 0, fontSize: '1rem' }}>{about.content}</p>
              </div>
            </section>
          )}

          {skills.length > 0 && (
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>Skills</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '0.75rem' }}>
                {skills.map(s => (
                  <div key={s.id} style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{s.name}</span>
                      <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{s.level}%</span>
                    </div>
                    <div style={{ height: '3px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px' }}>
                      <div style={{ height: '100%', width: s.level + '%', background: 'linear-gradient(90deg,#6366f1,#8b5cf6,#06b6d4)', borderRadius: '2px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>Projects</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1rem' }}>
                {projects.map(p => (
                  <div key={p.id} style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{p.title}</h3>
                    {p.description && <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: '0 0 1rem' }}>{p.description}</p>}
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {p.github_url && <a href={p.github_url} target="_blank" rel="noreferrer" style={{ fontSize: '0.78rem', color: '#a5b4fc', textDecoration: 'none', padding: '0.25rem 0.75rem', background: 'rgba(99,102,241,0.15)', borderRadius: '6px', border: '1px solid rgba(99,102,241,0.3)' }}>GitHub</a>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {experience && (
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1rem' }}>Experience</h2>
              <div style={glass}><p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>{experience.content}</p></div>
            </section>
          )}

          {education && (
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1rem' }}>Education</h2>
              <div style={glass}><p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>{education.content}</p></div>
            </section>
          )}

          {contact && (
            <section>
              <h2 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1rem' }}>Contact</h2>
              <div style={glass}><p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>{contact.content}</p></div>
            </section>
          )}

          <div style={{ marginTop: '4rem', textAlign: 'center', fontSize: '0.78rem', color: 'rgba(255,255,255,0.2)' }}>
            Built with PortMate · <a href="https://ameysharma.vercel.app" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>ameysharma.vercel.app</a>
          </div>
        </div>
      </div>
    </div>
  );
}

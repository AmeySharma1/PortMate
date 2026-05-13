import React from 'react';

export default function MinimalTemplate({ data }) {
  const { portfolio, skills = [], projects = [], sections = [] } = data;
  const about = sections.find(s => s.section_type === 'about');
  const experience = sections.find(s => s.section_type === 'experience');
  const education = sections.find(s => s.section_type === 'education');
  const contact = sections.find(s => s.section_type === 'contact');

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 2rem' }}>

        {/* Header */}
        <header style={{ borderBottom: '2px solid #1a1a1a', paddingBottom: '2rem', marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 700, letterSpacing: '-1px', margin: '0 0 0.5rem' }}>
            {portfolio.title}
          </h1>
          {portfolio.description && (
            <p style={{ fontSize: '1.1rem', color: '#555', margin: '0 0 1.25rem', lineHeight: 1.6 }}>
              {portfolio.description}
            </p>
          )}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.9rem' }}>
            <a href="https://ameysharma.vercel.app" target="_blank" rel="noreferrer"
              style={{ color: '#1a1a1a', textDecoration: 'underline' }}>
              ameysharma.vercel.app
            </a>
          </div>
        </header>

        {/* About */}
        {about && (
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' }}>About</h2>
            <p style={{ lineHeight: 1.8, fontSize: '1rem', color: '#333', margin: 0 }}>{about.content}</p>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' }}>Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {skills.map(s => (
                <span key={s.id} style={{ padding: '0.3rem 0.8rem', border: '1px solid #ccc', borderRadius: '2px', fontSize: '0.85rem', color: '#333' }}>
                  {s.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' }}>Projects</h2>
            {projects.map(p => (
              <div key={p.id} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #eee' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>{p.title}</h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {p.github_url && <a href={p.github_url} target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', color: '#555' }}>GitHub ↗</a>}
                  </div>
                </div>
                {p.description && <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
              </div>
            ))}
          </section>
        )}

        {/* Experience */}
        {experience && (
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' }}>Experience</h2>
            <p style={{ lineHeight: 1.8, color: '#333', margin: 0 }}>{experience.content}</p>
          </section>
        )}

        {/* Education */}
        {education && (
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' }}>Education</h2>
            <p style={{ lineHeight: 1.8, color: '#333', margin: 0 }}>{education.content}</p>
          </section>
        )}

        {/* Contact */}
        {contact && (
          <section>
            <h2 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' }}>Contact</h2>
            <p style={{ lineHeight: 1.8, color: '#333', margin: 0 }}>{contact.content}</p>
          </section>
        )}

        <footer style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee', fontSize: '0.8rem', color: '#aaa', textAlign: 'center' }}>
          Built with PortMate · <a href="https://ameysharma.vercel.app" target="_blank" rel="noreferrer" style={{ color: '#aaa' }}>ameysharma.vercel.app</a>
        </footer>
      </div>
    </div>
  );
}

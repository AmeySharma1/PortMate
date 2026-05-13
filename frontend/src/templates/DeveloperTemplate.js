import React from 'react';

export default function DeveloperTemplate({ data }) {
  const { portfolio, skills = [], projects = [], sections = [] } = data;
  const about = sections.find(s => s.section_type === 'about');
  const experience = sections.find(s => s.section_type === 'experience');
  const education = sections.find(s => s.section_type === 'education');
  const cats = [...new Set(skills.map(s => s.category || 'other'))];

  const S = {
    page: { minHeight: '100vh', background: '#0d1117', color: '#e6edf3', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' },
    wrap: { maxWidth: '960px', margin: '0 auto', padding: '3rem 2rem' },
    divider: { height: '1px', background: '#30363d', margin: '2rem 0' },
    sectionLabel: { fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7ee787', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' },
  };

  return (
    <div style={S.page}>
      <div style={S.wrap}>

        {/* Hero */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid #30363d', flexWrap: 'wrap' }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>
            👨‍💻
          </div>
          <div>
            <h1 style={{ fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 700, margin: '0 0 0.3rem', color: '#e6edf3' }}>{portfolio.title}</h1>
            {portfolio.description && <p style={{ color: '#8b949e', margin: '0 0 0.6rem', fontSize: '0.9rem', lineHeight: 1.5 }}>{portfolio.description}</p>}
            <a href="https://ameysharma.vercel.app" target="_blank" rel="noreferrer"
              style={{ color: '#58a6ff', fontSize: '0.82rem', textDecoration: 'none' }}>
              🔗 ameysharma.vercel.app
            </a>
          </div>
        </div>

        {/* About */}
        {about && (
          <section style={{ marginBottom: '2rem' }}>
            <div style={S.sectionLabel}><span style={{ color: '#7ee787' }}>//</span> About</div>
            <p style={{ color: '#8b949e', lineHeight: 1.8, fontSize: '0.95rem', borderLeft: '3px solid #30363d', paddingLeft: '1rem', margin: 0 }}>{about.content}</p>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section style={{ marginBottom: '2rem' }}>
            <div style={S.sectionLabel}><span style={{ color: '#7ee787' }}>//</span> Skills</div>
            {cats.map(cat => (
              <div key={cat} style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.7rem', color: '#6e7681', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{cat}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {skills.filter(s => (s.category || 'other') === cat).map(s => (
                    <span key={s.id} style={{ padding: '0.2rem 0.7rem', background: '#161b22', border: '1px solid #30363d', borderRadius: '20px', fontSize: '0.8rem', color: '#58a6ff' }}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section style={{ marginBottom: '2rem' }}>
            <div style={S.sectionLabel}><span style={{ color: '#7ee787' }}>//</span> Projects</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(360px,1fr))', gap: '1rem' }}>
              {projects.map(p => (
                <div key={p.id} style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '8px', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e6edf3', margin: 0 }}>{p.title}</h3>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      {p.github_url && <a href={p.github_url} target="_blank" rel="noreferrer" style={{ fontSize: '0.72rem', color: '#58a6ff', textDecoration: 'none', padding: '0.15rem 0.5rem', border: '1px solid #30363d', borderRadius: '4px' }}>GitHub</a>}
                    </div>
                  </div>
                  {p.description && <p style={{ fontSize: '0.85rem', color: '#8b949e', lineHeight: 1.6, margin: 0 }}>{p.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {experience && (
          <section style={{ marginBottom: '2rem' }}>
            <div style={S.sectionLabel}><span style={{ color: '#7ee787' }}>//</span> Experience</div>
            <p style={{ color: '#8b949e', lineHeight: 1.8, borderLeft: '3px solid #30363d', paddingLeft: '1rem', margin: 0 }}>{experience.content}</p>
          </section>
        )}

        {/* Education */}
        {education && (
          <section>
            <div style={S.sectionLabel}><span style={{ color: '#7ee787' }}>//</span> Education</div>
            <p style={{ color: '#8b949e', lineHeight: 1.8, borderLeft: '3px solid #30363d', paddingLeft: '1rem', margin: 0 }}>{education.content}</p>
          </section>
        )}

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #30363d', fontSize: '0.75rem', color: '#6e7681', textAlign: 'center' }}>
          // Built with PortMate · <a href="https://ameysharma.vercel.app" target="_blank" rel="noreferrer" style={{ color: '#58a6ff', textDecoration: 'none' }}>ameysharma.vercel.app</a>
        </div>
      </div>
    </div>
  );
}

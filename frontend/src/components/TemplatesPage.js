import React, { useState } from 'react';

// Themes = background color/style choices
// Templates = fixed 4 layouts (Minimal, Developer, Modern, Glass)
const THEMES = [
  {
    id: 'midnight',
    name: 'Midnight',
    desc: 'Deep dark navy — elegant and professional.',
    bg: '#0a0a1a',
    accent: '#6366f1',
    preview: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 100%)',
    tags: ['Dark', 'Professional'],
  },
  {
    id: 'ocean',
    name: 'Ocean',
    desc: 'Deep teal blues inspired by the ocean depths.',
    bg: '#0c1a2e',
    accent: '#06b6d4',
    preview: 'linear-gradient(135deg, #0c1a2e 0%, #0e3a5c 100%)',
    tags: ['Dark', 'Cool'],
  },
  {
    id: 'forest',
    name: 'Forest',
    desc: 'Rich dark greens for a calm, focused feel.',
    bg: '#0a1a0f',
    accent: '#10b981',
    preview: 'linear-gradient(135deg, #0a1a0f 0%, #0d2e1a 100%)',
    tags: ['Dark', 'Nature'],
  },
  {
    id: 'sunset',
    name: 'Sunset',
    desc: 'Warm purples and pinks — bold and creative.',
    bg: '#1a0a1e',
    accent: '#ec4899',
    preview: 'linear-gradient(135deg, #1a0a1e 0%, #2d1040 100%)',
    tags: ['Dark', 'Creative'],
  },
  {
    id: 'ember',
    name: 'Ember',
    desc: 'Deep charcoal with warm amber accents.',
    bg: '#1a0f0a',
    accent: '#f59e0b',
    preview: 'linear-gradient(135deg, #1a0f0a 0%, #2e1a08 100%)',
    tags: ['Dark', 'Warm'],
  },
  {
    id: 'slate',
    name: 'Slate',
    desc: 'Clean light grey — minimal and timeless.',
    bg: '#f8fafc',
    accent: '#6366f1',
    preview: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    tags: ['Light', 'Clean'],
    light: true,
  },
  {
    id: 'paper',
    name: 'Paper',
    desc: 'Warm off-white — classic editorial style.',
    bg: '#fafaf7',
    accent: '#1a1a1a',
    preview: 'linear-gradient(135deg, #fafaf7 0%, #f0ede6 100%)',
    tags: ['Light', 'Classic'],
    light: true,
  },
  {
    id: 'aurora',
    name: 'Aurora',
    desc: 'Deep space with northern lights gradient.',
    bg: '#060612',
    accent: '#8b5cf6',
    preview: 'linear-gradient(135deg, #060612 0%, #0f0c29 50%, #1a0a2e 100%)',
    tags: ['Dark', 'Vibrant'],
    badge: 'Popular',
  },
];

const FIXED_TEMPLATES = [
  { id: 'minimal',   name: 'Minimal',   icon: '◻', desc: 'Clean serif layout, white background', color: '#6366f1' },
  { id: 'developer', name: 'Developer', icon: '⌨', desc: 'GitHub-style dark monospace layout',   color: '#7ee787' },
  { id: 'modern',    name: 'Modern',    icon: '◈', desc: 'Bold gradient hero with skill bars',   color: '#8b5cf6' },
  { id: 'glass',     name: 'Glass',     icon: '◉', desc: 'Glassmorphism with glowing orbs',      color: '#06b6d4' },
];

function ThemeCard({ theme, selected, onSelect }) {
  const textColor = theme.light ? '#1a1a1a' : 'white';
  const subColor  = theme.light ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)';

  return (
    <div
      onClick={() => onSelect(theme.id)}
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        border: selected ? `2px solid ${theme.accent}` : '2px solid rgba(255,255,255,0.08)',
        transition: 'all 0.25s ease',
        background: 'rgba(255,255,255,0.04)',
        transform: selected ? 'translateY(-3px)' : 'none',
        boxShadow: selected ? `0 8px 30px ${theme.accent}30` : 'none',
      }}
    >
      {/* Color preview */}
      <div style={{ height: '100px', background: theme.preview, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Mini UI mockup */}
        <div style={{ width: '80%', background: theme.light ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.6rem 0.75rem', backdropFilter: 'blur(10px)' }}>
          <div style={{ height: '5px', width: '60%', background: theme.light ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.5)', borderRadius: '3px', marginBottom: '5px' }} />
          <div style={{ height: '3px', width: '40%', background: theme.light ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.25)', borderRadius: '2px', marginBottom: '8px' }} />
          <div style={{ display: 'flex', gap: '4px' }}>
            {[50, 35, 45].map((w, i) => (
              <div key={i} style={{ height: '3px', width: `${w}%`, background: theme.accent, borderRadius: '2px', opacity: 0.7 }} />
            ))}
          </div>
        </div>
        {theme.badge && (
          <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'rgba(0,0,0,0.6)', borderRadius: '10px', padding: '0.15rem 0.5rem', fontSize: '0.65rem', fontWeight: 700, color: 'white' }}>
            {theme.badge}
          </div>
        )}
        {selected && (
          <div style={{ position: 'absolute', top: '0.5rem', left: '0.5rem', background: theme.accent, borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, color: 'white' }}>
            ✓
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '0.9rem 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
          <h3 style={{ fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>{theme.name}</h3>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: theme.accent, flexShrink: 0 }} />
        </div>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', lineHeight: 1.4, margin: '0 0 0.6rem' }}>{theme.desc}</p>
        <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
          {theme.tags.map(tag => (
            <span key={tag} style={{ padding: '0.1rem 0.45rem', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 500, background: `${theme.accent}18`, color: theme.accent, border: `1px solid ${theme.accent}30` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TemplatesPage({ onNavigate }) {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [filter, setFilter] = useState('all');

  const filters = ['all', 'Dark', 'Light', 'Vibrant', 'Classic'];
  const filtered = filter === 'all'
    ? THEMES
    : THEMES.filter(t => t.tags.some(tag => tag.toLowerCase() === filter.toLowerCase()));

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', padding: '80px 2rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge badge-primary" style={{ marginBottom: '1rem', display: 'inline-block' }}>Themes & Templates</span>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Personalize Your <span className="gradient-text">Portfolio</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Pick a <strong style={{ color: 'rgba(255,255,255,0.8)' }}>theme</strong> for your background color, then choose a <strong style={{ color: 'rgba(255,255,255,0.8)' }}>template</strong> layout when creating your portfolio.
          </p>
        </div>

        {/* ── THEMES SECTION ── */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontWeight: 700, fontSize: '1.2rem', margin: '0 0 0.25rem' }}>🎨 Themes</h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', margin: 0 }}>Background color & mood of your portfolio</p>
            </div>
            {/* Filter pills */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {filters.map(f => (
                <button key={f} onClick={() => setFilter(f)} style={{ padding: '0.35rem 0.9rem', borderRadius: '20px', border: filter === f ? '1px solid rgba(99,102,241,0.5)' : '1px solid rgba(255,255,255,0.1)', background: filter === f ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.04)', color: filter === f ? '#a5b4fc' : 'rgba(255,255,255,0.5)', cursor: 'pointer', fontWeight: 500, fontSize: '0.8rem', transition: 'all 0.2s' }}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {filtered.map(t => (
              <ThemeCard key={t.id} theme={t} selected={selectedTheme === t.id} onSelect={setSelectedTheme} />
            ))}
          </div>

          {selectedTheme && (
            <div style={{ marginTop: '1.5rem', padding: '1rem 1.25rem', background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: THEMES.find(t => t.id === selectedTheme)?.accent, flexShrink: 0 }} />
                <div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: '0.9rem' }}>
                    Theme selected: <span style={{ color: '#a5b4fc' }}>{THEMES.find(t => t.id === selectedTheme)?.name}</span>
                  </p>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>
                    Apply this theme when creating or editing a portfolio
                  </p>
                </div>
              </div>
              <button className="btn-primary" onClick={() => onNavigate('portfolios')} style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
                Create Portfolio →
              </button>
            </div>
          )}
        </div>

        {/* ── FIXED TEMPLATES SECTION ── */}
        <div>
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontWeight: 700, fontSize: '1.2rem', margin: '0 0 0.25rem' }}>📐 Templates</h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', margin: 0 }}>
              Fixed layout styles — choose one when creating your portfolio
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
            {FIXED_TEMPLATES.map(t => (
              <div key={t.id} className="glass-card" style={{ borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${t.color}20`, border: `1px solid ${t.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                    {t.icon}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '0.95rem', margin: 0, color: t.color }}>{t.name}</h3>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>{t.desc}</p>
                  </div>
                </div>
                {/* Mini layout preview */}
                <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '0.75rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ height: '4px', width: '55%', background: t.color, borderRadius: '2px', marginBottom: '5px', opacity: 0.8 }} />
                  <div style={{ height: '3px', width: '35%', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', marginBottom: '8px' }} />
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[1,2,3].map(i => <div key={i} style={{ height: '20px', flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '4px', border: `1px solid ${t.color}20` }} />)}
                  </div>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', margin: 0, textAlign: 'center' }}>
                  Select "<span style={{ color: t.color }}>{t.name}</span>" when creating a portfolio
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button className="btn-primary" onClick={() => onNavigate('portfolios')} style={{ padding: '0.8rem 2.5rem', fontSize: '0.95rem' }}>
              + Create New Portfolio
            </button>
          </div>
        </div>

      </div>
    </div>
  );  
}

export default TemplatesPage;

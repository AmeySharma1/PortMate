import React, { useState } from 'react';

// Themes = background color/style choices
const THEMES = [
  {
    id: 'midnight',
    name: 'Midnight',
    desc: 'Deep navy — elegant and professional.',
    bg: '#0a0a1a',
    accent: '#6366f1',
    preview: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 100%)',
    tags: ['Dark', 'Professional'],
  },
  {
    id: 'ocean',
    name: 'Ocean',
    desc: 'Deep teal blues inspired by the ocean.',
    bg: '#0c1a2e',
    accent: '#06b6d4',
    preview: 'linear-gradient(135deg, #0c1a2e 0%, #0e3a5c 100%)',
    tags: ['Dark', 'Cool'],
  },
  {
    id: 'forest',
    name: 'Forest',
    desc: 'Dark greens for a calm feel.',
    bg: '#0a1a0f',
    accent: '#10b981',
    preview: 'linear-gradient(135deg, #0a1a0f 0%, #0d2e1a 100%)',
    tags: ['Dark', 'Nature'],
  },
  {
    id: 'sunset',
    name: 'Sunset',
    desc: 'Purple & pink creative style.',
    bg: '#1a0a1e',
    accent: '#ec4899',
    preview: 'linear-gradient(135deg, #1a0a1e 0%, #2d1040 100%)',
    tags: ['Dark', 'Creative'],
  },
  {
    id: 'ember',
    name: 'Ember',
    desc: 'Warm amber accents.',
    bg: '#1a0f0a',
    accent: '#f59e0b',
    preview: 'linear-gradient(135deg, #1a0f0a 0%, #2e1a08 100%)',
    tags: ['Dark', 'Warm'],
  },
  {
    id: 'slate',
    name: 'Slate',
    desc: 'Clean light grey.',
    bg: '#f8fafc',
    accent: '#6366f1',
    preview: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    tags: ['Light', 'Clean'],
    light: true,
  },
  {
    id: 'paper',
    name: 'Paper',
    desc: 'Warm off-white editorial style.',
    bg: '#fafaf7',
    accent: '#1a1a1a',
    preview: 'linear-gradient(135deg, #fafaf7 0%, #f0ede6 100%)',
    tags: ['Light', 'Classic'],
    light: true,
  },
  {
    id: 'aurora',
    name: 'Aurora',
    desc: 'Deep space northern lights.',
    bg: '#060612',
    accent: '#8b5cf6',
    preview: 'linear-gradient(135deg, #060612 0%, #0f0c29 50%, #1a0a2e 100%)',
    tags: ['Dark', 'Vibrant'],
    badge: 'Popular',
  },
];

const FIXED_TEMPLATES = [
  { id: 'minimal', name: 'Minimal', icon: '◻', desc: 'Clean serif layout', color: '#6366f1' },
  { id: 'developer', name: 'Developer', icon: '⌨', desc: 'GitHub-style dark UI', color: '#7ee787' },
  { id: 'modern', name: 'Modern', icon: '◈', desc: 'Gradient hero layout', color: '#8b5cf6' },
  { id: 'glass', name: 'Glass', icon: '◉', desc: 'Glassmorphism style', color: '#06b6d4' },
];

function ThemeCard({ theme, selected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(theme.id)}
      style={{
        borderRadius: '16px',
        cursor: 'pointer',
        border: selected
          ? `2px solid ${theme.accent}`
          : '2px solid rgba(255,255,255,0.08)',
        background: 'rgba(255,255,255,0.04)',
        transform: selected ? 'translateY(-3px)' : 'none',
        transition: '0.2s',
      }}
    >
      <div
        style={{
          height: '100px',
          background: theme.preview,
          position: 'relative',
        }}
      >
        {theme.badge && (
          <div style={{ position: 'absolute', top: 8, right: 8, fontSize: 10 }}>
            {theme.badge}
          </div>
        )}
        {selected && (
          <div
            style={{
              position: 'absolute',
              top: 8,
              left: 8,
              background: theme.accent,
              width: 18,
              height: 18,
              borderRadius: '50%',
              textAlign: 'center',
              color: '#fff',
              fontSize: 12,
            }}
          >
            ✓
          </div>
        )}
      </div>

      <div style={{ padding: '0.8rem' }}>
        <div style={{ fontWeight: 700 }}>{theme.name}</div>
        <div style={{ fontSize: 12, opacity: 0.7 }}>{theme.desc}</div>
      </div>
    </div>
  );
}

export default function TemplatesPage({ onNavigate }) {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredThemes =
    filter === 'all'
      ? THEMES
      : THEMES.filter(t =>
          t.tags.some(tag => tag.toLowerCase() === filter.toLowerCase())
        );

  const selectedThemeData =
    THEMES.find(t => t.id === selectedTheme) || null;

  return (
    <div style={{ padding: '80px 2rem 4rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* HEADER */}
        <h1>Templates & Themes</h1>

        {/* FILTER */}
        <div style={{ marginBottom: 20 }}>
          {['all', 'Dark', 'Light', 'Vibrant', 'Classic'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                marginRight: 8,
                padding: '6px 12px',
                background: filter === f ? '#6366f1' : '#222',
                color: 'white',
                border: 0,
                borderRadius: 6,
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* THEMES */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))',
            gap: 16,
          }}
        >
          {filteredThemes.map(t => (
            <ThemeCard
              key={t.id}
              theme={t}
              selected={selectedTheme === t.id}
              onSelect={setSelectedTheme}
            />
          ))}
        </div>

        {/* SELECTED */}
        {selectedThemeData && (
          <div style={{ marginTop: 20 }}>
            Selected: <b>{selectedThemeData.name}</b>
            <button
              onClick={() => onNavigate('portfolios')}
              style={{ marginLeft: 10 }}
            >
              Create Portfolio
            </button>
          </div>
        )}

        {/* FIXED TEMPLATES */}
        <h2 style={{ marginTop: 40 }}>Layouts</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px,1fr))',
            gap: 16,
          }}
        >
          {FIXED_TEMPLATES.map(t => (
            <div key={t.id} style={{ padding: 16, border: '1px solid #333' }}>
              <div style={{ fontSize: 18 }}>{t.icon}</div>
              <div style={{ fontWeight: 700 }}>{t.name}</div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>{t.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 30, textAlign: 'center' }}>
          <button onClick={() => onNavigate('portfolios')}>
            + Create Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import templates from '../templates/index';

const API = 'http://127.0.0.1:8000/api';

export default function PortfolioViewer({ slug, onBack }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get(API + '/portfolios');
        const all = Array.isArray(res.data) ? res.data : res.data.data || [];
        const portfolio = all.find(p => p.slug === slug);

        if (!portfolio) {
          setError('Portfolio not found');
          return;
        }

        const [skillsRes, projectsRes, sectionsRes] = await Promise.all([
          axios.get(API + '/portfolios/' + portfolio.id + '/skills'),
          axios.get(API + '/portfolios/' + portfolio.id + '/projects'),
          axios.get(API + '/portfolios/' + portfolio.id + '/sections'),
        ]);

        setData({
          portfolio,
          skills:   skillsRes.data,
          projects: projectsRes.data,
          sections: sectionsRes.data,
        });
      } catch (e) {
        setError('Failed to load portfolio');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [slug]);

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#0a0a1a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
      <div className="spinner" />
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>Loading portfolio...</p>
    </div>
  );

  if (error) return (
    <div style={{ minHeight: '100vh', background: '#0a0a1a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', textAlign: 'center', padding: '2rem' }}>
      <div style={{ fontSize: '4rem' }}>😕</div>
      <h2 style={{ color: 'white', fontWeight: 700 }}>{error}</h2>
      <p style={{ color: 'rgba(255,255,255,0.4)' }}>The portfolio at /{slug} could not be found.</p>
      <button onClick={onBack} className="btn-primary" style={{ padding: '0.75rem 2rem' }}>← Go Back</button>
    </div>
  );

  const TemplateComponent = templates[data.portfolio.template] || templates.minimal;

  return (
    <div>
      {/* Floating toolbar */}
      <div style={{ position: 'fixed', top: '1rem', left: '1rem', zIndex: 999, display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <button
          onClick={onBack}
          style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', padding: '0.5rem 1rem', cursor: 'pointer', color: 'white', fontSize: '0.85rem', fontWeight: 500 }}
        >
          ← Back
        </button>
        <div style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '0.5rem 0.85rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
          {data.portfolio.template} template
        </div>
      </div>

      <TemplateComponent data={data} />
    </div>
  );
}

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useUser, SignInButton } from '@clerk/react';

const API_BASE = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api';

const TEMPLATES = [
  { id: 'minimal',     label: 'Minimal',     icon: '◻', color: '#6366f1' },
  { id: 'developer',   label: 'Developer',   icon: '⌨', color: '#7ee787' },
  { id: 'modern',      label: 'Modern',      icon: '◈', color: '#8b5cf6' },
  { id: 'glass',       label: 'Glass',       icon: '◉', color: '#06b6d4' },
];

function PortfolioModal({ portfolio, onClose, onSave }) {
  const [form, setForm] = useState({
    title: portfolio?.title || '',
    description: portfolio?.description || '',
    template: portfolio?.template || 'minimal',
    slug: portfolio?.slug || '',
  });
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (name === 'title' && !portfolio) {
      setForm(prev => ({
        ...prev,
        title: value,
        slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      }));
    }
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.title.trim()) errs.title = 'Title is required';
    if (!form.slug.trim()) errs.slug = 'Slug is required';
    else if (!/^[a-z0-9-]+$/.test(form.slug)) errs.slug = 'Only lowercase letters, numbers, and hyphens';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSaving(true);
    try {
      await onSave(form);
      onClose();
    } catch (err) {
      setErrors({ general: err.response?.data?.message || 'Failed to save portfolio' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.4rem' }}>
            {portfolio ? '✏️ Edit Portfolio' : '✨ New Portfolio'}
          </h2>
          <button
            onClick={onClose}
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '0.4rem 0.7rem', cursor: 'pointer', color: 'white', fontSize: '1rem' }}
          >
            ✕
          </button>
        </div>

        {errors.general && (
          <div style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px', padding: '0.75rem 1rem', marginBottom: '1rem', color: '#fca5a5', fontSize: '0.875rem' }}>
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
              Portfolio Title *
            </label>
            <input
              className="input-glass"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. My Developer Portfolio"
            />
            {errors.title && <p style={{ color: '#fca5a5', fontSize: '0.8rem', marginTop: '0.35rem' }}>{errors.title}</p>}
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
              URL Slug *
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
                color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', pointerEvents: 'none',
              }}>
                portmate.dev/
              </span>
              <input
                className="input-glass"
                name="slug"
                value={form.slug}
                onChange={handleChange}
                placeholder="my-portfolio"
                style={{ paddingLeft: '8.5rem' }}
              />
            </div>
            {errors.slug && <p style={{ color: '#fca5a5', fontSize: '0.8rem', marginTop: '0.35rem' }}>{errors.slug}</p>}
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
              Description
            </label>
            <textarea
              className="input-glass"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="A brief description of your portfolio..."
              rows={3}
              style={{ resize: 'vertical', minHeight: '80px' }}
            />
          </div>

          <div style={{ marginBottom: '1.75rem' }}>
            <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
              Template
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
              {TEMPLATES.map(t => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setForm(prev => ({ ...prev, template: t.id }))}
                  style={{
                    padding: '0.75rem',
                    borderRadius: '10px',
                    border: form.template === t.id
                      ? `2px solid ${t.color}`
                      : '1px solid rgba(255,255,255,0.1)',
                    background: form.template === t.id
                      ? `${t.color}15`
                      : 'rgba(255,255,255,0.04)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: form.template === t.id ? t.color : 'rgba(255,255,255,0.6)',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{t.icon}</span>
                  {t.label}
                  {form.template === t.id && <span style={{ marginLeft: 'auto', fontSize: '0.75rem' }}>✓</span>}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <button type="button" className="btn-secondary" onClick={onClose} style={{ padding: '0.65rem 1.5rem' }}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={saving} style={{ padding: '0.65rem 1.5rem', opacity: saving ? 0.7 : 1 }}>
              {saving ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="spinner spinner-sm" />
                  Saving...
                </span>
              ) : (portfolio ? 'Save Changes' : 'Create Portfolio')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function PortfolioCard({ portfolio, onEdit, onDelete, onManage, onView }) {
  const template = TEMPLATES.find(t => t.id === portfolio.template) || TEMPLATES[0];
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm(`Delete "${portfolio.title}"? This cannot be undone.`)) return;
    setDeleting(true);
    await onDelete(portfolio.id);
    setDeleting(false);
  };

  return (
    <div className="glass-card" style={{ borderRadius: '20px', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <span style={{ fontSize: '1.1rem' }}>{template.icon}</span>
            <h3 style={{ fontWeight: 700, fontSize: '1.05rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {portfolio.title || 'Untitled Portfolio'}
            </h3>
          </div>
          <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>
            /{portfolio.slug}
          </div>
        </div>
        <span
          className="badge"
          style={{
            background: `${template.color}20`,
            color: template.color,
            border: `1px solid ${template.color}40`,
            flexShrink: 0,
            marginLeft: '0.5rem',
          }}
        >
          {template.label}
        </span>
      </div>

      {portfolio.description && (
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {portfolio.description}
        </p>
      )}

      {/* Stats */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        {[
          { icon: '📁', label: `${portfolio.sections_count || 0} sections` },
          { icon: '🚀', label: `${portfolio.projects_count || 0} projects` },
          { icon: '⚡', label: `${portfolio.skills_count || 0} skills` },
        ].map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)' }}>
            <span>{s.icon}</span>
            {s.label}
          </div>
        ))}
      </div>

      <div className="divider" style={{ margin: '0' }} />

      {/* Actions */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          className="btn-primary"
          onClick={() => onManage(portfolio)}
          style={{ flex: 1, padding: '0.6rem', fontSize: '0.85rem' }}
        >
          Manage
        </button>
        <button
          className="btn-secondary"
          onClick={() => onView(portfolio.slug)}
          style={{ flex: 1, padding: '0.6rem', fontSize: '0.85rem' }}
          title="Preview"
        >
          👁 Preview
        </button>
        <button
          className="btn-secondary"
          onClick={() => onEdit(portfolio)}
          style={{ padding: '0.6rem 0.9rem', fontSize: '0.85rem' }}
          title="Edit"
        >
          ✏️
        </button>
        <button
          className="btn-danger"
          onClick={handleDelete}
          disabled={deleting}
          style={{ padding: '0.6rem 0.9rem', fontSize: '0.85rem' }}
          title="Delete"
        >
          {deleting ? '...' : '🗑️'}
        </button>
      </div>
    </div>
  );
}

function PortfoliosPage({ addToast, onManagePortfolio, onViewPortfolio }) {
  const { isSignedIn, isLoaded } = useUser();
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPortfolio, setEditingPortfolio] = useState(null);
  const [search, setSearch] = useState('');

  const fetchPortfolios = useCallback(async () => {
    try {
      const res = await axios.get(`${API_BASE}/portfolios`);
      setPortfolios(Array.isArray(res.data) ? res.data : res.data.data || []);
    } catch (err) {
      console.error('Failed to fetch portfolios:', err);
      setPortfolios([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchPortfolios(); }, [fetchPortfolios]);

  const handleSave = async (form) => {
    if (editingPortfolio) {
      const res = await axios.put(`${API_BASE}/portfolios/${editingPortfolio.id}`, form);
      setPortfolios(prev => prev.map(p => p.id === editingPortfolio.id ? res.data : p));
      addToast('Portfolio updated successfully!', 'success');
    } else {
      const res = await axios.post(`${API_BASE}/portfolios`, form);
      setPortfolios(prev => [...prev, res.data]);
      addToast('Portfolio created successfully!', 'success');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/portfolios/${id}`);
      setPortfolios(prev => prev.filter(p => p.id !== id));
      addToast('Portfolio deleted.', 'info');
    } catch {
      addToast('Failed to delete portfolio.', 'error');
    }
  };

  const openCreate = () => {
    if (!isLoaded) return;
    if (!isSignedIn) { setShowAuthPrompt(true); return; }
    setEditingPortfolio(null);
    setShowModal(true);
  };
  const openEdit = (p) => { setEditingPortfolio(p); setShowModal(true); };

  const filtered = portfolios.filter(p =>
    p.title?.toLowerCase().includes(search.toLowerCase()) ||
    p.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', padding: '100px 2rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Sign-in banner for guests */}
        {isLoaded && !isSignedIn && (
          <div style={{ marginBottom: '1.5rem', padding: '0.9rem 1.25rem', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.1rem' }}>🔐</span>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                <strong style={{ color: '#a5b4fc' }}>Sign in</strong> to create and manage your own portfolios.
              </p>
            </div>
            <SignInButton mode="modal">
              <button className="btn-primary" style={{ padding: '0.45rem 1.25rem', fontSize: '0.82rem' }}>
                Sign In / Sign Up
              </button>
            </SignInButton>
          </div>
        )}

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '0.5rem' }}>
              My <span className="gradient-text">Portfolios</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>
              {portfolios.length} portfolio{portfolios.length !== 1 ? 's' : ''} · Manage and customize your work
            </p>
          </div>
          <button className="btn-primary" onClick={openCreate} style={{ padding: '0.75rem 1.75rem' }}>
            + New Portfolio
          </button>
        </div>

        {/* Search */}
        {portfolios.length > 0 && (
          <div style={{ marginBottom: '2rem', maxWidth: '400px' }}>
            <input
              className="input-glass"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="🔍  Search portfolios..."
            />
          </div>
        )}

        {/* Content */}
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px', flexDirection: 'column', gap: '1rem' }}>
            <div className="spinner" />
            <p style={{ color: 'rgba(255,255,255,0.4)' }}>Loading portfolios...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="glass-strong" style={{ borderRadius: '24px', padding: '5rem 2rem', textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📁</div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              {search ? 'No results found' : 'No portfolios yet'}
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '2rem', lineHeight: 1.7 }}>
              {search ? `No portfolios match "${search}"` : 'Create your first portfolio and start showcasing your work to the world.'}
            </p>
            {!search && (
              <button className="btn-primary" onClick={openCreate} style={{ padding: '0.85rem 2.5rem' }}>
                ✨ Create Your First Portfolio
              </button>
            )}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {filtered.map(p => (
              <PortfolioCard
                key={p.id}
                portfolio={p}
                onEdit={openEdit}
                onDelete={handleDelete}
                onManage={onManagePortfolio}
                onView={onViewPortfolio}
              />
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <PortfolioModal
          portfolio={editingPortfolio}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}

      {showAuthPrompt && (
        <div className="modal-overlay" onClick={() => setShowAuthPrompt(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ textAlign: 'center', maxWidth: '420px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔐</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.4rem', marginBottom: '0.75rem' }}>
              Sign In to Continue
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.9rem' }}>
              Create a free account to start building your portfolio. It only takes a minute!
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-secondary" onClick={() => setShowAuthPrompt(false)} style={{ padding: '0.65rem 1.5rem' }}>
                Cancel
              </button>
              <SignInButton mode="modal">
                <button className="btn-primary" style={{ padding: '0.65rem 2rem' }} onClick={() => setShowAuthPrompt(false)}>
                  Sign In / Sign Up
                </button>
              </SignInButton>
            </div>
            <p style={{ marginTop: '1.25rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>
              Free to join · No credit card required
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfoliosPage;

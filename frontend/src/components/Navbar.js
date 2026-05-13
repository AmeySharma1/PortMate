import React, { useState, useEffect } from 'react';
import { useUser, UserButton, SignInButton, SignUpButton } from '@clerk/react';

function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home',       label: 'Home',      icon: '🏠' },
    { id: 'portfolios', label: 'Portfolios', icon: '📁' },

    { id: 'about',      label: 'About Us',   icon: '👥' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0.75rem 2rem',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(10,10,26,0.9)' : 'rgba(10,10,26,0.4)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <button onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(99,102,241,0.4)' }}>
            ✦
          </div>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '1.2rem', background: 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            PortMate
          </span>
        </button>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="desktop-nav">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              style={{
                background: currentPage === link.id ? 'rgba(99,102,241,0.2)' : 'transparent',
                border: currentPage === link.id ? '1px solid rgba(99,102,241,0.4)' : '1px solid transparent',
                color: currentPage === link.id ? '#a5b4fc' : 'rgba(255,255,255,0.7)',
                padding: '0.5rem 1rem', borderRadius: '10px', cursor: 'pointer',
                fontWeight: 500, fontSize: '0.9rem', transition: 'all 0.2s ease',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
              }}
              onMouseEnter={e => { if (currentPage !== link.id) { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'white'; } }}
              onMouseLeave={e => { if (currentPage !== link.id) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; } }}
            >
              <span>{link.icon}</span>{link.label}
            </button>
          ))}
        </div>

        {/* Auth area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {isLoaded && !isSignedIn && (
            <>
              <SignInButton mode="modal">
                <button className="btn-secondary" style={{ padding: '0.5rem 1.1rem', fontSize: '0.875rem' }}>
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
                  Sign Up Free
                </button>
              </SignUpButton>
            </>
          )}

          {isLoaded && isSignedIn && (
            <>
              <button className="btn-primary" onClick={() => onNavigate('portfolios')} style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
                + New Portfolio
              </button>
              <UserButton appearance={{ elements: { avatarBox: { width: '36px', height: '36px' } } }} />
            </>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{ display: 'none', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '0.5rem', cursor: 'pointer', color: 'white', fontSize: '1.2rem' }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ marginTop: '0.75rem', padding: '1rem', background: 'rgba(15,15,35,0.95)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
              style={{ background: currentPage === link.id ? 'rgba(99,102,241,0.2)' : 'transparent', border: 'none', color: currentPage === link.id ? '#a5b4fc' : 'rgba(255,255,255,0.8)', padding: '0.75rem 1rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 500, textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>{link.icon}</span>{link.label}
            </button>
          ))}
          <div style={{ paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {isLoaded && !isSignedIn && (
              <SignInButton mode="modal">
                <button style={{ width: '100%', padding: '0.75rem', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}>
                  Sign In / Sign Up
                </button>
              </SignInButton>
            )}
            {isLoaded && isSignedIn && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0' }}>
                <UserButton />
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>My Account</span>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;

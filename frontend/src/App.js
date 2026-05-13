import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PortfoliosPage from './components/PortfoliosPage';
import TemplatesPage from './components/TemplatesPage';
import AboutPage from './components/AboutPage';
import PortfolioManager from './components/PortfolioManager';
import PortfolioViewer from './components/PortfolioViewer';
import Toast, { useToast } from './components/Toast';

function App() {
  const [page, setPage] = useState('home');
  const [managing, setManaging] = useState(null);
  const [viewSlug, setViewSlug] = useState(null);
  const { toasts, addToast, removeToast } = useToast();

  const nav = (p) => {
    setPage(p);
    if (p !== 'manage') setManaging(null);
    if (p !== 'view') setViewSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const manage = (p) => { setManaging(p); setPage('manage'); window.scrollTo({ top: 0 }); };
  const view   = (slug) => { setViewSlug(slug); setPage('view'); window.scrollTo({ top: 0 }); };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a1a' }}>
      {page !== 'view' && <Navbar currentPage={page} onNavigate={nav} />}

      {page === 'home'       && <HomePage       onNavigate={nav} />}
      {page === 'portfolios' && <PortfoliosPage  addToast={addToast} onManagePortfolio={manage} onViewPortfolio={view} />}
      {/* {page === 'templates'  && <TemplatesPage   onNavigate={nav} />} */}
      {page === 'about'      && <AboutPage       onNavigate={nav} />}
      {page === 'manage' && managing  && <PortfolioManager portfolio={managing} addToast={addToast} onBack={() => nav('portfolios')} onView={view} />}
      {page === 'view'   && viewSlug  && <PortfolioViewer  slug={viewSlug} onBack={() => nav('portfolios')} />}

      <Toast toasts={toasts} removeToast={removeToast} />
    </div>
  );
}

export default App;

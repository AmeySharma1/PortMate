import React, { useEffect } from 'react';

function Toast({ toasts, removeToast }) {
  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
      ))}
    </div>
  );
}

function ToastItem({ toast, onRemove }) {
  useEffect(() => {
    const timer = setTimeout(() => onRemove(toast.id), 3500);
    return () => clearTimeout(timer);
  }, [toast.id, onRemove]);

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
  };

  return (
    <div
      className={`toast toast-${toast.type}`}
      style={{ cursor: 'pointer' }}
      onClick={() => onRemove(toast.id)}
    >
      <span style={{
        width: '22px', height: '22px',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.75rem',
        fontWeight: 700,
        background: toast.type === 'success'
          ? 'rgba(16,185,129,0.3)'
          : toast.type === 'error'
          ? 'rgba(239,68,68,0.3)'
          : 'rgba(99,102,241,0.3)',
        flexShrink: 0,
      }}>
        {icons[toast.type]}
      </span>
      {toast.message}
    </div>
  );
}

export function useToast() {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  }, []);

  const removeToast = React.useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
}

export default Toast;

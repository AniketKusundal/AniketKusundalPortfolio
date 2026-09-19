import { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiCopy } from 'react-icons/fi';

const ToastContext = createContext({
  showToast: () => {},
  copyToClipboard: () => {},
});

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, icon = 'check') => {
    setToast({ message, icon, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  }, []);

  const copyToClipboard = useCallback((text, label = 'Copied to clipboard!') => {
    navigator.clipboard.writeText(text).then(() => {
      showToast(label, 'copy');
    }).catch(() => {
      // Fallback
      showToast('Copied: ' + text, 'copy');
    });
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ showToast, copyToClipboard }}>
      {children}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#141414] border border-[#E8734A]/50 text-[#F5F5F5] font-mono text-xs shadow-2xl backdrop-blur-md"
          >
            {toast.icon === 'copy' ? (
              <FiCopy className="text-[#E8734A]" size={14} />
            ) : (
              <FiCheck className="text-emerald-400" size={14} />
            )}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}

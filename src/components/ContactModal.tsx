import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EMAIL_CONTACT } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);

      const response = await fetch('https://formspree.io/f/xaeydzqd', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (!response.ok) throw new Error('Unable to send message');

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1800);
    } catch {
      setSubmitError('Your message could not be sent. Please try again or email Kaynet directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-surface border border-stroke rounded-3xl overflow-hidden shadow-2xl z-10 p-6 sm:p-8 my-auto"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-muted font-mono block mb-1">
                  Start a Conversation
                </span>
                <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary">
                  Say hi ↗
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="w-8 h-8 rounded-full bg-stroke/60 hover:bg-stroke flex items-center justify-center text-white/80 hover:text-white"
              >
                ✕
              </button>
            </div>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl mb-4">
                  ✓
                </div>
                <h4 className="text-lg font-medium text-text-primary mb-1">
                  Message sent
                </h4>
                <p className="text-xs text-muted">
                  Thanks — Kaynet will receive your message shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-muted uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl bg-bg border border-stroke px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-white/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full rounded-xl bg-bg border border-stroke px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-white/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-muted uppercase tracking-wider mb-1.5">
                    Project or Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, timeline, or just say hello..."
                    className="w-full rounded-xl bg-bg border border-stroke px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-white/40 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <a
                    href={EMAIL_CONTACT}
                    className="text-xs text-muted hover:text-text-primary transition-colors underline underline-offset-4"
                  >
                    Direct: kaynet0x@gmail.com
                  </a>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="accent-gradient text-bg px-6 py-3 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    {isSubmitting ? 'Sending…' : 'Send message ↗'}
                  </button>
                </div>
                {submitError && (
                  <p role="alert" className="text-xs text-red-400">
                    {submitError}
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

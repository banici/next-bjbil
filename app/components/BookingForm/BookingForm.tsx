'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './bookingForm.css';

const SERVICE_OPTIONS = [
  { value: 'AC-service', label: 'AC-service', price: 'från 1 699 kr' },
  { value: 'Bromsvätska', label: 'Bromsvätska', price: '' },
  { value: 'Bränslefilter', label: 'Bränslefilter', price: '' },
  { value: 'Felsökning', label: 'Felsökning', price: 'fast pris: 1 699 kr' },
  { value: 'Fordonskontroll', label: 'Fordonskontroll', price: '' },
  { value: 'Batterikontroll', label: 'Kontroll 12V batteri', price: '' },
  { value: 'Kupefilter', label: 'Kupéfilter', price: '' },
  { value: 'Luftfilter', label: 'Luftfilter', price: '' },
  { value: 'Mjukvaruuppdatering', label: 'Mjukvaruuppdatering', price: 'från 2 499 kr' },
  { value: 'Oljebyte', label: 'Oljebyte', price: '' },
  { value: 'Tändstift', label: 'Tändstift', price: '' },
];

const EXTRA_OPTIONS = [
  { value: 'Apple-carplay', label: 'Apple CarPlay aktivering', price: 'från 0 kr' },
  { value: 'Biltvätt', label: 'Biltvätt (handtvätt)', price: 'fast pris: 670 kr' },
  { value: 'Invändigt', label: 'Damsug & tvätt invändigt', price: 'fast pris: 850 kr' },
  { value: 'Däckhotell', label: 'Däckhotell', price: 'fast pris: 1 693 kr/säsong' },
  { value: 'Fyrhjulsinställning', label: 'Fyrhjulsinställning', price: 'fast pris: 1 900 kr' },
  { value: 'Motortvätt', label: 'Motortvätt', price: 'fast pris: 1 185 kr' },
  { value: 'Torkarblad-fram', label: 'Torkarblad fram', price: 'från 199 kr' },
  { value: 'Torkarblad-bak', label: 'Torkarblad bak', price: 'från 199 kr' },
  { value: 'Vätgas', label: 'Vätgas (Hydrive)', price: 'fast pris: 1 280 kr' },
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  reg: string;
  message: string;
  services: string[];
  extras: string[];
  gdpr: boolean;
}

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export default function BookingForm() {
  const [form, setForm] = useState<FormState>({
    name: '', phone: '', email: '', reg: '',
    message: '', services: [], extras: [], gdpr: false,
  });
  const [servicesOpen, setServicesOpen] = useState(false);
  const [extrasOpen, setExtrasOpen] = useState(false);
  const [gdprOpen, setGdprOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [showConfirm, setShowConfirm] = useState(false);

  // Lock body scroll when GDPR modal is open
  useEffect(() => {
    document.body.style.overflow = gdprOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [gdprOpen]);

  const isValid = (() => {
    const filled = form.name && form.phone && form.email && form.reg;
    const descValid = form.message.trim().split(' ').filter(Boolean).length >= 2;
    const serviceValid = form.services.length > 0;
    return filled && form.gdpr && (descValid || serviceValid);
  })();

  const handleText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'reg' ? value.toUpperCase() : value,
    }));
  };

  const toggleCheckbox = (group: 'services' | 'extras', value: string) => {
    setForm(prev => ({
      ...prev,
      [group]: prev[group].includes(value)
        ? prev[group].filter(v => v !== value)
        : [...prev[group], value],
    }));
  };

  const handleReset = () => {
    setForm({ name: '', phone: '', email: '', reg: '', message: '', services: [], extras: [], gdpr: false });
    setServicesOpen(false);
    setExtrasOpen(false);
    setSubmitStatus('idle');
    setShowConfirm(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setSubmitStatus('sending');

    try {
      const emailjs = (await import('@emailjs/browser')).default;
      emailjs.init('66lQFUU5otsfLEaYz');

      await emailjs.send('service_nvoy15b', 'template_4wa6osr', {
        user_name: form.name,
        user_phone: form.phone,
        user_email: form.email,
        user_reg: form.reg,
        user_message: form.message,
        services: form.services.join(', ') || 'Ingen tjänst vald',
        extra: form.extras.join(', ') || 'Inga extra tillägg',
        gdpr_approved: 'Ja',
      });

      setSubmitStatus('success');
      handleReset();
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <section className="boka-section" aria-labelledby="boka-form-heading">
      <div className="boka-layout">

        {/* Left — info panel */}
        <aside className="boka-info-panel" aria-label="Kontaktinformation">
          <h2 id="boka-form-heading">Hur det fungerar</h2>
          <ol className="boka-steps-list">
            <li>
              <span className="step-num" aria-hidden="true">1</span>
              <div>
                <strong>Fyll i formuläret</strong>
                <p>Ange dina uppgifter och välj vilken service du önskar.</p>
              </div>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">2</span>
              <div>
                <strong>Vi kontaktar dig</strong>
                <p>Vi går igenom din förfrågan och återkommer med lediga tider.</p>
              </div>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">3</span>
              <div>
                <strong>Din bil är i trygga händer</strong>
                <p>Lämna in bilen och vi tar hand om resten.</p>
              </div>
            </li>
          </ol>

          <div className="boka-contact-info">
            <h3>Föredrar du att ringa?</h3>
            <a href="tel:031847529" className="boka-phone-link">
              031-84 75 29
            </a>
            <p className="boka-hours">
              Mån–Tors: 07:00–17:00<br />
              Fredag: 07:00–12:00
            </p>
          </div>
        </aside>

        {/* Right — form */}
        <div className="boka-form-wrapper">
          <div className="boka-form-notice" role="note">
            <span className="notice-icon" aria-hidden="true">ℹ</span>
            <p>
              Detta formulär gör ingen direktbokning. Din förfrågan skickas till oss
              och vi kontaktar dig med lediga tider.
            </p>
          </div>

          {/* Success overlay */}
            {submitStatus === 'success' && (
              <div
                className="boka-success-overlay"
                role="dialog"
                aria-modal="true"
                aria-labelledby="success-heading"
              >
                <div className="boka-success-modal">
                  <div className="boka-success-icon" aria-hidden="true">✅</div>
                  <h2 id="success-heading">Förfrågan skickad!</h2>
                  <p>Tack, <strong>{form.name || 'du'}</strong>! Vi har tagit emot din serviceförfrågan och återkommer inom en arbetsdag med lediga tider.</p>
                  <p className="boka-success-sub">Frågor? Ring oss på <a href="tel:031847529">031-84 75 29</a></p>
                  <button
                    className="boka-success-close"
                    onClick={() => setSubmitStatus('idle')}
                    aria-label="Stäng bekräftelse"
                  >
                    Stäng
                  </button>
                </div>
              </div>
            )}
            
            {/* Error banner — keep inline */}
            {submitStatus === 'error' && (
              <div className="boka-error" role="alert" aria-live="polite">
                <span aria-hidden="true">❌</span>
                <p>Kunde inte skicka formuläret. Försök igen eller ring oss på <a href="tel:031847529">031-84 75 29</a>.</p>
              </div>
            )}

          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Serviceförfrågan formulär"
          >
            {/* Personal info */}
            <fieldset className="boka-fieldset">
              <legend>Dina uppgifter</legend>
              <div className="boka-field-grid">
                <div className="boka-field">
                  <label htmlFor="name">Namn <span aria-hidden="true">*</span></label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleText}
                    required
                    autoComplete="name"
                    aria-required="true"
                    placeholder="Ditt namn"
                  />
                </div>
                <div className="boka-field">
                  <label htmlFor="phone">Telefon <span aria-hidden="true">*</span></label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleText}
                    required
                    autoComplete="tel"
                    aria-required="true"
                    placeholder="07X-XXX XX XX"
                  />
                </div>
                <div className="boka-field">
                  <label htmlFor="email">E-post <span aria-hidden="true">*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleText}
                    required
                    autoComplete="email"
                    aria-required="true"
                    placeholder="din@email.se"
                  />
                </div>
                <div className="boka-field">
                  <label htmlFor="reg">Registreringsnummer <span aria-hidden="true">*</span></label>
                  <input
                    id="reg"
                    name="reg"
                    type="text"
                    value={form.reg}
                    onChange={handleText}
                    required
                    aria-required="true"
                    placeholder="ABC123"
                    maxLength={10}
                    className="reg-input"
                  />
                </div>
              </div>
            </fieldset>

            {/* Services */}
            <fieldset className="boka-fieldset">
              <legend>Välj tjänster</legend>

              {/* Service options accordion */}
              <div className="boka-accordion">
                <button
                  type="button"
                  className={`boka-accordion-toggle ${servicesOpen ? 'open' : ''}`}
                  onClick={() => setServicesOpen(p => !p)}
                  aria-expanded={servicesOpen}
                  aria-controls="service-options-panel"
                >
                  <span>Servicealternativ</span>
                  {form.services.length > 0 && (
                    <span className="selection-badge" aria-label={`${form.services.length} valda`}>
                      {form.services.length}
                    </span>
                  )}
                  <svg className="accordion-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                {servicesOpen && (
                  <div id="service-options-panel" className="boka-accordion-panel" role="group" aria-label="Servicealternativ">
                    {SERVICE_OPTIONS.map(opt => (
                      <label key={opt.value} className="boka-checkbox-label">
                        <input
                          type="checkbox"
                          checked={form.services.includes(opt.value)}
                          onChange={() => toggleCheckbox('services', opt.value)}
                          aria-label={`${opt.label}${opt.price ? `, ${opt.price}` : ''}`}
                        />
                        <span className="checkbox-text">{opt.label}</span>
                        {opt.price && <span className="checkbox-price">{opt.price}</span>}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Extra options accordion */}
              <div className="boka-accordion">
                <button
                  type="button"
                  className={`boka-accordion-toggle ${extrasOpen ? 'open' : ''}`}
                  onClick={() => setExtrasOpen(p => !p)}
                  aria-expanded={extrasOpen}
                  aria-controls="extra-options-panel"
                >
                  <span>Övrigt</span>
                  {form.extras.length > 0 && (
                    <span className="selection-badge" aria-label={`${form.extras.length} valda`}>
                      {form.extras.length}
                    </span>
                  )}
                  <svg className="accordion-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                {extrasOpen && (
                  <div id="extra-options-panel" className="boka-accordion-panel" role="group" aria-label="Övriga tjänster">
                    {EXTRA_OPTIONS.map(opt => (
                      <label key={opt.value} className="boka-checkbox-label">
                        <input
                          type="checkbox"
                          checked={form.extras.includes(opt.value)}
                          onChange={() => toggleCheckbox('extras', opt.value)}
                          aria-label={`${opt.label}${opt.price ? `, ${opt.price}` : ''}`}
                        />
                        <span className="checkbox-text">{opt.label}</span>
                        {opt.price && <span className="checkbox-price">{opt.price}</span>}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </fieldset>

            {/* Message */}
            <fieldset className="boka-fieldset">
              <legend>Övrig information</legend>
              <div className="boka-field">
                <label htmlFor="message">
                  Beskriv ditt ärende
                  <span className="field-hint">(minst 2 ord om du inte valt tjänst ovan)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleText}
                  rows={4}
                  placeholder="Beskriv varför du bokar service, eventuella symptom eller önskemål..."
                />
              </div>
            </fieldset>

            {/* GDPR */}
            <div className="boka-gdpr">
              <label className="boka-gdpr-label">
                <input
                  type="checkbox"
                  checked={form.gdpr}
                  onChange={e => setForm(prev => ({ ...prev, gdpr: e.target.checked }))}
                  required
                  aria-required="true"
                />
                <span>
                  Jag godkänner att Bo &amp; Jimmy Bilservice AB hanterar mina uppgifter
                  enligt{' '}
                  <button
                    type="button"
                    className="gdpr-inline-btn"
                    onClick={() => setGdprOpen(true)}
                    aria-haspopup="dialog"
                  >
                    integritetspolicyn
                  </button>
                </span>
              </label>
            </div>

            {/* Submit */}
              <button
                type="submit"
                className={`boka-submit ${isValid ? 'enabled' : ''}`}
                disabled={!isValid || submitStatus === 'sending'}
                aria-disabled={!isValid}
              >
                {submitStatus === 'sending' ? (
                  <span className="boka-submit-inner">
                    <span className="boka-spinner" aria-hidden="true" />
                    Skickar...
                  </span>
                ) : (
                  'Skicka serviceförfrågan'
                )}
              </button>
          </form>
        </div>
      </div>

      {/* GDPR Modal */}
      {gdprOpen && (
        <div
          className="gdpr-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gdpr-modal-heading"
          onClick={e => { if (e.target === e.currentTarget) setGdprOpen(false); }}
        >
          <div className="gdpr-modal">
            <button
              className="gdpr-modal-close"
              onClick={() => setGdprOpen(false)}
              aria-label="Stäng integritetspolicy"
            >
              &times;
            </button>
            <h2 id="gdpr-modal-heading">Integritetspolicy</h2>
            <p className="gdpr-updated">Senast uppdaterad: 2025-11-15</p>

            <div className="gdpr-content">
              <h3>Personuppgiftsansvarig</h3>
              <address>
                Bo &amp; Jimmy Bilservice AB<br />
                Org.nr: 556658-4016<br />
                Aminogatan 15E, Mölndal<br />
                <a href="mailto:bayerische@telia.com">bayerische@telia.com</a><br />
                <a href="tel:031847529">031-84 75 29</a>
              </address>

              <h3>Vilka uppgifter samlar vi in?</h3>
              <p>När du fyller i vårt bokningsformulär samlar vi in: namn, telefonnummer, e-postadress och registreringsnummer.</p>

              <h3>Varför samlar vi in uppgifterna?</h3>
              <p>Vi använder dina uppgifter för att kontakta dig angående bokning, skicka bekräftelser och följa upp ärenden.</p>
              <p>Rättslig grund: avtal och berättigat intresse.</p>

              <h3>Hur länge sparar vi uppgifterna?</h3>
              <p>Bokningsuppgifter sparas upp till 12 månader efter avslutad tjänst. Fakturaunderlag sparas i 7 år enligt bokföringslagen.</p>

              <h3>Vem har tillgång till uppgifterna?</h3>
              <p>Endast behörig personal hos Bo &amp; Jimmy Bilservice AB. Vi delar inte uppgifter med tredje part, förutom tjänsteleverantörer bundna av personuppgiftsbiträdesavtal.</p>

              <h3>Dina rättigheter</h3>
              <ul>
                <li>Rätt till tillgång (registerutdrag)</li>
                <li>Rätt till rättelse</li>
                <li>Rätt till radering</li>
                <li>Rätt att begränsa eller invända mot behandling</li>
                <li>Rätt att klaga till <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer">IMY</a></li>
              </ul>

              <h3>Säkerhet</h3>
              <p>Vi använder SSL-kryptering (HTTPS) och vidtar tekniska åtgärder för att skydda dina uppgifter.</p>

              <h3>Formuläret skickas via</h3>
              <p>
                <a href="https://www.emailjs.com/legal/terms-of-service/" target="_blank" rel="noopener noreferrer">
                  EmailJS
                </a>{' '}
                — deras behandling styrs av deras Privacy Policy.
              </p>

              <p>
                Frågor?{' '}
                <a href="mailto:bayerische@telia.com">bayerische@telia.com</a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Confirm leave */}
      {showConfirm && (
        <div
          className="confirm-overlay"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="confirm-heading"
          aria-describedby="confirm-desc"
        >
          <div className="confirm-popup">
            <h3 id="confirm-heading">Vill du rensa formuläret?</h3>
            <p id="confirm-desc">All information du fyllt i kommer att raderas.</p>
            <div className="confirm-buttons">
              <button
                className="confirm-yes"
                onClick={handleReset}
              >
                Ja, rensa
              </button>
              <button
                className="confirm-no"
                onClick={() => setShowConfirm(false)}
              >
                Avbryt
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
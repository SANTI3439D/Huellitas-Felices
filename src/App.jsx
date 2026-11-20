import { useState } from 'react';
import {
  Heart,
  Home,
  MapPin,
  PawPrint,
  HandHeart,
  Sparkles,
  ArrowUpRight,
  Users,
  Share2,
  Check,
} from 'lucide-react';
import './App.css';

function InstagramIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function CozyRescueIllustration() {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hero-svg"
      aria-label="Ilustración de hogar rescatista con perrito y gatico"
    >
      {/* Fondo orgánico suave */}
      <circle cx="210" cy="215" r="175" fill="#FDEBE2" />
      <circle cx="210" cy="215" r="140" fill="#F8D8C8" opacity="0.55" />

      {/* Hojas botánicas decorativas */}
      <path
        d="M78 295C52 260 55 215 88 188C105 225 102 265 78 295Z"
        fill="#3B5E4D"
        opacity="0.85"
      />
      <path
        d="M342 295C368 260 365 215 332 188C315 225 318 265 342 295Z"
        fill="#3B5E4D"
        opacity="0.85"
      />

      {/* Casita cálida */}
      <path
        d="M96 205L210 112L324 205V322C324 333.046 315.046 342 304 342H116C104.954 342 96 333.046 96 322V205Z"
        fill="#FCF8F3"
        stroke="#241A14"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      {/* Techo terracota */}
      <path
        d="M74 214L210 100L346 214"
        stroke="#D8572A"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Corazón en el techo */}
      <path
        d="M210 168C210 168 190 155 190 142C190 135 195.5 130 202 130C205.8 130 208.8 132 210 134.5C211.2 132 214.2 130 218 130C224.5 130 230 135 230 142C230 155 210 168 210 168Z"
        fill="#D8572A"
      />

      {/* Perrito feliz (izquierda) */}
      <ellipse cx="164" cy="292" rx="44" ry="48" fill="#E39D6B" stroke="#241A14" strokeWidth="4" />
      <circle cx="164" cy="236" r="36" fill="#EBB082" stroke="#241A14" strokeWidth="4" />
      {/* Orejas perrito */}
      <path
        d="M132 222C120 230 118 254 128 262C136 258 138 240 132 222Z"
        fill="#A45D36"
        stroke="#241A14"
        strokeWidth="3.5"
      />
      <path
        d="M196 222C208 230 210 254 200 262C192 258 190 240 196 222Z"
        fill="#A45D36"
        stroke="#241A14"
        strokeWidth="3.5"
      />
      {/* Cara perrito */}
      <circle cx="151" cy="232" r="4" fill="#241A14" />
      <circle cx="177" cy="232" r="4" fill="#241A14" />
      <ellipse cx="164" cy="244" rx="7" ry="5" fill="#241A14" />
      <path
        d="M156 253C160 258 168 258 172 253"
        stroke="#241A14"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Pañoleta verde del perrito */}
      <path d="M136 268L164 286L192 268H136Z" fill="#3B5E4D" stroke="#241A14" strokeWidth="3" />

      {/* Gatico tierno (derecha) */}
      <ellipse cx="260" cy="304" rx="34" ry="36" fill="#F2D7C4" stroke="#241A14" strokeWidth="4" />
      <circle cx="260" cy="256" r="28" fill="#F9E7DA" stroke="#241A14" strokeWidth="4" />
      {/* Orejas gatico */}
      <path d="M236 238L234 214L254 230Z" fill="#F2D7C4" stroke="#241A14" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M284 238L286 214L266 230Z" fill="#F2D7C4" stroke="#241A14" strokeWidth="3.5" strokeLinejoin="round" />
      {/* Cara gatico */}
      <circle cx="250" cy="254" r="3.5" fill="#241A14" />
      <circle cx="270" cy="254" r="3.5" fill="#241A14" />
      <path d="M256 262H264L260 266Z" fill="#D8572A" />
      <path
        d="M253 270C257 273 263 273 267 270"
        stroke="#241A14"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Colita gatico */}
      <path
        d="M292 318C312 314 316 292 302 282"
        stroke="#241A14"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Base piso */}
      <line x1="76" y1="342" x2="344" y2="342" stroke="#241A14" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

const HELP_OPTIONS = [
  {
    id: 'adoptar',
    label: 'Adoptar con amor',
    title: 'Dales un hogar definitivo',
    description:
      'Cada perrito y gatico que rehabilitamos busca una familia responsable que lo ame para siempre. En nuestras redes publicamos sus fotos, personalidad y requisitos.',
    bullets: [
      'Entregamos peluditos recuperados y llenos de cariño',
      'Te contamos su historia y carácter real',
      'Hacemos seguimiento cercano para asegurar su bienestar',
    ],
    ctaText: 'Ver peluditos en Instagram',
    ctaType: 'ig',
  },
  {
    id: 'donar',
    label: 'Donar alimento o insumos',
    title: 'Cada granito de concentrado suma',
    description:
      'Al mantenerlos en nuestras propias casas, los gastos de alimentación, arena, medicinas y veterinario corren por nuestra cuenta y por la generosidad de vecinos como tú.',
    bullets: [
      'Concentrado para perro y gato (cachorro o adulto)',
      'Insumos de aseo, cobijas, arena o medicamentos',
      'Aportes voluntarios para cuentas veterinarias',
    ],
    ctaText: 'Escríbenos por Instagram',
    ctaType: 'ig',
  },
  {
    id: 'difundir',
    label: 'Compartir y difundir',
    title: 'Un clic también salva vidas',
    description:
      'Si en este momento no puedes adoptar ni donar, ayudarnos a llegar a más personas en Engativá y toda Bogotá es igual de valioso.',
    bullets: [
      'Comparte nuestras publicaciones en tus historias',
      'Etiqueta a amigos que estén buscando adoptar',
      'Sigue nuestras cuentas para dar visibilidad al proyecto',
    ],
    ctaText: 'Ir a nuestro Facebook',
    ctaType: 'fb',
  },
];

function App() {
  // ⚠️ REEMPLAZA AQUÍ CON LOS ENLACES REALES DE HUELLITAS FELICES
  const instagramUrl = 'https://www.instagram.com/';
  const facebookUrl = 'https://www.facebook.com/';

  const [activeHelp, setActiveHelp] = useState(HELP_OPTIONS[0].id);
  const currentHelp = HELP_OPTIONS.find((item) => item.id === activeHelp);

  return (
    <div className="page">
      {/* Fondo ambiental decorativo */}
      <div className="ambient-glow ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-2" aria-hidden="true" />

      {/* Navbar flotante con efecto vidrio */}
      <header className="navbar-wrap">
        <nav className="navbar">
          <a href="#" className="nav-brand">
            <span className="brand-badge">
              <PawPrint size={20} />
            </span>
            <span className="brand-name">Huellitas Felices</span>
          </a>

          <div className="nav-links">
            <a href="#historia">Nuestra Historia</a>
            <a href="#proceso">Labor</a>
            <a href="#ayudar">Cómo Ayudar</a>
          </div>

          <a href="#redes" className="nav-cta">
            Síguenos
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        {/* HERO ASIMÉTRICO */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <div className="location-pill">
                <span className="pulse-dot" />
                <MapPin size={15} />
                <span>Barrio Florida • Engativá, Bogotá</span>
              </div>

              <h1>
                Amor que rescata,{' '}
                <span className="highlight-italic">hogares que sanan.</span>
              </h1>

              <p className="hero-subtitle">
                Somos tres señoras vecinas del barrio Florida unidas por una labor
                de corazón: rescatamos animalitos de la calle y los rehabilitamos
                dentro de nuestras propias casas hasta verlos felices otra vez.
              </p>

              <div className="hero-actions">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ig"
                >
                  <InstagramIcon size={20} />
                  <span>Ir a Instagram</span>
                  <ArrowUpRight size={17} className="btn-arrow" />
                </a>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-fb"
                >
                  <FacebookIcon size={20} />
                  <span>Ir a Facebook</span>
                  <ArrowUpRight size={17} className="btn-arrow" />
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-avatars" aria-hidden="true">
                  <span>🐾</span>
                  <span>🏡</span>
                  <span>❤️</span>
                </div>
                <p>
                  Rescate comunitario 100% hecho en casa •{' '}
                  <strong>Sin jaulas, con familia</strong>
                </p>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-frame">
                <CozyRescueIllustration />

                <div className="floating-card floating-top">
                  <div className="floating-icon sage">
                    <Users size={18} />
                  </div>
                  <div>
                    <strong>3 Vecinas</strong>
                    <span>Unidas en Engativá</span>
                  </div>
                </div>

                <div className="floating-card floating-bottom">
                  <div className="floating-icon terracotta">
                    <Heart size={18} />
                  </div>
                  <div>
                    <strong>Rehabilitación real</strong>
                    <span>En la calidez de casa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BANDA DE VALORES */}
        <section className="highlights-strip">
          <div className="container strip-grid">
            <div className="strip-item">
              <Sparkles size={20} className="strip-icon" />
              <div>
                <h3>Rescate cercano</h3>
                <p>Atendemos casos de abandono en el barrio Florida y alrededores.</p>
              </div>
            </div>
            <div className="strip-item">
              <Home size={20} className="strip-icon" />
              <div>
                <h3>Cuidado en familia</h3>
                <p>Cada peludito convive en nuestros hogares mientras se recupera.</p>
              </div>
            </div>
            <div className="strip-item">
              <Share2 size={20} className="strip-icon" />
              <div>
                <h3>Comunidad conectada</h3>
                <p>Compartimos cada avance y adopción en Instagram y Facebook.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HISTORIA EDITORIAL */}
        <section id="historia" className="section story-section">
          <div className="container story-grid">
            <div className="story-quote-card">
              <span className="eyebrow-light">Nuestra Esencia</span>
              <blockquote>
                “No tenemos un gran refugio comercial, pero sí tres puertas
                abiertas y un corazón gigante para quienes no tienen voz.”
              </blockquote>
              <div className="quote-author">
                <PawPrint size={18} />
                <span>Las fundadoras • Barrio Florida, Engativá</span>
              </div>
            </div>

            <div className="story-content">
              <span className="eyebrow">Quiénes somos</span>
              <h2>Tres hogares convertidos en refugio de esperanza</h2>
              <p>
                <strong>Huellitas Felices</strong> nació de la empatía y el
                compromiso de tres vecinas del barrio Florida. Al ver tantos
                perritos y gaticos desamparados en las calles de nuestra
                localidad, decidimos actuar con lo que teníamos a la mano:
                nuestras propias casas.
              </p>
              <p>
                Aquí no hay jaulas frías. Cuando un animalito llega herido,
                asustado o con hambre, recibe alimento, visitas al veterinario,
                descanso en un espacio seguro y el cariño paciente que necesita
                para volver a confiar en las personas.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESO EN 3 PASOS */}
        <section id="proceso" className="section process-section">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Nuestra Labor</span>
              <h2>El camino de una huellita feliz</h2>
              <p>
                Cada rescate es una historia distinta, pero todas pasan por el
                mismo cuidado dedicado paso a paso.
              </p>
            </div>

            <div className="process-grid">
              <article className="process-card">
                <span className="step-num">01</span>
                <div className="process-icon">
                  <PawPrint size={26} />
                </div>
                <h3>Rescate en la calle</h3>
                <p>
                  Recogemos animalitos en situación de riesgo, abandono o
                  enfermedad en nuestro sector para ponerlos a salvo de inmediato.
                </p>
              </article>

              <article className="process-card">
                <span className="step-num">02</span>
                <div className="process-icon sage-bg">
                  <Home size={26} />
                </div>
                <h3>Rehabilitación en casa</h3>
                <p>
                  Los acogemos en nuestros propios hogares brindándoles
                  alimentación, atención médica y mucho amor hasta que sanan.
                </p>
              </article>

              <article className="process-card">
                <span className="step-num">03</span>
                <div className="process-icon">
                  <Heart size={26} />
                </div>
                <h3>Nueva oportunidad</h3>
                <p>
                  Publicamos sus historias en nuestras redes para encontrarles
                  familias responsables que los cuiden toda la vida.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SECCIÓN INTERACTIVA: CÓMO AYUDAR */}
        <section id="ayudar" className="section help-section">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Súmate a la causa</span>
              <h2>¿Cómo puedes ayudar hoy?</h2>
              <p>
                Elige una forma de apoyar a los peluditos del barrio Florida:
              </p>
            </div>

            <div className="help-widget">
              <div className="help-tabs" role="tablist">
                {HELP_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    role="tab"
                    aria-selected={activeHelp === option.id}
                    className={`help-tab ${
                      activeHelp === option.id ? 'active' : ''
                    }`}
                    onClick={() => setActiveHelp(option.id)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="help-panel" role="tabpanel">
                <div className="help-panel-info">
                  <h3>{currentHelp.title}</h3>
                  <p>{currentHelp.description}</p>
                  <ul className="help-bullets">
                    {currentHelp.bullets.map((bullet, idx) => (
                      <li key={idx}>
                        <span className="check-circle">
                          <Check size={14} />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="help-panel-action">
                  <HandHeart size={38} className="help-action-icon" />
                  <p>Contáctanos directo por mensaje en nuestras redes:</p>
                  <a
                    href={currentHelp.ctaType === 'ig' ? instagramUrl : facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${
                      currentHelp.ctaType === 'ig' ? 'btn-ig' : 'btn-fb'
                    }`}
                  >
                    {currentHelp.ctaType === 'ig' ? (
                      <InstagramIcon size={19} />
                    ) : (
                      <FacebookIcon size={19} />
                    )}
                    <span>{currentHelp.ctaText}</span>
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL DE REDES SOCIALES */}
        <section id="redes" className="section social-banner-section">
          <div className="container">
            <div className="social-banner">
              <div className="social-banner-content">
                <span className="eyebrow-light">Conéctate con nosotras</span>
                <h2>Conoce a los peluditos que buscan hogar</h2>
                <p>
                  En nuestro Instagram y Facebook subimos fotos reales, historias
                  de recuperación, jornadas y formas de aportar desde cualquier
                  lugar.
                </p>

                <div className="social-banner-buttons">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ig btn-large"
                  >
                    <InstagramIcon size={22} />
                    <span>Síguenos en Instagram</span>
                    <ArrowUpRight size={18} />
                  </a>

                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-fb btn-large"
                  >
                    <FacebookIcon size={22} />
                    <span>Síguenos en Facebook</span>
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER PROFESIONAL */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="nav-brand">
              <span className="brand-badge">
                <PawPrint size={18} />
              </span>
              <span className="brand-name">Huellitas Felices</span>
            </div>
            <p className="footer-desc">
              Organización comunitaria de rescate y rehabilitación animal en
              hogares de paso. Barrio Florida, Engativá — Bogotá, Colombia.
            </p>
          </div>

          <div className="footer-links-col">
            <h4>Explorar</h4>
            <a href="#historia">Nuestra historia</a>
            <a href="#proceso">Nuestra labor</a>
            <a href="#ayudar">Cómo ayudar</a>
          </div>

          <div className="footer-links-col">
            <h4>Redes Sociales</h4>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram oficial
            </a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              Facebook oficial
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>Hecho con ❤️ para los animalitos del barrio Florida, Engativá.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
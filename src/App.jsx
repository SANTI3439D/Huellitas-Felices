import { Heart, Home, MapPin, PawPrint, HandHeart } from 'lucide-react';
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

function App() {
  // Reemplaza estos enlaces con los reales de Instagram y Facebook
  const instagramUrl = "https://www.instagram.com/";
  const facebookUrl = "https://www.facebook.com/";

  return (
    <div className="page">
      {/* Barra superior sencilla */}
      <nav className="navbar">
        <div className="nav-brand">
          <PawPrint size={24} className="brand-icon" />
          <span>Huellitas Felices</span>
        </div>
        <div className="nav-links">
          <a href="#historia">Historia</a>
          <a href="#labor">Nuestra Labor</a>
          <a href="#redes">Ayudar</a>
        </div>
      </nav>

      {/* Portada principal */}
      <header className="hero">
        <div className="hero-content">
          <div className="badge">
            <MapPin size={16} />
            <span>Barrio Florida, Engativá • Bogotá</span>
          </div>
          <h1>Rescatamos vidas, sanamos corazones en casa</h1>
          <p className="subtitle">
            Somos tres vecinas del barrio Florida unidas por una misma misión: 
            recoger animalitos en situación de calle, rehabilitarlos en nuestros propios 
            hogares y darles una segunda oportunidad llena de amor.
          </p>
          <div className="cta-buttons">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ig">
              <InstagramIcon size={20} />
              Ir a nuestro Instagram
            </a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="btn btn-fb">
              <FacebookIcon size={20} />
              Ir a nuestro Facebook
            </a>
          </div>
        </div>
      </header>

      {/* Sección: Quiénes somos */}
      <section id="historia" className="section about">
        <div className="section-inner">
          <h2>¿Quiénes somos?</h2>
          <p>
            <strong>Huellitas Felices</strong> nació del corazón de tres señoras de la comunidad 
            del barrio Florida en Engativá. Al ver tantos perritos y gaticos abandonados en nuestro 
            sector, decidimos abrir las puertas de nuestras propias casas para convertirlas en 
            hogares de paso y rehabilitación.
          </p>
          <p>
            No contamos con un gran refugio comercial; nuestro motor es el esfuerzo diario, 
            la solidaridad de los vecinos y la convicción de que cada peludito merece calor de hogar, 
            alimento y cuidados veterinarios mientras recupera su salud y confianza.
          </p>
        </div>
      </section>

      {/* Sección: Nuestra labor */}
      <section id="labor" className="section labor">
        <div className="section-inner">
          <h2>Así transformamos sus vidas</h2>
          <div className="cards">
            <div className="card">
              <div className="card-icon-box">
                <PawPrint size={28} />
              </div>
              <h3>1. Rescate</h3>
              <p>
                Auxiliamos animalitos vulnerables o abandonados en las calles de nuestra localidad 
                para ponerlos a salvo de inmediato.
              </p>
            </div>

            <div className="card">
              <div className="card-icon-box">
                <Home size={28} />
              </div>
              <h3>2. Rehabilitación en casa</h3>
              <p>
                Los cuidamos en nuestros hogares con alimentación, atención veterinaria, paciencia 
                y mucho cariño hasta que sanan física y emocionalmente.
              </p>
            </div>

            <div className="card">
              <div className="card-icon-box">
                <Heart size={28} />
              </div>
              <h3>3. Adopción y apoyo</h3>
              <p>
                Compartimos sus historias en redes sociales para conseguirles familias responsables 
                o recibir ayudas para su manutención.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Redes Sociales / Cómo ayudar */}
      <section id="redes" className="section social-cta">
        <div className="social-box">
          <HandHeart size={40} className="social-box-icon" />
          <h2>¡Conoce a nuestros rescatados y ayúdanos!</h2>
          <p>
            En nuestras redes sociales publicamos el día a día de los peluditos que estamos 
            rehabilitando, jornadas de adopción y cómo puedes aportar (con alimento, medicinas, 
            adopción o compartiendo nuestras publicaciones).
          </p>
          <div className="cta-buttons">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ig">
              <InstagramIcon size={20} />
              Síguenos en Instagram
            </a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="btn btn-fb">
              <FacebookIcon size={20} />
              Síguenos en Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="footer">
        <p><strong>Huellitas Felices</strong> — Rescate y rehabilitación animal</p>
        <p className="footer-loc">Barrio Florida, Engativá • Bogotá, Colombia</p>
      </footer>
    </div>
  );
}

export default App;
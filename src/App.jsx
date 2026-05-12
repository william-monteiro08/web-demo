import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  Clock,
  Globe2,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";

const business = {
  name: "Tenerife Escape",
  whatsapp: "+34600000000",
  phone: "+34 600 000 000",
  address: "Costa Adeje, Tenerife",
  googleMapsUrl: "https://www.google.com/maps?q=Costa+Adeje+Tenerife",
};

const copy = {
  en: {
    nav: ["Experiences", "Why us", "Reviews", "Location"],
    book: "Book now",
    badge: "Premium local experiences in Tenerife",
    headline: "Discover Tenerife without stress, guesswork or tourist traps.",
    subheadline:
      "Private tours and island experiences for travellers who want a smooth, beautiful and reliable way to enjoy Tenerife.",
    primary: "Book by WhatsApp",
    secondary: "View experiences",
    stats: [
      ["4.9/5", "Average rating"],
      ["24h", "Fast response"],
      ["ES / EN", "Bilingual support"],
    ],
    experiencesTitle: "Premium experiences, clearly packaged.",
    experiencesSubtitle:
      "A clear offer makes the business easier to trust, easier to understand and easier to book.",
    services: [
      {
        tag: "Most popular",
        title: "Private Island Tour",
        text: "A comfortable route through Tenerife’s most iconic viewpoints, hidden corners and coastal landscapes.",
        price: "From €89",
      },
      {
        tag: "Couples",
        title: "Sunset Experience",
        text: "A relaxed premium evening plan with beautiful views, local recommendations and easy coordination.",
        price: "From €59",
      },
      {
        tag: "Custom",
        title: "Personalized Day Plan",
        text: "Tell us your dates, budget and travel style. We prepare the best plan for your group.",
        price: "On request",
      },
    ],
    whyTitle: "A website that makes the business feel professional before the client even sends a message.",
    why: [
      "Mobile-first design for tourists",
      "Direct WhatsApp booking flow",
      "Clear prices and service packages",
      "Trust-building photos and reviews",
    ],
    processTitle: "From first visit to booking in three simple steps.",
    steps: [
      ["01", "Choose an experience", "The visitor understands the offer in seconds."],
      ["02", "Send a WhatsApp", "No complicated forms. Just direct contact."],
      ["03", "Confirm the booking", "Clear details, fast reply and a professional impression."],
    ],
    reviewsTitle: "Trust signals that help visitors become paying clients.",
    reviews: [
      ["Sophie M.", "United Kingdom", "Everything felt premium and easy. The booking was fast and the communication was clear."],
      ["Carlos R.", "Spain", "Professional, friendly and very well organized. Exactly what tourists need in Tenerife."],
      ["Emma L.", "Germany", "The website made it simple to understand the options and contact them directly."],
    ],
    contactTitle: "Ready to plan your Tenerife experience?",
    contactText:
      "Send us a WhatsApp message and we’ll help you choose the best option. Fast replies, clear information and no complicated forms.",
    hours: "Monday to Saturday · 09:00–20:00",
    whatsappMessage: "Hi, I would like more information about your Tenerife experiences.",
  },
  es: {
    nav: ["Experiencias", "Por qué", "Reseñas", "Ubicación"],
    book: "Reservar",
    badge: "Experiencias premium locales en Tenerife",
    headline: "Descubre Tenerife sin estrés, dudas ni trampas turísticas.",
    subheadline:
      "Tours privados y experiencias en la isla para viajeros que quieren disfrutar Tenerife de forma cómoda, bonita y fiable.",
    primary: "Reservar por WhatsApp",
    secondary: "Ver experiencias",
    stats: [
      ["4.9/5", "Valoración media"],
      ["24h", "Respuesta rápida"],
      ["ES / EN", "Atención bilingüe"],
    ],
    experiencesTitle: "Experiencias premium presentadas de forma clara.",
    experiencesSubtitle:
      "Una oferta clara hace que el negocio sea más fácil de entender, más fiable y más fácil de reservar.",
    services: [
      {
        tag: "Más popular",
        title: "Tour privado por la isla",
        text: "Una ruta cómoda por los miradores más icónicos, rincones especiales y paisajes costeros de Tenerife.",
        price: "Desde 89 €",
      },
      {
        tag: "Parejas",
        title: "Experiencia al atardecer",
        text: "Un plan premium relajado con vistas bonitas, recomendaciones locales y coordinación sencilla.",
        price: "Desde 59 €",
      },
      {
        tag: "Personalizado",
        title: "Plan diario personalizado",
        text: "Cuéntanos fechas, presupuesto y estilo de viaje. Preparamos el mejor plan para tu grupo.",
        price: "A consultar",
      },
    ],
    whyTitle: "Una web que hace que el negocio parezca profesional antes de que el cliente escriba.",
    why: [
      "Diseño móvil pensado para turistas",
      "Reserva directa por WhatsApp",
      "Precios y servicios claros",
      "Fotos y reseñas que generan confianza",
    ],
    processTitle: "De la primera visita a la reserva en tres pasos simples.",
    steps: [
      ["01", "Elige una experiencia", "El visitante entiende la oferta en segundos."],
      ["02", "Envía un WhatsApp", "Sin formularios complicados. Contacto directo."],
      ["03", "Confirma la reserva", "Detalles claros, respuesta rápida e imagen profesional."],
    ],
    reviewsTitle: "Elementos de confianza que convierten visitas en clientes.",
    reviews: [
      ["Sophie M.", "Reino Unido", "Todo se sintió premium y sencillo. La reserva fue rápida y la comunicación clara."],
      ["Carlos R.", "España", "Profesional, cercano y muy bien organizado. Justo lo que necesita un turista en Tenerife."],
      ["Emma L.", "Alemania", "La web hizo que fuera fácil entender las opciones y contactar directamente."],
    ],
    contactTitle: "¿Listo para planear tu experiencia en Tenerife?",
    contactText:
      "Envíanos un mensaje por WhatsApp y te ayudamos a elegir la mejor opción. Respuesta rápida, información clara y sin formularios complicados.",
    hours: "Lunes a sábado · 09:00–20:00",
    whatsappMessage: "Hola, me gustaría recibir más información sobre vuestras experiencias en Tenerife.",
  },
};

const img = {
  hero: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=90",
  one: "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=1000&q=90",
  two: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=90",
  three: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=90",
};

export default function App() {
  const [lang, setLang] = useState("es");
  const t = copy[lang];

  const whatsappLink = useMemo(() => {
    return `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(t.whatsappMessage)}`;
  }, [t.whatsappMessage]);

  return (
    <div className="site">
      <style>{css}</style>

      <header className="navbar">
        <a className="brand" href="#home">
          <span className="logo">TE</span>
          <span>{business.name}</span>
        </a>

        <nav className="navlinks">
          <a href="#experiences">{t.nav[0]}</a>
          <a href="#why">{t.nav[1]}</a>
          <a href="#reviews">{t.nav[2]}</a>
          <a href="#location">{t.nav[3]}</a>
        </nav>

        <div className="navActions">
          <button className="lang" onClick={() => setLang(lang === "en" ? "es" : "en")}>
            <Languages size={16} /> {lang === "en" ? "ES" : "EN"}
          </button>
          <a className="navCta" href={whatsappLink}>{t.book}</a>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="heroText">
            <div className="eyebrow"><span />{t.badge}</div>
            <h1>{t.headline}</h1>
            <p className="lead">{t.subheadline}</p>
            <div className="heroButtons">
              <a className="btn primary" href={whatsappLink}>{t.primary}<MessageCircle size={19} /></a>
              <a className="btn secondary" href="#experiences">{t.secondary}<ArrowRight size={19} /></a>
            </div>
            <div className="miniTrust">
              <div className="avatars">
                <img src={img.one} alt="Client" />
                <img src={img.two} alt="Client" />
                <img src={img.three} alt="Client" />
              </div>
              <span>Trusted by travellers, couples and families visiting Tenerife</span>
            </div>
          </div>

          <div className="heroVisual">
            <div className="floatingCard topCard">
              <Globe2 size={20} />
              <div><strong>ES / EN</strong><span>Bilingual service</span></div>
            </div>
            <img src={img.hero} alt="Tenerife beach" />
            <div className="heroPanel">
              <div>
                <span className="panelLabel">Featured experience</span>
                <strong>Private Island Tour</strong>
              </div>
              <span className="price">€89+</span>
            </div>
          </div>
        </section>

        <section className="statsBar section slim">
          {t.stats.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section id="experiences" className="section block">
          <div className="sectionHead">
            <span className="kicker">Experiences</span>
            <h2>{t.experiencesTitle}</h2>
            <p>{t.experiencesSubtitle}</p>
          </div>

          <div className="cards">
            {t.services.map((service, index) => (
              <article className="serviceCard" key={service.title}>
                <div className="imageWrap">
                  <img src={[img.one, img.two, img.three][index]} alt={service.title} />
                  <span>{service.tag}</span>
                </div>
                <div className="cardBody">
                  <div className="cardTop">
                    <h3>{service.title}</h3>
                    <strong>{service.price}</strong>
                  </div>
                  <p>{service.text}</p>
                  <a href={whatsappLink}>Book this experience <ArrowRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="why" className="section split">
          <div className="photoGrid">
            <img src={img.two} alt="Tenerife mountain" />
            <div>
              <img src={img.one} alt="Tenerife waterfall" />
              <div className="whiteBox">
                <Globe2 />
                <strong>ES / EN</strong>
                <span>Tourist-friendly bilingual website</span>
              </div>
            </div>
          </div>

          <div className="whyText">
            <span className="kicker">Why this works</span>
            <h2>{t.whyTitle}</h2>
            <div className="checks">
              {t.why.map((item) => (
                <div className="checkItem" key={item}>
                  <Check size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section process">
          <div className="sectionHead compact">
            <span className="kicker">Process</span>
            <h2>{t.processTitle}</h2>
          </div>
          <div className="steps">
            {t.steps.map(([number, title, text]) => (
              <div className="step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="reviews" className="section block">
          <div className="sectionHead">
            <span className="kicker">Reviews</span>
            <h2>{t.reviewsTitle}</h2>
          </div>
          <div className="reviews">
            {t.reviews.map(([name, country, text]) => (
              <article className="review" key={name}>
                <div className="stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
                <p>“{text}”</p>
                <strong>{name}</strong>
                <span>{country}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="location" className="section contact">
          <div className="contactText">
            <span className="kicker dark">Book today</span>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <div className="contactLinks">
              <a className="blackLink" href={whatsappLink}><MessageCircle /> {t.primary}</a>
              <a href={`tel:${business.phone}`}><Phone /> {business.phone}</a>
              <a href={business.googleMapsUrl}><MapPin /> {business.address}</a>
              <div><Clock /> {t.hours}</div>
            </div>
          </div>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps?q=Costa+Adeje+Tenerife&output=embed"
            loading="lazy"
          />
        </section>
      </main>

      <footer>© {new Date().getFullYear()} {business.name}. Premium website demo for local businesses.</footer>
    </div>
  );
}

const css = `
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #070706; color: #fff; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; }
.site { min-height: 100vh; overflow-x: hidden; background: radial-gradient(circle at 20% 0%, rgba(245, 168, 78, .18), transparent 34rem), radial-gradient(circle at 90% 20%, rgba(71, 185, 211, .14), transparent 30rem), #070706; }
.navbar { position: fixed; z-index: 50; top: 18px; left: 50%; transform: translateX(-50%); width: min(1440px, calc(100% - 64px)); height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 12px 16px; border: 1px solid rgba(255,255,255,.12); border-radius: 999px; background: rgba(7,7,6,.74); backdrop-filter: blur(24px); box-shadow: 0 24px 80px rgba(0,0,0,.45); }
.brand { display: flex; align-items: center; gap: 12px; font-weight: 900; letter-spacing: -.02em; white-space: nowrap; }
.logo { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 50%; background: #fff; color: #050505; font-size: 14px; font-weight: 950; }
.navlinks { display: flex; gap: 30px; color: rgba(255,255,255,.68); font-size: 14px; }
.navlinks a:hover { color: white; }
.navActions { display: flex; align-items: center; gap: 10px; }
.lang { display: inline-flex; align-items: center; gap: 8px; height: 44px; padding: 0 16px; border-radius: 999px; border: 1px solid rgba(255,255,255,.12); color: white; background: rgba(255,255,255,.06); cursor: pointer; }
.navCta { height: 44px; display: inline-flex; align-items: center; padding: 0 20px; border-radius: 999px; background: white; color: #050505; font-weight: 900; }
.section { width: min(1440px, calc(100% - 64px)); margin: 0 auto; }
.hero { min-height: 100vh; display: grid; grid-template-columns: 1.08fr .92fr; align-items: center; gap: 96px; padding-top: 140px; padding-bottom: 110px; }
.eyebrow { display: inline-flex; align-items: center; gap: 10px; padding: 10px 14px; border: 1px solid rgba(255,255,255,.12); border-radius: 999px; color: rgba(255,255,255,.78); background: rgba(255,255,255,.06); font-size: 14px; }
.eyebrow span { width: 8px; height: 8px; border-radius: 50%; background: #34d399; }
h1 { margin: 24px 0 0; max-width: 820px; font-size: clamp(54px, 7vw, 92px); line-height: .92; letter-spacing: -.075em; font-weight: 950; }
.lead { margin: 28px 0 0; max-width: 760px; color: rgba(255,255,255,.66); font-size: clamp(18px, 2vw, 21px); line-height: 1.65; }
.heroButtons { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 36px; }
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 56px; padding: 0 24px; border-radius: 999px; font-weight: 950; transition: transform .2s, background .2s; }
.btn:hover { transform: translateY(-3px); }
.primary { background: white; color: #050505; }
.secondary { border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.06); }
.miniTrust { display: flex; align-items: center; gap: 16px; margin-top: 34px; max-width: 540px; color: rgba(255,255,255,.56); font-size: 14px; line-height: 1.5; }
.avatars { display: flex; flex-shrink: 0; }
.avatars img { width: 44px; height: 44px; margin-left: -10px; border: 2px solid #070706; border-radius: 50%; object-fit: cover; }
.avatars img:first-child { margin-left: 0; }
.heroVisual { position: relative; min-height: 650px; border-radius: 42px; overflow: hidden; border: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.06); padding: 12px; box-shadow: 0 40px 120px rgba(0,0,0,.55); }
.heroVisual > img { width: 100%; height: 100%; min-height: 626px; display: block; object-fit: cover; border-radius: 32px; }
.heroVisual:after { content: ""; position: absolute; inset: 12px; border-radius: 32px; background: linear-gradient(to top, rgba(0,0,0,.78), rgba(0,0,0,.06) 55%, rgba(0,0,0,.08)); pointer-events: none; }
.floatingCard { position: absolute; z-index: 4; top: 34px; left: -28px; display: flex; gap: 12px; align-items: center; padding: 14px 16px; border-radius: 22px; border: 1px solid rgba(255,255,255,.16); background: rgba(0,0,0,.62); backdrop-filter: blur(18px); box-shadow: 0 20px 60px rgba(0,0,0,.35); }
.floatingCard div { display: grid; gap: 2px; }
.floatingCard strong { font-size: 14px; }
.floatingCard span { font-size: 12px; color: rgba(255,255,255,.58); }
.heroPanel { position: absolute; z-index: 4; left: 36px; right: 36px; bottom: 36px; display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 22px; border-radius: 28px; background: rgba(0,0,0,.58); border: 1px solid rgba(255,255,255,.14); backdrop-filter: blur(18px); }
.panelLabel { display: block; margin-bottom: 8px; color: rgba(255,255,255,.55); font-size: 13px; }
.heroPanel strong { font-size: 24px; }
.price { padding: 10px 16px; border-radius: 999px; background: white; color: #050505; font-weight: 950; }
.slim { margin-top: -20px; }
.statsBar { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; overflow: hidden; border: 1px solid rgba(255,255,255,.1); border-radius: 34px; background: rgba(255,255,255,.1); }
.stat { padding: 30px; background: rgba(255,255,255,.055); }
.stat strong { display: block; font-size: 34px; letter-spacing: -.04em; }
.stat span { display: block; margin-top: 8px; color: rgba(255,255,255,.55); }
.block { padding: 120px 0 40px; }
.sectionHead { display: grid; grid-template-columns: 1fr .65fr; align-items: end; gap: 40px; margin-bottom: 52px; }
.sectionHead.compact { display: block; max-width: 760px; margin: 0 auto 46px; text-align: center; }
.kicker { display: inline-block; margin-bottom: 16px; color: #f5c46b; font-size: 12px; font-weight: 950; letter-spacing: .24em; text-transform: uppercase; }
.kicker.dark { color: rgba(0,0,0,.45); }
h2 { margin: 0; font-size: clamp(38px, 5vw, 64px); line-height: .98; letter-spacing: -.055em; font-weight: 950; }
.sectionHead p { margin: 0; color: rgba(255,255,255,.55); line-height: 1.7; font-size: 17px; }
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
.serviceCard { border-radius: 34px; overflow: hidden; padding: 10px; border: 1px solid rgba(255,255,255,.11); background: rgba(255,255,255,.055); box-shadow: 0 30px 100px rgba(0,0,0,.3); }
.imageWrap { position: relative; overflow: hidden; border-radius: 26px; }
.imageWrap img { width: 100%; height: 280px; display: block; object-fit: cover; transition: transform .45s; }
.serviceCard:hover .imageWrap img { transform: scale(1.06); }
.imageWrap span { position: absolute; top: 14px; left: 14px; padding: 8px 12px; border-radius: 999px; background: rgba(0,0,0,.58); backdrop-filter: blur(10px); font-size: 12px; font-weight: 900; }
.cardBody { padding: 24px 14px 12px; }
.cardTop { display: flex; justify-content: space-between; gap: 14px; align-items: flex-start; }
h3 { margin: 0; font-size: 24px; line-height: 1.08; letter-spacing: -.035em; }
.cardTop strong { flex-shrink: 0; padding: 8px 12px; border-radius: 999px; background: white; color: #050505; font-size: 13px; }
.cardBody p { min-height: 84px; color: rgba(255,255,255,.58); line-height: 1.6; }
.cardBody a { display: inline-flex; align-items: center; gap: 8px; font-weight: 950; }
.split { display: grid; grid-template-columns: .95fr 1.05fr; gap: 70px; align-items: center; padding: 120px 0; }
.photoGrid { display: grid; grid-template-columns: 1fr .86fr; gap: 14px; padding: 12px; border-radius: 40px; border: 1px solid rgba(255,255,255,.11); background: rgba(255,255,255,.055); }
.photoGrid img { width: 100%; height: 520px; object-fit: cover; border-radius: 30px; display: block; }
.photoGrid > div { display: grid; gap: 14px; }
.photoGrid > div img { height: 250px; }
.whiteBox { min-height: 256px; display: flex; flex-direction: column; justify-content: flex-end; gap: 8px; padding: 24px; border-radius: 30px; background: white; color: #050505; }
.whiteBox svg { margin-bottom: auto; }
.whiteBox strong { font-size: 38px; letter-spacing: -.05em; }
.whiteBox span { color: rgba(0,0,0,.55); }
.whyText h2 { max-width: 760px; }
.checks { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 38px; }
.checkItem { display: flex; align-items: center; gap: 14px; padding: 18px; border-radius: 22px; background: rgba(255,255,255,.055); border: 1px solid rgba(255,255,255,.1); font-weight: 800; color: rgba(255,255,255,.84); }
.checkItem svg { flex-shrink: 0; color: #34d399; }
.process { padding: 80px 0; }
.steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; padding: 22px; border-radius: 40px; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.045); }
.step { padding: 28px; border-radius: 28px; background: rgba(0,0,0,.25); }
.step > span { display: block; margin-bottom: 54px; color: rgba(255,255,255,.18); font-size: 52px; font-weight: 950; letter-spacing: -.06em; }
.step p { color: rgba(255,255,255,.56); line-height: 1.65; }
.reviews { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.review { padding: 28px; border-radius: 30px; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.055); }
.stars { display: flex; gap: 4px; color: #f5c46b; margin-bottom: 24px; }
.review p { min-height: 108px; color: rgba(255,255,255,.72); line-height: 1.7; font-size: 17px; }
.review strong { display: block; margin-top: 26px; }
.review span { color: rgba(255,255,255,.42); font-size: 14px; }
.contact { display: grid; grid-template-columns: .9fr 1.1fr; overflow: hidden; margin-top: 100px; margin-bottom: 60px; border-radius: 42px; background: white; color: #050505; }
.contactText { padding: 56px; }
.contactText p { margin-top: 24px; color: rgba(0,0,0,.6); line-height: 1.7; font-size: 18px; }
.contactLinks { display: grid; gap: 12px; margin-top: 34px; }
.contactLinks a, .contactLinks div { display: flex; align-items: center; gap: 14px; min-height: 58px; padding: 0 18px; border: 1px solid rgba(0,0,0,.11); border-radius: 20px; font-weight: 850; }
.contactLinks .blackLink { background: #050505; color: white; }
.contact iframe { width: 100%; height: 100%; min-height: 620px; border: 0; }
footer { padding: 34px 16px 50px; color: rgba(255,255,255,.42); text-align: center; }
@media (max-width: 980px) {
  .navlinks { display: none; }
  .hero, .split, .contact { grid-template-columns: 1fr; }
  .hero { padding-top: 125px; min-height: auto; }
  .heroVisual { min-height: 520px; }
  .heroVisual > img { min-height: 496px; }
  .sectionHead { grid-template-columns: 1fr; gap: 18px; }
  .cards, .steps, .reviews { grid-template-columns: 1fr; }
  .statsBar { grid-template-columns: 1fr; }
  .floatingCard { left: 26px; }
  .photoGrid { grid-template-columns: 1fr; }
  .photoGrid img, .photoGrid > div img { height: 340px; }
}
@media (max-width: 640px) {
  .navbar { height: auto; border-radius: 26px; }
  .brand span:last-child, .navCta { display: none; }
  h1 { font-size: 48px; }
  .section { width: min(100% - 24px, 1440px); }
  .heroPanel { left: 22px; right: 22px; bottom: 22px; align-items: flex-start; flex-direction: column; }
  .miniTrust { align-items: flex-start; }
  .checks { grid-template-columns: 1fr; }
  .contactText { padding: 34px 22px; }
}
`;

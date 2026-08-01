import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  ExternalLink,
  GraduationCap,
  Handshake,
  LineChart,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  Phone,
  PhoneCall,
  Presentation,
  Search,
  Settings2,
  ShieldCheck,
  Target,
  Users,
  UserRoundCheck,
  X
} from "lucide-react";
import "./styles.css";

const services = [
  {
    icon: Target,
    title: "Lead Generation",
    text: "Build a steady list of qualified prospects for B2B, service, consultancy, distribution, and project-based businesses."
  },
  {
    icon: PhoneCall,
    title: "Cold Calling & Email Outreach",
    text: "Plan calling scripts, email sequences, follow-ups, and outreach strategy that starts real business conversations."
  },
  {
    icon: Presentation,
    title: "Client Meeting Arrangements",
    text: "Identify decision-makers, open conversations, qualify interest, and arrange meetings for the client team."
  },
  {
    icon: BarChart3,
    title: "Sales Pipeline Management",
    text: "Track every lead from first contact to proposal, meeting, follow-up, negotiation, and closure."
  },
  {
    icon: Handshake,
    title: "Partnership Development",
    text: "Create channel partnerships, referral networks, vendor tie-ups, consultant relationships, and long-term business opportunities."
  },
  {
    icon: Users,
    title: "Sales Team Training",
    text: "Train teams on pitch clarity, follow-up discipline, objection handling, CRM usage, and meeting preparation."
  },
  {
    icon: Settings2,
    title: "CRM Setup & Follow-up Process",
    text: "Set up simple CRM workflows, lead stages, reminders, reporting, and repeatable follow-up systems."
  },
  {
    icon: Megaphone,
    title: "Market Outreach Strategy",
    text: "Define target segments, offers, outreach channels, communication angles, and monthly growth plans."
  }
];

const audiences = [
  "Interior design and architecture firms",
  "Building materials and lighting brands",
  "Visa and immigration consultancies",
  "Fire fighting and security systems",
  "Education and training businesses",
  "B2B service companies and startups"
];

const clients = [
  { name: "Class-N-Careers", url: "https://www.classncareers.com/" },
  { name: "Yatriverse", url: "https://yatriverse.in/" },
  { name: "Saptashva Lightings" },
  { name: "BeyondColor", url: "https://beyondcolor.in/" },
  { name: "Seegate Solutions", url: "http://www.seegatesolutions.com/" },
  { name: "NAM PETRO Products" },
  { name: "Myway Edu Tech" },
  { name: "Zestrofeast Restaurants" },
  { name: "Arch & Design", url: "https://archndesigns.com/" },
  { name: "DOSTEA", url: "https://dostea.in/" }
];

const process = [
  "Understand the business, offer, market, decision-makers, target clients, and monthly revenue goals.",
  "Build the lead-generation list, outreach message, calling script, email sequence, and meeting qualification flow.",
  "Run outreach, arrange client meetings, support proposals, and develop partnership opportunities.",
  "Manage the sales pipeline in CRM with follow-up reminders, reporting, and team training for better conversion."
];

const faqs = [
  {
    question: "What does IJET Marketing Solutions do?",
    answer:
      "IJET works as a fractional business development partner, helping companies grow through lead generation, outreach, client meetings, partnerships, sales pipeline management, CRM setup, and team training."
  },
  {
    question: "What types of businesses can IJET support?",
    answer:
      "IJET can support businesses that depend on leads, meetings, partnerships, and relationship-based selling, including interiors, building materials, lighting, consultancies, safety systems, security systems, and B2B services."
  },
  {
    question: "How does IJET generate leads?",
    answer:
      "IJET starts by defining the target customer, researching decision-makers, building prospect lists, preparing outreach messages, and using calling, email, follow-up, and referral channels to create qualified opportunities."
  },
  {
    question: "Can IJET arrange client meetings?",
    answer:
      "Yes. IJET can identify prospects, contact decision-makers, qualify interest, and arrange meetings so the business owner or sales team can focus on presenting, negotiating, and closing."
  },
  {
    question: "Can IJET set up CRM and follow-up systems?",
    answer:
      "Yes. IJET can help create lead stages, follow-up reminders, reporting formats, calling notes, and a simple CRM workflow so no opportunity is forgotten."
  },
  {
    question: "Can IJET work with an existing sales team?",
    answer:
      "Yes. IJET can support an existing team with lead flow, outreach strategy, CRM structure, follow-up process, meeting preparation, and practical sales training."
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="IJET Marketing Solutions home">
          <span className="brand-mark">I</span>
          <span>
            <strong>IJET</strong>
            <small>Marketing Solutions</small>
          </span>
        </a>
        <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <a href="#clients" onClick={closeMenu}>Clients</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Fractional business development for Indian businesses</p>
            <h1>Generate leads, book client meetings, and build a stronger sales pipeline.</h1>
            <p className="hero-copy">
              IJET Marketing Solutions helps growing businesses get BDM support without hiring a full-time team:
              lead generation, cold calling, email outreach, meetings, partnerships, CRM setup, and sales training.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact">
                Get a free business growth plan <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href="#services">View services</a>
            </div>
            <div className="trust-row" aria-label="Highlights">
              <span><CheckCircle2 size={18} /> Lead generation</span>
              <span><CheckCircle2 size={18} /> Client meeting support</span>
              <span><CheckCircle2 size={18} /> CRM-based follow-up</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Business development meeting">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=82"
              alt="Business team discussing growth strategy in a meeting"
            />
            <div className="metric-card top">
              <LineChart size={22} />
              <strong>Sales Pipeline</strong>
              <span>Leads, meetings, follow-ups, and closures tracked clearly</span>
            </div>
            <div className="metric-card bottom">
              <Users size={22} />
              <strong>Qualified Prospects</strong>
              <span>Decision-makers ready for a business conversation</span>
            </div>
          </div>
        </section>

        <section className="stats-band" aria-label="Business outcomes">
          <div>
            <strong>8</strong>
            <span>Business development services</span>
          </div>
          <div>
            <strong>30-day</strong>
            <span>Pipeline planning cycle</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Multi-industry growth support</span>
          </div>
        </section>

        <section className="clients-section" id="clients">
          <div className="section-heading">
            <p className="eyebrow">Clients so far</p>
            <h2>Trusted by growing companies across different industries.</h2>
          </div>
          <div className="clients-grid" aria-label="IJET clients">
            {clients.map((client, index) => (
              <a
                className={client.url ? "client-card has-link" : "client-card"}
                href={client.url}
                key={client.name}
                rel="noreferrer"
                target={client.url ? "_blank" : undefined}
                aria-label={client.url ? `Visit ${client.name} website` : client.name}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{client.name}</strong>
                {client.url && <small>Visit site <ExternalLink size={14} /></small>}
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Everything a growing business needs to create conversations and close opportunities.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <span className="service-icon"><Icon size={24} /></span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="split-section">
          <div className="image-panel">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=82"
              alt="Business team collaborating around a laptop"
            />
          </div>
          <div className="text-panel">
            <p className="eyebrow">Who we help</p>
            <h2>Built for companies that want steady, trackable business growth.</h2>
            <p>
              IJET can work like a fractional BDM partner for companies that need more leads, more meetings, and a
              disciplined follow-up process without immediately hiring a full in-house sales team.
            </p>
            <div className="audience-list">
              {audiences.map((item) => (
                <span key={item}><Building2 size={18} /> {item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading">
            <p className="eyebrow">Process</p>
            <h2>A practical business development system, not random outreach.</h2>
          </div>
          <div className="process-list">
            {process.map((step, index) => (
              <article className="process-item" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-band" id="about">
          <div>
            <p className="eyebrow">About IJET</p>
            <h2>Outsourced business development support for growth-focused companies.</h2>
          </div>
          <p>
            IJET Marketing Solutions is positioned for companies that need more than marketing. The work combines
            lead generation, cold outreach, client meetings, partnership development, CRM setup, sales pipeline
            management, and team training so business owners can see what is moving and what needs follow-up.
          </p>
          <div className="about-points">
            <span><GraduationCap size={18} /> Multi-industry BDM support</span>
            <span><Search size={18} /> Prospect research</span>
            <span><ClipboardList size={18} /> Pipeline reporting</span>
            <span><UserRoundCheck size={18} /> Sales team enablement</span>
          </div>
        </section>

        <section className="section faq-section">
          <div className="section-heading">
            <p className="eyebrow">Questions</p>
            <h2>Clear answers before you start.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <button
                className={openFaq === index ? "faq-item is-open" : "faq-item"}
                key={faq.question}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                aria-expanded={openFaq === index}
              >
                <span>
                  <strong>{faq.question}</strong>
                  {openFaq === index && <p>{faq.answer}</p>}
                </span>
                <ChevronDown size={20} />
              </button>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Start here</p>
            <h2>Ask for a free business development plan.</h2>
            <p>
              Share your business type, target clients, city, and growth goal. IJET can suggest the first outreach
              plan, meeting strategy, and follow-up process.
            </p>
            <div className="contact-methods">
              <a href="tel:+918919364485"><Phone size={18} /> +91 8919364485</a>
              <span><MapPin size={18} /> India</span>
              <a href="https://wa.me/918919364485"><MessageCircle size={18} /> WhatsApp</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={submitForm}>
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              Company
              <input name="company" type="text" placeholder="Interior, lighting, consultancy, B2B service..." required />
            </label>
            <label>
              Phone / WhatsApp
              <input name="contact" type="tel" placeholder="Your phone or WhatsApp number" required />
            </label>
            <label>
              Business goal
              <textarea name="message" placeholder="Tell us about your target clients, city, and growth goal." rows="4" />
            </label>
            <button className="primary-button" type="submit">
              Request plan <ArrowRight size={18} />
            </button>
            {sent && <p className="form-note">Thanks. Replace this demo form with your brother's real contact workflow before final launch.</p>}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <strong>IJET Marketing Solutions</strong>
        <span>Lead generation, outreach, partnerships, CRM, sales pipeline, and team training.</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

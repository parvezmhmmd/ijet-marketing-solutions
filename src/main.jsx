import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Handshake,
  LineChart,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  Phone,
  School,
  Search,
  ShieldCheck,
  Target,
  Users,
  X
} from "lucide-react";
import "./styles.css";

const services = [
  {
    icon: Target,
    title: "Admission Lead Generation",
    text: "Campaigns that bring interested student and parent enquiries for courses, programs, and institutions."
  },
  {
    icon: Megaphone,
    title: "Digital Education Marketing",
    text: "Google, Meta, local search, and social content planned around real admission seasons."
  },
  {
    icon: Handshake,
    title: "Institution Partnerships",
    text: "Outreach support for schools, colleges, coaching centers, and education partners."
  },
  {
    icon: BarChart3,
    title: "Counselling & Follow-up Support",
    text: "Simple lead tracking, calling rhythm, and follow-up process to improve conversion."
  }
];

const audiences = [
  "Schools and junior colleges",
  "Degree colleges and universities",
  "Coaching and training institutes",
  "EdTech and skill-development programs"
];

const process = [
  "Understand the institution, courses, location, admission goals, and ideal student profile.",
  "Create campaign messaging, landing-page flow, and outreach plan for the target audience.",
  "Generate enquiries through digital campaigns, local outreach, and referral-building.",
  "Track conversations, admission status, and monthly growth numbers with the institution."
];

const faqs = [
  {
    question: "What does IJET Marketing Solutions do?",
    answer:
      "IJET helps education institutions grow admissions by improving visibility, generating enquiries, supporting outreach, and strengthening follow-up."
  },
  {
    question: "Is this only for colleges?",
    answer:
      "No. The services can support schools, colleges, universities, coaching centers, training institutes, and education brands."
  },
  {
    question: "Do you guarantee admissions?",
    answer:
      "No honest marketing partner should promise fixed admissions. IJET focuses on quality enquiries, clear reporting, and stronger conversion systems."
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
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Education marketing for Indian institutions</p>
            <h1>Grow admissions with focused outreach, digital campaigns, and student enquiry support.</h1>
            <p className="hero-copy">
              IJET Marketing Solutions helps schools, colleges, training institutes, and education brands attract
              interested students and convert enquiries into admissions.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact">
                Get a free admission growth plan <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href="#services">View services</a>
            </div>
            <div className="trust-row" aria-label="Highlights">
              <span><CheckCircle2 size={18} /> Admission-focused</span>
              <span><CheckCircle2 size={18} /> India-ready strategy</span>
              <span><CheckCircle2 size={18} /> Clear monthly reporting</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Students discussing college admissions">
            <img
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1100&q=80"
              alt="Students walking on a college campus"
            />
            <div className="metric-card top">
              <LineChart size={22} />
              <strong>Admission Growth</strong>
              <span>Campaigns planned around course demand</span>
            </div>
            <div className="metric-card bottom">
              <Users size={22} />
              <strong>Quality Enquiries</strong>
              <span>Parents and students ready to talk</span>
            </div>
          </div>
        </section>

        <section className="stats-band" aria-label="Business outcomes">
          <div>
            <strong>4</strong>
            <span>Growth channels</span>
          </div>
          <div>
            <strong>30-day</strong>
            <span>Campaign planning cycle</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Education-sector focus</span>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Everything an institution needs to build a stronger admission pipeline.</h2>
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
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1000&q=80"
              alt="Teacher speaking with students in a classroom"
            />
          </div>
          <div className="text-panel">
            <p className="eyebrow">Who we help</p>
            <h2>Built for institutions that want steady, trackable enquiries.</h2>
            <p>
              IJET can work as the growth partner behind your admission team, helping you reach the right students,
              explain your programs clearly, and follow up before interest goes cold.
            </p>
            <div className="audience-list">
              {audiences.map((item) => (
                <span key={item}><School size={18} /> {item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading">
            <p className="eyebrow">Process</p>
            <h2>A practical growth system, not random posting.</h2>
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
            <h2>Business development for education institutions.</h2>
          </div>
          <p>
            IJET Marketing Solutions is positioned for institutions that need more than ads. The work combines
            marketing, admissions communication, local relationship-building, and practical follow-up so education
            leaders can see where enquiries are coming from and what is converting.
          </p>
          <div className="about-points">
            <span><GraduationCap size={18} /> Education-first messaging</span>
            <span><Search size={18} /> Local market research</span>
            <span><ShieldCheck size={18} /> Transparent reporting</span>
            <span><Building2 size={18} /> Institution partnerships</span>
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
            <h2>Ask for a free admission growth plan.</h2>
            <p>
              Share your institution type, target courses, city, and admission goal. IJET can suggest the first
              outreach plan and campaign direction.
            </p>
            <div className="contact-methods">
              <a href="tel:+910000000000"><Phone size={18} /> +91 00000 00000</a>
              <a href="mailto:hello@ijetmarketingsolutions.com"><Mail size={18} /> hello@ijetmarketingsolutions.com</a>
              <span><MapPin size={18} /> India</span>
              <a href="https://wa.me/910000000000"><MessageCircle size={18} /> WhatsApp</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={submitForm}>
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              Institution
              <input name="institution" type="text" placeholder="School, college, institute..." required />
            </label>
            <label>
              Phone or email
              <input name="contact" type="text" placeholder="How should IJET contact you?" required />
            </label>
            <label>
              Admission goal
              <textarea name="message" placeholder="Tell us about your course, city, and target admissions." rows="4" />
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
        <span>Education marketing, admission lead generation, and business development.</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

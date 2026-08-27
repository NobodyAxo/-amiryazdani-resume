import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Phone,
  Mail,
  ExternalLink,
  FileCode2,
  ChevronRight,
  Globe,
  Sun,
  Moon,
  Award,
  X,
  Maximize2,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Language order: fa (Persian) -> en (English) -> de (German)          */
/* ------------------------------------------------------------------ */

const LANGS = [
  { code: "fa", label: "فارسی", dir: "rtl" },
  { code: "en", label: "English", dir: "ltr" },
  { code: "de", label: "Deutsch", dir: "ltr" },
];

/* ------------------------------------------------------------------ */
/* Contact values stay the same across languages                       */
/* ------------------------------------------------------------------ */

const contactValues = {
  email: "amirmohammadyadanshenas.711@gmail.com",
  phone: "0901 544 0624",
  github: "github.com/NobodyAxo",
};

const t = {
  fa: {
    uiTabs: {
      about: "about.js",
      experience: "experience.js",
      skills: "skills.js",
      certificates: "certificates.js",
      projects: "projects.js",
      contact: "contact.js",
    },
    profile: {
      name: "امیر یزدانی",
      role: "توسعه‌دهنده فول‌استک",
      location: "شیراز، ایران",
      focus: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      bio: "من محصولات وب سریع و قابل‌دسترس رو از صفر تا صد می‌سازم؛ از مدل‌سازی داده تا جزئیات ظاهری. چهار سال تجربه در تبدیل ایده‌های مبهم به قابلیت‌های واقعی و منتشرشده.",
    },
    experienceTitle: "experience.js",
    experience: [
      {
        role: "متخصص شبکه",
        company: "فریلنس",
        dates: "۲۰۲۴ — اکنون",
        points: [
          "طراحی، پیاده‌سازی و عیب‌یابی شبکه‌های کامپیوتری",
          "پیکربندی تجهیزات شبکه و مدیریت زیرساخت",
        ],
      },
      {
        role: "توسعه‌دهنده ارشد فرانت‌اند",
        company: "Northwind Labs",
        dates: "۲۰۲۳ — اکنون",
        points: [
          "مهاجرت داشبورد قدیمی به React و TypeScript، کاهش ۴۰٪ زمان بارگذاری",
          "ساخت کتابخانه کامپوننت مورد استفاده در ۶ تیم محصول",
          "راهنمایی ۳ توسعه‌دهنده جونیور از طریق code review و هم‌برنامه‌نویسی",
        ],
      },
      {
        role: "توسعه‌دهنده فرانت‌اند",
        company: "Kettlebridge",
        dates: "۲۰۲۱ — ۲۰۲۳",
        points: [
          "توسعه قابلیت‌های کاربرمحور برای اپلیکیشن فین‌تک با ۲۰۰ هزار کاربر فعال ماهانه",
          "معرفی تست رگرسیون بصری خودکار",
          "همکاری با تیم طراحی برای ساخت اولین سیستم طراحی شرکت",
        ],
      },
      {
        role: "توسعه‌دهنده وب جونیور",
        company: "Studio Marne",
        dates: "۲۰۲۰ — ۲۰۲۱",
        points: [
          "ساخت سایت‌های تبلیغاتی برای بیش از ۱۰ مشتری با React و Next.js",
          "مسئولیت pipeline استقرار و هاستینگ پروژه‌های آژانس",
        ],
      },
    ],
    skillsTitle: "skills.js",
    skillCategories: {
      Languages: "زبان‌ها",
      Frontend: "فرانت‌اند",
      Backend: "بک‌اند",
      Tools: "ابزارها",
    },
    certificatesTitle: "certificates.js",
    certificates: [
      {
        title: "دوره Network+",
        issuer: "آکادمی دانشجویار",
        meta: "۵ ساعت · ۱۴۰۵/۰۱/۰۲",
        image: "/certificates/network-plus-fa.jpg",
      },
    ],
    projectsTitle: "projects.js",
    projects: [
      {
        name: "Ledgerly",
        description: "برنامه مدیریت مالی شخصی با تشخیص تراکنش‌های تکراری و پیش‌بینی ماهانه.",
        tags: ["React", "Node.js", "PostgreSQL"],
      },
      {
        name: "Pinboard CMS",
        description: "ویرایشگر محتوای headless با ترکیب بلوکی و پیش‌نمایش زنده.",
        tags: ["Next.js", "TypeScript"],
      },
      {
        name: "IP/Domain Lookup",
        description: "ابزار وب برای دریافت اطلاعات جغرافیایی، ISP و شبکه‌ای هر IP یا دامنه، با اتصال به API واقعی.",
        tags: ["React", "REST API", "Networking"],
        link: "/tools/ip-lookup",
      },
      {
        name: "Port Scanner Visualizer",
        description: "نمایش انیمیشنی و آموزشی نتیجه اسکن پورت؛ کاملاً شبیه‌سازی‌شده و بدون اتصال به سرور واقعی.",
        tags: ["React", "Networking", "UI/UX"],
        link: "/tools/port-scanner",
      },
    ],
    contactTitle: "contact.js",
    contactLabels: { email: "ایمیل", phone: "تماس", github: "گیت‌هاب" },
    statusLang: "زبان",
    theme: { light: "روشن", dark: "تیره" },
    copyright: "© ۲۰۲۶ amiryazdanidev — تمامی حقوق محفوظ است.",
  },

  en: {
    uiTabs: {
      about: "about.js",
      experience: "experience.js",
      skills: "skills.js",
      certificates: "certificates.js",
      projects: "projects.js",
      contact: "contact.js",
    },
    profile: {
      name: "Amir Yazdani",
      role: "Full-Stack Developer",
      location: "Shiraz, Iran",
      focus: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      bio: "I build fast, accessible web products end to end — from data models to pixel-level polish. Four years turning vague briefs into shipped features.",
    },
    experienceTitle: "experience.js",
    experience: [
      {
        role: "Network Specialist",
        company: "Freelance",
        dates: "2024 — Present",
        points: [
          "Designing, implementing, and troubleshooting computer networks",
          "Configuring network equipment and managing infrastructure",
        ],
      },
      {
        role: "Senior Frontend Engineer",
        company: "Northwind Labs",
        dates: "2023 — Present",
        points: [
          "Led migration of a legacy dashboard to React + TypeScript, cutting load time by 40%",
          "Built a component library adopted across 6 product teams",
          "Mentored 3 junior engineers through code review and pairing",
        ],
      },
      {
        role: "Frontend Developer",
        company: "Kettlebridge",
        dates: "2021 — 2023",
        points: [
          "Shipped customer-facing features for a 200k MAU fintech app",
          "Introduced automated visual regression testing",
          "Partnered with design to build the company's first design system",
        ],
      },
      {
        role: "Junior Web Developer",
        company: "Studio Marne",
        dates: "2020 — 2021",
        points: [
          "Built marketing sites for 10+ clients using React and Next.js",
          "Owned deployment pipeline and hosting for the agency's projects",
        ],
      },
    ],
    skillsTitle: "skills.js",
    skillCategories: {
      Languages: "Languages",
      Frontend: "Frontend",
      Backend: "Backend",
      Tools: "Tools",
    },
    certificatesTitle: "certificates.js",
    certificates: [
      {
        title: "Network+ Course",
        issuer: "Daneshjooyar Academy",
        meta: "5 hours · 2026/03/22",
        image: "/certificates/network-plus-en.jpg",
      },
    ],
    projectsTitle: "projects.js",
    projects: [
      {
        name: "Ledgerly",
        description: "Personal finance tracker with recurring-transaction detection and monthly forecasting.",
        tags: ["React", "Node.js", "PostgreSQL"],
      },
      {
        name: "Pinboard CMS",
        description: "Headless content editor with block-based composition and live preview.",
        tags: ["Next.js", "TypeScript"],
      },
      {
        name: "IP/Domain Lookup",
        description: "Web tool that returns geolocation, ISP, and network info for any IP or domain, backed by a real public API.",
        tags: ["React", "REST API", "Networking"],
        link: "/tools/ip-lookup",
      },
      {
        name: "Port Scanner Visualizer",
        description: "An animated, educational demo of a port-scan result view — fully simulated, no real connections made.",
        tags: ["React", "Networking", "UI/UX"],
        link: "/tools/port-scanner",
      },
    ],
    contactTitle: "contact.js",
    contactLabels: { email: "email", phone: "phone", github: "github" },
    statusLang: "lang",
    theme: { light: "light", dark: "dark" },
    copyright: "© 2026 amiryazdanidev — All rights reserved.",
  },

  de: {
    uiTabs: {
      about: "about.js",
      experience: "experience.js",
      skills: "skills.js",
      certificates: "certificates.js",
      projects: "projects.js",
      contact: "contact.js",
    },
    profile: {
      name: "Amir Yazdani",
      role: "Full-Stack-Entwickler",
      location: "Shiraz, Iran",
      focus: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      bio: "Ich entwickle schnelle, barrierefreie Webprodukte von Anfang bis Ende — vom Datenmodell bis zum letzten visuellen Detail. Vier Jahre Erfahrung darin, vage Briefings in ausgelieferte Features zu verwandeln.",
    },
    experienceTitle: "experience.js",
    experience: [
      {
        role: "Netzwerkspezialist",
        company: "Freelance",
        dates: "2024 — heute",
        points: [
          "Entwurf, Implementierung und Fehlerbehebung von Computernetzwerken",
          "Konfiguration von Netzwerkgeräten und Verwaltung der Infrastruktur",
        ],
      },
      {
        role: "Senior Frontend Engineer",
        company: "Northwind Labs",
        dates: "2023 — heute",
        points: [
          "Migration eines Legacy-Dashboards zu React + TypeScript geleitet, Ladezeit um 40% reduziert",
          "Komponentenbibliothek entwickelt, die von 6 Produktteams genutzt wird",
          "3 Junior-Entwickler durch Code-Reviews und Pair-Programming betreut",
        ],
      },
      {
        role: "Frontend-Entwickler",
        company: "Kettlebridge",
        dates: "2021 — 2023",
        points: [
          "Kundenorientierte Features für eine Fintech-App mit 200.000 MAU geliefert",
          "Automatisierte visuelle Regressionstests eingeführt",
          "Mit dem Designteam das erste Design-System des Unternehmens aufgebaut",
        ],
      },
      {
        role: "Junior Web-Entwickler",
        company: "Studio Marne",
        dates: "2020 — 2021",
        points: [
          "Marketing-Websites für mehr als 10 Kunden mit React und Next.js gebaut",
          "Verantwortlich für Deployment-Pipeline und Hosting der Agenturprojekte",
        ],
      },
    ],
    skillsTitle: "skills.js",
    skillCategories: {
      Languages: "Sprachen",
      Frontend: "Frontend",
      Backend: "Backend",
      Tools: "Tools",
    },
    certificatesTitle: "certificates.js",
    certificates: [
      {
        title: "Network+ Kurs",
        issuer: "Daneshjooyar Academy",
        meta: "5 Stunden · 22.03.2026",
        image: "/certificates/network-plus-en.jpg",
      },
    ],
    projectsTitle: "projects.js",
    projects: [
      {
        name: "Ledgerly",
        description: "Persönlicher Finanz-Tracker mit Erkennung wiederkehrender Transaktionen und monatlicher Prognose.",
        tags: ["React", "Node.js", "PostgreSQL"],
      },
      {
        name: "Pinboard CMS",
        description: "Headless-Content-Editor mit blockbasiertem Aufbau und Live-Vorschau.",
        tags: ["Next.js", "TypeScript"],
      },
      {
        name: "IP/Domain Lookup",
        description: "Web-Tool, das Geolokalisierung, ISP und Netzwerkdaten für jede IP oder Domain liefert, mit einer echten öffentlichen API.",
        tags: ["React", "REST API", "Networking"],
        link: "/tools/ip-lookup",
      },
      {
        name: "Port Scanner Visualizer",
        description: "Animierte, edukative Demo einer Port-Scan-Ansicht — vollständig simuliert, keine echten Verbindungen.",
        tags: ["React", "Networking", "UI/UX"],
        link: "/tools/port-scanner",
      },
    ],
    contactTitle: "contact.js",
    contactLabels: { email: "email", phone: "telefon", github: "github" },
    statusLang: "sprache",
    theme: { light: "hell", dark: "dunkel" },
    copyright: "© 2026 amiryazdanidev — Alle Rechte vorbehalten.",
  },
};

const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "SQL"],
  Frontend: ["React", "Next.js", "Redux", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "PostgreSQL", "REST / GraphQL"],
  Tools: ["Git", "Docker", "Figma", "Vitest"],
};

const tabOrder = ["about", "experience", "skills", "certificates", "projects", "contact"];

/* ------------------------------------------------------------------ */
/* Typing hero effect                                                  */
/* ------------------------------------------------------------------ */

function useTypedLines(lines, resetKey, { speed = 22, startDelay = 200 } = {}) {
  const [output, setOutput] = useState([]);
  const [done, setDone] = useState(false);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reducedMotion) {
      setOutput(lines);
      setDone(true);
      return;
    }
    let cancelled = false;
    let lineIdx = 0;
    let charIdx = 0;
    const built = [];
    setOutput([]);
    setDone(false);

    function typeNext() {
      if (cancelled) return;
      if (lineIdx >= lines.length) {
        setDone(true);
        return;
      }
      const currentLine = lines[lineIdx];
      charIdx += 1;
      const partial = currentLine.slice(0, charIdx);
      const snapshot = [...built, partial];
      setOutput(snapshot);
      if (charIdx >= currentLine.length) {
        built.push(currentLine);
        lineIdx += 1;
        charIdx = 0;
        setTimeout(typeNext, 90);
      } else {
        setTimeout(typeNext, speed);
      }
    }
    const timer = setTimeout(typeNext, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey]);

  return { output, done };
}

/* ------------------------------------------------------------------ */
/* App                                                                  */
/* ------------------------------------------------------------------ */

export default function App() {
  const [lang, setLang] = useState("fa");
  const [theme, setTheme] = useState("dark");
  const [active, setActive] = useState("about");
  const [lightbox, setLightbox] = useState(null);
  const sectionRefs = useRef({});
  const copy = t[lang];
  const dir = LANGS.find((l) => l.code === lang).dir;

  const heroLines = [
    "const developer = {",
    `  name: '${copy.profile.name}',`,
    `  role: '${copy.profile.role}',`,
    `  location: '${copy.profile.location}',`,
    `  focus: [${copy.profile.focus.map((f) => `'${f}'`).join(", ")}],`,
    "};",
  ];
  const { output, done } = useTypedLines(heroLines, lang);

  const scrollTo = useCallback((id) => {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.dataset.section);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  return (
    <div className={`editor-root ${theme}`} dir={dir}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Vazirmatn:wght@400;500;600;700&display=swap');

        .editor-root.dark {
          --bg: #0b0e14;
          --panel: #10141b;
          --panel-alt: #141924;
          --line: #1f2530;
          --text: #e6e8eb;
          --muted: #7d8590;
          --faint: #4b5261;
          --kw: #c792ea;
          --str: #7ee787;
          --fn: #e3b341;
          --var: #79c0ff;
          --comment: #5b6472;
          --status-text: #0b0e14;
        }
        .editor-root.light {
          --bg: #f6f7f9;
          --panel: #ffffff;
          --panel-alt: #eef0f3;
          --line: #e1e4e9;
          --text: #1a1d23;
          --muted: #5b6472;
          --faint: #9aa0ab;
          --kw: #8250df;
          --str: #1a7f37;
          --fn: #9a6700;
          --var: #0969da;
          --comment: #6e7781;
          --status-text: #ffffff;
        }

        * { box-sizing: border-box; }

        .editor-root {
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', 'Vazirmatn', sans-serif;
          min-height: 100%;
          width: 100%;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .editor-root[dir="rtl"] { font-family: 'Vazirmatn', 'Inter', sans-serif; }

        .mono { font-family: 'JetBrains Mono', monospace; direction: ltr; unicode-bidi: isolate; }

        /* ---- Top chrome ---- */
        .titlebar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          background: var(--panel);
          border-bottom: 1px solid var(--line);
          flex-wrap: wrap;
        }
        .dot { width: 11px; height: 11px; border-radius: 50%; }
        .dot.red { background: #ff5f57; }
        .dot.yellow { background: #febc2e; }
        .dot.green { background: #28c840; }
        .titlebar-name {
          margin-inline-start: 8px;
          color: var(--muted);
          font-size: 12.5px;
        }
        .titlebar-controls {
          margin-inline-start: auto;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .lang-switch { display: flex; align-items: center; gap: 4px; }
        .lang-btn {
          font-size: 11.5px;
          color: var(--muted);
          background: transparent;
          border: 1px solid var(--line);
          border-radius: 5px;
          padding: 3px 8px;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .lang-btn:hover { color: var(--text); border-color: var(--faint); }
        .lang-btn.active { color: #fff; background: var(--var); border-color: var(--var); }

        .theme-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 5px;
          border: 1px solid var(--line);
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .theme-btn:hover { color: var(--text); border-color: var(--faint); }

        .tabbar {
          display: flex;
          overflow-x: auto;
          background: var(--panel);
          border-bottom: 1px solid var(--line);
          scrollbar-width: none;
          position: sticky;
          top: 0;
          z-index: 20;
        }
        .tabbar::-webkit-scrollbar { display: none; }
        .tab {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          font-size: 13px;
          color: var(--muted);
          border-inline-end: 1px solid var(--line);
          cursor: pointer;
          white-space: nowrap;
          background: transparent;
          border-top: 2px solid transparent;
          transition: color 0.15s ease, background 0.15s ease;
        }
        .tab:hover { color: var(--text); background: var(--panel-alt); }
        .tab.active {
          color: var(--text);
          background: var(--bg);
          border-top: 2px solid var(--var);
        }
        .tab svg { flex-shrink: 0; }

        /* ---- Layout ---- */
        .content {
          max-width: 780px;
          margin: 0 auto;
          padding: 48px 20px 100px;
        }
        section { scroll-margin-top: 60px; margin-bottom: 88px; }
        section:last-child { margin-bottom: 40px; }

        .comment { color: var(--comment); font-size: 13px; }

        .hero-block {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 8px;
          padding: 24px 20px;
          font-size: 15px;
          line-height: 1.9;
        }
        .line { display: flex; direction: ltr; }
        .line-no {
          width: 34px;
          flex-shrink: 0;
          color: var(--faint);
          font-size: 13px;
          user-select: none;
          text-align: right;
          padding-right: 14px;
        }
        .line-code { white-space: pre-wrap; word-break: break-word; }
        .cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background: var(--var);
          margin-left: 2px;
          vertical-align: -2px;
          animation: blink 1s steps(1) infinite;
        }
        @media (prefers-reduced-motion: reduce) { .cursor { animation: none; } }
        @keyframes blink { 50% { opacity: 0; } }

        .bio {
          margin-top: 20px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
          max-width: 62ch;
        }

        .section-title {
          display: flex;
          align-items: baseline;
          gap: 8px;
          font-size: 13px;
          color: var(--comment);
          margin-bottom: 18px;
        }

        /* ---- Experience ---- */
        .job {
          border-inline-start: 2px solid var(--line);
          padding-inline-start: 18px;
          margin-bottom: 30px;
          position: relative;
        }
        .job::before {
          content: '';
          position: absolute;
          inset-inline-start: -5px;
          top: 4px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--var);
        }
        .job-head {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 6px;
          margin-bottom: 6px;
        }
        .job-role { color: var(--fn); font-size: 15.5px; font-weight: 600; }
        .job-company { color: var(--str); font-size: 14px; }
        .job-dates { color: var(--muted); font-size: 12.5px; }
        .job ul { margin: 8px 0 0; padding-inline-start: 18px; color: var(--muted); font-size: 14px; line-height: 1.8; }
        .job li::marker { color: var(--faint); }

        /* ---- Skills ---- */
        .skill-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
        }
        .skill-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 8px;
          padding: 16px 18px;
        }
        .skill-key { color: var(--var); font-size: 13px; margin-bottom: 10px; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 7px; direction: ltr; }
        .skill-tag {
          font-size: 12.5px;
          color: var(--str);
          background: color-mix(in srgb, var(--str) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--str) 30%, transparent);
          border-radius: 5px;
          padding: 3px 8px;
        }

        /* ---- Projects ---- */
        .project-grid { display: grid; gap: 14px; }
        .project-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 8px;
          padding: 18px 20px;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .project-card:hover { border-color: var(--var); transform: translateY(-1px); }
        .project-head { display: flex; align-items: center; justify-content: space-between; }
        .project-name { color: var(--fn); font-size: 15px; font-weight: 600; }
        .project-desc { color: var(--muted); font-size: 14px; margin: 8px 0 12px; line-height: 1.7; }
        .project-tags { display: flex; gap: 7px; flex-wrap: wrap; direction: ltr; }
        .project-tag { font-size: 12px; color: var(--kw); }
        .project-tag::before { content: '#'; opacity: 0.6; }
        a.icon-link { color: var(--muted); display: inline-flex; }
        a.icon-link:hover { color: var(--var); }

        /* ---- Contact ---- */
        .contact-block {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 8px;
          padding: 24px 20px;
        }
        .contact-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid var(--line);
          color: var(--text);
          text-decoration: none;
          font-size: 14.5px;
        }
        .contact-row:last-child { border-bottom: none; }
        .contact-row svg { color: var(--var); flex-shrink: 0; }
        .contact-row span.k { color: var(--comment); }
        .contact-row .v { direction: ltr; unicode-bidi: isolate; }
        .contact-row:hover span.v { color: var(--var); }

        /* ---- Status bar ---- */
        .statusbar {
          position: sticky;
          bottom: 0;
          display: flex;
          justify-content: space-between;
          padding: 6px 16px;
          background: var(--var);
          color: var(--status-text);
          font-size: 11.5px;
          font-family: 'JetBrains Mono', monospace;
          direction: ltr;
        }

        /* ---- Certificates ---- */
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px;
        }
        .cert-card {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 8px;
          overflow: hidden;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .cert-card:hover { border-color: var(--var); transform: translateY(-1px); }
        .cert-card-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          font-size: 11.5px;
          color: var(--comment);
          border-bottom: 1px solid var(--line);
          background: var(--panel-alt);
          direction: ltr;
        }
        .cert-card-bar svg { color: var(--fn); flex-shrink: 0; }
        .cert-image-wrap {
          position: relative;
          display: block;
          width: 100%;
          border: none;
          padding: 0;
          margin: 0;
          background: var(--panel-alt);
          cursor: zoom-in;
        }
        .cert-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
          object-position: top;
          display: block;
        }
        .cert-zoom {
          position: absolute;
          inset-inline-end: 8px;
          bottom: 8px;
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: rgba(11, 14, 20, 0.75);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.15s ease;
        }
        .cert-image-wrap:hover .cert-zoom { opacity: 1; }
        .cert-info { padding: 12px 14px 14px; }
        .cert-title { color: var(--fn); font-size: 14px; font-weight: 600; margin-bottom: 3px; }
        .cert-issuer { color: var(--muted); font-size: 12.5px; margin-bottom: 6px; }
        .cert-meta { color: var(--comment); font-size: 11px; direction: ltr; }

        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          z-index: 100;
        }
        .lightbox-box {
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 10px;
          overflow: hidden;
          max-width: min(90vw, 900px);
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }
        .lightbox-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-bottom: 1px solid var(--line);
          font-size: 12.5px;
          color: var(--text);
          direction: ltr;
        }
        .lightbox-close {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid var(--line);
          border-radius: 5px;
          color: var(--muted);
          cursor: pointer;
        }
        .lightbox-close:hover { color: var(--text); border-color: var(--faint); }
        .lightbox-img {
          display: block;
          max-width: 100%;
          max-height: calc(90vh - 45px);
          object-fit: contain;
        }

        .copyright {
          text-align: center;
          padding: 14px 12px;
          font-size: 11px;
          color: var(--faint);
          background: var(--panel);
          direction: ltr;
        }

        @media (max-width: 560px) {
          .content { padding: 32px 14px 90px; }
          .hero-block { font-size: 13px; padding: 18px 14px; }
          .line-no { width: 22px; padding-right: 8px; }
          .titlebar-name { display: none; }
        }
      `}</style>

      {/* Title bar */}
      <div className="titlebar">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="titlebar-name mono">
          {copy.profile.name.toLowerCase().replace(/\s+/g, "-")}/resume
        </span>
        <div className="titlebar-controls">
          <div className="lang-switch">
            <Globe size={13} color="var(--muted)" style={{ marginInlineEnd: 2 }} />
            {LANGS.map((l) => (
              <button
                key={l.code}
                className={`lang-btn ${lang === l.code ? "active" : ""}`}
                onClick={() => setLang(l.code)}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            className="theme-btn"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? copy.theme.light : copy.theme.dark}
            title={theme === "dark" ? copy.theme.light : copy.theme.dark}
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <nav className="tabbar mono">
        {tabOrder.map((id) => (
          <button
            key={id}
            className={`tab ${active === id ? "active" : ""}`}
            onClick={() => scrollTo(id)}
          >
            <FileCode2 size={13} />
            {copy.uiTabs[id]}
          </button>
        ))}
      </nav>

      <div className="content">
        {/* ABOUT */}
        <section id="about" data-section="about" ref={(el) => (sectionRefs.current.about = el)}>
          <div className="comment mono">// {copy.uiTabs.about}</div>
          <div className="hero-block mono" style={{ marginTop: 12 }}>
            {output.map((line, i) => (
              <div className="line" key={i}>
                <span className="line-no">{i + 1}</span>
                <span className="line-code">
                  {colorizeHeroLine(line)}
                  {done && i === output.length - 1 ? <span className="cursor" /> : null}
                </span>
              </div>
            ))}
          </div>
          <p className="bio">{copy.profile.bio}</p>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" data-section="experience" ref={(el) => (sectionRefs.current.experience = el)}>
          <div className="section-title mono">
            <ChevronRight size={14} /> {copy.experienceTitle}
          </div>
          {copy.experience.map((job) => (
            <div className="job" key={job.role + job.company}>
              <div className="job-head">
                <span className="job-role mono">{job.role}</span>
                <span className="job-dates mono">{job.dates}</span>
              </div>
              <div className="job-company mono">{job.company}</div>
              <ul>
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* SKILLS */}
        <section id="skills" data-section="skills" ref={(el) => (sectionRefs.current.skills = el)}>
          <div className="section-title mono">
            <ChevronRight size={14} /> {copy.skillsTitle}
          </div>
          <div className="skill-grid">
            {Object.entries(skills).map(([key, values]) => (
              <div className="skill-card" key={key}>
                <div className="skill-key mono">{copy.skillCategories[key]}:</div>
                <div className="skill-tags">
                  {values.map((v) => (
                    <span className="skill-tag mono" key={v}>
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" data-section="certificates" ref={(el) => (sectionRefs.current.certificates = el)}>
          <div className="section-title mono">
            <ChevronRight size={14} /> {copy.certificatesTitle}
          </div>
          <div className="cert-grid">
            {copy.certificates.map((c) => (
              <div className="cert-card" key={c.title}>
                <div className="cert-card-bar mono">
                  <Award size={13} />
                  <span>{c.title.toLowerCase().replace(/\s+/g, "-")}.jpg</span>
                </div>
                <button
                  className="cert-image-wrap"
                  onClick={() => setLightbox(c)}
                  aria-label={c.title}
                >
                  <img src={c.image} alt={c.title} className="cert-image" loading="lazy" />
                  <span className="cert-zoom">
                    <Maximize2 size={16} />
                  </span>
                </button>
                <div className="cert-info">
                  <div className="cert-title">{c.title}</div>
                  <div className="cert-issuer">{c.issuer}</div>
                  <div className="cert-meta mono">{c.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" data-section="projects" ref={(el) => (sectionRefs.current.projects = el)}>
          <div className="section-title mono">
            <ChevronRight size={14} /> {copy.projectsTitle}
          </div>
          <div className="project-grid">
            {copy.projects.map((p) => (
              <div className="project-card" key={p.name}>
                <div className="project-head">
                  <span className="project-name mono">{p.name}</span>
                  {p.link ? (
                    <Link to={p.link} className="icon-link" aria-label={`Open ${p.name}`}>
                      <ExternalLink size={15} />
                    </Link>
                  ) : (
                    <a href="#" className="icon-link" aria-label={`Open ${p.name}`}>
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags mono">
                  {p.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" data-section="contact" ref={(el) => (sectionRefs.current.contact = el)}>
          <div className="section-title mono">
            <ChevronRight size={14} /> {copy.contactTitle}
          </div>
          <div className="contact-block">
            <a className="contact-row" href={`mailto:${contactValues.email}`}>
              <Mail size={16} />
              <span className="k mono">{copy.contactLabels.email}:</span>
              <span className="v mono">{contactValues.email}</span>
            </a>
            <a className="contact-row" href={`tel:${contactValues.phone.replace(/\s+/g, "")}`}>
              <Phone size={16} />
              <span className="k mono">{copy.contactLabels.phone}:</span>
              <span className="v mono">{contactValues.phone}</span>
            </a>
            <a className="contact-row" href={`https://${contactValues.github}`}>
              <Github size={16} />
              <span className="k mono">{copy.contactLabels.github}:</span>
              <span className="v mono">{contactValues.github}</span>
            </a>
          </div>
        </section>
      </div>

      <div className="statusbar">
        <span>● {active}.js</span>
        <span>UTF-8 · {copy.statusLang}: {lang}</span>
      </div>
      <div className="copyright mono">{copy.copyright}</div>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-bar mono">
              <span>{lightbox.title}</span>
              <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
                <X size={16} />
              </button>
            </div>
            <img src={lightbox.image} alt={lightbox.title} className="lightbox-img" />
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Tiny syntax-color helper for the hero object literal                */
/* ------------------------------------------------------------------ */

function colorizeHeroLine(line) {
  if (line.startsWith("const")) {
    const [, rest] = line.split("const ");
    return (
      <>
        <span style={{ color: "var(--kw)" }}>const</span> {rest}
      </>
    );
  }
  if (line.trim() === "};" || line.trim() === "{") return line;
  const match = line.match(/^(\s*)([a-zA-Z]+)(:\s*)(.*)$/);
  if (match) {
    const [, indent, key, colon, valueRaw] = match;
    return (
      <>
        {indent}
        <span style={{ color: "var(--var)" }}>{key}</span>
        {colon}
        {colorizeValue(valueRaw)}
      </>
    );
  }
  return line;
}

function colorizeValue(value) {
  if (value.startsWith("[")) {
    const parts = value.split(/('(?:[^']*)')/g);
    return parts.map((p, i) =>
      p.startsWith("'") ? (
        <span style={{ color: "var(--str)" }} key={i}>
          {p}
        </span>
      ) : (
        <span key={i}>{p}</span>
      )
    );
  }
  if (value.startsWith("'")) {
    return <span style={{ color: "var(--str)" }}>{value}</span>;
  }
  return value;
}

import React, { useMemo, useState, useEffect} from "react";


export default function PortfolioViz() {
  // ---------- DATA ----------
  const data = useMemo(
    () => ({
      name: "Fayzullakhon Shamsiev",
      role: "SOFTWARE ENGINEER",
      location: "Tashkent, Uzbekistan",
      email: "fayzulla09@gmail.com",
      github: "https://github.com/Fayzulla-Shamsiev",
      linkedin: "https://www.linkedin.com/in/fayzulla-shamsiev/",
      bio:
        "INNOVATING WITH CODE. DRIVING IMPACT THROUGH TEAMWORK. TURNING PROBLEMS INTO SOLUTIONS.",
      cvUrl: "src/assets/CV Shamsiev Fayzullakhon.pdf",
      longBio:
  "I’m a Software Engineer who enjoys creating reliable and user-friendly software. I work with technologies like React and Python Django to build intuitive applications, and I’ve recently been diving into low-level development with C++ to deepen my understanding of computer systems and performance.\n\nOutside of coding, I enjoy relaxing with a good movie or book, but I also stay active through football, volleyball, and hiking. I train and compete in Brazilian Jiu-Jitsu, both Gi and No-Gi, regularly taking part in city and national tournaments.",

  education: {
  uni: "University of Sussex",
  years: "2022–2025",
  degree: "BSc Computer Science —(First-Class Honors)",
  longEdu:
    "I’m currently studying Computer Science at the University of Sussex, where my dissertation project involved building an interactive sorting algorithm visualizer using React — a project that let me combine problem-solving with creativity. I’ve especially enjoyed modules like Machine Learning, Mathematical Concepts, Web Applications and Services, and Neural Networks, where I not only learned a lot but also earned top marks. Beyond coursework, I’ve stayed active in societies, joining hackathons, robotics challenges, as well as hiking and running groups.\n\nI’ve consistently performed at a high level, finishing in the top 20% of my course and top 25% within the School of Informatics and Engineering. Alongside my studies, I worked as a Teaching Assistant for the Data Structures & Algorithms and Operating Systems modules, where I helped students strengthen their foundations while improving my own ability to explain technical concepts clearly.",
},



      // Skills
      stats: [
        { k: "JS", v: 17 },
        { k: "REACT", v: 18 },
        { k: "Python", v: 18 },
        { k: "Java", v: 17 },
        { k: "C++", v: 14 },
        { k: "SQL", v: 16 },
        { k: "C#", v: 15 },
        { k: "Django", v: 18 },
      ],

      // ===== Experience (edit these to match your CV) =====
      experience: [
        {
          id: "unify",
          title: "Software Engineer ",
          org: "Unify (Startup)",
          dates: "Jun 2024 – Sep 2024 · Brighton, UK",
          bullets: [
            "Built full-stack social platform (React, Node.js, MongoDB, Tailwind).",
            "Prototype connected 20 startups with Sussex Entrepreneurship Team.",
          ],
        },
        {
          id: "gatwick",
          title: "Technology Intern",
          org: "Gatwick Airport",
          dates: "Jun 2024 – Aug 2024 · London, UK",
          bullets: [
            "Analyzed flight stand-time data; surfaced fuel cost waste & emissions.",
            "Implemented empty-seat detector (YOLO/OpenCV, ~89% acc).",
            "Drove VR driver training pilot; reduced supplier cost > $1,000.",
          ],
        },
        {
          id: "itcuz",
          title: "Project Manager (Tech)",
          org: "IT Community of Uzbekistan",
          dates: "May 2023 – Aug 2023 · Tashkent, UZ",
          bullets: [
            "Ran Google I/O Tashkent ops for 100+ attendees.",
            "Led Cybersecurity League (8,000+ members); community education.",
            "Top 18 of 65 project managers.",
          ],
        },
        {
          id: "moneff",
          title: "Software Engineer Intern",
          org: "Moneff",
          dates: "Apr 2023 – May 2023 · London, UK",
          bullets: [
            "OpenAPI 3.0 apps for onboarding in Copenhagen Office.",
            "Java/Spring integrations; ↑ test coverage by ~27%.",
          ],
        },
      ],

      // ===== Projects (placeholders — change to your own) =====
      projects: [
        {
          id: "tacticboard",
          title: "AI Football Simulation",
          dates: "March 2025-June 2025",
          bullets: [
            "1v1 football environment with Gymnasium + Pygame; physics-based control, movement, goals.",
          "PPO agents (Stable-Baselines3, 350k+ timesteps); 91% variance, emergent tactics (scoring, counters, blocking).",
          ],
        },
        {
          id: "scoutstats",
          title: "Football Scouting with ML",
          dates: "April 2025–June 2025",
          bullets: [
            "Full-stack Django app; U21 replacements via cosine similarity on 3k+ FBref profiles.",
            "Role-specific vectors + responsive UI (Bootstrap, Crispy Forms); intuitive player input & results.",
          ],
        },
        {
          id: "kitroom",
          title: "Explore Uzbekistan Cities",
          dates: "March 2024-May 2024",
          bullets: [
            "Web app with interactive Uzbekistan map (OpenStreetMap, HTML/CSS/JS).",
            "Mapped major cities with pins; faster info retrieval & intuitive browsing.",
          ],
        },
        {
          id: "nle",
          title: "Film Review Analyzer",
          dates: "September 2023- November 2023",
          bullets: [
            "Python sentiment analysis (NLTK + Naive Bayes); 82% accuracy on 600+ test reviews.",
            "Preprocessed 1.4k+ samples (tokenization, stopword removal, feature engineering).",
          ],
        },
      ],
    }),
    []
  );
  // ---------- LAYOUT ----------
  return (
    // reserve space under popups on large screens
    <div className="relative min-h-screen bg-[#0b2a7a] p-5 text-white lg:pt-[360px]">
      {/* PROFILE POPUP (top-left) */}
      <div className="w-full max-w-[640px] lg:absolute lg:left-6 lg:top-6">
        <TuiWindow title="PROFILE" color="blue">
          <div className="space-y-1.5 font-tui text-lg leading-6">
            <TuiField k="NAME" v={data.name} />
            <TuiField k="POSITION" v={data.role} />
            <TuiField k="POB" v={data.location} />
            <TuiField k="EMAIL" v={data.email} link={`mailto:${data.email}`} />
            <TuiField k="GITHUB" v={data.github} link={data.github} />
            <TuiField k="LINKEDIN" v={data.linkedin} link={data.linkedin} />
          </div>
        </TuiWindow>
      </div>

      {/* ABOUT POPUP (slightly below/right) */}
<div className="mt-4 w-full max-w-[460px] lg:absolute lg:left-[950px] lg:top-24 lg:mt-0">
  <TuiWindow title="ABOUT" color="gray">
    <AboutBox bio={data.bio} longBio={data.longBio} cvUrl={data.cvUrl} />
  </TuiWindow>
</div>


      {/* SKILLS (CENTERED, non-popup) */}
      <div className="mx-auto mt-6 w-full max-w-[700px]">
        <TuiWindow title="Skills" color="black">
          <div className="space-y-2">
            {data.stats.map((s) => (
              <TuiChartBar key={s.k} label={s.k} value={s.v} />
            ))}
          </div>
        </TuiWindow>
      </div>

     
<div className="mt-6 w-full max-w-[700px] mx-auto ml-9">
  <TuiWindow title="Education" color="teal">
    <EducationBox edu={data.education} />
  </TuiWindow>
</div>




      {/* EXPERIENCE + PROJECTS (same row on lg) */}
      <div className="mx-auto mt-6 w-full max-w-[1200px] lg:grid lg:grid-cols-2 lg:gap-6">
        <div className="lg:pl-4">
          <ExperiencePanel items={data.experience} />
        </div>
        <div className="lg:pr-4">
          <ProjectsPanel items={data.projects} />
        </div>
      </div>
    </div>
  );
}

/* ==================== EXPERIENCE LIST + POPUP ==================== */

function ExperiencePanel({ items }) {
  const [selected, setSelected] = useState(0);
  const [modal, setModal] = useState({ open: false, idx: 0 });
  const rows = items;
  const current = rows[selected] ?? null;

  const onKeyDown = (e) => {
    if (modal.open) return;                 // modal handles Esc itself
    if (e.key === "ArrowDown") { e.preventDefault(); setSelected(i => (i + 1) % rows.length); }
    if (e.key === "ArrowUp")   { e.preventDefault(); setSelected(i => (i - 1 + rows.length) % rows.length); }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setModal({ open: true, idx: selected });
    }
  };

  return (
    <TuiWindow title="Experience" color="magenta">
      {/* Click to focus, then use arrows/enter */}
      <div
        tabIndex={0}
        onKeyDown={onKeyDown}
        onClick={(e) => e.currentTarget.focus()}
        className="outline-none"
      >
        <ListShell rows={rows} selected={selected} setSelected={setSelected} />
        <div className="mt-2 text-sm">Click panel • ↑/↓ select • Enter open • Esc close</div>
      </div>

      {modal.open && current && (
        <TuiModal onClose={() => setModal({ open: false, idx: modal.idx })}>
          <DetailBody item={current} />
        </TuiModal>
      )}
    </TuiWindow>
  );
}


/* ==================== PROJECTS LIST + POPUP ==================== */

function ProjectsPanel({ items }) {
  const [selected, setSelected] = useState(0);
  const [modal, setModal] = useState({ open: false, idx: 0 });
  const rows = items;
  const current = rows[selected] ?? null;

  const onKeyDown = (e) => {
    if (modal.open) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setSelected(i => (i + 1) % rows.length); }
    if (e.key === "ArrowUp")   { e.preventDefault(); setSelected(i => (i - 1 + rows.length) % rows.length); }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setModal({ open: true, idx: selected });
    }
  };

  return (
    <TuiWindow title="Projects" color="purple">
      <div
        tabIndex={0}
        onKeyDown={onKeyDown}
        onClick={(e) => e.currentTarget.focus()}
        className="outline-none"
      >
        <ListShell rows={rows} selected={selected} setSelected={setSelected} purple />
        <div className="mt-2 text-sm">Click panel • ↑/↓ select • Enter open • Esc close</div>
      </div>

      {modal.open && current && (
        <TuiModal onClose={() => setModal({ open: false, idx: modal.idx })}>
          <DetailBody item={current} />
        </TuiModal>
      )}
    </TuiWindow>
  );
}

function AboutBox({ bio, longBio, cvUrl }) {
  const [open, setOpen] = React.useState(false);

  // keyboard: Enter/Space on the “Learn more …” opens modal
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <div className="font-tui text-lg leading-7 text-black">
      {/* short line + learn more */}
      <p>
        {bio}{" "}
        <span
          role="button"
          tabIndex={0}
          onClick={() => setOpen(true)}
          onKeyDown={onKeyDown}
          className="underline cursor-pointer"
          title="Open details"
        >
          … Learn more
        </span>
      </p>

      {cvUrl && (
        <div className="mt-3">
          <TuiButton as="a" href={cvUrl} tone="green">
            View CV
          </TuiButton>
        </div>
      )}

      {/* Modal with 1–2 paragraphs; close with Esc (no OK button) */}
      {open && (
        <TuiModal onClose={() => setOpen(false)}>
          <div className="space-y-3 text-black">
            {String(longBio || "")
              .split("\n\n")
              .map((para, i) => (
                <p key={i} className="font-tui text-lg leading-7">
                  {para}
                </p>
              ))}
          </div>
        </TuiModal>
      )}
    </div>
  );
}

/* ==================== SHARED LIST + DETAIL ==================== */

function ListShell({ rows, selected, setSelected, purple = false }) {
  const border = purple ? "border-[#e3c6ff]" : "border-[#ffd1ff]";
  const bg = purple ? "bg-[#4e0097]" : "bg-[#99007f]";

  return (
    <div className="font-tui text-lg">
      <div className={`rounded-none border-[3px] ${border} ${bg} p-1`}>
        {(rows.length ? rows : [{ id: "empty", title: "— None —" }]).map((r, i) => (
          <div
            key={r.id ?? i}
            onClick={() => setSelected(i)}
            className={`grid grid-cols-[1fr_auto] items-center px-2 py-1 border-b-[2px] border-white/80 select-none cursor-pointer ${
              i === selected ? "bg-[#00E5FF] text-black" : "bg-transparent text-white"
            }`}
          >
            <div className="truncate">
              {r.title ? `${r.title}` : r.title}
            </div>
            <div className="ml-3">{String.fromCharCode(65 + i)}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 text-sm">↑/↓ select • Enter open • Esc close</div>
    </div>
  );
}

function DetailBody({ item }) {
  return (
    <>
      <div className="mb-2 font-tui text-xl">
        {item.title} {item.org ? `— ${item.org}` : ""}
      </div>
      <div className="font-tui text-lg text-black">
        {item.dates && <div className="mb-2 text-black/80">{item.dates}</div>}
        {item.bullets?.length ? (
          <ul className="mb-0 list-disc pl-5">
            {item.bullets.map((b, idx) => (
              <li key={idx} className="mb-1">{b}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}

/* ==================== TUI COMPONENTS ==================== */

function TuiWindow({ title, color = "blue", children, hint }) {
  const palettes = {
    blue:    { pane: "bg-[#153aa6]", border: "border-[#7fd2ff]", inner: "bg-[#0e2f8f]", headerText: "text-white" },
    black:   { pane: "bg-black",     border: "border-white",     inner: "bg-black",    headerText: "text-white" },
    gray:    { pane: "bg-[#cfcfcf] text-black", border: "border-black", inner: "bg-white", headerText: "text-black" },
    magenta: { pane: "bg-[#c100a0] text-white", border: "border-[#ffd1ff]", inner: "bg-[#e38ad7]" },
    purple:  { pane: "bg-[#6a00c9] text-white", border: "border-[#e3c6ff]", inner: "bg-[#4e0097]" },
    teal:    { pane: "bg-[#0b7a67] text-white", border: "border-[#9bf6e4]", inner: "bg-[#096a59]", headerText: "text-white" },
  }[color];

  return (
    <section className="relative">
      <div className={`rounded-none border-[3px] ${palettes.border} ${palettes.pane} p-2 shadow-[5px_5px_0_#000]`}>
        <div className={`mb-2 flex items-center justify-between ${palettes.headerText || ""}`}>
          <div className="font-tui text-xl">{title}</div>
          {hint && <div className="text-sm opacity-70 font-tui">{hint}</div>}
        </div>
        <div className={`rounded-none border-[3px] ${palettes.border} ${palettes.inner || ""} p-3`}>
          {children}
        </div>
      </div>
    </section>
  );
}


function TuiField({ k, v, link }) {
  const value = link ? (
    <a className="underline break-words break-all inline-block w-full" href={link}>{v}</a>
  ) : (
    <span className="break-words break-all inline-block w-full">{v}</span>
  );

  return (
    <div className="grid grid-cols-[180px_minmax(0,1fr)] items-center gap-2">
      <div className="text-zinc-200">{k.padEnd(10, ".")}:</div>
      <div className="w-full bg-black px-2 py-1 text-white">{value}</div>
    </div>
  );
}

function TuiButton({ as, href, children, tone = "green", onClick }) {
  const Comp = as || "button";
  const tones = {
    green: "bg-[#11b011] hover:bg-[#17c417]",
    yellow: "bg-[#d8c200] hover:bg-[#ffe100]",
    cyan:   "bg-[#0aa1ff] hover:bg-[#2bb6ff]",
    magenta:"bg-[#c100a0] hover:bg-[#d41ab2]",
  };
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={`border-[3px] border-black px-3 py-1 font-tui text-lg text-black shadow-[4px_4px_0_#000] ${tones[tone]}`}
    >
      {children}
    </Comp>
  );
}

// Compact row: label + squares (no percentage)
function TuiChartBar({ label, value }) {
  const total = 20;
  const filled = Math.max(0, Math.min(total, value));
  return (
    <div className="flex items-center gap-4">
      <div className="w-[80px] font-tui text-lg">{label}</div>
      <div className="inline-flex items-center border-[3px] border-white bg-black p-1">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className={`h-5 w-5 border-[2px] border-white ${i < filled ? "bg-[#ff2727]" : "bg-transparent"} ${i < total - 1 ? "mr-1" : ""}`} />
        ))}
      </div>
    </div>
  );
}

/* ==================== Modal ==================== */

function TuiModal({ children, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div className="w-[90vw] max-w-[640px]">
        <TuiWindow title="DETAILS" color="gray" hint="Press ESC to leave">
          <div className="font-tui text-lg text-black">
            {children}
          </div>
        </TuiWindow>
      </div>
    </div>
  );
}


function EducationBox({ edu }) {
  const [open, setOpen] = React.useState(false);

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <div className="font-tui text-lg text-black">
      {/* Header row: Uni + years in a tight retro band */}
      <div className="mb-2 grid grid-cols-[1fr_auto] items-center gap-2">
        <div className="bg-black px-2 py-1 text-white">{edu.uni}</div>
        <div className="border-[3px] border-black bg-[#00d3b8] px-2 py-1 text-black shadow-[3px_3px_0_#000]">
          {edu.years}
        </div>
      </div>

      {/* Degree line + Learn more */}
      <p className="leading-7">
        <span className="text-white">{edu.degree}{" "}</span>
        <span
          role="button"
          tabIndex={0}
          onClick={() => setOpen(true)}
          onKeyDown={onKeyDown}
          className="underline cursor-pointer, text-white"
          title="Open details"
        >
          … Learn more
        </span>
      </p>

      {/* Modal (Esc to close; no OK button) */}
      {open && (
        <TuiModal onClose={() => setOpen(false)}>
          <div className="space-y-3 text-black">
            {String(edu.longEdu || "")
              .split("\n\n")
              .map((para, i) => (
                <p key={i} className="font-tui text-lg leading-7">
                  {para}
                </p>
              ))}
          </div>
        </TuiModal>
      )}
    </div>
  );
}






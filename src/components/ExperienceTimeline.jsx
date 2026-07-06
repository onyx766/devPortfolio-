import React, { useEffect, useRef, useState } from "react";
import { useLowPower } from "../hooks/useLowPower.js";

// ── Timeline entries (newest on top) ──────────────────────────────────────
const ENTRIES = [
  {
    kind: "work",
    dateLabel: "Present",
    org: "Freelance / Independent",
    role: "Unity Engineer & AI Software Engineer",
    description:
      "Designing intelligent applications and immersive real-time experiences by combining Unity development with modern AI technologies. Building multiplayer games, simulation systems, AI-powered assistants, and automation tools while integrating Large Language Models (LLMs), computer vision, and cloud services into scalable software solutions.",
    tags: [
      "Unity",
      "C#",
      "AI",
      "LLMs",
      "Python",
      "Computer Vision",
      "Multiplayer",
      "Cloud",
    ],
    accent: "#0f766e",
  },
  {
    kind: "work",
    dateLabel: "2024 — Present",
    org: "AI & Interactive Solutions",
    role: "AI Software Engineer",
    description:
      "Developing AI-driven applications using Large Language Models, Retrieval-Augmented Generation (RAG), vector databases, and intelligent automation workflows. Building scalable backend services, integrating AI APIs, and creating production-ready systems that improve productivity and decision-making.",
    tags: [
      "Python",
      "FastAPI",
      "OpenAI",
      "LangChain",
      "RAG",
      "Vector DB",
      "Docker",
      "REST APIs",
    ],
    accent: "#2563eb",
  },
  {
    kind: "work",
    dateLabel: "2023 — Present",
    org: "Game Development",
    role: "Unity Developer",
    description:
      "Building cross-platform games and interactive 3D applications using Unity. Implemented gameplay mechanics, AI behaviors, multiplayer networking, UI systems, and optimized rendering pipelines to deliver smooth, high-performance experiences across desktop, mobile, and WebGL platforms.",
    tags: [
      "Unity",
      "C#",
      "Photon",
      "WebGL",
      "Mobile",
      "Gameplay",
      "Optimization",
      "Shader Graph",
    ],
    accent: "#6d28d9",
  },
  {
    kind: "work",
    dateLabel: "2022 — 2024",
    org: "Software Development",
    role: "Full Stack Developer",
    description:
      "Developed scalable web applications with modern frontend and backend technologies. Designed REST APIs, authentication systems, cloud deployments, and responsive user interfaces while collaborating with clients to deliver reliable, production-ready software solutions.",
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Tailwind CSS",
    ],
    accent: "#b91c1c",
  },
  {
    kind: "school",
    dateLabel: "2021 — 2025",
    org: "Bachelor of Computer Science",
    role: "Computer Science Student",
    description:
      "Built a strong foundation in software engineering, algorithms, artificial intelligence, computer graphics, and game development. Completed projects involving AI applications, Unity game development, cloud computing, and full-stack software engineering.",
    tags: [
      "Algorithms",
      "Data Structures",
      "Artificial Intelligence",
      "Unity",
      "C++",
      "Computer Graphics",
      "Software Engineering",
    ],
    accent: "#ca8a04",
  },
];

// ── Icons ─────────────────────────────────────────────────────────────────
const BriefcaseIcon = ({ color }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const CapIcon = ({ color }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v4c0 1.66 2.69 3 6 3s6-1.34 6-3v-4" />
  </svg>
);

// ── One row: dot on line + card on alternating side ──────────────────────
function TimelineRow({ entry, index }) {
  const rowRef = useRef(null);
  const lowPower = useLowPower();
  // On mobile / reduced-motion, skip the IntersectionObserver and reveal
  // animations entirely — render the row visible from first paint.
  const [visible, setVisible] = useState(lowPower);

  useEffect(() => {
    if (lowPower) return;
    if (!rowRef.current) return;
    const obs = new IntersectionObserver(
      (items) => {
        items.forEach((it) => {
          if (it.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    );
    obs.observe(rowRef.current);
    return () => obs.disconnect();
  }, [lowPower]);

  const isLeft = index % 2 === 0;
  const Icon = entry.kind === "school" ? CapIcon : BriefcaseIcon;
  const cardDelay = "120ms";
  const dotDelay = "0ms";

  return (
    <div ref={rowRef} className="relative md:grid md:grid-cols-2">
      {/* Dot on the center line */}
      <div
        aria-hidden="true"
        className="absolute left-[24px] md:left-1/2 top-7 md:top-7 md:-translate-x-1/2 z-20"
        style={{
          opacity: visible ? 1 : 0,
          transform: `translateX(-50%) scale(${visible ? 1 : 0.2})`,
          transformOrigin: "center",
          transition: `opacity 0.5s ease ${dotDelay}, transform 0.6s cubic-bezier(0.5, 1.8, 0.4, 1) ${dotDelay}`,
        }}
      >
        <div
          className="w-4 h-4 rounded-full bg-white"
          style={{
            boxShadow: `0 0 0 2px ${entry.accent}, 0 0 0 6px ${entry.accent}22, 0 4px 14px -4px ${entry.accent}66`,
          }}
        />
      </div>

      {/* Card — on mobile always right of line; on md alternates */}
      <div
        className={
          isLeft
            ? "md:col-start-1 md:justify-self-end md:pr-14"
            : "md:col-start-2 md:justify-self-start md:pl-14"
        }
      >
        <div
          className="group relative rounded-2xl bg-white/85 backdrop-blur-sm p-6 ring-1 ring-zinc-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.16)] transition-all duration-300 max-w-md ml-14 md:ml-0"
          style={{
            "--accent": entry.accent,
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translate(0,0)"
              : `translate(${isLeft ? -20 : 20}px, 16px)`,
            transition: `opacity 0.7s cubic-bezier(0.2,0.8,0.3,1) ${cardDelay}, transform 0.7s cubic-bezier(0.2,0.8,0.3,1) ${cardDelay}, box-shadow 0.3s ease`,
          }}
        >
          {/* Accent ring appears on hover — solid, no gradient */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ boxShadow: `inset 0 0 0 2px ${entry.accent}` }}
          />
          {/* Accent tab on the side that faces the timeline line */}
          <div
            className={`absolute top-5 bottom-5 w-1 rounded-full transition-all duration-300 group-hover:w-1.5 ${
              isLeft ? "right-0 -mr-[2px]" : "left-0 -ml-[2px]"
            } hidden md:block`}
            style={{ backgroundColor: entry.accent }}
          />

          {/* Date label with icon */}
          <div
            className="flex items-center gap-2"
            style={{ color: entry.accent }}
          >
            <Icon color={entry.accent} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase">
              {entry.dateLabel}
            </span>
          </div>

          {/* Org */}
          <h3 className="mt-3 font-display uppercase tracking-[0.02em] text-xl md:text-2xl text-zinc-900 transition-colors duration-300 group-hover:text-[color:var(--accent)]">
            {entry.org}
          </h3>

          {/* Role */}
          <p className="mt-0.5 text-sm text-zinc-500 font-medium">
            {entry.role}
          </p>

          {/* Description */}
          <p className="mt-4 text-sm md:text-[15px] text-zinc-600 leading-relaxed">
            {entry.description}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {entry.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 ring-1 ring-zinc-200/70 transition-colors duration-200 group-hover:bg-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Scroll-synced progress line ──────────────────────────────────────────
function useLineProgress(ref) {
  const [progress, setProgress] = useState(0);
  const lowPower = useLowPower();

  useEffect(() => {
    // On mobile, just paint the full line — no scroll listener at all.
    if (lowPower) {
      setProgress(1);
      return;
    }
    if (!ref.current) return;
    let rafId = 0;
    const compute = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const target = vh * 0.55; // where the "head" of the line sits on screen
      const total = rect.height;
      const scrolled = target - rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", compute);
    };
  }, [ref, lowPower]);

  return progress;
}

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const progress = useLineProgress(ref);

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl">
      {/* Base line (track) */}
      <div
        aria-hidden="true"
        className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-zinc-300/50"
      />
      {/* Progress line (filled as user scrolls) */}
      <div
        aria-hidden="true"
        className="absolute left-[24px] md:left-1/2 top-0 w-[2px] md:-translate-x-1/2 bg-gradient-to-b from-zinc-400 to-zinc-600"
        style={{
          height: `${progress * 100}%`,
          transition: "height 120ms linear",
        }}
      />

      <div className="relative space-y-20 md:space-y-28">
        {ENTRIES.map((e, i) => (
          <TimelineRow key={i} entry={e} index={i} />
        ))}
      </div>
    </div>
  );
}

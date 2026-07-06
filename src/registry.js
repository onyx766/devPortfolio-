// Central registry mapping each project to its launch + heartbeat strategy.
// The Launcher UI and the heartbeat daemon both consume this file.

export const PROJECTS = [
  {
    id: "survival-protocol",
    name: "Survival Protocol",
    tagline: "Multiplayer survival adventure",
    description:
      "A cross-platform multiplayer survival game featuring crafting, inventory systems, enemy AI, and online multiplayer gameplay.",
    stack: ["Unity", "C#", "Photon Fusion", "Shader Graph", "Addressables"],
    color: "#1E5A46",
    gradient: "from-emerald-700 to-green-900",
    spineHighlight: "#7DB99A",
    spineShadow: "#103326",
    icon: "gamepad",
    type: "game",
    githubUrl: "#",
    demoUrl: "#",
    preview: "/previews/survival-protocol.mp4",

    // Online scene image
    scene:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=1600&q=80",
    scenePosition: "center center",

    cover:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80",
  },

  {
    id: "galaxy-racer",
    name: "Galaxy Racer",
    tagline: "Fast-paced futuristic racing",
    description:
      "Arcade sci-fi racing game featuring procedural tracks, AI opponents, boost mechanics, and cinematic effects.",
    stack: ["Unity", "C#", "URP", "Cinemachine", "Post Processing"],
    color: "#3A4FA8",
    gradient: "from-blue-700 to-indigo-900",
    spineHighlight: "#90A7F7",
    spineShadow: "#1A2552",
    icon: "rocket",
    type: "game",
    githubUrl: "#",
    demoUrl: "#",
    preview: "/previews/galaxy-racer.mp4",

    scene:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
    scenePosition: "center center",

    cover:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80",
  },

  {
    id: "zombie-siege",
    name: "Zombie Siege",
    tagline: "Wave-based zombie shooter",
    description:
      "Third-person zombie survival shooter with advanced enemy AI, weapon upgrades, and procedural wave spawning.",
    stack: ["Unity", "C#", "NavMesh", "Animator", "DOTween"],
    color: "#8C2F39",
    gradient: "from-red-700 to-rose-900",
    spineHighlight: "#D07D87",
    spineShadow: "#45141A",
    icon: "skull",
    type: "game",
    githubUrl: "#",
    demoUrl: "#",
    preview: "/previews/zombie-siege.mp4",

    scene:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80",
    scenePosition: "center center",

    cover:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
  },

  {
    id: "ai-companion",
    name: "AI Companion",
    tagline: "LLM-powered virtual assistant",
    description:
      "AI desktop assistant integrating LLMs, speech recognition, vector search, and intelligent workflow automation.",
    stack: ["Python", "FastAPI", "OpenAI", "LangChain", "ChromaDB"],
    color: "#6B3FA0",
    gradient: "from-violet-700 to-purple-900",
    spineHighlight: "#B291D8",
    spineShadow: "#32194D",
    icon: "brain",
    type: "ai",
    githubUrl: "#",
    demoUrl: "#",
    preview: "/previews/ai-companion.mp4",

    scene:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80",
    scenePosition: "center center",

    cover:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  },

  {
    id: "vision-inspector",
    name: "Vision Inspector",
    tagline: "Computer vision inspection platform",
    description:
      "Industrial quality inspection using YOLO object detection with real-time analytics and cloud reporting.",
    stack: ["Python", "OpenCV", "YOLO", "FastAPI", "React"],
    color: "#8A5A1D",
    gradient: "from-amber-700 to-orange-900",
    spineHighlight: "#D7A869",
    spineShadow: "#4C2E08",
    icon: "camera",
    type: "ai",
    githubUrl: "#",
    demoUrl: "#",
    preview: "/previews/vision-inspector.mp4",

    scene:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
    scenePosition: "center center",

    cover:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
  },

  {
    id: "metaverse-showroom",
    name: "Metaverse Showroom",
    tagline: "Interactive virtual experience",
    description:
      "A Unity-powered virtual showroom allowing users to explore products in immersive 3D with HDRP visuals.",
    stack: ["Unity", "C#", "HDRP", "Addressables", "WebGL"],
    color: "#0F6B78",
    gradient: "from-cyan-700 to-sky-900",
    spineHighlight: "#73C9D6",
    spineShadow: "#06363E",
    icon: "cube",
    type: "game",
    githubUrl: "#",
    demoUrl: "#",
    preview: "/previews/metaverse-showroom.mp4",

    scene:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600&q=80",
    scenePosition: "center center",

    cover:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1200&q=80",
  },
];
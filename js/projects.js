// Project list shown on projects.html and project.html?id=...
// To add a project, copy one entry and edit it. The first entry appears first.
//   id       — used in the page address (project.html?id=<id>), letters and dashes only
//   cover    — card image; leave out to show a colored placeholder
//   images   — up to 3 photos shown at the top of the detail page
//   facts    — label/value rows in the "About Project" column (HTML allowed)
//   overview — paragraphs or bullet points (strings starting with "- " become bullets)
//   videos   — YouTube video ids
//   links    — buttons under "About Project"

const projects = [
  {
    id: "versday",
    title: "Virtual Idol “Verse'day”",
    summary: "Founding and directing a virtual idol group from concept to release",
    year: "2022 – 2025",
    tags: ["Virtual Entertainment", "Creative Direction"],
    award: "Best Project Award (Music), Korea Creative Content Agency (KOCCA), 2024",
    cover: "images/projects/feel-alive.jpg",
    images: [
      "images/projects/feel-alive.jpg",
      "images/projects/wishbowl-mv.jpg",
      "images/projects/wavelet.jpg"
    ],
    facts: [
      ["Role", "Founder &amp; Creative Director"],
      ["Team", "Five-member production team"],
      ["Funding", "~$30,000 in KOCCA grants (Content Impact 2022, New Content Academy 2024)"],
      ["Releases", "<i>Feel Alive</i>, <i>Wishbowl</i>, <i>Wavelet</i>"]
    ],
    overview: [
      "- Founded and led a five-member production team for the virtual idol group.",
      "- Secured ~$30,000 in government grants from KOCCA through Content Impact 2022 and New Content Academy 2024, with follow-on funding as a Best Project.",
      "- Released three albums and music videos and directed the group's concept and creative production.",
      "- Presented and exhibited the <i>Wishbowl</i> interactive concert at the New Content Academy Showcase 2024 and Character Licensing Fair 2024 (COEX)."
    ],
    videos: [
      { id: "mkVMj3ZbYco", caption: "Feel Alive" },
      { id: "h6GKyl106Xs", caption: "Wishbowl" },
      { id: "v0qFvmvjZec", caption: "Wavelet" }
    ],
    links: []
  },
  {
    id: "wishbowl",
    title: "Wishbowl Interactive Concert",
    summary: "An immersive interactive concert for the virtual band idol Verse'day",
    year: "2024",
    tags: ["Interactive Concert", "Virtual Entertainment"],
    cover: "images/projects/wishbowl-concert.jpg",
    images: [
      "images/projects/wishbowl-concert.jpg",
      "images/projects/wishbowl-mv.jpg"
    ],
    facts: [
      ["Exhibited", "New Content Academy Showcase 2024<br>Character Licensing Fair 2024 (COEX)"],
      ["Publication", "<i>JKCGS</i>, 30(3)"],
      ["Authors", "Sebin Lee*, Gyeongjin Kim*, <b>Daye Kim</b>*, and Jungjin Lee"]
    ],
    overview: [
      "A production case study of the <i>Wishbowl</i> music video and immersive interactive concert of the virtual band idol Verse'day.",
      "The concert was presented and exhibited at the New Content Academy Showcase 2024 and Character Licensing Fair 2024 (COEX)."
    ],
    videos: [{ id: "HdHAw4pW0os", caption: "Wishbowl interactive concert" }],
    links: [{ label: "Paper", url: "https://doi.org/10.15701/kcgs.2024.30.3.23" }]
  },
  {
    id: "vtubers-atelier",
    title: "VTuber's Atelier",
    summary: "The design space, challenges, and opportunities for VTubing",
    year: "2025",
    tags: ["Virtual Entertainment", "Creators", "CHI 2025"],
    facts: [
      ["Venue", "CHI 2025: ACM CHI Conference on Human Factors in Computing Systems"],
      ["Authors", "<b>Daye Kim</b>*, Sebin Lee*, Yoonseo Jun, Yujin Shin, and Jungjin Lee"]
    ],
    overview: [
      "<i>VTuber's Atelier: The Design Space, Challenges, and Opportunities for VTubing</i> — also the topic of my M.S. thesis.",
      "Presented as an oral presentation at CHI 2025, and as an invited presentation at the SIGCHI Korea Invited Papers Workshop at HCI Korea 2026, where it received an Honorable Mention Presentation Award."
    ],
    links: [{ label: "Paper", url: "https://doi.org/10.1145/3706598.3714107" }]
  },
  {
    id: "vibeon",
    title: "Bring the VibeOn",
    summary: "A multimodal interface for shared emotional experiences in live-streamed concerts",
    year: "2025",
    tags: ["Live-streamed Concerts", "Multimodal Interface", "ACM MM 2025"],
    facts: [
      ["Venue", "ACM MM 2025: ACM International Conference on Multimedia"],
      ["Authors", "Gyeongjin Kim, Sebin Lee, <b>Daye Kim</b>, Jungjin Lee, and Minju Kim"]
    ],
    overview: [
      "<i>Bring the VibeOn: Designing a Multimodal Interface for Shared Emotional Experiences in Live-streamed Concerts</i>."
    ],
    links: [{ label: "Paper", url: "https://doi.org/10.1145/3746027.3755327" }]
  },
  {
    id: "avatar-concerts",
    title: "Virtual Avatar Concerts",
    summary: "How viewing formats and song genres shape audience experiences",
    year: "2023",
    tags: ["Virtual Concerts", "Audience Experience", "ACM MM 2023"],
    facts: [
      ["Venue", "ACM MM 2023: ACM International Conference on Multimedia"],
      ["Authors", "Sebin Lee*, <b>Daye Kim</b>*, and Jungjin Lee"]
    ],
    overview: [
      "<i>The Effects of Viewing Formats and Song Genres on Audience Experiences in Virtual Avatar Concerts</i>."
    ],
    links: [{ label: "Paper", url: "https://doi.org/10.1145/3581783.3612094" }]
  },
  {
    id: "mobility-ux",
    title: "Cultural Content in Mobility",
    summary: "UX services for passengers' cultural content experiences",
    year: "2024 – Present",
    tags: ["UX Research", "Government R&D"],
    facts: [
      ["Funding", "Government R&amp;D project funded by KOCCA"],
      ["Methods", "Large-scale user evaluations (N=100, N=300), qualitative analysis"]
    ],
    overview: [
      "Conducted large-scale user evaluations (N=100, N=300) and qualitative analysis of participant responses for UX services that support passengers' cultural content experiences in mobility."
    ],
    links: []
  }
];

// Publication list shown as cards on the Home page, grouped by `group` in the order below.
//   image   — teaser figure; leave out to show a colored placeholder with the venue
//   venue   — short badge text (e.g. "CHI 2025")
//   full    — full venue name shown under the authors
//   authors — HTML; wrap your name in <b>
//   links   — buttons (label + url); `project` links to project.html?id=<id>

const publications = [
  {
    group: "International Papers",
    title: "VTuber's Atelier: The Design Space, Challenges, and Opportunities for VTubing",
    authors: "<b>Daye Kim</b>*, Sebin Lee*, Yoonseo Jun, Yujin Shin, and Jungjin Lee",
    venue: "CHI 2025",
    full: "ACM CHI Conference on Human Factors in Computing Systems",
    url: "https://doi.org/10.1145/3706598.3714107",
    project: "vtubers-atelier",
    links: [{ label: "Paper", url: "https://doi.org/10.1145/3706598.3714107" }]
  },
  {
    group: "International Papers",
    title: "Bring the VibeOn: Designing a Multimodal Interface for Shared Emotional Experiences in Live-streamed Concerts",
    authors: "Gyeongjin Kim, Sebin Lee, <b>Daye Kim</b>, Jungjin Lee, and Minju Kim",
    venue: "ACM MM 2025",
    full: "ACM International Conference on Multimedia",
    url: "https://doi.org/10.1145/3746027.3755327",
    project: "vibeon",
    links: [{ label: "Paper", url: "https://doi.org/10.1145/3746027.3755327" }]
  },
  {
    group: "International Papers",
    title: "The Effects of Viewing Formats and Song Genres on Audience Experiences in Virtual Avatar Concerts",
    authors: "Sebin Lee*, <b>Daye Kim</b>*, and Jungjin Lee",
    venue: "ACM MM 2023",
    full: "ACM International Conference on Multimedia",
    url: "https://doi.org/10.1145/3581783.3612094",
    project: "avatar-concerts",
    links: [{ label: "Paper", url: "https://doi.org/10.1145/3581783.3612094" }]
  },
  {
    group: "Domestic Papers",
    title: "AI-Based Mobile Service Design for Improving Conflict Experiences in Romantic Relationships",
    authors: "Seeun Hyun, Yoohyun Kim, Sion Lee, Yunsik Cho, <b>Daye Kim</b>, and Jungjin Lee",
    venue: "HCI Korea 2026",
    full: "Proceedings of HCI Korea 2026",
    url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12745890",
    links: [{ label: "Paper", url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12745890" }]
  },
  {
    group: "Domestic Papers",
    title: "Designing a Decision Support System for Structuring Judgment Processes in Study Abroad Preparation",
    authors: "Jisu Kim, Nharyeong Kim, Chaeeun Baek, <b>Daye Kim</b>, and Jungjin Lee",
    venue: "HCI Korea 2026",
    full: "Proceedings of HCI Korea 2026",
    url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12745970",
    links: [{ label: "Paper", url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12745970" }]
  },
  {
    group: "Domestic Papers",
    title: "Wishbowl: Production Case Study of Music Video and Immersive Interactive Concert of Virtual Band Idol Verse'day",
    authors: "Sebin Lee*, Gyeongjin Kim*, <b>Daye Kim</b>*, and Jungjin Lee",
    venue: "JKCGS",
    full: "Journal of the Korea Computer Graphics Society, 30(3)",
    url: "https://doi.org/10.15701/kcgs.2024.30.3.23",
    image: "images/projects/wishbowl-concert.jpg",
    project: "wishbowl",
    links: [
      { label: "Paper", url: "https://doi.org/10.15701/kcgs.2024.30.3.23" },
      { label: "Video", url: "https://www.youtube.com/watch?v=HdHAw4pW0os" }
    ]
  },
  {
    group: "Under Review",
    title: "Manuscript on Embodiment and Self-Expression in VR Dance Education",
    authors: "Yoonseo Jun*, <b>Daye Kim</b>*, Sebin Lee, and Jungjin Lee",
    venue: "Under Review",
    links: []
  }
];

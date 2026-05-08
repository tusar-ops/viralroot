// ===== VIRALROOT DATA =====
// All meme, trend, and sound data lives here.
// To add a new meme: copy a template and fill in the fields.

const MEMES = [
  {
    id: "skibidi-toilet",
    name: "Skibidi Toilet",
    emoji: "🚽",
    slug: "skibidi-toilet",
    platforms: ["youtube", "tiktok", "instagram"],
    badge: "hot",
    origin_date: "February 2023",
    origin_country: "Russia",
    origin_creator: "@DaFuq!?Boom!",
    origin_account: "YouTube: DaFuq!?Boom!",
    summary: "A series of YouTube videos featuring a human head emerging from a toilet and a giant cameraman character. Became a massive Gen-Z cultural phenomenon.",
    full_origin: "Skibidi Toilet was created by Georgian animator Alexey Gerasimov, known online as DaFuq!?Boom!. The first video was uploaded on February 7, 2023 to YouTube. The video featured a human head singing a remix of 'Dom Dom Yes Yes' from a toilet bowl, facing off against a cameraman-headed character. The series exploded in popularity among children and teenagers in mid-2023 and spawned thousands of fan edits.",
    why_viral: "The bizarre, surreal humor combined with fast-paced episodic content appealed heavily to Gen Alpha (kids under 13). The series grew to over 100 episodes with increasing plot complexity, keeping viewers hooked. TikTok and Instagram further spread clips and memes from the series.",
    audio_name: "Dom Dom Yes Yes (Skibidi Toilet Remix)",
    audio_artist: "Biser King (original), remixed by DaFuq!?Boom!",
    audio_original: "Based on 'Dom Dom Yes Yes' by Biser King",
    viral_posts: [
      { account: "@skibidifan99", platform: "TikTok", likes: "4.2M", description: "Kid freaking out about Skibidi episode 67" },
      { account: "@memepage_xyz", platform: "Instagram", likes: "890K", description: "Compilation of Skibidi Toilet references in real life" },
      { account: "@genz_memes", platform: "Twitter/X", likes: "1.1M", description: "'Skibidi' being used as a compliment/insult tweet thread" }
    ],
    tags: ["gen-alpha", "youtube", "animation", "surreal", "viral-series"],
    views: "2.1B+",
    status: "Active"
  },
  {
    id: "hawk-tuah",
    name: "Hawk Tuah Girl",
    emoji: "🎤",
    slug: "hawk-tuah",
    platforms: ["tiktok", "instagram", "twitter"],
    badge: "hot",
    origin_date: "June 2024",
    origin_country: "USA",
    origin_creator: "Hailey Welch",
    origin_account: "Tim & Dee TV (YouTube/TikTok)",
    summary: "A street interview where a woman said 'Hawk Tuah' describing something you have to do to a man. Became one of the biggest memes of 2024.",
    full_origin: "In June 2024, Nashville-based interviewers Tim & Dee filmed a street interview with Hailey Welch. When asked about a move that drives men crazy, she responded with 'You gotta give 'em that hawk tuah and spit on that thang.' The clip was posted on June 11, 2024 and within days had millions of views across all platforms. Hailey Welch became known as 'Hawk Tuah Girl.'",
    why_viral: "The completely unexpected, unfiltered response in a public setting was pure shock comedy. The phrase 'hawk tuah' was phonetically funny and easy to remember. It spread as a sound on TikTok instantly, used in reaction videos, remixes, and jokes. Hailey's personality also made her likeable rather than mockable.",
    audio_name: "Hawk Tuah (That Hawk Tuah Girl sound)",
    audio_artist: "Hailey Welch — original interview clip",
    audio_original: "Tim & Dee TV street interview, June 2024",
    viral_posts: [
      { account: "@TimAndDeeTV", platform: "TikTok", likes: "18.3M", description: "The original interview clip" },
      { account: "@hawk_tuah_remixes", platform: "TikTok", likes: "6.7M", description: "DJ remix of the Hawk Tuah audio" },
      { account: "@daily_memes_bro", platform: "Instagram", likes: "3.2M", description: "Hawk Tuah merchandise selling out" }
    ],
    tags: ["street-interview", "viral-phrase", "2024", "comedy", "sound"],
    views: "500M+",
    status: "Peak Passed"
  },
  {
    id: "very-demure",
    name: "Very Demure, Very Mindful",
    emoji: "💅",
    slug: "very-demure",
    platforms: ["tiktok", "instagram"],
    badge: "hot",
    origin_date: "August 2024",
    origin_country: "USA",
    origin_creator: "Jools Lebron (@joolieannie)",
    origin_account: "TikTok: @joolieannie",
    summary: "A TikTok trend started by creator Jools Lebron about being 'very demure, very mindful' — a satirical guide to conducting yourself with elegance and restraint in daily situations.",
    full_origin: "On August 1, 2024, TikToker Jools Lebron posted a video titled 'How to be demure at work' where she humorously described her conservative makeup and professional behavior as 'very demure, very mindful.' The video exploded, and within days the phrase was everywhere. Jools went from a few thousand followers to over 8 million in under a week.",
    why_viral: "The phrase was instantly quotable and versatile — people applied 'very demure, very mindful' to everything from eating snacks to driving. It also became a commentary on overly modest, performative femininity. Jools Lebron, a Black trans woman, became an unexpected internet icon, which added cultural significance to the moment.",
    audio_name: "Very Demure Very Mindful (Jools Lebron TikTok audio)",
    audio_artist: "Jools Lebron (@joolieannie) — original voiceover",
    audio_original: "TikTok video posted August 1, 2024 by @joolieannie",
    viral_posts: [
      { account: "@joolieannie", platform: "TikTok", likes: "22M", description: "The original 'How to be demure at work' video" },
      { account: "@memes.and.culture", platform: "Instagram", likes: "4.5M", description: "Celebrities doing the very demure challenge" },
      { account: "@trending_sounds_2024", platform: "TikTok", likes: "9.8M", description: "Compilations of 'very demure' applied to random things" }
    ],
    tags: ["tiktok-trend", "2024", "comedy", "femininity", "sound", "phrase"],
    views: "1B+",
    status: "Active"
  },
  {
    id: "brat-summer",
    name: "Brat Summer",
    emoji: "💚",
    slug: "brat-summer",
    platforms: ["tiktok", "instagram", "twitter"],
    badge: "hot",
    origin_date: "June 2024",
    origin_country: "USA",
    origin_creator: "Charli XCX",
    origin_account: "Charli XCX — album marketing",
    summary: "A cultural movement tied to Charli XCX's album 'brat' — defined by messy, unapologetic, chaotic feminine energy. Became a lifestyle identity and major internet aesthetic.",
    full_origin: "In June 2024, British pop star Charli XCX released her album 'brat' with a distinctly ugly, bright lime-green cover. The album's themes of female messiness, insecurity, partying, and authenticity resonated deeply. Charli described 'brat' as a girl who is a 'little messy, likes to party, says dumb things sometimes.' The phrase 'brat summer' became the Gen-Z successor to 'hot girl summer.'",
    why_viral: "The lime green aesthetic was visually unique and instantly recognizable. The ethos of being unapologetically messy and real was a cultural counterpoint to polished, curated social media perfectionism. Kamala Harris's campaign also briefly adopted 'brat' symbolism in 2024, catapulting it further into mainstream discourse.",
    audio_name: "360 — Charli XCX",
    audio_artist: "Charli XCX",
    audio_original: "Album: brat (2024), Track: 360",
    viral_posts: [
      { account: "@charli_xcx", platform: "Instagram", likes: "4.1M", description: "Original brat album cover post" },
      { account: "@brat_aesthetic", platform: "TikTok", likes: "12.6M", description: "Brat summer aesthetic transformation videos" },
      { account: "@politicaltweets", platform: "Twitter/X", likes: "8.9M", description: "Kamala Harris campaign adopting brat green" }
    ],
    tags: ["music", "aesthetic", "2024", "charli-xcx", "lifestyle", "pop-culture"],
    views: "800M+",
    status: "Active"
  },
  {
    id: "npc-streaming",
    name: "NPC Streaming Trend",
    emoji: "🤖",
    slug: "npc-streaming",
    platforms: ["tiktok"],
    badge: "classic",
    origin_date: "July 2023",
    origin_country: "USA",
    origin_creator: "Pinkydoll (@pinkydollreal)",
    origin_account: "TikTok: @pinkydollreal",
    summary: "Streamers acting like NPCs (Non-Playable Characters from video games) on TikTok Live, repeating robotic phrases and movements when viewers send gifts.",
    full_origin: "The NPC streaming trend began in July 2023 when Montreal-based TikToker Pinkydoll went viral for her TikTok Live streams where she acted like a video game NPC. She would repeat lines like 'Gang gang' and 'Ice cream so good' while making robotic motions whenever viewers sent her TikTok gifts. Her streams earned her up to $7,000 per day.",
    why_viral: "The absurdity of a human acting like a video game character was completely novel. Viewers discovered they had real influence over a streamer's behavior through gifting, creating a bizarre interactive experience. The 'ice cream so good' and 'gang gang' phrases became instantly iconic.",
    audio_name: "Ice Cream So Good / Gang Gang (Pinkydoll NPC phrases)",
    audio_artist: "Pinkydoll (@pinkydollreal) — original livestream",
    audio_original: "TikTok Live streams by Pinkydoll, July 2023",
    viral_posts: [
      { account: "@pinkydollreal", platform: "TikTok", likes: "14.2M", description: "Original NPC stream compilation" },
      { account: "@viralclips2023", platform: "TikTok", likes: "8.3M", description: "News coverage of the NPC streaming phenomenon" },
      { account: "@npc_content", platform: "Instagram", likes: "2.1M", description: "Other creators copying the NPC format" }
    ],
    tags: ["tiktok-live", "gaming", "streaming", "2023", "performance", "npc"],
    views: "900M+",
    status: "Peak Passed"
  },
  {
    id: "rizz",
    name: "Rizz",
    emoji: "😎",
    slug: "rizz",
    platforms: ["twitter", "tiktok", "instagram"],
    badge: "classic",
    origin_date: "2021",
    origin_country: "USA",
    origin_creator: "Kai Cenat (popularized)",
    origin_account: "Twitch/YouTube: Kai Cenat",
    summary: "Slang for natural charm or charisma, especially in romantic or flirtatious contexts. 'Rizz' or 'W rizz' means you have it. 'No rizz' or 'L rizz' means you don't.",
    full_origin: "The word 'rizz' is believed to be derived from 'charisma' and was used in NYC slang before going mainstream. Streamer Kai Cenat is credited with popularizing it on his Twitch and YouTube streams around 2021–2022, particularly phrases like 'W rizz' and 'no cap, he has rizz.' Oxford University Press named 'rizz' the 2023 Word of the Year.",
    why_viral: "Rizz filled a gap in internet vocabulary for describing natural charm. It was short, phonetically satisfying, and versatile. The concept of 'unspoken rizz' (where you don't even need to say anything) became a huge meme format. Tom Holland claiming he has 'no rizz' in a 2023 interview amplified mainstream awareness.",
    audio_name: "Rizz soundbites — various creators",
    audio_artist: "Kai Cenat (original popularizer)",
    audio_original: "Multiple Twitch/YouTube clips, 2021–2022",
    viral_posts: [
      { account: "@kaicenat", platform: "Twitch/YouTube", likes: "5M+", description: "Kai Cenat explaining rizz to his audience" },
      { account: "@celebrity_clips", platform: "TikTok", likes: "11.4M", description: "Tom Holland saying he has no rizz" },
      { account: "@genz_dictionary", platform: "Instagram", likes: "3.6M", description: "Oxford Dictionary naming rizz Word of the Year" }
    ],
    tags: ["slang", "language", "2023", "kai-cenat", "word-of-year", "charm"],
    views: "Billions",
    status: "Mainstream"
  }
];

const SOUNDS = [
  {
    id: "dom-dom-yes-yes",
    name: "Dom Dom Yes Yes",
    emoji: "🎵",
    artist: "Biser King",
    origin: "Bulgarian pop song, later remixed in Skibidi Toilet series",
    platform: "YouTube → TikTok",
    meme_id: "skibidi-toilet",
    year: "2022"
  },
  {
    id: "hawk-tuah-sound",
    name: "Hawk Tuah (Original clip)",
    emoji: "🎤",
    artist: "Hailey Welch",
    origin: "Street interview by Tim & Dee TV, June 2024",
    platform: "TikTok → All Platforms",
    meme_id: "hawk-tuah",
    year: "2024"
  },
  {
    id: "very-demure-audio",
    name: "Very Demure Very Mindful",
    emoji: "💅",
    artist: "Jools Lebron (@joolieannie)",
    origin: "TikTok video 'How to be demure at work', August 2024",
    platform: "TikTok",
    meme_id: "very-demure",
    year: "2024"
  },
  {
    id: "360-charli",
    name: "360 — Charli XCX",
    emoji: "💚",
    artist: "Charli XCX",
    origin: "Album 'brat' (2024), used in lip sync videos and brat edits",
    platform: "TikTok → Instagram",
    meme_id: "brat-summer",
    year: "2024"
  },
  {
    id: "ice-cream-so-good",
    name: "Ice Cream So Good",
    emoji: "🍦",
    artist: "Pinkydoll (@pinkydollreal)",
    origin: "TikTok Live NPC stream, July 2023",
    platform: "TikTok",
    meme_id: "npc-streaming",
    year: "2023"
  },
  {
    id: "apple-bottom-jeans",
    name: "Apple Bottom Jeans",
    emoji: "👖",
    artist: "Flo Rida ft. T-Pain — Low (2007)",
    origin: "Song 'Low' by Flo Rida became a viral TikTok sound for transformation videos",
    platform: "TikTok → Instagram Reels",
    meme_id: null,
    year: "2007 → viral 2020"
  }
];

// Search function
function searchMemes(query) {
  if (!query || query.trim() === '') return MEMES;
  const q = query.toLowerCase().trim();
  return MEMES.filter(m =>
    m.name.toLowerCase().includes(q) ||
    m.summary.toLowerCase().includes(q) ||
    m.tags.some(t => t.includes(q)) ||
    m.platforms.some(p => p.includes(q)) ||
    (m.audio_name && m.audio_name.toLowerCase().includes(q)) ||
    (m.origin_creator && m.origin_creator.toLowerCase().includes(q))
  );
}

function getMemeById(id) {
  return MEMES.find(m => m.id === id || m.slug === id);
}

function getTrending() {
  return MEMES.filter(m => m.badge === 'hot');
}

function getFeatured() {
  return MEMES.slice(0, 3);
}

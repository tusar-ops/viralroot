// ===== VIRALROOT DATA =====
// To add a new meme: copy the template at the bottom and fill in fields.
// image: use a direct image URL (Wikipedia, imgur, or any public image URL)
// audio_url: YouTube link, Spotify link, or direct .mp3 URL
// If no image yet, set image: null

const MEMES = [
  {
    id: "skibidi-toilet",
    name: "Skibidi Toilet",
    emoji: "🚽",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Skibidi_Toilet_title_card.jpg/320px-Skibidi_Toilet_title_card.jpg",
    slug: "skibidi-toilet",
    platforms: ["youtube", "tiktok", "instagram"],
    badge: "hot",
    origin_date: "February 2023",
    origin_country: "Georgia",
    origin_creator: "@DaFuq!?Boom!",
    origin_account: "YouTube: DaFuq!?Boom!",
    summary: "A series of YouTube videos featuring a human head emerging from a toilet facing off against cameraman-headed characters. A massive Gen-Alpha cultural phenomenon.",
    full_origin: "Skibidi Toilet was created by Georgian animator Alexey Gerasimov, known online as DaFuq!?Boom!. The first video was uploaded on February 7, 2023 to YouTube. The video featured a human head singing a remix of 'Dom Dom Yes Yes' from a toilet bowl, facing off against a cameraman-headed character. The series exploded in popularity among children and teenagers in mid-2023 and spawned thousands of fan edits.",
    why_viral: "The bizarre, surreal humor combined with fast-paced episodic content appealed heavily to Gen Alpha (kids under 13). The series grew to over 100 episodes with increasing plot complexity. TikTok and Instagram further spread clips and memes from the series.",
    audio_name: "Dom Dom Yes Yes (Skibidi Toilet Remix)",
    audio_artist: "Biser King (original), remixed by DaFuq!?Boom!",
    audio_original: "Based on 'Dom Dom Yes Yes' by Biser King",
    audio_url: "https://www.youtube.com/watch?v=wCJBpvGZnmg",
    audio_type: "youtube",
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
    image: null,
    slug: "hawk-tuah",
    platforms: ["tiktok", "instagram", "twitter"],
    badge: "hot",
    origin_date: "June 2024",
    origin_country: "USA",
    origin_creator: "Hailey Welch",
    origin_account: "Tim & Dee TV (YouTube/TikTok)",
    summary: "A street interview where Hailey Welch said an unexpected phrase that became one of the biggest memes of 2024.",
    full_origin: "In June 2024, Nashville-based interviewers Tim & Dee filmed a street interview with Hailey Welch. When asked about a move that drives men crazy, she responded with an unexpected phrase that went instantly viral. The clip was posted on June 11, 2024 and within days had millions of views across all platforms. Hailey became known as 'Hawk Tuah Girl.'",
    why_viral: "The completely unexpected, unfiltered response in a public setting was pure shock comedy. The phrase was phonetically funny and easy to remember. It spread as a sound on TikTok instantly, used in reaction videos, remixes, and jokes.",
    audio_name: "Hawk Tuah (Original Interview Clip)",
    audio_artist: "Hailey Welch — original street interview",
    audio_original: "Tim & Dee TV street interview, June 2024",
    audio_url: "https://www.youtube.com/watch?v=3SKpCBQFCHg",
    audio_type: "youtube",
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
    image: null,
    slug: "very-demure",
    platforms: ["tiktok", "instagram"],
    badge: "hot",
    origin_date: "August 2024",
    origin_country: "USA",
    origin_creator: "Jools Lebron (@joolieannie)",
    origin_account: "TikTok: @joolieannie",
    summary: "A TikTok trend started by Jools Lebron about being 'very demure, very mindful' — a satirical guide to conducting yourself with elegance and restraint.",
    full_origin: "On August 1, 2024, TikToker Jools Lebron posted a video titled 'How to be demure at work' where she humorously described her conservative makeup and professional behavior as 'very demure, very mindful.' The video exploded, and within days Jools went from a few thousand followers to over 8 million.",
    why_viral: "The phrase was instantly quotable and versatile — people applied it to everything. Jools Lebron, a Black trans woman, became an unexpected internet icon, adding cultural significance to the moment.",
    audio_name: "Very Demure Very Mindful (Original TikTok)",
    audio_artist: "Jools Lebron (@joolieannie)",
    audio_original: "TikTok video posted August 1, 2024 by @joolieannie",
    audio_url: "https://www.tiktok.com/@joolieannie",
    audio_type: "link",
    viral_posts: [
      { account: "@joolieannie", platform: "TikTok", likes: "22M", description: "The original 'How to be demure at work' video" },
      { account: "@memes.and.culture", platform: "Instagram", likes: "4.5M", description: "Celebrities doing the very demure challenge" },
      { account: "@trending_sounds_2024", platform: "TikTok", likes: "9.8M", description: "Compilations applied to random situations" }
    ],
    tags: ["tiktok-trend", "2024", "comedy", "sound", "phrase"],
    views: "1B+",
    status: "Active"
  },
  {
    id: "brat-summer",
    name: "Brat Summer",
    emoji: "💚",
    image: null,
    slug: "brat-summer",
    platforms: ["tiktok", "instagram", "twitter"],
    badge: "hot",
    origin_date: "June 2024",
    origin_country: "UK/USA",
    origin_creator: "Charli XCX",
    origin_account: "Charli XCX — album marketing",
    summary: "A cultural movement tied to Charli XCX's album 'brat' — defined by messy, unapologetic feminine energy with a signature lime green aesthetic.",
    full_origin: "In June 2024, British pop star Charli XCX released her album 'brat' with a distinctive lime-green cover. The album's themes of female messiness, insecurity, partying, and authenticity resonated deeply. Charli described 'brat' as a girl who is a little messy, likes to party, and says dumb things sometimes.",
    why_viral: "The lime green aesthetic was visually unique and instantly recognizable. The ethos of being unapologetically messy countered polished social media perfectionism. Kamala Harris's campaign also adopted 'brat' symbolism in 2024.",
    audio_name: "360 — Charli XCX",
    audio_artist: "Charli XCX",
    audio_original: "Album: brat (2024), Track: 360",
    audio_url: "https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe",
    audio_type: "spotify",
    viral_posts: [
      { account: "@charli_xcx", platform: "Instagram", likes: "4.1M", description: "Original brat album cover post" },
      { account: "@brat_aesthetic", platform: "TikTok", likes: "12.6M", description: "Brat summer aesthetic transformation videos" },
      { account: "@politicaltweets", platform: "Twitter/X", likes: "8.9M", description: "Kamala Harris campaign adopting brat green" }
    ],
    tags: ["music", "aesthetic", "2024", "charli-xcx", "lifestyle"],
    views: "800M+",
    status: "Active"
  },
  {
    id: "npc-streaming",
    name: "NPC Streaming",
    emoji: "🤖",
    image: null,
    slug: "npc-streaming",
    platforms: ["tiktok"],
    badge: "classic",
    origin_date: "July 2023",
    origin_country: "Canada",
    origin_creator: "Pinkydoll (@pinkydollreal)",
    origin_account: "TikTok: @pinkydollreal",
    summary: "Streamers acting like NPCs (Non-Playable Characters) on TikTok Live, repeating robotic phrases whenever viewers send gifts.",
    full_origin: "The NPC streaming trend began in July 2023 when Montreal-based TikToker Pinkydoll went viral for her TikTok Live streams where she acted like a video game NPC. She would repeat lines like 'Gang gang' and 'Ice cream so good' while making robotic motions whenever viewers sent TikTok gifts. Her streams earned her up to $7,000 per day.",
    why_viral: "The absurdity of a human acting like a video game character was completely novel. Viewers discovered they had real influence over a streamer's behavior through gifting, creating a bizarre interactive experience.",
    audio_name: "Ice Cream So Good / Gang Gang",
    audio_artist: "Pinkydoll (@pinkydollreal)",
    audio_original: "TikTok Live streams by Pinkydoll, July 2023",
    audio_url: "https://www.tiktok.com/@pinkydollreal",
    audio_type: "link",
    viral_posts: [
      { account: "@pinkydollreal", platform: "TikTok", likes: "14.2M", description: "Original NPC stream compilation" },
      { account: "@viralclips2023", platform: "TikTok", likes: "8.3M", description: "News coverage of NPC streaming" },
      { account: "@npc_content", platform: "Instagram", likes: "2.1M", description: "Other creators copying the NPC format" }
    ],
    tags: ["tiktok-live", "gaming", "streaming", "2023", "npc"],
    views: "900M+",
    status: "Peak Passed"
  },
  {
    id: "rizz",
    name: "Rizz",
    emoji: "😎",
    image: null,
    slug: "rizz",
    platforms: ["twitter", "tiktok", "instagram"],
    badge: "classic",
    origin_date: "2021",
    origin_country: "USA",
    origin_creator: "Kai Cenat (popularized)",
    origin_account: "Twitch/YouTube: Kai Cenat",
    summary: "Slang for natural charm or charisma. Oxford University Press named 'rizz' the 2023 Word of the Year.",
    full_origin: "The word 'rizz' is derived from 'charisma' and was used in NYC slang before going mainstream. Streamer Kai Cenat is credited with popularizing it on his Twitch and YouTube streams around 2021–2022. Oxford University Press named 'rizz' the 2023 Word of the Year.",
    why_viral: "Rizz filled a gap in internet vocabulary for describing natural charm. It was short, satisfying, and versatile. Tom Holland claiming he has 'no rizz' in a 2023 interview amplified mainstream awareness dramatically.",
    audio_name: "Various Rizz soundbites",
    audio_artist: "Kai Cenat (original popularizer)",
    audio_original: "Multiple Twitch/YouTube clips, 2021–2022",
    audio_url: "https://www.youtube.com/watch?v=Y5eCfQSXMIc",
    audio_type: "youtube",
    viral_posts: [
      { account: "@kaicenat", platform: "Twitch/YouTube", likes: "5M+", description: "Kai Cenat explaining rizz to his audience" },
      { account: "@celebrity_clips", platform: "TikTok", likes: "11.4M", description: "Tom Holland saying he has no rizz" },
      { account: "@genz_dictionary", platform: "Instagram", likes: "3.6M", description: "Oxford Dictionary naming rizz Word of the Year" }
    ],
    tags: ["slang", "language", "2023", "kai-cenat", "word-of-year"],
    views: "Billions",
    status: "Mainstream"
  }
];

// ===== SOUNDS =====
const SOUNDS = [
  {
    id: "dom-dom-yes-yes",
    name: "Dom Dom Yes Yes",
    artist: "Biser King",
    origin: "Bulgarian pop song, remixed in Skibidi Toilet (2023)",
    platform: "YouTube → TikTok",
    meme_id: "skibidi-toilet",
    year: "2022",
    audio_url: "https://www.youtube.com/watch?v=wCJBpvGZnmg",
    audio_type: "youtube"
  },
  {
    id: "hawk-tuah-sound",
    name: "Hawk Tuah (Original clip)",
    artist: "Hailey Welch",
    origin: "Street interview by Tim & Dee TV, June 2024",
    platform: "TikTok → All Platforms",
    meme_id: "hawk-tuah",
    year: "2024",
    audio_url: "https://www.youtube.com/watch?v=3SKpCBQFCHg",
    audio_type: "youtube"
  },
  {
    id: "very-demure-audio",
    name: "Very Demure Very Mindful",
    artist: "Jools Lebron (@joolieannie)",
    origin: "TikTok 'How to be demure at work', August 2024",
    platform: "TikTok",
    meme_id: "very-demure",
    year: "2024",
    audio_url: "https://www.tiktok.com/@joolieannie",
    audio_type: "link"
  },
  {
    id: "360-charli",
    name: "360 — Charli XCX",
    artist: "Charli XCX",
    origin: "Album 'brat' (2024), used in brat aesthetic videos",
    platform: "TikTok → Instagram",
    meme_id: "brat-summer",
    year: "2024",
    audio_url: "https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe",
    audio_type: "spotify"
  },
  {
    id: "ice-cream-so-good",
    name: "Ice Cream So Good",
    artist: "Pinkydoll (@pinkydollreal)",
    origin: "TikTok Live NPC stream, July 2023",
    platform: "TikTok",
    meme_id: "npc-streaming",
    year: "2023",
    audio_url: "https://www.tiktok.com/@pinkydollreal",
    audio_type: "link"
  },
  {
    id: "apple-bottom-jeans",
    name: "Apple Bottom Jeans (Low)",
    artist: "Flo Rida ft. T-Pain",
    origin: "Song 'Low' (2007) became viral TikTok transformation sound in 2020",
    platform: "TikTok → Instagram Reels",
    meme_id: null,
    year: "2007 → viral 2020",
    audio_url: "https://open.spotify.com/track/0nJW01T7XtvILxQgC5J7Wh",
    audio_type: "spotify"
  }
];

// ===== PLATFORM SVG LOGOS =====
function getPlatformSVG(platform, size = 28) {
  const logos = {
    tiktok: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.19 8.19 0 004.79 1.53V6.83a4.85 4.85 0 01-1.02-.14z"/></svg>`,
    instagram: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    youtube: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>`,
    twitter: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    reddit: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>`,
    facebook: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
  };
  return logos[platform] || '';
}

// ===== PLATFORM COLORS =====
const PLATFORM_COLORS = {
  tiktok: "#010101",
  instagram: "#E1306C",
  youtube: "#FF0000",
  twitter: "#000000",
  reddit: "#FF4500",
  facebook: "#1877F2"
};

// ===== AUDIO PLAYER HTML =====
function getAudioPlayerHTML(meme) {
  if (!meme.audio_url) return '';
  let btnText = '', btnColor = '', icon = '';
  if (meme.audio_type === 'youtube') {
    btnText = 'Watch on YouTube'; btnColor = '#FF0000';
    icon = getPlatformSVG('youtube', 20);
  } else if (meme.audio_type === 'spotify') {
    btnText = 'Listen on Spotify'; btnColor = '#1DB954';
    icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`;
  } else {
    btnText = 'Find This Sound'; btnColor = 'var(--accent)';
    icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`;
  }
  return `
    <div class="audio-box">
      <div class="audio-icon-wrap">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--green)"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
      </div>
      <div class="audio-info">
        <h4>${meme.audio_name}</h4>
        <div class="audio-artist">By ${meme.audio_artist}</div>
        <p style="font-size:0.82rem;color:var(--text);margin:0.3rem 0">${meme.audio_original}</p>
        <a href="${meme.audio_url}" target="_blank" class="audio-listen-btn" style="background:${btnColor}">
          ${icon} ${btnText}
        </a>
      </div>
    </div>`;
}

// ===== SEARCH =====
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
function getMemeById(id) { return MEMES.find(m => m.id === id || m.slug === id); }
function getFeatured() { return MEMES.slice(0, 3); }

// ===== NEW MEME TEMPLATE (copy this to add a meme) =====
/*
{
  id: "meme-name-here",
  name: "Meme Display Name",
  emoji: "🔥",
  image: "https://direct-image-url.jpg",   // or null
  slug: "meme-name-here",
  platforms: ["tiktok", "instagram"],
  badge: "hot",       // hot, new, classic
  origin_date: "January 2025",
  origin_country: "USA",
  origin_creator: "@creatorhandle",
  origin_account: "TikTok: @creatorhandle",
  summary: "One sentence summary.",
  full_origin: "Full detailed origin story.",
  why_viral: "Why did this go viral?",
  audio_name: "Name of the sound",
  audio_artist: "Artist name",
  audio_original: "Where it first appeared",
  audio_url: "https://youtube.com/...",
  audio_type: "youtube",   // youtube, spotify, link
  viral_posts: [
    { account: "@account", platform: "TikTok", likes: "1M", description: "Description" }
  ],
  tags: ["tag1", "tag2"],
  views: "100M+",
  status: "Active"
},
*/

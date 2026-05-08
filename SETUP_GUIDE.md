# ViralRoot — Complete Setup & Workflow Guide

## WHAT YOU HAVE
A complete, working website with these pages:
- index.html — Homepage with hero, featured memes, sounds grid
- trending.html — All memes with platform filters
- sounds.html — Viral sounds identification page
- search.html — Full search functionality
- meme.html — Individual meme detail pages (dynamic, loads from data.js)
- submit.html — Submission form for community tips
- categories.html — Browse by category
- about.html — About page
- data.js — ALL meme data (add new memes here)
- app.js — All JavaScript logic
- style.css — Complete styling
- robots.txt + sitemap.xml — SEO files

---

## HOW TO ADD A NEW MEME (Your Main Job)

Open data.js and copy this template into the MEMES array:

```javascript
{
  id: "meme-name-with-dashes",
  name: "Meme Display Name",
  emoji: "🔥",
  slug: "meme-name-with-dashes",
  platforms: ["tiktok", "instagram"],   // tiktok, instagram, youtube, twitter, reddit
  badge: "hot",                          // hot, new, classic
  origin_date: "January 2025",
  origin_country: "USA",
  origin_creator: "@creatorhandle",
  origin_account: "TikTok: @creatorhandle",
  summary: "One paragraph summary of what this meme is.",
  full_origin: "Full detailed origin story. Who created it, when, where, how.",
  why_viral: "Why did this go viral? What made people share it?",
  audio_name: "Name of the sound or audio clip",
  audio_artist: "Original artist or creator of the audio",
  audio_original: "Where it originally appeared",
  viral_posts: [
    { account: "@account", platform: "TikTok", likes: "1.2M", description: "What the post was" },
    { account: "@account2", platform: "Instagram", likes: "500K", description: "Description" }
  ],
  tags: ["tag1", "tag2", "tag3"],
  views: "100M+",
  status: "Active"   // Active, Peak Passed, Mainstream
},
```

---

## FREE HOSTING OPTIONS

### Option 1: Netlify (BEST — Recommended)
1. Go to netlify.com → Sign up free
2. Click "Add new site" → "Deploy manually"
3. Drag and drop the entire viralroot folder
4. Your site goes live instantly at a free URL like: yoursite.netlify.app
5. Get a free custom domain or connect viralroot.com later ($10/year on Namecheap)

### Option 2: GitHub Pages (Also Free)
1. Create GitHub account at github.com
2. Create new repository named "viralroot"
3. Upload all files
4. Go to Settings → Pages → Enable
5. Live at: yourusername.github.io/viralroot

### Option 3: Cloudflare Pages (Free + Fast)
1. Go to pages.cloudflare.com
2. Connect GitHub repo or upload directly
3. Deploys globally on Cloudflare's CDN (very fast)

---

## FREE WORKFLOW TOOLS

### Content Research (Free)
- Google Trends → trends.google.com — See what's trending in real time
- TikTok Search → Search any phrase, sort by "Latest"
- Instagram Explore → Shows trending reels
- Twitter/X Trending → twitter.com/explore
- Reddit r/OutOfTheLoop — People ask "what is this meme" every day

### Writing Assistance (Free)
- Use me (Claude) — Describe the meme, I write the full origin story for you
- Just say: "Write a ViralRoot post about [meme name]"

### Email Newsletter (Free)
- Mailchimp — Free up to 500 subscribers
- Beehiiv — Free up to 2,500 subscribers (BEST for newsletters)
- Substack — Free forever

### SEO Tools (Free)
- Google Search Console — Submit your sitemap, track rankings
- Ubersuggest — Free keyword research
- Google Analytics — Track visitor traffic

### Social Media Scheduler (Free)
- Buffer — Free for 3 accounts
- Later — Free plan available

---

## DAILY WORKFLOW (30–60 mins/day)

### Morning (15 mins):
1. Check Google Trends → trending.google.com
2. Check TikTok Discover/Search for new trends
3. Check Twitter Trending topics
4. Note any meme you don't recognize

### If You Find a New Trend (30–45 mins):
1. Research: Who started it? When? Which account?
2. What is the audio called?
3. Why is it going viral?
4. Open data.js → add new meme using the template above
5. Save and re-upload to Netlify (drag and drop — takes 30 seconds)

### Weekly (1 hour):
1. Write a short newsletter about the week's top memes
2. Send to email subscribers via Mailchimp/Beehiiv
3. Post about new entries on your own Instagram/TikTok

---

## HOW TO MAKE MONEY (Timeline)

### Month 1–3: Build Content
- Goal: 50+ meme pages
- Focus: Post 1–2 new memes per day
- No monetization yet — build the database

### Month 3–6: First Money
- Apply for Google AdSense (need ~10 pages minimum, original content)
- Add AdSense code to index.html header (they give you the code)
- Expected: $20–$100/month at 5k–20k monthly visitors

### Month 6+: Scale Up
- Apply for Mediavine (requires 50k monthly sessions — higher pay rates)
- Add affiliate links (link to meme merchandise, Spotify songs, creator pages)
- Sponsored posts from brands wanting to reach Gen-Z audience

---

## SEO TIPS (How Google Finds You)

The page titles and descriptions are already optimized. But also:

1. **Target "what is [meme name]" searches** — these are high-volume
2. **Target "[sound] tiktok what is it called"** — huge search volume
3. **Post fast** — first mover advantage is massive for meme SEO
4. **Submit sitemap.xml to Google Search Console** — helps Google index your pages faster

Go to: search.google.com/search-console → Add property → Submit sitemap.xml URL

---

## YOUR MANUAL TASKS (What I Need You to Do)

1. **Create a free Netlify account** and upload the folder
2. **Research new memes daily** using the tools above
3. **Edit data.js** to add new memes (copy/paste the template)
4. **Re-upload to Netlify** after adding new memes (drag and drop)
5. **Create social media accounts** (TikTok + Instagram @viralroot) to promote

Everything else (the website, code, design, SEO structure) is already done.

---

## FUTURE FEATURES TO ADD (Tell Me When Ready)

- [ ] Dark/light mode toggle
- [ ] Comment system (Disqus — free)
- [ ] "Meme of the Day" homepage feature
- [ ] Separate pages per meme (better SEO — I can build this)
- [ ] Admin panel to add memes without editing code
- [ ] Google AdSense integration
- [ ] Social share buttons

---

*Built by Claude for ViralRoot. Last updated: 2024.*

// ===== VIRALROOT APP.JS =====

// ---- Navigation ----
function toggleMenu() {
  document.getElementById('mobileMenu')?.classList.toggle('open');
}
function handleSearch(event) {
  if (event.key === 'Enter') goSearch();
}
function goSearch() {
  const heroVal = document.getElementById('heroSearch')?.value;
  const navVal = document.getElementById('navSearch')?.value;
  const query = heroVal || navVal || '';
  if (query.trim()) window.location.href = `search.html?q=${encodeURIComponent(query.trim())}`;
}
function searchTag(tag) { window.location.href = `search.html?q=${encodeURIComponent(tag)}`; }
function filterByPlatform(platform) { window.location.href = `trending.html?platform=${platform}`; }

// ---- Badge helpers ----
function badgeClass(badge) {
  if (badge === 'hot') return 'badge-hot';
  if (badge === 'new') return 'badge-new';
  return 'badge-classic';
}
function badgeText(badge) {
  if (badge === 'hot') return 'HOT';
  if (badge === 'new') return 'NEW';
  return 'CLASSIC';
}

// ---- Platform chips ----
function platformChips(platforms) {
  return platforms.map(p =>
    `<span class="platform-chip" style="background:${PLATFORM_COLORS[p]||'#333'};color:#fff">${getPlatformSVG(p,11)} ${p}</span>`
  ).join('');
}

// ---- Meme card image ----
function cardImage(m) {
  if (m.image) {
    return `<div class="featured-card-img" style="background-image:url('${m.image}');background-size:cover;background-position:center"></div>`;
  }
  return `<div class="featured-card-img"><span style="font-size:5rem">${m.emoji}</span></div>`;
}

// ---- Newsletter ----
function subscribeNewsletter() {
  const email = document.getElementById('emailInput')?.value;
  const msg = document.getElementById('newsletterMsg');
  if (!email || !email.includes('@')) { if (msg) msg.textContent = 'Please enter a valid email.'; return; }
  const subs = JSON.parse(localStorage.getItem('vr_subscribers') || '[]');
  if (!subs.includes(email)) subs.push(email);
  localStorage.setItem('vr_subscribers', JSON.stringify(subs));
  if (msg) msg.textContent = 'Subscribed! You will get weekly meme breakdowns.';
  const inp = document.getElementById('emailInput');
  if (inp) inp.value = '';
}

// ---- Render Featured Grid ----
function renderFeatured() {
  const container = document.getElementById('featuredGrid');
  if (!container) return;
  container.innerHTML = getFeatured().map(m => `
    <a href="meme.html?id=${m.id}" class="featured-card">
      ${cardImage(m)}
      <div class="featured-card-body">
        <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.75rem">${platformChips(m.platforms)}</div>
        <h3>${m.name}</h3>
        <p>${m.summary.substring(0,120)}...</p>
        <div class="featured-card-meta"><span>${m.origin_date}</span><span>${m.views} views</span></div>
      </div>
    </a>`).join('');
}

// ---- Render Meme Grid ----
function renderMemeGrid() {
  const container = document.getElementById('memeGrid');
  if (!container) return;
  container.innerHTML = MEMES.map(m => `
    <a href="meme.html?id=${m.id}" class="meme-card">
      <div class="meme-card-top">
        <div class="meme-card-emoji">${m.image
          ? `<img src="${m.image}" style="width:52px;height:52px;object-fit:cover" onerror="this.style.display='none'" />`
          : m.emoji}</div>
        <span class="meme-card-badge ${badgeClass(m.badge)}">${badgeText(m.badge)}</span>
      </div>
      <h3>${m.name}</h3>
      <p>${m.summary.substring(0,100)}...</p>
      <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-top:0.75rem">${platformChips(m.platforms)}</div>
    </a>`).join('');
}

// ---- Render Sounds Grid (homepage) ----
function renderSoundsGrid() {
  const container = document.getElementById('soundsGrid');
  if (!container) return;
  container.innerHTML = SOUNDS.slice(0,6).map(s => `
    <a href="${s.meme_id ? 'meme.html?id='+s.meme_id : 'sounds.html'}" class="sound-card">
      <div class="sound-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green)"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
      </div>
      <div class="sound-info">
        <h4>${s.name}</h4>
        <p>${s.origin.substring(0,80)}...</p>
        <div class="sound-platform">${s.platform}</div>
        <a href="${s.audio_url}" target="_blank" onclick="event.stopPropagation()"
           style="display:inline-flex;align-items:center;gap:0.3rem;margin-top:0.5rem;font-family:var(--font-mono);font-size:0.65rem;color:var(--green);text-decoration:none;">
          ${getPlatformSVG(s.audio_type==='youtube'?'youtube':s.audio_type==='spotify'?'spotify':'tiktok',12)}
          ${s.audio_type==='youtube'?'Watch on YouTube':s.audio_type==='spotify'?'Listen on Spotify':'Find Sound'}
        </a>
      </div>
    </a>`).join('');
}

// ---- Render Platforms Section ----
function renderPlatforms() {
  const container = document.getElementById('platformsGrid');
  if (!container) return;
  const platforms = ['tiktok','instagram','youtube','twitter','reddit','facebook'];
  const names = {tiktok:'TikTok',instagram:'Instagram',youtube:'YouTube',twitter:'Twitter/X',reddit:'Reddit',facebook:'Facebook'};
  container.innerHTML = platforms.map(p => `
    <div class="platform-card ${p}" onclick="filterByPlatform('${p}')">
      <div style="color:${PLATFORM_COLORS[p]}">${getPlatformSVG(p,44)}</div>
      <span>${names[p]}</span>
    </div>`).join('');
}

// ---- Render Meme Detail ----
function renderMemeDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const container = document.getElementById('memeDetailContainer');
  if (!container) return;
  const meme = getMemeById(id);
  if (!meme) {
    container.innerHTML = `<div class="no-results"><h3>Meme Not Found</h3><p>We don't have this one yet. <a href="submit.html" style="color:var(--accent)">Submit it here!</a></p></div>`;
    return;
  }
  document.title = `${meme.name} — Origin & Explained | ViralRoot`;
  document.querySelector('meta[name="description"]')?.setAttribute('content',
    `Where did ${meme.name} come from? ${meme.summary}`);
  container.innerHTML = `
    <div class="meme-detail">
      <div class="detail-breadcrumb"><a href="index.html">Home</a> / <a href="trending.html">Trending</a> / ${meme.name}</div>
      <div class="meme-detail-header">
        <div class="detail-badges">
          <span class="detail-badge ${badgeClass(meme.badge)}" style="padding:0.3rem 0.8rem;font-family:var(--font-mono);font-size:0.72rem;font-weight:700;letter-spacing:1px">${badgeText(meme.badge)}</span>
          ${meme.platforms.map(p=>`<span class="platform-chip" style="background:${PLATFORM_COLORS[p]||'#333'};color:#fff">${getPlatformSVG(p,12)} ${p.toUpperCase()}</span>`).join('')}
        </div>
        <h1>${meme.name}</h1>
        <div class="meme-detail-meta">
          <div class="detail-meta-item">ORIGIN: <span>${meme.origin_date}</span></div>
          <div class="detail-meta-item">CREATOR: <span>${meme.origin_creator}</span></div>
          <div class="detail-meta-item">COUNTRY: <span>${meme.origin_country}</span></div>
          <div class="detail-meta-item">STATUS: <span>${meme.status}</span></div>
          <div class="detail-meta-item">VIEWS: <span>${meme.views}</span></div>
        </div>
      </div>

      ${meme.image
        ? `<img src="${meme.image}" class="meme-detail-image" alt="${meme.name}" onerror="this.outerHTML='<div class=meme-emoji-banner>${meme.emoji}</div>'" />`
        : `<div class="meme-emoji-banner">${meme.emoji}</div>`}

      <div class="origin-box">
        <h3>TL;DR — WHAT IS THIS?</h3>
        <p>${meme.summary}</p>
      </div>

      <div class="detail-section">
        <h2>THE ORIGIN STORY</h2>
        <p>${meme.full_origin}</p>
      </div>

      <div class="detail-section">
        <h2>WHY DID IT GO VIRAL?</h2>
        <p>${meme.why_viral}</p>
      </div>

      <div class="detail-section">
        <h2>WHAT IS THE AUDIO CALLED?</h2>
        ${getAudioPlayerHTML(meme)}
      </div>

      <div class="detail-section">
        <h2>VIRAL POSTS</h2>
        <div class="viral-posts-grid">
          ${meme.viral_posts.map(p=>`
            <div class="viral-post">
              <div class="post-account">${p.account} · ${p.platform}</div>
              <div>${p.description}</div>
              <div class="post-stats">${p.likes} likes</div>
            </div>`).join('')}
        </div>
      </div>

      <div class="detail-section">
        <h2>TAGS</h2>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.75rem">
          ${meme.tags.map(t=>`<span class="meme-tag" style="cursor:pointer" onclick="window.location='search.html?q=${t}'">#${t}</span>`).join('')}
        </div>
      </div>

      <div style="margin-top:3rem;padding-top:2rem;border-top:1px solid var(--border)">
        <h2 style="font-family:var(--font-display);font-size:2rem;letter-spacing:2px;margin-bottom:1.5rem">MORE TRENDING</h2>
        <div class="meme-grid" id="relatedMemes"></div>
      </div>
    </div>`;

  const rel = MEMES.filter(m=>m.id!==meme.id).slice(0,4);
  const relContainer = document.getElementById('relatedMemes');
  if (relContainer) {
    relContainer.innerHTML = rel.map(m=>`
      <a href="meme.html?id=${m.id}" class="meme-card">
        <div class="meme-card-top">
          <div class="meme-card-emoji">${m.image?`<img src="${m.image}" style="width:52px;height:52px;object-fit:cover" onerror="this.style.display='none'"/>`:m.emoji}</div>
          <span class="meme-card-badge ${badgeClass(m.badge)}">${badgeText(m.badge)}</span>
        </div>
        <h3>${m.name}</h3>
        <p>${m.summary.substring(0,90)}...</p>
      </a>`).join('');
  }
}

// ---- Render Search Results ----
function renderSearchResults() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get('q') || '';
  const input = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('searchResults');
  const subtitle = document.getElementById('searchSubtitle');
  if (!resultsContainer) return;
  if (input) input.value = query;
  const results = searchMemes(query);
  if (subtitle) subtitle.textContent = `${results.length} result${results.length!==1?'s':''} for "${query}"`;
  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="no-results">
        <h3>Nothing found for "${query}"</h3>
        <p>This trend might not be in our database yet.</p>
        <a href="submit.html" style="display:inline-block;margin-top:1rem;background:var(--accent);color:white;padding:0.75rem 2rem;text-decoration:none;font-family:var(--font-mono);font-size:0.85rem">SUBMIT THIS MEME</a>
      </div>`;
    return;
  }
  resultsContainer.innerHTML = results.map(m=>`
    <a href="meme.html?id=${m.id}" class="search-result-item">
      <div class="search-result-emoji">${m.image?`<img src="${m.image}" style="width:64px;height:64px;object-fit:cover" onerror="this.outerHTML='${m.emoji}'" />`:m.emoji}</div>
      <div class="search-result-body">
        <h3>${m.name}</h3>
        <p>${m.summary}</p>
        <div class="search-result-meta">${m.origin_date} · ${m.origin_creator}</div>
      </div>
    </a>`).join('');
}

// ---- Render Trending Page ----
function renderTrendingPage() {
  const container = document.getElementById('trendingGrid');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const platform = params.get('platform') || 'all';
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === platform);
  });
  let memes = platform==='all' ? MEMES : MEMES.filter(m=>m.platforms.includes(platform));
  container.innerHTML = memes.map(m=>`
    <a href="meme.html?id=${m.id}" class="meme-card">
      <div class="meme-card-top">
        <div class="meme-card-emoji">${m.image?`<img src="${m.image}" style="width:52px;height:52px;object-fit:cover" onerror="this.style.display='none'"/>`:m.emoji}</div>
        <span class="meme-card-badge ${badgeClass(m.badge)}">${badgeText(m.badge)}</span>
      </div>
      <h3>${m.name}</h3>
      <p>${m.summary.substring(0,100)}...</p>
      <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-top:0.75rem">${platformChips(m.platforms)}</div>
    </a>`).join('');
}

// ---- Render Sounds Page ----
function renderSoundsPage() {
  const container = document.getElementById('soundsBigGrid');
  if (!container) return;
  container.innerHTML = SOUNDS.map(s=>`
    <a href="${s.meme_id?'meme.html?id='+s.meme_id:'#'}" class="sound-detail-card">
      <div class="sound-header">
        <div style="width:48px;height:48px;background:rgba(0,255,135,0.1);border:1px solid var(--green);display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green)"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
        </div>
        <div style="flex:1">
          <div style="font-family:var(--font-display);font-size:1.2rem;letter-spacing:1px">${s.name}</div>
          <div style="font-size:0.78rem;color:var(--text)">${s.artist}</div>
        </div>
        <a href="${s.audio_url}" target="_blank" onclick="event.stopPropagation()"
           style="background:${s.audio_type==='youtube'?'#FF0000':s.audio_type==='spotify'?'#1DB954':'var(--accent)'};color:#fff;padding:0.4rem 0.8rem;font-family:var(--font-mono);font-size:0.65rem;text-decoration:none;display:flex;align-items:center;gap:0.3rem;white-space:nowrap">
          ${getPlatformSVG(s.audio_type==='youtube'?'youtube':'tiktok',14)}
          ${s.audio_type==='youtube'?'YouTube':s.audio_type==='spotify'?'Spotify':'Find'}
        </a>
      </div>
      <div style="color:var(--text);font-size:0.85rem;line-height:1.6;margin:0.75rem 0">${s.origin}</div>
      <div style="font-family:var(--font-mono);font-size:0.7rem;color:var(--muted)">${s.platform} · ${s.year}</div>
    </a>`).join('');
}

// ---- Submit Form ----
function handleSubmit() {
  const name = document.getElementById('memeName')?.value;
  const platform = document.getElementById('memePlatform')?.value;
  const origin = document.getElementById('memeOrigin')?.value;
  if (!name||!platform||!origin) { alert('Please fill in name, platform, and origin.'); return; }
  const subs = JSON.parse(localStorage.getItem('vr_submissions')||'[]');
  subs.push({name,platform,origin,date:new Date().toISOString()});
  localStorage.setItem('vr_submissions',JSON.stringify(subs));
  const sf = document.getElementById('submitForm');
  const ss = document.getElementById('submitSuccess');
  if (sf) sf.style.display='none';
  if (ss) ss.style.display='block';
}

function searchFromBar() {
  const query = document.getElementById('searchInput')?.value;
  if (query?.trim()) window.location.href = `search.html?q=${encodeURIComponent(query.trim())}`;
}

// ---- Dark/Light Mode ----
function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById('themeBtn');
  if (body.classList.contains('dark-mode')) {
    body.classList.replace('dark-mode','light-mode');
    if (btn) btn.textContent='☀️';
    localStorage.setItem('vr_theme','light');
  } else {
    body.classList.replace('light-mode','dark-mode');
    if (btn) btn.textContent='🌙';
    localStorage.setItem('vr_theme','dark');
  }
}
function applyTheme() {
  const saved = localStorage.getItem('vr_theme')||'dark';
  const btn = document.getElementById('themeBtn');
  if (saved==='light') {
    document.body.classList.replace('dark-mode','light-mode');
    if (btn) btn.textContent='☀️';
  } else {
    document.body.classList.add('dark-mode');
    if (btn) btn.textContent='🌙';
  }
}

// ---- Meme of the Day ----
function renderMemeOfDay() {
  const container = document.getElementById('memeOfDay');
  if (!container) return;
  const day = Math.floor((Date.now()-new Date(new Date().getFullYear(),0,0))/86400000);
  const meme = MEMES[day%MEMES.length];
  container.innerHTML = `
    <div class="motd-emoji">${meme.image?`<img src="${meme.image}" style="width:100px;height:100px;object-fit:cover" onerror="this.outerHTML='${meme.emoji}'" />`:meme.emoji}</div>
    <div class="motd-content">
      <h2>${meme.name}</h2>
      <p>${meme.summary.substring(0,160)}...</p>
      <a href="meme.html?id=${meme.id}" class="motd-btn">READ FULL ORIGIN</a>
      <div class="motd-meta">${meme.origin_date} · ${meme.origin_creator} · ${meme.views} views</div>
    </div>`;
}

// ---- Social Share ----
function shareTwitter() {
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(document.title+' — ViralRoot')}&url=${encodeURIComponent(window.location.href)}`,'_blank');
}
function shareWhatsapp() {
  window.open(`https://wa.me/?text=${encodeURIComponent(document.title+' '+window.location.href)}`,'_blank');
}
function shareReddit() {
  window.open(`https://reddit.com/submit?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(document.title)}`,'_blank');
}
function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(()=>{
    const btn=document.getElementById('copyBtn');
    if (btn){btn.textContent='✅';setTimeout(()=>btn.textContent='🔗',2000);}
  });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  renderFeatured();
  renderMemeGrid();
  renderSoundsGrid();
  renderPlatforms();
  renderMemeOfDay();
  renderMemeDetail();
  renderSearchResults();
  renderTrendingPage();
  renderSoundsPage();
});

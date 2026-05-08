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
  if (query.trim()) {
    window.location.href = `search.html?q=${encodeURIComponent(query.trim())}`;
  }
}

function searchTag(tag) {
  window.location.href = `search.html?q=${encodeURIComponent(tag)}`;
}

function filterByPlatform(platform) {
  window.location.href = `trending.html?platform=${platform}`;
}

// ---- Newsletter ----
function subscribeNewsletter() {
  const email = document.getElementById('emailInput')?.value;
  const msg = document.getElementById('newsletterMsg');
  if (!email || !email.includes('@')) {
    if (msg) msg.textContent = '⚠️ Please enter a valid email.';
    return;
  }
  // Store in localStorage as simulation (replace with real email service)
  const subs = JSON.parse(localStorage.getItem('vr_subscribers') || '[]');
  if (!subs.includes(email)) subs.push(email);
  localStorage.setItem('vr_subscribers', JSON.stringify(subs));
  if (msg) msg.textContent = '✅ Subscribed! You\'ll get weekly meme breakdowns.';
  document.getElementById('emailInput').value = '';
}

// ---- Badge Color ----
function badgeClass(badge) {
  if (badge === 'hot') return 'badge-hot';
  if (badge === 'new') return 'badge-new';
  return 'badge-classic';
}
function badgeText(badge) {
  if (badge === 'hot') return '🔥 HOT';
  if (badge === 'new') return '✨ NEW';
  return '⭐ CLASSIC';
}

// ---- Render Featured Grid (index.html) ----
function renderFeatured() {
  const container = document.getElementById('featuredGrid');
  if (!container) return;
  const featured = getFeatured();
  container.innerHTML = featured.map(m => `
    <a href="meme.html?id=${m.id}" class="featured-card">
      <div class="featured-card-img">${m.emoji}</div>
      <div class="featured-card-body">
        <div class="featured-card-platform">${m.platforms.join(' · ').toUpperCase()}</div>
        <h3>${m.name}</h3>
        <p>${m.summary.substring(0, 120)}...</p>
        <div class="featured-card-meta">
          <span>📅 ${m.origin_date}</span>
          <span>${m.views} views</span>
        </div>
      </div>
    </a>
  `).join('');
}

// ---- Render Meme Grid (index.html) ----
function renderMemeGrid() {
  const container = document.getElementById('memeGrid');
  if (!container) return;
  container.innerHTML = MEMES.map(m => `
    <a href="meme.html?id=${m.id}" class="meme-card">
      <div class="meme-card-top">
        <div class="meme-card-emoji">${m.emoji}</div>
        <span class="meme-card-badge ${badgeClass(m.badge)}">${badgeText(m.badge)}</span>
      </div>
      <h3>${m.name}</h3>
      <p>${m.summary.substring(0, 100)}...</p>
      <div class="meme-card-footer">
        ${m.tags.slice(0,3).map(t => `<span class="meme-tag">#${t}</span>`).join('')}
      </div>
    </a>
  `).join('');
}

// ---- Render Sounds Grid (index.html) ----
function renderSoundsGrid() {
  const container = document.getElementById('soundsGrid');
  if (!container) return;
  container.innerHTML = SOUNDS.slice(0, 6).map(s => `
    <a href="${s.meme_id ? 'meme.html?id=' + s.meme_id : 'sounds.html'}" class="sound-card">
      <div class="sound-icon">${s.emoji}</div>
      <div class="sound-info">
        <h4>${s.name}</h4>
        <p>${s.origin.substring(0, 80)}...</p>
        <div class="sound-platform">${s.platform}</div>
      </div>
    </a>
  `).join('');
}

// ---- Render Meme Detail (meme.html) ----
function renderMemeDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const container = document.getElementById('memeDetailContainer');
  if (!container) return;

  const meme = getMemeById(id);
  if (!meme) {
    container.innerHTML = `
      <div class="no-results">
        <h3>Meme Not Found 😢</h3>
        <p>We don't have this one yet. <a href="submit.html" style="color:var(--accent)">Submit it here!</a></p>
      </div>`;
    return;
  }

  document.title = `${meme.name} Origin & Explained — ViralRoot`;
  document.querySelector('meta[name="description"]')?.setAttribute('content',
    `Where did ${meme.name} come from? ${meme.summary} Full origin story, audio name, and why it went viral.`
  );

  container.innerHTML = `
    <div class="meme-detail">
      <div class="detail-breadcrumb">
        <a href="index.html">Home</a> / <a href="trending.html">Trending</a> / ${meme.name}
      </div>
      <div class="meme-detail-header">
        <div class="detail-badges">
          <span class="detail-badge ${badgeClass(meme.badge)}">${badgeText(meme.badge)}</span>
          ${meme.platforms.map(p => `<span class="detail-badge" style="background:var(--dark2);border:1px solid var(--border);color:var(--text)">${p.toUpperCase()}</span>`).join('')}
        </div>
        <h1>${meme.name}</h1>
        <div class="meme-detail-meta">
          <div class="detail-meta-item">ORIGIN: <span>${meme.origin_date}</span></div>
          <div class="detail-meta-item">CREATOR: <span>${meme.origin_creator}</span></div>
          <div class="detail-meta-item">COUNTRY: <span>${meme.origin_country}</span></div>
          <div class="detail-meta-item">STATUS: <span>${meme.status}</span></div>
          <div class="detail-meta-item">TOTAL VIEWS: <span>${meme.views}</span></div>
        </div>
      </div>

      <div class="detail-hero-emoji">${meme.emoji}</div>

      <div class="origin-box">
        <h3>📍 TL;DR — WHAT IS THIS MEME?</h3>
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
        <h2>🎵 WHAT IS THE AUDIO/SOUND CALLED?</h2>
        <div class="audio-box">
          <div class="audio-play-btn">🎵</div>
          <div class="audio-info">
            <h4>${meme.audio_name}</h4>
            <div class="audio-artist">By ${meme.audio_artist}</div>
            <p>${meme.audio_original}</p>
          </div>
        </div>
      </div>

      <div class="detail-section">
        <h2>📱 VIRAL POSTS</h2>
        <p>These are some of the most-shared posts from this trend:</p>
        <div class="viral-posts-grid">
          ${meme.viral_posts.map(p => `
            <div class="viral-post">
              <div class="post-account">${p.account} · ${p.platform}</div>
              <div>${p.description}</div>
              <div class="post-stats">❤️ ${p.likes} likes</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="detail-section">
        <h2>🏷️ RELATED TAGS</h2>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.75rem">
          ${meme.tags.map(t => `<span class="meme-tag" style="cursor:pointer" onclick="window.location='search.html?q=${t}'">#${t}</span>`).join('')}
        </div>
      </div>

      <div style="margin-top:3rem;padding-top:2rem;border-top:1px solid var(--border)">
        <h2 style="font-family:var(--font-display);font-size:1.8rem;letter-spacing:2px;margin-bottom:1.5rem">MORE TRENDING MEMES</h2>
        <div class="meme-grid" id="relatedMemes"></div>
      </div>
    </div>
  `;

  // Related memes
  const related = MEMES.filter(m => m.id !== meme.id).slice(0, 4);
  const relatedContainer = document.getElementById('relatedMemes');
  if (relatedContainer) {
    relatedContainer.innerHTML = related.map(m => `
      <a href="meme.html?id=${m.id}" class="meme-card">
        <div class="meme-card-top">
          <div class="meme-card-emoji">${m.emoji}</div>
          <span class="meme-card-badge ${badgeClass(m.badge)}">${badgeText(m.badge)}</span>
        </div>
        <h3>${m.name}</h3>
        <p>${m.summary.substring(0, 90)}...</p>
      </a>
    `).join('');
  }
}

// ---- Render Search Results (search.html) ----
function renderSearchResults() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get('q') || '';
  const input = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('searchResults');
  const subtitle = document.getElementById('searchSubtitle');
  if (!resultsContainer) return;

  if (input) input.value = query;

  const results = searchMemes(query);
  if (subtitle) subtitle.textContent = `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`;

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="no-results">
        <h3>Nothing found for "${query}" 🤔</h3>
        <p>This trend might not be in our database yet.</p>
        <a href="submit.html" style="display:inline-block;margin-top:1rem;background:var(--accent);color:white;padding:0.75rem 2rem;text-decoration:none;font-family:var(--font-mono);font-size:0.85rem;letter-spacing:1px">SUBMIT THIS MEME →</a>
      </div>`;
    return;
  }

  resultsContainer.innerHTML = results.map(m => `
    <a href="meme.html?id=${m.id}" class="search-result-item">
      <div class="search-result-emoji">${m.emoji}</div>
      <div class="search-result-body">
        <h3>${m.name}</h3>
        <p>${m.summary}</p>
        <div class="search-result-meta">
          ${m.platforms.join(' · ').toUpperCase()} · ${m.origin_date} · ${m.origin_creator}
        </div>
      </div>
    </a>
  `).join('');
}

// ---- Render Trending Page ----
function renderTrendingPage() {
  const container = document.getElementById('trendingGrid');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const platform = params.get('platform') || 'all';

  let memes = MEMES;
  if (platform !== 'all') {
    memes = MEMES.filter(m => m.platforms.includes(platform));
  }

  // Update active filter button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === platform) btn.classList.add('active');
  });

  container.innerHTML = memes.map(m => `
    <a href="meme.html?id=${m.id}" class="meme-card">
      <div class="meme-card-top">
        <div class="meme-card-emoji">${m.emoji}</div>
        <span class="meme-card-badge ${badgeClass(m.badge)}">${badgeText(m.badge)}</span>
      </div>
      <h3>${m.name}</h3>
      <p>${m.summary.substring(0, 100)}...</p>
      <div class="meme-card-footer">
        ${m.tags.slice(0,3).map(t => `<span class="meme-tag">#${t}</span>`).join('')}
      </div>
    </a>
  `).join('');
}

// ---- Render Sounds Page ----
function renderSoundsPage() {
  const container = document.getElementById('soundsBigGrid');
  if (!container) return;
  container.innerHTML = SOUNDS.map(s => `
    <a href="${s.meme_id ? 'meme.html?id=' + s.meme_id : '#'}" class="sound-detail-card">
      <div class="sound-header">
        <span style="font-size:2.5rem">${s.emoji}</span>
        <div class="sound-wave">
          <span style="height:8px"></span><span style="height:18px"></span>
          <span style="height:28px"></span><span style="height:14px"></span>
          <span style="height:22px"></span>
        </div>
        <div style="flex:1">
          <div style="font-family:var(--font-display);font-size:1.3rem;letter-spacing:1px">${s.name}</div>
          <div style="font-family:var(--font-mono);font-size:0.7rem;color:var(--green)">${s.platform}</div>
        </div>
      </div>
      <div style="color:var(--text);font-size:0.85rem;line-height:1.6;margin-bottom:0.75rem">${s.origin}</div>
      <div style="font-family:var(--font-mono);font-size:0.75rem;color:var(--muted)">Artist: ${s.artist} · ${s.year}</div>
    </a>
  `).join('');
}

// ---- Submit Form ----
function handleSubmit() {
  const name = document.getElementById('memeName')?.value;
  const platform = document.getElementById('memePlatform')?.value;
  const origin = document.getElementById('memeOrigin')?.value;
  const why = document.getElementById('memeWhy')?.value;
  const audio = document.getElementById('memeAudio')?.value;

  if (!name || !platform || !origin) {
    alert('Please fill in at least the meme name, platform, and origin.');
    return;
  }

  // Save to localStorage (in production, this goes to a backend/Google Form)
  const submissions = JSON.parse(localStorage.getItem('vr_submissions') || '[]');
  submissions.push({ name, platform, origin, why, audio, date: new Date().toISOString() });
  localStorage.setItem('vr_submissions', JSON.stringify(submissions));

  document.getElementById('submitSuccess').style.display = 'block';
  document.getElementById('submitForm').style.display = 'none';
}

function searchFromBar() {
  const query = document.getElementById('searchInput')?.value;
  if (query?.trim()) {
    window.location.href = `search.html?q=${encodeURIComponent(query.trim())}`;
  }
}

// ---- Page Init ----
document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderMemeGrid();
  renderSoundsGrid();
  renderMemeDetail();
  renderSearchResults();
  renderTrendingPage();
  renderSoundsPage();
});

// ===== DARK / LIGHT MODE =====
function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById('themeBtn');
  if (body.classList.contains('dark-mode')) {
    body.classList.replace('dark-mode', 'light-mode');
    if (btn) btn.textContent = '☀️';
    localStorage.setItem('vr_theme', 'light');
  } else {
    body.classList.replace('light-mode', 'dark-mode');
    if (btn) btn.textContent = '🌙';
    localStorage.setItem('vr_theme', 'dark');
  }
}

function applyTheme() {
  const saved = localStorage.getItem('vr_theme') || 'dark';
  const btn = document.getElementById('themeBtn');
  if (saved === 'light') {
    document.body.classList.replace('dark-mode', 'light-mode');
    if (btn) btn.textContent = '☀️';
  } else {
    document.body.classList.add('dark-mode');
    if (btn) btn.textContent = '🌙';
  }
}

// ===== MEME OF THE DAY =====
function renderMemeOfDay() {
  const container = document.getElementById('memeOfDay');
  if (!container) return;
  // Pick a deterministic meme based on day of year
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const meme = MEMES[dayOfYear % MEMES.length];
  container.innerHTML = `
    <div class="motd-emoji">${meme.emoji}</div>
    <div class="motd-content">
      <h2>${meme.name}</h2>
      <p>${meme.summary.substring(0, 160)}...</p>
      <a href="meme.html?id=${meme.id}" class="motd-btn">READ FULL ORIGIN →</a>
      <div class="motd-meta">📅 ${meme.origin_date} · ${meme.origin_creator} · ${meme.views} total views</div>
    </div>
  `;
}

// ===== SOCIAL SHARE =====
function shareTwitter() {
  const title = document.title;
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title + ' — via ViralRoot')}&url=${url}`, '_blank');
}

function shareWhatsapp() {
  const title = document.title;
  const url = encodeURIComponent(window.location.href);
  window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + window.location.href)}`, '_blank');
}

function shareReddit() {
  const title = encodeURIComponent(document.title);
  const url = encodeURIComponent(window.location.href);
  window.open(`https://reddit.com/submit?url=${url}&title=${title}`, '_blank');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const btn = document.getElementById('copyBtn');
    if (btn) {
      btn.textContent = '✅';
      setTimeout(() => btn.textContent = '🔗', 2000);
    }
  });
}

// ===== RE-INIT on page load with theme =====
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  renderMemeOfDay();
  // Apply theme toggle to all pages
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    const saved = localStorage.getItem('vr_theme') || 'dark';
    btn.textContent = saved === 'light' ? '☀️' : '🌙';
  });
});

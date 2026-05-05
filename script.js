
const APP = {
  channelName: 'Jackson Maju',
  primaryRed:  '#cc0000',
  chartBlue:   '#065fd4',
};

// --- Analytics tab data ---
const tabData = {
  overview: {
    stats: [
      { label: 'Watch time (minutes)', val: '207.3K', delta: '↑ 27%', up: true },
      { label: 'Views',                val: '86.9K',  delta: '↑ 22%', up: true },
      { label: 'Subscribers',          val: '+976',   delta: '↑ 41%', up: true },
    ],
    chartData: [
      [6200,9100,7400,10200,5800,8100,7600,9800,8400,11000,7200,9500,6800,8900,10100,7700,9300,8600,10800,7100,9600,8200,11200,7400,8800,10500,9100,8400],
      [3100,5200,4300,6100,3400,5600,4800,6400,5100,7200,4600,5900,4200,5700,6800,5300,6100,5600,7100,4800,6300,5400,7500,4900,5800,6900,6100,5500],
      [1200,2100,1600,2800,1900,3200,2400,3600,2100,4000,2700,3300,2000,3100,3700,2800,3500,3000,4100,2500,3400,2900,4400,2700,3300,3800,3500,3100],
    ],
    videos: [
      { title: 'Build an Evergreen Traffic Machine Using This Play…', views: 34400 },
      { title: 'Start and grow your agency the right way',            views: 17100 },
      { title: 'Get More Clients For Your Agency Today',             views: 13600 },
      { title: 'How to Write Cold Emails That Always Get Read',      views:  9300 },
      { title: 'Kong Pham Shares His Secrets to Master the Art of…', views:  6700 },
    ],
    labels: ['Jan 2','Jan 5','Jan 8','Jan 11','Jan 14','Jan 17','Jan 20','Jan 23','Jan 26','Jan 29','Feb 1','Feb 4','Feb 7','Feb 10','Feb 13','Feb 16','Feb 19','Feb 22','Feb 25','Feb 28','Mar 2','Mar 5','Mar 8','Mar 11','Mar 14','Mar 17','Mar 20','Mar 23'],
    topMeta: 'Watch time (minutes) · Last 28 days',
  },
  reach: {
    stats: [
      { label: 'Impressions',     val: '412.1K', delta: '↑ 18%',  up: true },
      { label: 'Impressions CTR', val: '4.2%',   delta: '↑ 0.3%', up: true },
      { label: 'Unique viewers',  val: '54.3K',  delta: '↑ 15%',  up: true },
    ],
    chartData: [[4200,5800,4900,6500,3900,5200,4700,6100,5400,7300,5000,6200,4600,5900,6700,5600,6400,5900,7200,5100,6600,5700,7800,5200,6100,7200,6400,5800]],
    videos: [
      { title: 'Build an Evergreen Traffic Machine',  views: 89200 },
      { title: 'YouTube SEO Masterclass',             views: 67400 },
      { title: 'Grow Agency Fast',                    views: 45300 },
      { title: 'Client Acquisition Secrets',          views: 32100 },
      { title: 'Cold Email Templates 2019',           views: 21800 },
    ],
    labels: ['Jan 2','Jan 5','Jan 8','Jan 11','Jan 14','Jan 17','Jan 20','Jan 23','Jan 26','Jan 29','Feb 1','Feb 4','Feb 7','Feb 10','Feb 13','Feb 16','Feb 19','Feb 22','Feb 25','Feb 28','Mar 2','Mar 5','Mar 8','Mar 11','Mar 14','Mar 17','Mar 20','Mar 23'],
    topMeta: 'Impressions · Last 28 days',
  },
  interest: {
    stats: [
      { label: 'Avg view duration', val: '4:12',  delta: '↑ 8%',   up: true  },
      { label: 'Avg % viewed',      val: '54.3%', delta: '↑ 3%',   up: true  },
      { label: 'Card CTR',          val: '2.1%',  delta: '↓ 0.5%', up: false },
    ],
    chartData: [[2800,3900,3300,4500,2700,3600,3200,4300,3700,5100,3500,4100,3000,4000,4800,3900,4400,4100,5000,3400,4500,3800,5400,3500,4100,4900,4400,4000]],
    videos: [
      { title: 'How to Hook Viewers in 10 Seconds',     views: 28400 },
      { title: 'Build Traffic Machine',                  views: 21600 },
      { title: 'Agency Growth Masterclass',              views: 17900 },
      { title: 'Best Video Structure for YouTube',      views: 13200 },
      { title: 'Storytelling for Creators',             views:  9800 },
    ],
    labels: ['Jan 2','Jan 5','Jan 8','Jan 11','Jan 14','Jan 17','Jan 20','Jan 23','Jan 26','Jan 29','Feb 1','Feb 4','Feb 7','Feb 10','Feb 13','Feb 16','Feb 19','Feb 22','Feb 25','Feb 28','Mar 2','Mar 5','Mar 8','Mar 11','Mar 14','Mar 17','Mar 20','Mar 23'],
    topMeta: 'Avg view duration · Last 28 days',
  },
  audience: {
    stats: [
      { label: 'Unique viewers',    val: '54.3K', delta: '↑ 15%', up: true },
      { label: 'Subscribers',       val: '+976',  delta: '↑ 41%', up: true },
      { label: 'Returning viewers', val: '68%',   delta: '↑ 5%',  up: true },
    ],
    chartData: [[1800,2700,2200,3100,1700,2400,2100,2900,2500,3500,2300,2800,2000,2700,3200,2600,3000,2700,3400,2200,3000,2500,3700,2200,2800,3300,2900,2700]],
    videos: [
      { title: 'How to Get 1000 Subscribers Fast', views: 41200 },
      { title: 'Build Traffic Machine',            views: 29700 },
      { title: 'Grow Agency Fast',                 views: 18600 },
      { title: 'Cold Email Mastery',               views: 12400 },
      { title: 'YouTube Algorithm 2019',           views:  7800 },
    ],
    labels: ['Jan 2','Jan 5','Jan 8','Jan 11','Jan 14','Jan 17','Jan 20','Jan 23','Jan 26','Jan 29','Feb 1','Feb 4','Feb 7','Feb 10','Feb 13','Feb 16','Feb 19','Feb 22','Feb 25','Feb 28','Mar 2','Mar 5','Mar 8','Mar 11','Mar 14','Mar 17','Mar 20','Mar 23'],
    topMeta: 'Unique viewers · Last 28 days',
  },
  revenue: {
    stats: [
      { label: 'Estimated revenue', val: '$1,240', delta: '↑ 34%', up: true },
      { label: 'RPM',               val: '$4.52',  delta: '↑ 12%', up: true },
      { label: 'CPM',               val: '$8.91',  delta: '↑ 8%',  up: true },
    ],
    chartData: [[48,72,58,89,42,65,57,83,68,95,61,77,53,71,88,73,82,76,92,60,80,69,97,63,75,90,81,76]],
    videos: [
      { title: 'Build Traffic Machine',      views: 34400 },
      { title: 'Agency Growth Course',       views: 17100 },
      { title: 'Cold Email Masterclass',     views: 13600 },
      { title: 'Get Clients Today',          views:  9300 },
      { title: 'YouTube Monetization Guide', views:  6700 },
    ],
    labels: ['Jan 2','Jan 5','Jan 8','Jan 11','Jan 14','Jan 17','Jan 20','Jan 23','Jan 26','Jan 29','Feb 1','Feb 4','Feb 7','Feb 10','Feb 13','Feb 16','Feb 19','Feb 22','Feb 25','Feb 28','Mar 2','Mar 5','Mar 8','Mar 11','Mar 14','Mar 17','Mar 20','Mar 23'],
    topMeta: 'Estimated revenue · Last 28 days',
  },
};

const statSeries = [
  { label: 'Watch time', color: '#065fd4' },
  { label: 'Views',      color: '#1e8e3e' },
  { label: 'Subscribers', color: '#e37400' },
];

const dateLabels = {
  '7':  'Jan 23 – 29, 2019',
  '28': 'Jan 2 – 29, 2019',
  '90': 'Nov 1, 2018 – Jan 29, 2019',
};

const contentVideos = [
  { title: 'Build an Evergreen Traffic Machine Using This Play…', date: 'Jan 29, 2019', visibility: 'Public',    views: '34.4K', comments: 182 },
  { title: 'Start and grow your agency the right way',            date: 'Jan 15, 2019', visibility: 'Public',    views: '17.1K', comments:  94 },
  { title: 'Get More Clients For Your Agency Today',             date: 'Jan 7, 2019',  visibility: 'Public',    views: '13.6K', comments:  61 },
  { title: 'How to Write Cold Emails That Always Get Read',      date: 'Dec 21, 2018', visibility: 'Public',    views: '9.3K',  comments:  47 },
  { title: 'Kong Pham Shares His Secrets to Master the Art…',   date: 'Dec 14, 2018', visibility: 'Unlisted',  views: '6.7K',  comments:  29 },
  { title: 'YouTube SEO Masterclass for 2019',                   date: 'Dec 5, 2018',  visibility: 'Public',    views: '5.1K',  comments:  18 },
  { title: 'Agency Growth Masterclass – Full Course',            date: 'Nov 28, 2018', visibility: 'Private',   views: '3.8K',  comments:   7 },
];

const commentsData = [
  { author: 'Alex Rivera',    avatar: '#4285f4', time: '2 days ago',  text: 'This is exactly what I needed! The evergreen traffic strategy is gold. Thanks for sharing Jackson!', video: 'Build an Evergreen Traffic Machine…' },
  { author: 'Maria Santos',  avatar: '#0f9d58', time: '3 days ago',  text: 'Wow, I\'ve been struggling with agency growth and this video answered all my questions. Subscribed!',   video: 'Start and grow your agency the right way' },
  { author: 'Tom Hale',      avatar: '#f4b400', time: '4 days ago',  text: 'The cold email templates alone are worth 10x the price of any course. Incredible value!',               video: 'How to Write Cold Emails That Always Get Read' },
  { author: 'Priya Nair',    avatar: '#db4437', time: '5 days ago',  text: 'Can you do a follow-up on the automation part? I want to understand the tools you\'re using.',          video: 'Build an Evergreen Traffic Machine…' },
  { author: 'Dan Wilder',    avatar: '#9c27b0', time: '6 days ago',  text: 'Best YouTube channel for agency owners. Period. Keep them coming!',                                      video: 'Get More Clients For Your Agency Today' },
  { author: 'Lin Xiao',      avatar: '#00bcd4', time: '1 week ago',  text: 'Watched this 3 times already. Every re-watch I catch something new. Great depth here.',                  video: 'YouTube SEO Masterclass for 2019' },
  { author: 'Carlos Mendez', avatar: '#ff5722', time: '1 week ago',  text: 'Jackson this is fire! Can you talk more about pricing strategies for small agencies next?',              video: 'Start and grow your agency the right way' },
];



const Templates = {

  /** Reusable stat card HTML */
  statCard(s, idx, isActive) {
    return `
      <div class="stat-card${isActive ? ' active' : ''}" data-stat-idx="${idx}">
        <div class="stat-label">${s.label}</div>
        <div class="stat-value">${s.val}</div>
        <div class="stat-delta ${s.up !== false ? 'up' : 'down'}">${s.delta}</div>
      </div>`;
  },

  /** Reusable video row HTML */
  videoRow(v, pct) {
    return `
      <div class="video-row">
        <div class="video-info">
          <div class="video-title">${v.title}</div>
          <div class="video-views">${fmt(v.views)}</div>
        </div>
        <div class="video-bar-wrap">
          <div class="video-bar-bg">
            <div class="video-bar-fill" style="width:${pct}%"></div>
          </div>
        </div>
      </div>`;
  },

  /** Dashboard page */
  dashboard() {
    return `
      <div class="section-header">
        <div class="page-title-inline">Channel Dashboard</div>
        <div class="updated-label">Updated May 5, 2026, 12:00 AM</div>
      </div>

      <div class="dash-grid">
        <!-- Recent performance -->
        <div class="panel dash-perf">
          <div class="panel-header">
            <div>
              <div class="panel-title">Your channel's current performance</div>
              <div class="panel-meta">Views · Last 28 days</div>
            </div>
            <span class="btn-text-link">See all</span>
          </div>
          <div class="dash-stats-row">
            <div class="dash-stat">
              <div class="stat-label">Views</div>
              <div class="stat-value" style="font-size:20px">86.9K</div>
              <div class="stat-delta up">↑ 22% vs prev period</div>
            </div>
            <div class="dash-stat">
              <div class="stat-label">Watch time (hrs)</div>
              <div class="stat-value" style="font-size:20px">3.5K</div>
              <div class="stat-delta up">↑ 27% vs prev period</div>
            </div>
            <div class="dash-stat">
              <div class="stat-label">Subscribers</div>
              <div class="stat-value" style="font-size:20px">+976</div>
              <div class="stat-delta up">↑ 41% vs prev period</div>
            </div>
          </div>
          <div class="dash-mini-chart">
            <canvas id="dashMiniChart" height="80"></canvas>
          </div>
        </div>

        <!-- News for creators -->
        <div class="panel dash-news">
          <div class="panel-header">
            <div class="panel-title">News for creators</div>
          </div>
          <div class="news-list">
            <div class="news-item">
              <div class="news-dot" style="background:#cc0000"></div>
              <div>
                <div class="news-headline">YouTube adds new monetization thresholds for 2026</div>
                <div class="news-meta">YouTube Blog · 2 days ago</div>
              </div>
            </div>
            <div class="news-item">
              <div class="news-dot" style="background:#065fd4"></div>
              <div>
                <div class="news-headline">Community posts now available for all channels</div>
                <div class="news-meta">Creator Insider · 4 days ago</div>
              </div>
            </div>
            <div class="news-item">
              <div class="news-dot" style="background:#1e8e3e"></div>
              <div>
                <div class="news-headline">New Analytics: real-time revenue estimates</div>
                <div class="news-meta">YouTube Help · 1 week ago</div>
              </div>
            </div>
            <div class="news-item">
              <div class="news-dot" style="background:#e37400"></div>
              <div>
                <div class="news-headline">Shorts monetization expanded to Southeast Asia</div>
                <div class="news-meta">YouTube Blog · 1 week ago</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Latest video -->
        <div class="panel dash-latest">
          <div class="panel-header">
            <div class="panel-title">Latest video performance</div>
            <span class="btn-text-link">Go to video analytics</span>
          </div>
          <div class="latest-video-row">
            <div class="latest-thumb">
              <div class="thumb-placeholder">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#606060"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="latest-info">
              <div class="latest-title">Build an Evergreen Traffic Machine Using This Play…</div>
              <div class="latest-meta">Published Jan 29, 2019 · Public</div>
              <div class="latest-stats">
                <span class="latest-stat"><strong>34.4K</strong> views</span>
                <span class="latest-stat"><strong>4:12</strong> avg duration</span>
                <span class="latest-stat"><strong>182</strong> comments</span>
              </div>
            </div>
          </div>
        </div>

        <!-- What to do next -->
        <div class="panel dash-todo">
          <div class="panel-header">
            <div class="panel-title">What to do next</div>
          </div>
          <div class="todo-list">
            <div class="todo-item">
              <div class="todo-icon" style="background:#fff0f0; color:#cc0000">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
              </div>
              <div>
                <div class="todo-title">Upload your next video</div>
                <div class="todo-desc">Consistent uploads grow your audience faster</div>
              </div>
            </div>
            <div class="todo-item">
              <div class="todo-icon" style="background:#f0f6ff; color:#065fd4">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M21 6.5C21 5.1 19.9 4 18.5 4h-13C4.1 4 3 5.1 3 6.5v8C3 15.9 4.1 17 5.5 17H17l4 4V6.5z"/></svg>
              </div>
              <div>
                <div class="todo-title">Reply to 7 new comments</div>
                <div class="todo-desc">Engagement boosts your video in the algorithm</div>
              </div>
            </div>
            <div class="todo-item">
              <div class="todo-icon" style="background:#f0fff4; color:#1e8e3e">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
              </div>
              <div>
                <div class="todo-title">Complete monetization setup</div>
                <div class="todo-desc">You're 76% of the way to Partner Program</div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  },

  /** Content page */
  content() {
    const rows = contentVideos.map(v => {
      const badgeClass = v.visibility === 'Public' ? 'badge-public' : v.visibility === 'Unlisted' ? 'badge-unlisted' : 'badge-private';
      return `
        <tr class="ct-row">
          <td>
            <div class="ct-video-cell">
              <div class="ct-thumb"><svg viewBox="0 0 24 24" width="16" height="16" fill="#606060"><path d="M8 5v14l11-7z"/></svg></div>
              <div class="ct-title">${v.title}</div>
            </div>
          </td>
          <td><span class="badge ${badgeClass}">${v.visibility}</span></td>
          <td class="ct-date">${v.date}</td>
          <td class="ct-num">${v.views}</td>
          <td class="ct-num">${v.comments}</td>
          <td>
            <button class="ct-btn">Edit</button>
          </td>
        </tr>`;
    }).join('');

    return `
      <div class="section-header">
        <div class="page-title-inline">Channel Content</div>
        <button class="btn-primary">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="margin-right:6px"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          Upload
        </button>
      </div>

      <div class="panel" style="padding:0; overflow:hidden">
        <div class="ct-toolbar">
          <div class="ct-filters">
            <button class="ct-filter active">All videos</button>
            <button class="ct-filter">Public</button>
            <button class="ct-filter">Private</button>
            <button class="ct-filter">Drafts</button>
          </div>
          <div class="ct-search">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#606060"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <input type="text" placeholder="Filter by title…" class="ct-search-input">
          </div>
        </div>
        <div class="ct-table-wrap">
        <table class="ct-table">
          <thead>
            <tr>
              <th>Video</th>
              <th>Visibility</th>
              <th>Date</th>
              <th>Views</th>
              <th>Comments</th>
              <th></th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
        </div>
      </div>`;
  },

  /** Analytics page */
  analytics(currentTab, activeStat) {
    const d = tabData[currentTab] || tabData.overview;
    const statCards = d.stats.map((s, i) => Templates.statCard(s, i, i === activeStat)).join('');
    const videoRows = (() => {
      const max = Math.max(...d.videos.map(v => v.views));
      return d.videos.map(v => Templates.videoRow(v, Math.round((v.views / max) * 100))).join('');
    })();

    return `
      <div class="section-header">
        <div></div>
        <div class="updated-label" id="updatedLabel">Updated Jan 29, 2019, 12:00 AM</div>
      </div>

      <div class="stats-row" id="statsRow">${statCards}</div>

      <div class="chart-area">
        <div class="chart-legend" id="chartLegend">
          <div class="legend-item">
            <div class="legend-dot" id="legendDot" style="background:#065fd4"></div>
            <span id="legendLabel">${d.stats[0].label}</span>
          </div>
        </div>
        <div class="chart-wrapper">
          <canvas id="areaChart"></canvas>
        </div>
      </div>

      <div class="bottom-row">
        <div class="panel">
          <div class="panel-header">
            <div>
              <div class="panel-title">Top videos</div>
              <div class="panel-meta" id="topVideosMeta">${d.topMeta}</div>
            </div>
          </div>
          <div id="videosList">${videoRows}</div>
        </div>

        <div class="panel">
          <div class="panel-header">
            <div>
              <div class="panel-title">Latest activity</div>
              <div class="panel-meta">Views · Last 48 hours</div>
            </div>
            <div style="text-align:right">
              <div class="panel-count" id="activityCount">4,837</div>
              <div class="live-badge"><div class="live-dot"></div>Updating live</div>
            </div>
          </div>
          <div class="bar-chart-wrapper"><canvas id="barChart"></canvas></div>
          <div class="bar-chart-labels"><span>-48h</span><span>Now</span></div>
          <div class="bar-chart-footer"><span>Top videos · 48 hours</span><span>Views</span></div>
        </div>
      </div>`;
  },

  /** Comments page */
  comments() {
    const items = commentsData.map(c => `
      <div class="cmt-item">
        <div class="cmt-avatar" style="background:${c.avatar}">${c.author.charAt(0)}</div>
        <div class="cmt-body">
          <div class="cmt-meta">
            <span class="cmt-author">${c.author}</span>
            <span class="cmt-time">${c.time}</span>
          </div>
          <div class="cmt-video-ref">On: ${c.video}</div>
          <div class="cmt-text">${c.text}</div>
          <div class="cmt-actions">
            <button class="cmt-btn cmt-reply">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>
              Reply
            </button>
            <button class="cmt-btn cmt-like">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>
              Like
            </button>
            <button class="cmt-btn cmt-hide">Hide</button>
          </div>
        </div>
      </div>`).join('');

    return `
      <div class="section-header">
        <div class="page-title-inline">Comments</div>
        <div class="updated-label">7 comments awaiting reply</div>
      </div>

      <div class="panel" style="padding:0; overflow:hidden">
        <div class="cmt-toolbar">
          <div class="cmt-filters">
            <button class="cmt-filter active">All</button>
            <button class="cmt-filter">I haven't responded</button>
            <button class="cmt-filter">Held for review</button>
          </div>
          <div class="cmt-sort">
            <label style="font-size:12px; color:#606060; margin-right:8px">Sort by:</label>
            <select class="range-sel" style="padding:4px 8px; font-size:12px">
              <option>Top comments</option>
              <option>Newest first</option>
            </select>
          </div>
        </div>
        <div class="cmt-list">${items}</div>
      </div>`;
  },

  /** Subtitles page */
  subtitles() {
    return `
      <div class="section-header">
        <div class="page-title-inline">Subtitles</div>
        <button class="btn-primary">Add language</button>
      </div>

      <div class="panel">
        <div class="panel-header">
          <div>
            <div class="panel-title">Subtitles & captions</div>
            <div class="panel-meta">Help viewers understand your videos in more languages</div>
          </div>
        </div>
        <table class="ct-table">
          <thead>
            <tr><th>Language</th><th>Status</th><th>Video</th><th>Last updated</th><th></th></tr>
          </thead>
          <tbody>
            <tr class="ct-row">
              <td><strong>English (original)</strong></td>
              <td><span class="badge badge-public">Published</span></td>
              <td>Build an Evergreen Traffic Machine…</td>
              <td class="ct-date">Jan 29, 2019</td>
              <td><button class="ct-btn">Edit</button></td>
            </tr>
            <tr class="ct-row">
              <td>Spanish</td>
              <td><span class="badge badge-unlisted">Draft</span></td>
              <td>Start and grow your agency…</td>
              <td class="ct-date">Jan 20, 2019</td>
              <td><button class="ct-btn">Edit</button></td>
            </tr>
            <tr class="ct-row">
              <td>Indonesian</td>
              <td><span class="badge badge-private">Not started</span></td>
              <td>Get More Clients For Your Agency…</td>
              <td class="ct-date">—</td>
              <td><button class="ct-btn">Add</button></td>
            </tr>
          </tbody>
        </table>
      </div>`;
  },

  /** Copyright page */
  copyright() {
    return `
      <div class="section-header">
        <div class="page-title-inline">Copyright</div>
      </div>

      <div class="dash-grid" style="grid-template-columns: 1fr 1fr">
        <div class="panel">
          <div class="panel-header">
            <div>
              <div class="panel-title">Copyright notices</div>
              <div class="panel-meta">Videos with claims against your content</div>
            </div>
          </div>
          <div class="empty-state">
            <svg viewBox="0 0 24 24" width="48" height="48" fill="#e0e0e0"><circle cx="12" cy="12" r="10"/><path fill="#fff" d="M14.5 8.5c-.8-.6-1.7-1-2.7-1C9.1 7.5 7 9.6 7 12s2.1 4.5 4.8 4.5c1 0 1.9-.4 2.7-1"/></svg>
            <div class="empty-title">No copyright claims</div>
            <div class="empty-desc">Your channel is currently claim-free. Keep it up!</div>
          </div>
        </div>

        <div class="panel">
          <div class="panel-header">
            <div>
              <div class="panel-title">Content ID activity</div>
              <div class="panel-meta">Last 90 days</div>
            </div>
          </div>
          <div class="cp-stats">
            <div class="cp-stat"><div class="cp-num" style="color:#1e8e3e">0</div><div class="cp-label">Active claims</div></div>
            <div class="cp-stat"><div class="cp-num" style="color:#212121">3</div><div class="cp-label">Resolved</div></div>
            <div class="cp-stat"><div class="cp-num" style="color:#212121">0</div><div class="cp-label">Disputed</div></div>
          </div>
        </div>
      </div>`;
  },

  /** Monetization page */
  monetization() {
    return `
      <div class="section-header">
        <div class="page-title-inline">Monetization</div>
      </div>

      <div class="panel mono-hero">
        <div class="mono-icon">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="#cc0000"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
        </div>
        <div class="mono-text">
          <div class="panel-title" style="font-size:16px">YouTube Partner Program</div>
          <div class="panel-meta" style="margin-top:4px">Meet the requirements to start earning from your content</div>
        </div>
      </div>

      <div class="dash-grid" style="grid-template-columns: 1fr 1fr; margin-top:16px">
        <div class="panel">
          <div class="panel-title" style="margin-bottom:16px">Eligibility requirements</div>

          <div class="mono-req">
            <div class="mono-req-label">
              <span>Subscribers</span>
              <span class="mono-req-val" style="color:#1e8e3e">976 / 1,000 ✓</span>
            </div>
            <div class="mono-bar-bg"><div class="mono-bar-fill" style="width:97.6%; background:#1e8e3e"></div></div>
          </div>

          <div class="mono-req">
            <div class="mono-req-label">
              <span>Watch hours (last 12 months)</span>
              <span class="mono-req-val" style="color:#e37400">3,040 / 4,000</span>
            </div>
            <div class="mono-bar-bg"><div class="mono-bar-fill" style="width:76%; background:#e37400"></div></div>
          </div>

          <div class="mono-req">
            <div class="mono-req-label">
              <span>2-step verification</span>
              <span class="mono-req-val" style="color:#1e8e3e">Enabled ✓</span>
            </div>
            <div class="mono-bar-bg"><div class="mono-bar-fill" style="width:100%; background:#1e8e3e"></div></div>
          </div>

          <div class="mono-req">
            <div class="mono-req-label">
              <span>Community Guidelines</span>
              <span class="mono-req-val" style="color:#1e8e3e">No strikes ✓</span>
            </div>
            <div class="mono-bar-bg"><div class="mono-bar-fill" style="width:100%; background:#1e8e3e"></div></div>
          </div>

          <button class="btn-primary" style="margin-top:20px; width:100%">Notify me when I'm eligible</button>
        </div>

        <div class="panel">
          <div class="panel-title" style="margin-bottom:16px">Estimated earnings</div>
          <div class="dash-stats-row" style="flex-direction:column; gap:12px">
            <div class="dash-stat" style="text-align:left; padding:12px; background:#f9f9f9; border-radius:8px">
              <div class="stat-label">Projected monthly revenue</div>
              <div class="stat-value" style="font-size:22px; color:#1e8e3e">$480 – $720</div>
              <div style="font-size:11px; color:#909090; margin-top:4px">Based on current watch time & CPM</div>
            </div>
            <div class="dash-stat" style="text-align:left; padding:12px; background:#f9f9f9; border-radius:8px">
              <div class="stat-label">Avg CPM estimate</div>
              <div class="stat-value" style="font-size:22px">$8.91</div>
              <div style="font-size:11px; color:#909090; margin-top:4px">For your niche & audience region</div>
            </div>
          </div>
        </div>
      </div>`;
  },

  /** Settings page */
  settings() {
    return `
      <div class="section-header">
        <div class="page-title-inline">Settings</div>
        <button class="btn-primary">Save changes</button>
      </div>

      <div class="dash-grid" style="grid-template-columns: 220px 1fr">
        <div class="panel" style="padding:8px 0">
          <div class="settings-nav-item active">General</div>
          <div class="settings-nav-item">Channel</div>
          <div class="settings-nav-item">Upload defaults</div>
          <div class="settings-nav-item">Permissions</div>
          <div class="settings-nav-item">Community</div>
          <div class="settings-nav-item">Agreements</div>
        </div>

        <div class="panel">
          <div class="panel-title" style="margin-bottom:20px">General settings</div>

          <div class="settings-field">
            <label class="settings-label">Channel name</label>
            <input type="text" class="settings-input" value="Jackson Maju">
          </div>
          <div class="settings-field">
            <label class="settings-label">Channel description</label>
            <textarea class="settings-textarea" rows="4">Helping agencies and creators grow smarter. Sharing strategies on cold email, client acquisition, and content that converts.</textarea>
          </div>
          <div class="settings-field">
            <label class="settings-label">Country</label>
            <select class="range-sel settings-select">
              <option>Indonesia</option>
              <option>United States</option>
              <option>Malaysia</option>
            </select>
          </div>
          <div class="settings-field">
            <label class="settings-label">Keywords</label>
            <input type="text" class="settings-input" value="agency, cold email, youtube growth, digital marketing">
          </div>

          <div class="settings-divider"></div>

          <div class="panel-title" style="margin-bottom:16px; font-size:13px">Notifications</div>
          <div class="settings-toggle-row">
            <div>
              <div style="font-size:13px; color:#212121">Email notifications for comments</div>
              <div style="font-size:12px; color:#606060">Receive an email when someone comments on your video</div>
            </div>
            <div class="toggle on" id="notifToggle"></div>
          </div>
          <div class="settings-toggle-row">
            <div>
              <div style="font-size:13px; color:#212121">Subscriber milestones</div>
              <div style="font-size:12px; color:#606060">Get notified when you reach subscriber milestones</div>
            </div>
            <div class="toggle on"></div>
          </div>
        </div>
      </div>`;
  },
};


const Charts = {
  areaInstance: null,
  barInstance:  null,
  barInterval:  null,

  /** Destroy all active chart instances and stop intervals */
  destroyAll() {
    if (this.barInterval) { clearInterval(this.barInterval); this.barInterval = null; }
    if (this.areaInstance) { this.areaInstance.destroy(); this.areaInstance = null; }
    if (this.barInstance)  { this.barInstance.destroy();  this.barInstance  = null; }
  },

  /** Destroy only area chart */
  destroyArea() {
    if (this.areaInstance) { this.areaInstance.destroy(); this.areaInstance = null; }
  },

  /** Build or update the area chart */
  renderArea(tab, statIdx) {
    const d      = tabData[tab] || tabData.overview;
    const isOver = tab === 'overview';
    const idx    = isOver ? Math.min(statIdx, d.chartData.length - 1) : 0;
    const data   = d.chartData[idx];
    const color  = isOver ? statSeries[statIdx].color : APP.chartBlue;

    const bgMap = {
      '#065fd4': 'rgba(6,95,212,0.1)',
      '#1e8e3e': 'rgba(30,142,62,0.1)',
      '#e37400': 'rgba(227,116,0,0.1)',
    };
    const bg = bgMap[color] || 'rgba(6,95,212,0.1)';

    const canvas = document.getElementById('areaChart');
    if (!canvas) return;

    this.destroyArea();
    const ctx = canvas.getContext('2d');
    this.areaInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: d.labels,
        datasets: [{
          data,
          fill: true,
          backgroundColor: bg,
          borderColor: color,
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: color,
          pointHoverBorderColor: '#fff',
          pointHoverBorderWidth: 2,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#fff', titleColor: '#606060',
            bodyColor: '#212121', borderColor: '#e0e0e0', borderWidth: 1, padding: 10,
            callbacks: { label: c => ' ' + c.dataset.data[c.dataIndex].toLocaleString() },
          },
        },
        scales: {
          x: { grid: { display: false }, border: { display: false }, ticks: { maxTicksLimit: 7, font: { size: 11 }, color: '#909090' } },
          y: { border: { display: false }, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 11 }, color: '#909090', callback: v => v >= 1000 ? (v / 1000).toFixed(0) + 'K' : v } },
        },
      },
    });

    // Update legend
    const dot   = document.getElementById('legendDot');
    const label = document.getElementById('legendLabel');
    if (dot && label) {
      dot.style.background = color;
      label.textContent = isOver ? statSeries[statIdx].label : d.stats[0].label;
    }
  },

  /** Build bar chart with live update interval */
  renderBar() {
    const canvas = document.getElementById('barChart');
    if (!canvas) return;

    const bars = Array.from({ length: 48 }, () => Math.floor(Math.random() * 150 + 20));
    const ctx  = canvas.getContext('2d');
    this.barInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: bars.map((_, i) => i),
        datasets: [{ data: bars, backgroundColor: APP.chartBlue, borderRadius: 2, barPercentage: 0.75 }],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#fff', titleColor: '#606060', bodyColor: '#212121',
            borderColor: '#e0e0e0', borderWidth: 1,
            callbacks: { label: c => c.raw + ' views' },
          },
        },
        scales: { x: { display: false }, y: { display: false, grid: { display: false } } },
      },
    });

    this.barInterval = setInterval(() => {
      if (!this.barInstance) return;
      this.barInstance.data.datasets[0].data.push(Math.floor(Math.random() * 150 + 20));
      this.barInstance.data.datasets[0].data.shift();
      this.barInstance.data.labels.push('');
      this.barInstance.data.labels.shift();
      this.barInstance.update('none');

      const total = this.barInstance.data.datasets[0].data.reduce((a, b) => a + b, 0);
      const el = document.getElementById('activityCount');
      if (el) el.textContent = total.toLocaleString();
    }, 3000);
  },

  /** Dashboard mini chart */
  renderDashMini() {
    const canvas = document.getElementById('dashMiniChart');
    if (!canvas) return;
    const data = tabData.overview.chartData[1];
    const ctx  = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: tabData.overview.labels,
        datasets: [{
          data, fill: true,
          backgroundColor: 'rgba(204,0,0,0.08)',
          borderColor: APP.primaryRed,
          borderWidth: 2, tension: 0.4, pointRadius: 0,
        }],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: {
          x: { display: false },
          y: { display: false, grid: { display: false } },
        },
      },
    });
  },
};



const Router = {
  currentPage:  localStorage.getItem('yt_page') || 'analytics',
  currentTab:   localStorage.getItem('yt_tab')  || 'overview',
  activeStat:   0,
  selectedVideo: null,

  /** Page title map */
  pageTitles: {
    dashboard:    'Dashboard',
    content:      'Content',
    analytics:    'Analytics',
    comments:     'Comments',
    subtitles:    'Subtitles',
    copyright:    'Copyright',
    monetization: 'Monetization',
    settings:     'Settings',
  },

  /** Top-bar analytics tabs config */
  analyticsTabs: [
    { id: 'overview',  label: 'Overview'        },
    { id: 'reach',     label: 'Reach viewers'   },
    { id: 'interest',  label: 'Interest viewers' },
    { id: 'audience',  label: 'Build an audience' },
    { id: 'revenue',   label: 'Earn revenue'    },
  ],

  /** Master render function: clean → inject → wire */
  renderPage(pageId) {
    pageId = pageId || this.currentPage;
    this.currentPage = pageId;
    localStorage.setItem('yt_page', pageId);

    Charts.destroyAll();

    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.page === pageId);
    });

    this._renderTopbar(pageId);

    const mount = document.getElementById('contentMount');
    if (pageId === 'analytics') {
      mount.innerHTML = Templates.analytics(this.currentTab, this.activeStat);
    } else if (Templates[pageId]) {
      mount.innerHTML = Templates[pageId]();
    } else {
      mount.innerHTML = `<div class="empty-state" style="padding:60px"><div class="empty-title">Page not found</div></div>`;
    }

    this._postRender(pageId);
  },

  /** Build adaptive topbar content */
  _renderTopbar(pageId) {
    const leftEl  = document.getElementById('topbarLeft');
    const rightEl = document.getElementById('topbarRight');
    if (!leftEl || !rightEl) return;

    if (pageId === 'analytics') {
      const tabsHTML = this.analyticsTabs.map(t =>
        `<div class="tab-item${t.id === this.currentTab ? ' active' : ''}" data-tab="${t.id}">${t.label}</div>`
      ).join('');
      leftEl.innerHTML  = `<div class="tabs" id="tabs">${tabsHTML}</div>`;
      rightEl.style.display = 'flex';

      document.getElementById('tabs').addEventListener('click', e => {
        const tab = e.target.closest('[data-tab]');
        if (!tab) return;
        this.currentTab  = tab.dataset.tab;
        this.activeStat  = 0;
        this.selectedVideo = null;
        localStorage.setItem('yt_tab', this.currentTab);
        this.renderPage('analytics');
      });

      const sel = document.getElementById('rangeSelect');
      if (sel) {
        sel.addEventListener('change', () => {
          document.getElementById('dateRangeLabel').textContent = dateLabels[sel.value] || dateLabels['28'];
        });
      }
    } else {
      leftEl.innerHTML = `<div class="topbar-page-title">${this.pageTitles[pageId] || pageId}</div>`;
      rightEl.style.display = 'none';
    }
  },

  /** Post-render wiring per page */
  _postRender(pageId) {
    if (pageId === 'analytics') {
      Charts.renderArea(this.currentTab, this.activeStat);
      Charts.renderBar();
      this._wireStatCards();
      this._wireVideoRows();
    }
    if (pageId === 'dashboard') {
      requestAnimationFrame(() => Charts.renderDashMini());
    }
    if (pageId === 'content') {
      this._wireContentFilters();
    }
    if (pageId === 'comments') {
      this._wireCommentFilters();
    }
    if (pageId === 'settings') {
      this._wireSettingsToggles();
    }
  },

  /** Wire stat card selection in analytics */
  _wireStatCards() {
    document.querySelectorAll('.stat-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.stat-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.activeStat = parseInt(card.dataset.statIdx, 10);
        Charts.renderArea(this.currentTab, this.activeStat);
      });
    });
  },

  /** Wire video row selection in analytics */
  _wireVideoRows() {
    document.querySelectorAll('.video-row').forEach((row, i) => {
      row.addEventListener('click', () => {
        if (this.selectedVideo === i) {
          this.selectedVideo = null;
          row.classList.remove('selected');
        } else {
          document.querySelectorAll('.video-row').forEach(r => r.classList.remove('selected'));
          this.selectedVideo = i;
          row.classList.add('selected');
          row.querySelector('.video-bar-fill').style.background = '#1e8e3e';
        }
      });
    });
  },

  /** Wire content page filter buttons */
  _wireContentFilters() {
    document.querySelectorAll('.ct-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.ct-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
    document.querySelectorAll('.ct-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.textContent = btn.textContent === 'Edit' ? 'Save' : 'Edit';
      });
    });
  },

  /** Wire comments filter buttons */
  _wireCommentFilters() {
    document.querySelectorAll('.cmt-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.cmt-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
    document.querySelectorAll('.cmt-reply').forEach(btn => {
      btn.addEventListener('click', e => {
        const item = e.target.closest('.cmt-item');
        let replyBox = item.querySelector('.cmt-reply-box');
        if (!replyBox) {
          replyBox = document.createElement('div');
          replyBox.className = 'cmt-reply-box';
          replyBox.innerHTML = `<input type="text" placeholder="Write a reply as ${APP.channelName}…" class="settings-input cmt-reply-input">
            <button class="btn-primary" style="padding:6px 14px; font-size:12px">Reply</button>`;
          item.querySelector('.cmt-body').appendChild(replyBox);
        } else {
          replyBox.remove();
        }
      });
    });
    document.querySelectorAll('.cmt-hide').forEach(btn => {
      btn.addEventListener('click', e => {
        e.target.closest('.cmt-item').style.opacity = '0.4';
      });
    });
  },

  /** Wire settings toggles */
  _wireSettingsToggles() {
    document.querySelectorAll('.toggle').forEach(t => {
      t.addEventListener('click', () => t.classList.toggle('on'));
    });
  },
};



function fmt(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000)    return (n / 1_000).toFixed(1) + 'K';
  return n.toString();
}



window.addEventListener('DOMContentLoaded', () => {

  document.getElementById('sidebarMenu').addEventListener('click', e => {
    const item = e.target.closest('[data-page]');
    if (item) Router.renderPage(item.dataset.page);
  });
  document.getElementById('sidebarMenu2').addEventListener('click', e => {
    const item = e.target.closest('[data-page]');
    if (item) Router.renderPage(item.dataset.page);
  });

  // --- Mobile Sidebar Toggle ---
  const sidebar       = document.querySelector('.sidebar');
  const overlay       = document.getElementById('sidebarOverlay');
  const openBtn       = document.getElementById('sidebarOpen');
  const closeBtn      = document.getElementById('sidebarClose');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  if (openBtn)  openBtn.addEventListener('click', openSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  if (overlay)  overlay.addEventListener('click', closeSidebar);

  // Close sidebar when a nav item is clicked on mobile
  document.getElementById('sidebarMenu').addEventListener('click', e => {
    if (window.innerWidth < 768 && e.target.closest('[data-page]')) closeSidebar();
  });
  document.getElementById('sidebarMenu2').addEventListener('click', e => {
    if (window.innerWidth < 768 && e.target.closest('[data-page]')) closeSidebar();
  });

  Router.renderPage(Router.currentPage);
});

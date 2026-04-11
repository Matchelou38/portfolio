/* =============================================
   PORTFOLIO — Mathis Marsande
   Cinematic fullscreen GSAP scroll experience
============================================= */

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────
   PROJECT DATA
───────────────────────────────────────── */
const projectData = [
    {
    title: "Endless Runner (UE5)",
    youtube: "ptaOeyNE72s",
    details: `<div class="project-details-wrapper">
      <div class="tech-stack">
        <span class="stack-item">UE5</span>
        <span class="stack-item">C++</span>
        <span class="stack-item">Procedural</span>
        <span class="stack-item">Gameplay</span>
      </div>

      <p>Réalisation d’un <strong>Endless Runner</strong> à l'<strong>UQAC (Canada)</strong>, avec génération procédurale et gameplay dynamique.</p>

      <div class="detail-group">
        <h5><i class="fas fa-running"></i> Gameplay</h5>
        <ul>
          <li>Course automatique avec vitesse progressive.</li>
          <li>Contrôles : déplacement latéral, saut et slide.</li>
          <li>Collisions avec obstacles entraînant un Game Over.</li>
        </ul>
      </div>

      <div class="detail-group">
        <h5><i class="fas fa-cogs"></i> Systèmes</h5>
        <ul>
          <li>Génération procédurale de tuiles infinies.</li>
          <li>Spawn d’obstacles et de pickups aléatoires.</li>
          <li>Score basé sur distance et objets collectés.</li>
        </ul>
      </div>

    </div>`
  },
  {
    title: "Snake Game (UE5)",
    youtube: "kX3BO28pyRs",
    details: `<div class="project-details-wrapper">
      <div class="tech-stack">
        <span class="stack-item">UE5</span>
        <span class="stack-item">C++</span>
        <span class="stack-item">Gameplay</span>
        <span class="stack-item">UI</span>
      </div>

      <p>Implémentation d’un jeu <strong>Snake</strong> complet à l'<strong>UQAC (Canada)</strong>, avec un focus sur le gameplay et la gestion des données.</p>

      <div class="detail-group">
        <h5><i class="fas fa-gamepad"></i> Gameplay</h5>
        <ul>
          <li>Déplacement automatique et contrôles directionnels.</li>
          <li>Gestion des collisions et croissance du serpent.</li>
          <li>Pickups avec effets et score dynamique.</li>
        </ul>
      </div>

      <div class="detail-group">
        <h5><i class="fas fa-trophy"></i> UI & Système</h5>
        <ul>
          <li>Menu principal, HUD et leaderboard.</li>
          <li>High Score persistant (sauvegarde).</li>
        </ul>
      </div>

    </div>`
  },
  {
    title: "Puissance 4 vs IA (UE5)",
    youtube: "fkFAj4L8mSo",
    details: `<div class="project-details-wrapper">
      <div class="tech-stack"><span class="stack-item">UE5</span><span class="stack-item">C++</span><span class="stack-item">Minimax</span><span class="stack-item">Mesh Editor</span></div>
      <p>Projet réalisé à l'<strong>UQAC (Canada)</strong>. Jeu classique intégrant une IA capable d'anticiper les coups du joueur.</p>
      <div class="detail-group"><h5><i class="fas fa-brain"></i> Intelligence Artificielle</h5><ul><li>Algorithme <strong>Minimax</strong> pour la prise de décision.</li><li>Optimisation détection victoire et blocage.</li></ul></div>
      <div class="detail-group"><h5><i class="fas fa-cubes"></i> Design & Meshes</h5><ul><li>Création de pions et plateau via l'outil interne Unreal.</li><li>Environnement 3D complet avec éclairage et post-process.</li></ul></div>
    </div>`
  },
  {
    title: "Tower Defense & Editor Tool",
    youtube: "4mvX94LLrnE",
    details: `<div class="project-details-wrapper">
      <div class="tech-stack"><span class="stack-item">UE5</span><span class="stack-item">C++</span><span class="stack-item">Data Assets</span><span class="stack-item">Perforce</span></div>
      <p>Système piloté par les données et extension des fonctionnalités de l'éditeur Unreal.</p>
      <div class="detail-group"><h5><i class="fas fa-gamepad"></i> Gameplay & Architecture</h5><ul><li>Gestion de vagues d'ennemis avec IA de pathfinding.</li><li>Tourelles autonomes avec ciblage intelligent.</li><li>Équilibrage via <strong>Data Tables</strong> et <strong>Data Assets</strong>.</li></ul></div>
      <div class="detail-group"><h5><i class="fas fa-tools"></i> Outils Éditeur</h5><ul><li><strong>Utility Widget</strong> : debug et équilibrage temps réel.</li><li><strong>Asset Action</strong> : renommage massif automatisé.</li></ul></div>
    </div>`
  },
  {
    title: "Exploration Spatiale & Gravité Sphérique",
    youtube: "hSaVKlGLBIY",
    details: `<div class="project-details-wrapper">
      <div class="tech-stack"><span class="stack-item">C++</span><span class="stack-item">Physics</span><span class="stack-item">UE5</span><span class="stack-item">Pawn Possession</span></div>
      <p>Prototype d'exploration interplanétaire avec physique personnalisée.</p>
      <div class="detail-group"><h5><i class="fas fa-globe-americas"></i> Physique & Gravité</h5><ul><li>Force d'attraction C++ vers le centre des planètes.</li><li>Alignement dynamique sur la normale de surface.</li></ul></div>
      <div class="detail-group"><h5><i class="fas fa-rocket"></i> Exploration</h5><ul><li>Transition fluide pied ↔ vaisseau.</li><li>Plusieurs planètes avec biomes uniques.</li></ul></div>
    </div>`
  },
  {
    title: "Space Shooter & Revision Control",
    youtube: "4qs_JUqMfmA",
    details: `<div class="project-details-wrapper">
      <div class="tech-stack"><span class="stack-item">C++</span><span class="stack-item">GitHub</span><span class="stack-item">Perforce</span><span class="stack-item">Blueprints</span></div>
      <p>Prototype complet avec gestion de versions professionnelle.</p>
      <div class="detail-group"><h5><i class="fas fa-code-branch"></i> Gestion de Versions</h5><ul><li><strong>GitHub</strong> + <strong>Perforce Helix Core</strong> combinés.</li><li>Branches Main/Dev, résolution de conflits.</li></ul></div>
      <div class="detail-group"><h5><i class="fas fa-crosshairs"></i> Gameplay</h5><ul><li>Système de tir, astéroïdes aléatoires, HUD.</li></ul></div>
    </div>`
  },
  {
    title: "Site web institutionnel",
    images: ["img/Atos_Origin_logo.jpg"],
    details: `<div class="project-details-wrapper">
      <div class="tech-stack"><span class="stack-item">HTML/CSS</span><span class="stack-item">JavaScript</span><span class="stack-item">Whimsical</span></div>
      <p>Vitrine numérique pour présenter une ESN à de jeunes stagiaires.</p>
      <div class="detail-group"><h5><i class="fas fa-palette"></i> UX/UI Design</h5><ul><li>Maquettes via <strong>Whimsical</strong>.</li><li>Site moderne et responsive.</li></ul></div>
    </div>`
  },
  {
    title: "Naufrage du Titanic / Services Réseaux",
    images: ["img/Debian.png","img/LogoPostgreSql.png","img/Apache.png","img/PHP-logo.png"],
    details: `<div class="project-details-wrapper">
      <div class="tech-stack"><span class="stack-item">Debian</span><span class="stack-item">PostgreSQL</span><span class="stack-item">Apache</span><span class="stack-item">Bash</span></div>
      <p>Installation et configuration d'une architecture serveur complète.</p>
      <div class="detail-group"><h5><i class="fas fa-server"></i> Administration</h5><ul><li>Déploiement Debian + Apache + PostgreSQL + PHP.</li><li>Guide technique complet en Anglais.</li></ul></div>
    </div>`
  },
  {
    title: "Installation de services réseaux",
    images: ["img/Debian.png","img/LogoPostgreSql.png"],
    details: `<div class="project-details-wrapper">
      <div class="tech-stack"><span class="stack-item">Debian</span><span class="stack-item">PostgreSQL</span><span class="stack-item">Bash</span></div>
      <p>Infrastructure réseau : DNS, DHCP, Samba, Nagios.</p>
      <div class="detail-group"><h5><i class="fas fa-network-wired"></i> Services</h5><ul><li>DNS (Bind9) et DHCP (isc-dhcp-server).</li><li>Supervision Nagios.</li></ul></div>
    </div>`
  },
  {
    title: "Application patrimoine culturel",
    images: ["img/Symphony_Logo.png"],
    details: `<div class="project-details-wrapper">
      <div class="tech-stack"><span class="stack-item">Symfony</span><span class="stack-item">PHP</span><span class="stack-item">SQL</span><span class="stack-item">Twig</span></div>
      <p>Application web de réservation de visites et rencontres artistiques.</p>
      <div class="detail-group"><h5><i class="fas fa-landmark"></i> Fonctionnalités</h5><ul><li>Authentification utilisateurs.</li><li>Réservations : "Pack Visite" et "Pack Rencontre".</li></ul></div>
    </div>`
  },
  {
    title: "Carnet de suivi de stage",
    images: ["img/appli_mobile.png","img/Symphony_Logo.png","img/logo_docker.svg"],
    details: `<div class="project-details-wrapper">
      <div class="tech-stack"><span class="stack-item">Symfony</span><span class="stack-item">Java Android</span><span class="stack-item">Docker</span><span class="stack-item">ISO 25000</span></div>
      <p>Amélioration d'une application de gestion des stages.</p>
      <div class="detail-group"><h5><i class="fas fa-database"></i> Architecture</h5><ul><li>Normalisation BDD vers <strong>3NF</strong>.</li><li>Conteneurisation <strong>Docker</strong>.</li></ul></div>
      <div class="detail-group"><h5><i class="fas fa-shield-alt"></i> Qualité</h5><ul><li>Tests ISO 25000 (SQuaRE).</li><li>Refonte interface Android.</li></ul></div>
    </div>`
  }
];

/* ─────────────────────────────────────────
   SECTION NAMES
───────────────────────────────────────── */
const SECTION_NAMES = ['Accueil', 'À propos', 'Projets', 'Contact'];

/* ─────────────────────────────────────────
   STATE
───────────────────────────────────────── */
let currentPanel = 0;
let isAnimating  = false;
const TOTAL      = 4;
const DURATION   = 0.9;   // seconds per transition
const EASE       = "expo.out";

/* ─────────────────────────────────────────
   PANELS CACHE
───────────────────────────────────────── */
const panels = [...document.querySelectorAll('.panel')];

/* ─────────────────────────────────────────
   INIT — set initial states
───────────────────────────────────────── */
function initPanels() {
  panels.forEach((p, i) => {
    if (i === 0) {
      gsap.set(p, { opacity: 1, yPercent: 0, scale: 1, pointerEvents: 'all' });
    } else {
      gsap.set(p, { opacity: 0, yPercent: 8, scale: 0.97, pointerEvents: 'none' });
    }
  });
}

/* ─────────────────────────────────────────
   TRANSITION: go to panel index
───────────────────────────────────────── */
function goTo(index) {
  if (isAnimating || index === currentPanel || index < 0 || index >= TOTAL) return;
  isAnimating = true;

  const from = panels[currentPanel];
  const to   = panels[index];
  const dir  = index > currentPanel ? 1 : -1;

  // Immediately reset the incoming panel's content to hidden state
  resetPanelContent(to, index);

  // Outgoing panel: fade out
  gsap.to(from, {
    duration: DURATION,
    opacity: 0,
    yPercent: dir * -6,
    scale: 0.96,
    ease: EASE,
    onComplete: () => {
      gsap.set(from, { pointerEvents: 'none' });
    }
  });

  // Incoming panel: slide in
  gsap.fromTo(to,
    { opacity: 0, yPercent: dir * 7, scale: 0.97 },
    {
      duration: DURATION,
      opacity: 1,
      yPercent: 0,
      scale: 1,
      ease: EASE,
      pointerEvents: 'all',
      onComplete: () => {
        isAnimating = false;
        currentPanel = index;
        animatePanelContent(to, index);
        updateUI(index);
      }
    }
  );
}

/* ─────────────────────────────────────────
   ANIMATE PANEL INNER CONTENT
   Each panel has unique choreography
───────────────────────────────────────── */
/* Reset all animatable elements in a panel back to their hidden state */
function resetPanelContent(panel, index) {
  const $ = sel => panel.querySelectorAll(sel);
  gsap.killTweensOf($('*'));   // stop any in-progress animation on this panel

  if (index === 0) {
    gsap.set([$('#hn1'), $('#hn2')], { xPercent: 0, opacity: 0 });
    gsap.set([$('.eyebrow'), $('.hero-sub'), $('.panel-foot')], { opacity: 0, x: 0, y: 0 });
    gsap.set($('.hero-actions > *'), { opacity: 0, y: 20 });
    gsap.set($('.bg-digit'), { opacity: 0, scale: 1.08 });
  }
  if (index === 1) {
    gsap.set([$('.section-tag'), $('.panel-title'), $('.panel-body'), $('.btn-line')], { opacity: 0, x: 0, y: 0 });
    gsap.set($('.fact'), { opacity: 0, x: 30 });
    gsap.set($('.bg-digit'), { opacity: 0, scale: 1.08 });
  }
  if (index === 2) {
    gsap.set([$('.section-tag'), $('.panel-title'), $('.ptabs')], { opacity: 0, x: 0, y: 0 });
    gsap.set($('.pe'), { opacity: 0, x: 40 });
    gsap.set($('.bg-digit'), { opacity: 0, scale: 1.08 });
  }
  if (index === 3) {
    gsap.set([$('.section-tag'), $('.panel-title'), $('.panel-body'), $('.btn-send')], { opacity: 0, x: 0, y: 0 });
    gsap.set($('.clink'), { opacity: 0, x: -16 });
    gsap.set($('.fw'), { opacity: 0, y: 20 });
    gsap.set($('.bg-digit'), { opacity: 0, scale: 1.08 });
  }
}

function animatePanelContent(panel, index) {
  // Always reset first so re-entering a panel plays clean
  resetPanelContent(panel, index);

  const tl = gsap.timeline();
  const $ = sel => panel.querySelectorAll(sel);

  if (index === 0) {
    tl.fromTo($('#hn1'), { xPercent: -8, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: EASE }, 0)
      .fromTo($('#hn2'), { xPercent: 8, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: EASE }, 0.08)
      .fromTo($('.eyebrow'), { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: .8, ease: EASE }, 0.2)
      .fromTo($('.hero-sub'), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .7, ease: EASE }, 0.3)
      .fromTo($('.hero-actions > *'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .7, ease: EASE, stagger: 0.1 }, 0.4)
      .fromTo($('.panel-foot'), { opacity: 0 }, { opacity: 1, duration: .6, ease: EASE }, 0.6)
      .fromTo($('.bg-digit'), { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.5, ease: EASE }, 0.2);
  }

  if (index === 1) {
    tl.fromTo($('.bg-digit'), { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.5, ease: EASE }, 0)
      .fromTo($('.section-tag'), { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: .7, ease: EASE }, 0)
      .fromTo($('.panel-title'), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: .9, ease: EASE }, 0.1)
      .fromTo($('.panel-body'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .8, ease: EASE }, 0.25)
      .fromTo($('.btn-line'), { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: .6, ease: EASE }, 0.4)
      .fromTo($('.fact'), { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: .6, ease: EASE, stagger: 0.06 }, 0.15);
  }

  if (index === 2) {
    tl.fromTo($('.bg-digit'), { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.5, ease: EASE }, 0)
      .fromTo($('.section-tag'), { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: .6, ease: EASE }, 0)
      .fromTo($('.panel-title'), { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: .8, ease: EASE }, 0.1)
      .fromTo($('.ptabs'), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: .5, ease: EASE }, 0.3)
      .fromTo($('.pe'), { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: .55, ease: EASE, stagger: 0.055 }, 0.35);
  }

  if (index === 3) {
    tl.fromTo($('.bg-digit'), { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.5, ease: EASE }, 0)
      .fromTo($('.section-tag'), { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: .6, ease: EASE }, 0)
      .fromTo($('.panel-title'), { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: .9, ease: EASE }, 0.1)
      .fromTo($('.panel-body'), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .7, ease: EASE }, 0.25)
      .fromTo($('.clink'), { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: .5, ease: EASE, stagger: 0.08 }, 0.35)
      .fromTo($('.fw'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .6, ease: EASE, stagger: 0.07 }, 0.3)
      .fromTo($('.btn-send'), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: .5, ease: EASE }, 0.6);
  }
}

/* ─────────────────────────────────────────
   UPDATE UI — dots, label, bg digit
───────────────────────────────────────── */
function updateUI(index) {
  // Side dots
  document.querySelectorAll('.side-dot').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });

  // Section label in topbar
  const labelEl = document.getElementById('section-label-top');
  if (labelEl) {
    gsap.to(labelEl, { opacity: 0, y: -8, duration: .2, onComplete: () => {
      labelEl.textContent = SECTION_NAMES[index];
      gsap.to(labelEl, { opacity: 1, y: 0, duration: .3 });
    }});
  }
}

/* ─────────────────────────────────────────
   SCROLL — wheel + touch
───────────────────────────────────────── */
let touchStartY = 0;
let wheelBusy = false;

function onWheel(e) {
  // Don't hijack scroll if modal is open (let it scroll naturally)
  if (document.getElementById('modal').classList.contains('open')) return;

  // If scrolling inside the active project list, let it scroll first
  const plist = document.querySelector('.plist.active');
  if (plist && plist.contains(e.target)) {
    const scrollingDown = e.deltaY > 0;
    const atBottom = plist.scrollTop >= plist.scrollHeight - plist.clientHeight - 2;
    const atTop    = plist.scrollTop <= 2;
    // Only intercept once the list has hit its boundary
    if ((scrollingDown && !atBottom) || (!scrollingDown && !atTop)) return;
  }

  e.preventDefault();
  if (wheelBusy || isAnimating) return;
  wheelBusy = true;
  setTimeout(() => { wheelBusy = false; }, 800);
  goTo(currentPanel + (e.deltaY > 0 ? 1 : -1));
}

function onTouchStart(e) { touchStartY = e.touches[0].clientY; }

function onTouchEnd(e) {
  if (document.getElementById('modal').classList.contains('open')) return;
  const dy = touchStartY - e.changedTouches[0].clientY;
  if (Math.abs(dy) <= 40) return;

  // If touch is inside the active project list, only change panel at boundaries
  const plist = document.querySelector('.plist.active');
  if (plist && plist.contains(e.target)) {
    const scrollingDown = dy > 0;
    const atBottom = plist.scrollTop >= plist.scrollHeight - plist.clientHeight - 2;
    const atTop    = plist.scrollTop <= 2;
    if ((scrollingDown && !atBottom) || (!scrollingDown && !atTop)) return;
  }

  goTo(currentPanel + (dy > 0 ? 1 : -1));
}

/* ─────────────────────────────────────────
   KEYBOARD NAVIGATION
───────────────────────────────────────── */
function onKey(e) {
  if (document.getElementById('modal').classList.contains('open')) return;
  if (e.key === 'ArrowDown' || e.key === 'PageDown') goTo(currentPanel + 1);
  if (e.key === 'ArrowUp'   || e.key === 'PageUp')   goTo(currentPanel - 1);
}

/* ─────────────────────────────────────────
   CURSOR
───────────────────────────────────────── */
function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let rx = -100, ry = -100, mx = -100, my = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  function follow() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(follow);
  }
  follow();

  document.querySelectorAll('a, button, .pe, .clink').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovered'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovered'));
  });
}

/* ─────────────────────────────────────────
   THEME
───────────────────────────────────────── */
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  if (localStorage.getItem('theme') === 'light') document.body.classList.add('light');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });
}

/* ─────────────────────────────────────────
   SIDE DOTS
───────────────────────────────────────── */
function initDots() {
  document.querySelectorAll('.side-dot').forEach(d => {
    d.addEventListener('click', () => goTo(+d.dataset.goto));
  });
}

/* ─────────────────────────────────────────
   PANEL BUTTONS (hero CTAs)
───────────────────────────────────────── */
function initBtns() {
  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => goTo(+btn.dataset.goto));
  });
}

/* ─────────────────────────────────────────
   TABS
───────────────────────────────────────── */
function initTabs() {
  document.querySelectorAll('.ptab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.plist').forEach(l => l.classList.remove('active'));
      tab.classList.add('active');
      const list = document.getElementById('pl-' + tab.dataset.ptab);
      if (list) {
        list.classList.add('active');
        // Animate entries in
        gsap.fromTo(list.querySelectorAll('.pe, .personal-box'),
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: .5, ease: EASE, stagger: 0.05 }
        );
      }
    });
  });
}

/* ─────────────────────────────────────────
   MODAL
───────────────────────────────────────── */
function openModal(idx) {
  const info = projectData[idx];
  if (!info) return;

  const modal = document.getElementById('modal');
  const media = document.getElementById('modal-media');
  const minfo = document.getElementById('modal-info');

  /* ── Construire les items ── */
  let items    = [];
  let hasVideo = false;

  if (info.youtube) {
    hasVideo = true;
    items = [`<div class="car-item active" data-index="0">
      <iframe src="https://www.youtube.com/embed/${info.youtube}?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>`];
  } else if (info.images) {
    items = info.images.map((src, i) =>
      `<div class="car-item${i === 0 ? ' active' : ''}" data-index="${i}">
        <img src="${src}" alt="${info.title}" loading="lazy"/>
      </div>`
    );
  }

  const multi = items.length > 1;

  /* ── Tabs vidéo (plusieurs clips) ── */
  const tabsHtml = '';

  /* ── Flèches (multi-images uniquement) ── */
  const arrows = (!hasVideo && multi) ? `
    <button class="car-prev"><i class="fas fa-chevron-left"></i></button>
    <button class="car-next"><i class="fas fa-chevron-right"></i></button>` : '';

  media.innerHTML = items.length ? `
    <div class="carousel">
      ${tabsHtml}
      <div class="car-track">
        ${arrows}
        ${items.join('')}
      </div>
    </div>` : '';

  /* ── Colonne droite : titre + détails ── */
  minfo.innerHTML = `<h2>${info.title}</h2><div>${info.details}</div>`;

  modal.classList.add('open');

  /* ── Navigation flèches (multi-images) ── */
  if (!hasVideo && multi) {
    let cur = 0;
    const itemEls = modal.querySelectorAll('.car-item');
    const prev    = modal.querySelector('.car-prev');
    const next    = modal.querySelector('.car-next');
    const go = i => {
      cur = (i + itemEls.length) % itemEls.length;
      itemEls.forEach((el, j) => el.classList.toggle('active', j === cur));
    };
    prev && prev.addEventListener('click', () => go(cur - 1));
    next && next.addEventListener('click', () => go(cur + 1));
  }
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('open');
  // Stop YouTube iframes by clearing their src
  modal.querySelectorAll('iframe').forEach(f => { f.src = ''; });
  modal.querySelectorAll('video').forEach(v => v.pause());
}

function initModal() {
  const modal = document.getElementById('modal');
  if (!modal) return;

  document.getElementById('modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  document.querySelectorAll('.pe').forEach(el => {
    el.addEventListener('click', () => openModal(+el.dataset.index));
  });
}

/* ─────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────── */
function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-send');
    btn.textContent = '…';
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });
      if (res.ok) {
        form.reset();
        const ok = document.getElementById('form-ok');
        if (ok) {
          ok.style.display = 'block';
          gsap.fromTo(ok, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .4 });
          setTimeout(() => gsap.to(ok, { opacity: 0, duration: .3, onComplete: () => ok.style.display='none' }), 4000);
        }
      }
    } catch(_) {}
    btn.innerHTML = 'Envoyer <i class="fas fa-paper-plane"></i>';
    btn.disabled = false;
  });
}

/* ─────────────────────────────────────────
   HERO ENTRY ANIMATION (first load)
───────────────────────────────────────── */
function heroEntrance() {
  const p0 = panels[0];
  const tl = gsap.timeline({ delay: 0.05 });
  tl.fromTo(p0.querySelector('#hn1'),
    { xPercent: -10, opacity: 0 },
    { xPercent: 0, opacity: 1, duration: 1.2, ease: EASE }
  )
  .fromTo(p0.querySelector('#hn2'),
    { xPercent: 10, opacity: 0 },
    { xPercent: 0, opacity: 1, duration: 1.2, ease: EASE },
    0.1
  )
  .fromTo(p0.querySelector('.eyebrow'),
    { opacity: 0, x: -24 },
    { opacity: 1, x: 0, duration: .9, ease: EASE },
    0.3
  )
  .fromTo(p0.querySelector('.hero-sub'),
    { opacity: 0, y: 18 },
    { opacity: 1, y: 0, duration: .8, ease: EASE },
    0.45
  )
  .fromTo(p0.querySelectorAll('.hero-actions > *'),
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: .7, ease: EASE, stagger: 0.1 },
    0.55
  )
  .fromTo(p0.querySelector('.panel-foot'),
    { opacity: 0 },
    { opacity: 1, duration: .8, ease: EASE },
    0.75
  )
  .fromTo(p0.querySelector('.bg-digit'),
    { opacity: 0, scale: 1.08 },
    { opacity: 1, scale: 1, duration: 1.5, ease: EASE },
    0.2
  );
}

/* ─────────────────────────────────────────
   INIT ALL
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initPanels();
  initCursor();
  initTheme();
  initDots();
  initBtns();
  initTabs();
  initModal();
  initForm();

  // Bind scroll/touch/keyboard
  window.addEventListener('wheel',      onWheel,      { passive: false });
  window.addEventListener('touchstart', onTouchStart, { passive: true  });
  window.addEventListener('touchend',   onTouchEnd,   { passive: true  });
  window.addEventListener('keydown',    onKey);

  // Hero entrance
  heroEntrance();

  // Make p0 fully visible from start
  gsap.set(panels[0], { opacity: 1, yPercent: 0, scale: 1, pointerEvents: 'all' });
});
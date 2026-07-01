/* ============================================================
   PORTFOLIO — Mathis Marsande
   script.js

   Table des matières
   ──────────────────
   1.  Données des projets
   2.  Configuration & état global
   3.  Système de panels (init, transition, animations)
   4.  Mise à jour de l'interface (dots, label topbar)
   5.  Navigation (scroll, touch, clavier)
   6.  Curseur personnalisé
   7.  Thème clair / sombre
   8.  Interactions (dots latéraux, boutons, onglets)
   9.  Modal projet (ouverture, fermeture, carousel)
   10. Formulaire de contact
   11. Animation d'entrée du Hero (premier chargement)
   12. Point d'entrée — DOMContentLoaded
============================================================ */

gsap.registerPlugin(ScrollTrigger);


/* ============================================================
   1. DONNÉES DES PROJETS
   Chaque objet correspond à une entrée de la liste.
   - youtube : ID de la vidéo YouTube (si disponible)
   - images  : tableau de chemins d'images (alternative)
   - details : HTML injecté dans la colonne droite du modal
============================================================ */
const projectData = [
  {
    title: "K3AudioType (Android)",
    images: [
      "img/k3mobile.testk3-1.jpg",
      "img/k3mobile.testk3-2.jpg",
      "img/k3mobile.testk3-3.jpg",
      "img/k3mobile.testk3-4.jpg",
      "img/k3mobile.testk3-5.jpg",
      "img/k3mobile.testk3-6.jpg",
      "img/k3mobile.testk3-7.jpg"
    ],
    details: `<div class="project-details-wrapper">
      <div class="tech-stack">
        <span class="stack-item">Kotlin</span>
        <span class="stack-item">Jetpack Compose</span>
        <span class="stack-item">Room</span>
        <span class="stack-item">Accessibilité</span>
      </div>
      <p>Application Android d'<strong>accessibilité</strong> destinée aux personnes <strong>déficientes visuelles</strong>, transformant la saisie au clavier en une expérience guidée par le <strong>son</strong> et le <strong>toucher</strong> : retour vocal, earcons et vibrations haptiques.</p>
      <div class="detail-group">
        <h5><i class="fas fa-universal-access"></i> Accessibilité</h5>
        <ul>
          <li>Synthèse vocale (<strong>TTS</strong>) lisant le texte saisi en temps réel.</li>
          <li><strong>Earcons</strong> et retours <strong>haptiques</strong> confirmant chaque action sans regarder l'écran.</li>
          <li>Découpage du texte par phrases/paragraphes pour une relecture fluide.</li>
        </ul>
      </div>
      <div class="detail-group">
        <h5><i class="fas fa-cogs"></i> Architecture & Technique</h5>
        <ul>
          <li><code>AccessibilityService</code> interceptant la saisie clavier même <strong>écran verrouillé</strong>.</li>
          <li>Base de données <strong>Room</strong> pour l'historique et les statistiques globales (SQL).</li>
          <li>Mode « écran allumé » activable et contenus pré-remplis.</li>
          <li>Documentation <strong>KDoc</strong> générée en HTML via <strong>Dokka</strong>.</li>
        </ul>
      </div>
    </div>`
  },
  {
    title: "MEUPORG (Godot Engine)",
    youtube: "N3a8g1s0P7w",
    details: `<div class="project-details-wrapper">
      <div class="tech-stack">
        <span class="stack-item">Godot Engine</span>
        <span class="stack-item">GDScript</span>
        <span class="stack-item">Multijoueur</span>
        <span class="stack-item">Split-screen</span>
      </div>
      <p>Réalisation d'un <strong>RPG multijoueur en split-screen</strong> inspiré des <strong>JRPG rétro</strong>, avec un système de combat au <strong>tour par tour</strong>, des attaques et esquives en <strong>QTE temps réel</strong> et un rendu <strong>HD-2D</strong> dans un univers <strong>fantasy parodique</strong>. Projet de groupe développé sous <strong>Godot 4</strong>.</p>
      <div class="detail-group">
        <h5><i class="fas fa-gamepad"></i> Gameplay</h5>
        <ul>
          <li>Combat au tour par tour avec QTE pour les attaques et l'esquive en temps réel.</li>
          <li>Exploration en overworld avec caméra orbitale et déplacement relatif à la caméra.</li>
          <li>Système de fuite du combat et de retour à l'exploration.</li>
        </ul>
      </div>
      <div class="detail-group">
        <h5><i class="fas fa-cogs"></i> Systèmes</h5>
        <ul>
          <li>Split-screen : un <code>SubViewport</code> par joueur, <code>World3D</code> redirigé vers la scène de combat partagée.</li>
          <li>Isolation des entrées par joueur via des actions Input Map indexées par périphérique.</li>
          <li>Barres de vie ennemies dupliquées et synchronisées sur chaque écran.</li>
          <li>Ennemis paramétrables depuis l'éditeur (sprite, animation, comportement) via <code>EnemyTrigger</code>.</li>
        </ul>
      </div>
    </div>`
  },
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
      <p>Réalisation d'un <strong>Endless Runner</strong> à l'<strong>UQAC (Canada)</strong>, avec génération procédurale et gameplay dynamique.</p>
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
          <li>Spawn d'obstacles et de pickups aléatoires.</li>
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
      <p>Implémentation d'un jeu <strong>Snake</strong> complet à l'<strong>UQAC (Canada)</strong>, avec un focus sur le gameplay et la gestion des données.</p>
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

/* Noms affichés dans le label de la topbar pour chaque panel */
const SECTION_NAMES = ['Accueil', 'À propos', 'Parcours', 'Projets', 'Contact'];


/* ============================================================
   2. CONFIGURATION & ÉTAT GLOBAL
============================================================ */

/* Index du panel actuellement visible */
let currentPanel = 0;

/* Verrou anti-spam : empêche de déclencher une transition
   pendant qu'une autre est encore en cours */
let isAnimating = false;

const TOTAL    = 5;       // nombre de panels
const DURATION = 0.9;     // durée d'une transition en secondes
const EASE     = "expo.out";

/* Cache DOM — tous les panels récupérés une seule fois */
const panels = [...document.querySelectorAll('.panel')];


/* ============================================================
   3. SYSTÈME DE PANELS
============================================================ */

/* ── Initialisation des états initiaux ──────────────────────
   P0 est directement visible ; tous les autres sont décalés
   en bas (yPercent) et légèrement réduits (scale) pour préparer
   l'animation d'entrée.
─────────────────────────────────────────────────────────────── */
function initPanels() {
  panels.forEach((p, i) => {
    if (i === 0) {
      // Panel hero : déjà visible au chargement
      gsap.set(p, { opacity: 1, yPercent: 0, scale: 1, pointerEvents: 'all' });
    } else {
      // Autres panels : cachés et légèrement décalés vers le bas
      gsap.set(p, { opacity: 0, yPercent: 8, scale: 0.97, pointerEvents: 'none' });
    }
  });
}

/* ── Transition vers un panel donné ─────────────────────────
   dir = +1 si on descend, -1 si on remonte.
   Le panel sortant part dans la direction opposée au mouvement,
   le panel entrant arrive de la direction du mouvement.
─────────────────────────────────────────────────────────────── */
function goTo(index) {
  // Gardes : transition en cours, même panel, hors limites
  if (isAnimating || index === currentPanel || index < 0 || index >= TOTAL) return;
  isAnimating = true;

  const from = panels[currentPanel];
  const to   = panels[index];
  const dir  = index > currentPanel ? 1 : -1;   // +1 = descend, -1 = remonte

  // Remettre à zéro les éléments internes du panel entrant
  // avant de démarrer l'animation (évite un affichage intermédiaire)
  resetPanelContent(to, index);

  // Panel sortant : fondu vers le haut ou le bas
  gsap.to(from, {
    duration: DURATION,
    opacity: 0,
    yPercent: dir * -6,   // part dans la direction opposée
    scale: 0.96,
    ease: EASE,
    onComplete: () => gsap.set(from, { pointerEvents: 'none' })
  });

  // Panel entrant : slide depuis le haut ou le bas
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
        animatePanelContent(to, index);   // anime le contenu interne
        updateUI(index);                   // met à jour dots + label
      }
    }
  );
}

/* ── Remise à zéro du contenu d'un panel ────────────────────
   Appelée avant chaque transition entrante.
   Tue toutes les animations en cours et replace les éléments
   à leur état "caché" de départ, pour que l'animation suivante
   parte d'une ardoise propre.
─────────────────────────────────────────────────────────────── */
function resetPanelContent(panel, index) {
  const $ = sel => panel.querySelectorAll(sel);
  gsap.killTweensOf($('*'));   // stoppe toute animation en cours sur ce panel

  if (index === 0) {
    gsap.set([$('#hn1'), $('#hn2')], { xPercent: 0, opacity: 0 });
    gsap.set([$('.eyebrow'), $('.hero-sub'), $('.panel-foot')], { opacity: 0, x: 0, y: 0 });
    gsap.set($('.hero-actions > *'), { opacity: 0, y: 20 });
    gsap.set($('.bg-digit'),  { opacity: 0, scale: 1.08 });
    gsap.set($('.bg-shapes'), { opacity: 0 });
  }

  if (index === 1) {
    gsap.set([$('.section-tag'), $('.panel-title'), $('.panel-body'), $('.btn-line')], { opacity: 0, x: 0, y: 0 });
    gsap.set($('.fact'), { opacity: 0, x: 30 });
    gsap.set($('.bg-digit'),  { opacity: 0, scale: 1.08 });
    gsap.set($('.bg-shapes'), { opacity: 0 });
  }

  if (index === 2) {
    gsap.set([$('.section-tag'), $('.panel-title')], { opacity: 0, x: 0, y: 0 });
    gsap.set($('.tlh-item'), { opacity: 0, y: 16 });
    gsap.set($('.bg-shapes'), { opacity: 0 });
  }

  if (index === 3) {
    gsap.set([$('.section-tag'), $('.panel-title'), $('.ptabs')], { opacity: 0, x: 0, y: 0 });
    gsap.set($('.pe'), { opacity: 0, x: 40 });
    gsap.set($('.bg-digit'),  { opacity: 0, scale: 1.08 });
    gsap.set($('.bg-shapes'), { opacity: 0 });
  }

  if (index === 4) {
    gsap.set([$('.section-tag'), $('.panel-title'), $('.panel-body'), $('.btn-send')], { opacity: 0, x: 0, y: 0 });
    gsap.set($('.clink'), { opacity: 0, x: -16 });
    gsap.set($('.fw'),    { opacity: 0, y: 20 });
    gsap.set($('.bg-digit'),  { opacity: 0, scale: 1.08 });
    gsap.set($('.bg-shapes'), { opacity: 0 });
  }
}

/* ── Animation du contenu d'un panel ────────────────────────
   Chaque panel a sa propre chorégraphie GSAP.
   Les valeurs numériques en 3e argument des .fromTo()
   sont des offsets temporels dans la timeline (en secondes).
   Un offset à 0 = démarre en même temps que le début de la tl.
─────────────────────────────────────────────────────────────── */
function animatePanelContent(panel, index) {
  // Reset d'abord pour que la ré-entrée dans un panel soit toujours propre
  resetPanelContent(panel, index);

  const tl = gsap.timeline();
  const $  = sel => panel.querySelectorAll(sel);

  // ── Panel 0 — Hero ──
  if (index === 0) {
    tl
      // Lignes du nom : slide depuis gauche/droite en parallèle
      .fromTo($('#hn1'), { xPercent: -8, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1,   ease: EASE }, 0)
      .fromTo($('#hn2'), { xPercent:  8, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1,   ease: EASE }, 0.08)
      // Éléments secondaires en cascade
      .fromTo($('.eyebrow'),        { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: .8, ease: EASE }, 0.2)
      .fromTo($('.hero-sub'),       { opacity: 0, y:  16 }, { opacity: 1, y: 0, duration: .7, ease: EASE }, 0.3)
      .fromTo($('.hero-actions > *'),{ opacity: 0, y:  20 }, { opacity: 1, y: 0, duration: .7, ease: EASE, stagger: 0.1 }, 0.4)
      .fromTo($('.panel-foot'),     { opacity: 0 },         { opacity: 1,        duration: .6, ease: EASE }, 0.6)
      // Calques décoratifs (légèrement décalés pour qu'ils n'écrasent pas le texte)
      .fromTo($('.bg-digit'),  { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.5, ease: EASE }, 0.2)
      .fromTo($('.bg-shapes'), { opacity: 0 },              { opacity: 1,           duration: 2,   ease: EASE }, 0.4);
  }

  // ── Panel 1 — À propos ──
  if (index === 1) {
    tl
      // Calques déco d'abord (en fond)
      .fromTo($('.bg-digit'),  { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.5, ease: EASE }, 0)
      .fromTo($('.bg-shapes'), { opacity: 0 },              { opacity: 1,           duration: 2,   ease: EASE }, 0)
      // Contenu texte en cascade
      .fromTo($('.section-tag'), { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: .7, ease: EASE }, 0)
      .fromTo($('.panel-title'), { opacity: 0, y:  30 }, { opacity: 1, y: 0, duration: .9, ease: EASE }, 0.1)
      .fromTo($('.panel-body'),  { opacity: 0, y:  20 }, { opacity: 1, y: 0, duration: .8, ease: EASE }, 0.25)
      .fromTo($('.btn-line'),    { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: .6, ease: EASE }, 0.4)
      // Rangées du tableau : stagger pour un effet de "balayage" de gauche à droite
      .fromTo($('.fact'),        { opacity: 0, x:  30 }, { opacity: 1, x: 0, duration: .6, ease: EASE, stagger: 0.06 }, 0.15);
  }

  // ── Page — Parcours ──
  if (index === 2) {
    tl
      .fromTo($('.bg-shapes'), { opacity: 0 },              { opacity: 1,           duration: 2,   ease: EASE }, 0)
      .fromTo($('.section-tag'), { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: .7, ease: EASE }, 0)
      .fromTo($('.panel-title'), { opacity: 0, y:  30 }, { opacity: 1, y: 0, duration: .9, ease: EASE }, 0.1)
      // Jalons de la frise : apparition en cascade de gauche à droite
      .fromTo($('.tlh-item'),    { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: .5, ease: EASE, stagger: 0.09 }, 0.3);
  }

  // ── Panel 3 — Projets ──
  if (index === 3) {
    tl
      .fromTo($('.bg-digit'),  { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.5, ease: EASE }, 0)
      .fromTo($('.bg-shapes'), { opacity: 0 },              { opacity: 1,           duration: 2,   ease: EASE }, 0)
      .fromTo($('.section-tag'), { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: .6, ease: EASE }, 0)
      .fromTo($('.panel-title'), { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: .8, ease: EASE }, 0.1)
      .fromTo($('.ptabs'),       { opacity: 0, y:  10 }, { opacity: 1, y: 0, duration: .5, ease: EASE }, 0.3)
      // Entrées de projet : stagger pour un défilement vertical progressif
      .fromTo($('.pe'),          { opacity: 0, x:  40 }, { opacity: 1, x: 0, duration: .55, ease: EASE, stagger: 0.055 }, 0.35);
  }

  // ── Panel 4 — Contact ──
  if (index === 4) {
    tl
      .fromTo($('.bg-digit'),  { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.5, ease: EASE }, 0)
      .fromTo($('.bg-shapes'), { opacity: 0 },              { opacity: 1,           duration: 2,   ease: EASE }, 0)
      .fromTo($('.section-tag'), { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: .6, ease: EASE }, 0)
      .fromTo($('.panel-title'), { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: .9, ease: EASE }, 0.1)
      .fromTo($('.panel-body'),  { opacity: 0, y:  16 }, { opacity: 1, y: 0, duration: .7, ease: EASE }, 0.25)
      // Liens de contact : slide depuis la gauche en stagger
      .fromTo($('.clink'), { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: .5, ease: EASE, stagger: 0.08 }, 0.35)
      // Champs du formulaire : apparition verticale en stagger
      .fromTo($('.fw'),    { opacity: 0, y:  20 }, { opacity: 1, y: 0, duration: .6, ease: EASE, stagger: 0.07 }, 0.3)
      .fromTo($('.btn-send'), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: .5, ease: EASE }, 0.6);
  }
}


/* ============================================================
   4. MISE À JOUR DE L'INTERFACE
   Synchronise les dots latéraux et le label de la topbar
   avec le panel actif.
============================================================ */
function updateUI(index) {
  // Basculer la classe .active sur le bon point de navigation
  document.querySelectorAll('.side-dot').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });

  // Faire disparaître le label actuel, changer le texte, réapparaître
  const labelEl = document.getElementById('section-label-top');
  if (labelEl) {
    gsap.to(labelEl, {
      opacity: 0, y: -8, duration: .2,
      onComplete: () => {
        labelEl.textContent = SECTION_NAMES[index];
        gsap.to(labelEl, { opacity: 1, y: 0, duration: .3 });
      }
    });
  }
}


/* ============================================================
   5. NAVIGATION

   Trois modes :
   - Molette (wheel)  : principal sur desktop
   - Touch (swipe)    : mobile / tablette
   - Clavier          : accessibilité (↑ ↓ PageUp PageDown)

   Le scroll de la liste de projets est géré en priorité :
   on ne change de panel que quand la liste a atteint ses limites.
============================================================ */

/* ── Scroll molette ── */

let touchStartY = 0;   // position Y du début du touch
let wheelBusy   = false; // debounce pour éviter plusieurs déclenchements rapides

function onWheel(e) {
  // Laisser le modal gérer son propre scroll si ouvert
  if (document.getElementById('modal').classList.contains('open')) return;

  // Si la molette est sur la liste de projets, vérifier les limites
  const plist = document.querySelector('.plist.active');
  if (plist && plist.contains(e.target)) {
    const scrollingDown = e.deltaY > 0;
    const atBottom = plist.scrollTop >= plist.scrollHeight - plist.clientHeight - 2;
    const atTop    = plist.scrollTop <= 2;
    // Laisser la liste défiler tant qu'elle n'est pas à sa limite
    if ((scrollingDown && !atBottom) || (!scrollingDown && !atTop)) return;
  }

  e.preventDefault();

  // Debounce : une seule transition par "coup de molette"
  if (wheelBusy || isAnimating) return;
  wheelBusy = true;
  setTimeout(() => { wheelBusy = false; }, 800);

  goTo(currentPanel + (e.deltaY > 0 ? 1 : -1));
}

/* ── Navigation tactile ── */

function onTouchStart(e) {
  touchStartY = e.touches[0].clientY;
}

function onTouchEnd(e) {
  if (document.getElementById('modal').classList.contains('open')) return;

  const dy = touchStartY - e.changedTouches[0].clientY;
  if (Math.abs(dy) <= 40) return;   // seuil minimum de 40px pour éviter les micro-swipes

  // Même logique que onWheel pour la liste de projets
  const plist = document.querySelector('.plist.active');
  if (plist && plist.contains(e.target)) {
    const scrollingDown = dy > 0;
    const atBottom = plist.scrollTop >= plist.scrollHeight - plist.clientHeight - 2;
    const atTop    = plist.scrollTop <= 2;
    if ((scrollingDown && !atBottom) || (!scrollingDown && !atTop)) return;
  }

  goTo(currentPanel + (dy > 0 ? 1 : -1));
}

/* ── Navigation clavier ── */

function onKey(e) {
  if (document.getElementById('modal').classList.contains('open')) return;
  if (e.key === 'ArrowDown' || e.key === 'PageDown') goTo(currentPanel + 1);
  if (e.key === 'ArrowUp'   || e.key === 'PageUp')   goTo(currentPanel - 1);
}


/* ============================================================
   6. CURSEUR PERSONNALISÉ
   Le point (#cursor-dot) suit exactement le pointeur en CSS.
   L'anneau (#cursor-ring) suit avec une inertie (lerp 10%)
   via requestAnimationFrame pour un effet de traîne fluide.
============================================================ */
function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  // Position courante de l'anneau (avec inertie)
  let rx = -100, ry = -100;
  // Position cible (souris)
  let mx = -100, my = -100;

  // Mise à jour immédiate du point
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  // Anneau : interpolation linéaire (lerp) vers la cible à chaque frame
  function follow() {
    rx += (mx - rx) * 0.1;   // 10% de la distance restante à chaque frame
    ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(follow);
  }
  follow();

  // Agrandir l'anneau au survol des éléments interactifs
  document.querySelectorAll('a, button, .pe, .clink').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovered'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovered'));
  });
}


/* ============================================================
   7. THÈME CLAIR / SOMBRE
   La classe .light sur <body> bascule les variables CSS.
   Le choix est persisté dans localStorage.
============================================================ */
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  // Restaurer le thème sauvegardé
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
  }

  btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });
}


/* ============================================================
   8. INTERACTIONS
============================================================ */

/* ── Points de navigation latéraux ── */
function initDots() {
  document.querySelectorAll('.side-dot').forEach(d => {
    d.addEventListener('click', () => goTo(+d.dataset.goto));
  });
}

/* ── Boutons avec data-goto (CTA du Hero) ── */
function initBtns() {
  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => goTo(+btn.dataset.goto));
  });
}

/* ── Onglets Académiques / Personnels (panel Projets) ── */
function initTabs() {
  document.querySelectorAll('.ptab').forEach(tab => {
    tab.addEventListener('click', () => {
      // Désactiver tous les onglets et listes
      document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.plist').forEach(l => l.classList.remove('active'));

      // Activer l'onglet cliqué et sa liste correspondante
      tab.classList.add('active');
      const list = document.getElementById('pl-' + tab.dataset.ptab);
      if (list) {
        list.classList.add('active');
        // Animer les entrées de la liste nouvellement affichée
        gsap.fromTo(
          list.querySelectorAll('.pe, .personal-box'),
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: .5, ease: EASE, stagger: 0.05 }
        );
      }
    });
  });
}


/* ============================================================
   9. MODAL PROJET
   S'ouvre au clic sur une entrée de projet (.pe).
   Construit dynamiquement le carousel média + les informations
   à partir des données dans projectData[idx].
============================================================ */

/* ── Ouverture ── */
function openModal(idx) {
  const info = projectData[idx];
  if (!info) return;

  const modal = document.getElementById('modal');
  const media = document.getElementById('modal-media');
  const minfo = document.getElementById('modal-info');

  // Construire les slides du carousel selon le type de média
  let items    = [];
  let hasVideo = false;

  if (info.youtube) {
    // Projet avec vidéo YouTube — un seul slide en iframe
    hasVideo = true;
    items = [`<div class="car-item active" data-index="0">
      <iframe src="https://www.youtube.com/embed/${info.youtube}?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
    </div>`];
  } else if (info.images) {
    // Projet avec images — un slide par image
    items = info.images.map((src, i) =>
      `<div class="car-item${i === 0 ? ' active' : ''}" data-index="${i}">
        <img src="${src}" alt="${info.title}" loading="lazy"/>
      </div>`
    );
  }

  const multi = items.length > 1;

  // Onglets (infrastructure disponible, non utilisée actuellement)
  const tabsHtml = '';

  // Flèches de navigation uniquement pour les projets multi-images
  const arrows = (!hasVideo && multi) ? `
    <button class="car-prev"><i class="fas fa-chevron-left"></i></button>
    <button class="car-next"><i class="fas fa-chevron-right"></i></button>` : '';

  // Injecter le carousel dans la colonne gauche
  media.innerHTML = items.length ? `
    <div class="carousel">
      ${tabsHtml}
      <div class="car-track">
        ${arrows}
        ${items.join('')}
      </div>
    </div>` : '';

  // Injecter titre + détails dans la colonne droite
  minfo.innerHTML = `<h2>${info.title}</h2><div>${info.details}</div>`;

  modal.classList.add('open');

  // Brancher la navigation flèches si plusieurs images
  if (!hasVideo && multi) {
    let cur = 0;
    const itemEls = modal.querySelectorAll('.car-item');
    const prev    = modal.querySelector('.car-prev');
    const next    = modal.querySelector('.car-next');

    // Fonction de navigation circulaire
    const go = i => {
      cur = (i + itemEls.length) % itemEls.length;
      itemEls.forEach((el, j) => el.classList.toggle('active', j === cur));
    };

    prev && prev.addEventListener('click', () => go(cur - 1));
    next && next.addEventListener('click', () => go(cur + 1));
  }
}

/* ── Fermeture ── */
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('open');
  // Couper les iframes YouTube pour stopper la lecture audio/vidéo
  modal.querySelectorAll('iframe').forEach(f => { f.src = ''; });
  modal.querySelectorAll('video').forEach(v => v.pause());
}

/* ── Initialisation des événements du modal ── */
function initModal() {
  const modal = document.getElementById('modal');
  if (!modal) return;

  // Fermeture : bouton ×, clic sur l'overlay, touche Échap
  document.getElementById('modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Ouvrir le modal au clic sur une entrée de projet
  document.querySelectorAll('.pe').forEach(el => {
    el.addEventListener('click', () => openModal(+el.dataset.index));
  });
}


/* ============================================================
   10. FORMULAIRE DE CONTACT
   Soumission asynchrone via Formspree.
   Le bouton est désactivé pendant l'envoi pour éviter le double-submit.
   Un message de confirmation apparaît 4 secondes puis disparaît.
============================================================ */
function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const ok  = document.getElementById('form-ok');

  // Affiche un message (succès ou erreur) sous le formulaire
  const showMsg = (text, isError) => {
    if (!ok) return;
    ok.textContent = text;
    ok.style.color = isError ? '#ff6b6b' : '';
    ok.style.display = 'block';
    gsap.fromTo(ok, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .4 });
    setTimeout(() => {
      gsap.to(ok, { opacity: 0, duration: .3, onComplete: () => ok.style.display = 'none' });
    }, 4000);
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const btn = form.querySelector('.btn-send');
    btn.textContent = '…';     // indicateur de chargement
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });

      if (res.ok) {
        form.reset();
        showMsg('Message envoyé !', false);
      } else {
        // Formspree renvoie un JSON avec le détail de l'erreur
        let detail = `Erreur ${res.status}`;
        try {
          const data = await res.json();
          if (data.errors && data.errors.length) {
            detail = data.errors.map(er => er.message).join(', ');
          }
        } catch (_) { /* réponse non-JSON */ }
        showMsg("Échec de l'envoi : " + detail, true);
        console.error('Formspree:', res.status, detail);
      }
    } catch (err) {
      // Erreur réseau / CORS (typiquement en local file://)
      showMsg("Erreur réseau — réessaie une fois le site en ligne.", true);
      console.error('Envoi formulaire échoué :', err);
    }

    // Restaurer le bouton dans tous les cas
    btn.innerHTML = 'Envoyer <i class="fas fa-paper-plane"></i>';
    btn.disabled = false;
  });
}


/* ============================================================
   11. ANIMATION D'ENTRÉE DU HERO (premier chargement)
   Jouée une seule fois au chargement de la page.
   Légèrement différente de animatePanelContent(p0) :
   durées plus longues, délai initial, pour un effet plus
   "cinématique" à l'arrivée sur le site.
============================================================ */
function heroEntrance() {
  const p0 = panels[0];
  const tl = gsap.timeline({ delay: 0.05 });

  tl
    .fromTo(p0.querySelector('#hn1'),
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
    // Calques décoratifs : s'estompent progressivement en arrière-plan
    .fromTo(p0.querySelector('.bg-digit'),
      { opacity: 0, scale: 1.08 },
      { opacity: 1, scale: 1, duration: 1.5, ease: EASE },
      0.2
    )
    .fromTo(p0.querySelector('.bg-shapes'),
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: EASE },
      0.4
    );
}


/* ============================================================
   12. POINT D'ENTRÉE — DOMContentLoaded
   Initialise tous les modules dans l'ordre, branche les
   événements globaux, puis déclenche l'animation d'entrée.
============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // Modules core
  initPanels();
  initCursor();
  initTheme();

  // Interactions
  initDots();
  initBtns();
  initTabs();
  initModal();
  initForm();

  // Événements de navigation
  window.addEventListener('wheel',      onWheel,      { passive: false });
  window.addEventListener('touchstart', onTouchStart, { passive: true  });
  window.addEventListener('touchend',   onTouchEnd,   { passive: true  });
  window.addEventListener('keydown',    onKey);

  // Rendre P0 immédiatement visible (GSAP l'a mis à opacity:0 via initPanels)
  gsap.set(panels[0], { opacity: 1, yPercent: 0, scale: 1, pointerEvents: 'all' });

  // Animation d'entrée cinématique du Hero
  heroEntrance();
});
// Données d'exemple pour chaque projet (à adapter selon tes projets)
const projectData = [
  {
    title: "Création d'un site web institutionnel d'une entreprise",
    images: ["img/Atos_Origin_logo.jpg"],
    details: `
      <p><strong> Outils utilisés :</strong></p>
        <ul>
          <li>Word et internet</li>
          <li>Whimsical</li>
          <li>Visual Studio Code</li>
          <li>HTML, CSS et JavaScript</li>
        </ul>
        <p>Le but de ce projet a été la recherche d’informations et la création d’un site internet pour des élèves de troisième
          recherchant un stage de découverte dans une grande ESN (Entreprise de Services Numériques). 
          Ce projet a donc été découpé en 3 grandes parties.
       </p>
       <p>La première partie consistait à faire des recherches sur l’entreprise que nous avions choisi de présenter aux 
         élèves de troisième, en utilisant le site officiel de cette dernière. Lors de nos recherches, nous nous sommes 
         concentrés sur les informations qui nous paraissaient les plus pertinentes pour des jeunes et les avons séparées 
         en plusieurs catégories (Brève présentation de l’entreprise, des clients, des produits, des métiers etc.).
       </p>
       <p>La deuxième partie consistait à la conception du site. Dans cette partie,   nous avons donc confectionné une maquette 
         du rendu de notre site pour avoir une idée du rendu final.</p>
    `
  },
  {
    title: "Naufrage du Titanic",
    images: ["img/titanic1.avif", "img/titanic2.png"],
    details: `
      <p><strong> Outils utilisés :</strong></p>
        <ul>
          <li>Word, internet et machine virtuelle</li>
          <li>SQL et commandes shell</li>
        </ul>
        <p>Le but de ce projet a été l’installation d’un serveur Debian sur une machine virtuelle. 
          Ce projet a été découpé en 2 grandes étapes.</p>
        <p>La première a été l’installation du serveur sur une machine virtuelle, incluant aussi l’installation d’Apache, 
          de PostgreSQL et de PHP.</p>
        <p>La deuxième partie consistait à rédiger un guide d’installation en anglais décrivant précisément toutes les étapes 
          nécessaires pour l’installation du serveur, d’Apache, de PostgreSQL ainsi que PHP et la création d’une petite base de données 
          sur ce serveur.</p>
    `
  },
   {
    title: "Installation de services réseaux",
    images: ["img/Debian.png", "img/LogoPostgreSql.png","img/Apache.png", "img/PHP-logo.png"],
    details: `
      <p><strong> Outils utilisés :</strong></p>
        <ul> 
                        <p>Outils utilisés : </p>
                        <li>Word, internet et machine virtuelle</li>
                        <li>SQL et commandes shell</li>
                    </ul>
                    <p>Le but de ce projet a été l’installation d’un serveur Debian sur une machine virtuelle. Ce projet a été découpé en 2 grandes étapes.</p>

                    <p>La première a été l’installation du serveur sur une machine virtuelle, incluant aussi l’installation d’Apache, de PostgreSQL et de PHP. </p>

                    <p>La deuxième partie consistait à rédiger un guide d’installation en Anglais décrivant précisément toutes les étapes nécessaires pour l’installation du serveur, d’Apache, de PostgreSQL ainsi que PHP et la création d’une petite base de données sur ce serveur.</p>
    `
  },
  {  
  title: "Application web de valorisation du patrimoine culturel",
  images: ["img/Archeopass.png", "img/Archeo_carte.png", "img/archeo_actu.png", "img/archeo_panier.png"],
  details: `
    <p><strong>Outils utilisés :</strong></p>
      <ul>
        <li>HTML, CSS, PHP, SQL</li>
        <li>Machines virtuelles, serveur Apache</li>
      </ul>
      <p>Ce projet a été réalisé dans le cadre d'une SAÉ en équipe de 6 étudiants. L'objectif était de concevoir une application client-serveur destinée à valoriser le patrimoine culturel français, en s'appuyant sur les données ouvertes de data.gouv.fr.</p>
      <p>Nous avons développé un site web dédié aux sites archéologiques français, avec authentification, gestion des comptes utilisateurs et deux options de réservation originales :</p>
      <ul>
        <li><strong>Pack Visite</strong> : permet de réserver plusieurs visites à tarif réduit</li>
        <li><strong>Pack Rencontre</strong> : permet de rejoindre un groupe d'utilisateurs pour une visite partagée, afin de favoriser les échanges et réduire les coûts</li>
      </ul>
      <p>Ce projet a mobilisé des compétences en développement web, base de données, modélisation UML, gestion de projet, qualité logicielle et communication professionnelle.</p>
      <p>Nous avons suivi une démarche complète allant du recueil du besoin jusqu'à la livraison, en passant par l'analyse, la modélisation, le codage, les tests et la documentation.</p>
  `
},
{
  title: "Mon carnet de suivi de recherche de stage",
  images: ["img/appli_mobile.png","img/Symphony_Logo.png", "img/logo_docker.svg", "img/android_logo.webp"],
  details: 
    `<p><strong>Outils utilisés :</strong></p>
    <ul>
      <li>Symfony (PHP), Java (Android), SQL (3NF), Docker</li>
      <li>Qualité logicielle : norme ISO 25000 (SQuaRE), tests fonctionnels</li>
      <li>Outils de collaboration : Git, Notion, Trello</li>
    </ul>

    <p>Ce projet a été réalisé en équipe dans le cadre d’une SAE de 2ᵉ année de BUT informatique. 
    Il portait sur l’amélioration d’une application existante nommée <em>Mon carnet de suivi de recherche de stage</em>, utilisée par les étudiants pour gérer leur recherche de stage, et par les enseignants pour suivre leur avancement.</p>

    <p>Nous avons commencé par une phase de rétroconception pour analyser le code existant, comprendre sa structure et identifier les points à améliorer. Ensuite, nous avons retravaillé le modèle de données pour le rendre conforme à la 3NF, ce qui a permis d'améliorer la cohérence et les performances de la base.</p>

    <p>Sur le plan technique, nous avons restructuré le code du back-end Symfony en séparant mieux les responsabilités et en mettant en place des services. L’interface web côté responsable a aussi été ajustée pour une meilleure lisibilité et une navigation plus fluide.</p>

    <p>En parallèle, l'application mobile Android destinée aux étudiants a été corrigée sur plusieurs aspects ergonomiques et techniques. Nous avons optimisé la navigation, corrigé des bugs et amélioré la gestion du cycle de vie.</p>

    <p>Nous avons également conteneurisé l’ensemble du projet avec Docker pour garantir un environnement de développement stable et un déploiement simplifié. Enfin, des tests fonctionnels ont été réalisés et des critères qualité issus de la norme ISO 25000 (SQuaRE) ont été appliqués pour assurer la fiabilité et la maintenabilité de l'application.</p>

    <p>Ce projet nous a permis de consolider nos compétences en architecture logicielle, en développement mobile et web, tout en renforçant notre capacité à travailler efficacement en équipe.</p>`
}


];

window.addEventListener('DOMContentLoaded', function () {
  // Gestion du bouton "back to top"
  document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Formulaire : afficher le message sans recharger la page
  const form = document.querySelector('form');
  const message = document.getElementById('form-message');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    message.style.display = 'block';
  });

  // Gestion des modales projets
 // Exemple avec des images dans un carrousel
document.querySelectorAll('.project').forEach((project, index) => {
  project.style.cursor = 'pointer';
  project.addEventListener('click', function (e) {
    e.stopPropagation();
    const modal = document.getElementById('project-modal');
    const modalContent = document.querySelector('#project-modal .modal-details');

    // Récupérer les données du projet 
    const projectInfo = projectData[index]; 

    const carouselHTML = `
      <div class="carousel">
        <button class="carousel-prev" aria-label="Image précédente">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <polyline points="13 5 8 10 13 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="carousel-images">
          ${projectInfo.images.map((src, i) => `
            <img src="${src}" class="carousel-image ${i === 0 ? 'active' : ''}" />
          `).join('')}
        </div>
        <button class="carousel-next" aria-label="Image suivante">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <polyline points="7 5 12 10 7 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="project-details">${projectInfo.details}</div>
    `;

    modalContent.innerHTML = carouselHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Initialiser les flèches
    initCarousel();
  });
});

function initCarousel() {
  const images = document.querySelectorAll('.carousel-image');
  const prev = document.querySelector('.carousel-prev');
  const next = document.querySelector('.carousel-next');
  if (!images.length || !prev || !next) return;
  let current = 0;

  function show(idx) {
    images.forEach((img, i) => img.classList.toggle('active', i === idx));
  }
  prev.onclick = () => {
    current = (current - 1 + images.length) % images.length;
    show(current);
    prev.classList.add('clicked');
    setTimeout(() => prev.classList.remove('clicked'), 200);
  };
  next.onclick = () => {
    current = (current + 1) % images.length;
    show(current);
    next.classList.add('clicked');
    setTimeout(() => next.classList.remove('clicked'), 200);
  };
  show(current);
}



  // Fermeture de la modale
  function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('closing');
    setTimeout(() => {
      modal.style.display = 'none';
      modal.classList.remove('closing');
      document.body.style.overflow = '';
    }, 350);
  }
  document.querySelector('.close-modal').onclick = closeModal;
  window.addEventListener('click', function (e) {
    const modal = document.getElementById('project-modal');
    if (e.target === modal) closeModal();
  });

  // Mode sombre
  const themeBtn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark)) {
    document.body.classList.add('dark');
  }
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });

  // Hamburger menu logic
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
    // Prevent body scroll when menu open
    if (nav.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  // Close nav when clicking a link (on mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  });
});


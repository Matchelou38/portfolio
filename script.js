// Données d'exemple pour chaque projet (à adapter selon tes projets)
const projectData = [
  {
    title: "Création d'un site web institutionnel d'une entreprise",
    images: ["img/projet1-1.jpg", "img/projet1-2.jpg"], // Mets tes vraies images ici
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
          Ce projet à donc été découpé en 3 grande parties.
       </p>
       <p>La première partie consistait à faire des recherches sur l’entreprise que nous avions choisit de présenter aux 
         élèves de troisième, en utilisant le site officiel de cette dernière. Lors de nos recherches nous nous sommes 
         concentrés sur les informations qui nous paraissaient les plus pertinentes pour des jeunes et les avons séparés 
         en plusieurs catégories (Brève présentation de l’entreprise, des clients, des produits, des métiers etc.).
       </p>
       <p>La deuxième partie consistait à la conception du site. Dans cette partie nous avons donc confectionné une maquette 
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
        <p>La deuxième partie consistait à rédiger un guide d’installation en Anglais décrivant précisément toutes les étapes 
          nécessaires pour l’installation du serveur, d’Apache, de PostgreSQL ainsi que PHP et la création d’une petite base de données 
          sur ce serveur.</p>
    `
  }
  // Ajoute d'autres projets ici
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
});


import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen">
    <!-- Navigation -->
    <nav class="nav">
      <div class="container nav-container">
        <a href="#" class="nav-logo">
          <img src="/images/logo.png" alt="Salem Logo">
        </a>
        <div class="nav-links">
          <a href="#challenges" class="nav-link">Défis</a>
          <a href="#features" class="nav-link">Fonctionnalités</a>
          <a href="#field-design" class="nav-link">Terrain</a>
          <a href="#about" class="nav-link">À propos</a>
          <a href="#partners" class="nav-link">Partenaires</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
        <button class="btn-primary">Demander une démo</button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="section-padding relative" style="background: url('/src/public/images/background.jpg') center/cover no-repeat;">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="container relative">
        <div class="grid grid-cols-2 items-center">
          <div class="slide-in-left text-white">
            <h1 class="section-title text-left text-white mb-6">
              La technologie qui rend la finance <span class="text-primary-light">plus humaine</span>
            </h1>
            <p class="section-subtitle text-left text-white/80 mb-8">
              Une solution conçue pour aider les institutions de microfinance à <strong>accorder des prêts plus rapidement</strong>, <strong>mieux suivre leurs clients</strong> et <strong>étendre leur impact</strong>, sans jamais perdre le contact humain.
            </p>
            <button class="btn-primary">
              <i class="fas fa-bolt icon-primary"></i> Demander une démo gratuite
            </button>
          </div>
          <div class="slide-in-right">
            <img src="/images/hero-image.png" alt="Application Salem Finance" class="float-animation">
          </div>
        </div>
      </div>
    </section>

    <!-- Challenges Section -->
    <section id="challenges" class="section-padding bg-white">
      <div class="container mx-auto px-4">
        <h2 class="section-title fade-up">Les défis des institutions de microfinance</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="feature-card delay-100">
            <div class="text-4xl mb-4 text-primary">
              <i class="fas fa-file-alt"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Processus Manuels</h3>
            <p class="text-gray-600">Trop de papier et de saisie manuelle, entraînant des inefficacités</p>
          </div>
          <div class="feature-card delay-200">
            <div class="text-4xl mb-4 text-primary">
              <i class="fas fa-sync-alt"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Fichiers Dispersés</h3>
            <p class="text-gray-600">Les dossiers clients sont éparpillés et difficiles à retrouver</p>
          </div>
          <div class="feature-card delay-300">
            <div class="text-4xl mb-4 text-primary">
              <i class="fas fa-hourglass-half"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Longs Délais</h3>
            <p class="text-gray-600">Temps d'attente excessif entre la demande et l'approbation</p>
          </div>
          <div class="feature-card delay-400">
            <div class="text-4xl mb-4 text-primary">
              <i class="fas fa-hand-holding-usd"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Suivi des Dettes Manuel</h3>
            <p class="text-gray-600">Processus de recouvrement complexe et manuel</p>
          </div>
          <div class="feature-card delay-500">
            <div class="text-4xl mb-4 text-primary">
              <i class="fas fa-university"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Ouvertures de Comptes Dispersées</h3>
            <p class="text-gray-600">Non connectées aux applications existantes</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="section-padding">
      <div class="container">
        <h2 class="section-title fade-up">Ce que notre application vous permet de faire</h2>
        <p class="section-subtitle fade-up">Une plateforme unique pour gérer toutes vos activités de crédit et de compte</p>
        <div class="grid grid-cols-4">
          <div class="feature-card delay-100">
            <h3>
              <i class="fas fa-folder-plus icon-primary text-4xl mb-4"></i>
              <div class="text-primary font-bold text-xl">Création de Dossiers</div>
            </h3>
            <p class="text-gray-800 mt-2">Créez des dossiers clients directement sur le terrain</p>
          </div>
          <div class="feature-card delay-200">
            <h3>
              <i class="fas fa-calculator icon-primary text-4xl mb-4"></i>
              <div class="text-primary font-bold text-xl">Scoring Automatique</div>
            </h3>
            <p class="text-gray-800 mt-2">Basé sur les cadres SFD pour le nano et microcrédit</p>
          </div>
          <div class="feature-card delay-300">
            <h3>
              <i class="fas fa-clipboard-check icon-primary text-4xl mb-4"></i>
              <div class="text-primary font-bold text-xl">Visites Terrain</div>
            </h3>
            <p class="text-gray-800 mt-2">Avec photos, commentaires et signatures</p>
          </div>
          <div class="feature-card delay-400">
            <h3>
              <i class="fas fa-cloud-upload-alt icon-primary text-4xl mb-4"></i>
              <div class="text-primary font-bold text-xl">Transmission Directe</div>
            </h3>
            <p class="text-gray-800 mt-2">Partage instantané avec les gestionnaires</p>
          </div>
          <div class="feature-card delay-500">
            <h3>
              <i class="fas fa-tasks icon-primary text-4xl mb-4"></i>
              <div class="text-primary font-bold text-xl">Suivi des Statuts</div>
            </h3>
            <p class="text-gray-800 mt-2">Pending, transmis, validé, refusé</p>
          </div>
          <div class="feature-card delay-600">
            <h3>
              <i class="fas fa-wallet icon-primary text-4xl mb-4"></i>
              <div class="text-primary font-bold text-xl">Module Comptes</div>
            </h3>
            <p class="text-gray-800 mt-2">Ouverture de comptes épargne ou courant</p>
          </div>
          <div class="feature-card delay-700">
            <h3>
              <i class="fas fa-coins icon-primary text-4xl mb-4"></i>
              <div class="text-primary font-bold text-xl">Gestion des Dettes</div>
            </h3>
            <p class="text-gray-800 mt-2">Digitalisation du recouvrement</p>
          </div>
          <div class="feature-card delay-800">
            <h3>
              <i class="fas fa-chart-line icon-primary text-4xl mb-4"></i>
              <div class="text-primary font-bold text-xl">Tableau de Bord</div>
            </h3>
            <p class="text-gray-800 mt-2">Performance des agents terrain</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Field Design Section -->
    <section id="field-design" class="section-padding">
      <div class="container">
        <h2 class="section-title fade-up">Conçu pour le terrain, utile au siège</h2>
        <div class="grid grid-cols-4">
          <div class="feature-card delay-100">
            <div class="text-4xl mb-4">
              <i class="fas fa-wifi-slash icon-primary"></i>
              <i class="fas fa-sync icon-primary ml-2"></i>
            </div>
            <h3 class="text-primary font-bold text-xl">Mode Hors-ligne</h3>
            <p class="text-gray-800 mt-2">Synchronisation automatique dès le retour du réseau</p>
          </div>
          <div class="feature-card delay-200">
            <div class="text-4xl mb-4">
              <i class="fas fa-mobile-alt icon-primary"></i>
            </div>
            <h3 class="text-primary font-bold text-xl">Multi-appareils</h3>
            <p class="text-gray-800 mt-2">Compatible smartphones, tablettes et terminaux</p>
          </div>
          <div class="feature-card delay-300">
            <div class="text-4xl mb-4">
              <i class="fas fa-graduation-cap icon-primary"></i>
            </div>
            <h3 class="text-primary font-bold text-xl">Formation Rapide</h3>
            <p class="text-gray-800 mt-2">Utilisable après 1h de formation</p>
          </div>
          <div class="feature-card delay-400">
            <div class="text-4xl mb-4">
              <i class="fas fa-shield-alt icon-primary"></i>
            </div>
            <h3 class="text-primary font-bold text-xl">Transmissions Sécurisées</h3>
            <p class="text-gray-800 mt-2">Sans perte d'information</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section-padding">
      <div class="container">
        <h2 class="section-title fade-up">Ce que vous gagnez</h2>
        <div class="grid grid-cols-3">
          <div class="stat-card delay-100">
            <div class="stat-number" data-target="70" data-suffix="%">0%</div>
            <div class="stat-label">de temps gagné sur les demandes</div>
          </div>
          <div class="stat-card delay-200">
            <div class="stat-number" data-target="90" data-suffix="%+">0%</div>
            <div class="stat-label">de dossiers complets</div>
          </div>
          <div class="stat-card delay-300">
            <div class="stat-number" data-target="48" data-suffix="h">0h</div>
            <div class="stat-label">délai maximum de validation</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding bg-white">
      <div class="container mx-auto px-4">
        <h2 class="section-title fade-up">Une solution à impact : À propos de nous</h2>
        <div class="max-w-3xl mx-auto text-center fade-up">
          <p class="text-lg text-gray-600 mb-6">
            Nous sommes une équipe engagée dans la transformation des pratiques de financement en Afrique.
            Notre objectif est simple : équiper les institutions de microfinance d'une technologie fiable,
            accessible et centrée sur l'humain.
          </p>
          <p class="text-lg text-gray-600 mb-6">
            Notre solution est née d'un constat terrain : les agents sont confrontés à des outils lourds,
            manuels et mal adaptés. Le crédit est lent, parfois risqué et souvent difficile à suivre.
          </p>
          <p class="text-lg text-gray-600 mb-6">
            Nous avons conçu cette plateforme pour permettre aux IMF de :
          </p>
          <ul class="text-left list-none space-y-4 mb-8">
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              Atteindre plus de bénéficiaires
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              Prendre de meilleures décisions, plus rapidement
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              Mieux suivre les remboursements
            </li>
            <li class="flex items-center">
              <i class="fas fa-check-circle text-primary mr-2"></i>
              Valoriser le travail de leurs agents
            </li>
          </ul>
          <p class="text-xl font-semibold text-primary quote-text">
            "L'inclusion financière commence par de bons outils. Et nous sommes là pour vous les fournir."
          </p>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section id="partners" class="section-padding bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="section-title fade-up">Nos Partenaires</h2>
        <div class="partners-slider">
          <div class="partners-track">
            <div class="partner-logo">
              <img src="/images/partners/logo1.png" alt="Partner 1" class="h-16 w-auto">
            </div>
            <div class="partner-logo">
              <img src="/images/partners/logo2.png" alt="Partner 2" class="h-16 w-auto">
            </div>
            <div class="partner-logo">
              <img src="/images/partners/logo3.png" alt="Partner 3" class="h-16 w-auto">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-padding">
      <div class="container">
        <h2 class="section-title fade-up">Prêt à moderniser votre gestion de crédit ?</h2>
        <div class="max-w-md mx-auto form-container">
          <form class="space-y-6">
            <div class="form-field delay-100">
              <label>Nom Complet</label>
              <input type="text" class="form-input" placeholder="Votre nom complet">
            </div>
            <div class="form-field delay-200">
              <label>Nom de l'Institution</label>
              <input type="text" class="form-input" placeholder="Nom de votre institution">
            </div>
            <div class="form-field delay-300">
              <label>Email</label>
              <input type="email" class="form-input" placeholder="votre@email.com">
            </div>
            <div class="form-field delay-400">
              <label>Téléphone</label>
              <input type="tel" class="form-input" placeholder="+1 234 567 890">
            </div>
            <button type="submit" class="btn-primary w-full">
              <i class="fas fa-calendar-alt"></i> Planifier une démo gratuite
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-primary text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="space-y-4">
            <img src="/images/logoblanc.png" alt="Salem Logo" class="h-10 w-auto mb-4 filter brightness-0 invert">
            <p class="text-sm">La technologie qui rend la finance plus humaine</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Navigation</h3>
            <ul class="space-y-2">
              <li><a href="#challenges" class="hover:text-white/80">Défis</a></li>
              <li><a href="#features" class="hover:text-white/80">Fonctionnalités</a></li>
              <li><a href="#field-design" class="hover:text-white/80">Terrain</a></li>
              <li><a href="#about" class="hover:text-white/80">À propos</a></li>
              <li><a href="#partners" class="hover:text-white/80">Partenaires</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact</h3>
            <ul class="space-y-2">
              <li><i class="fas fa-envelope mr-2"></i> contact@salem.finance</li>
              <li><i class="fas fa-phone mr-2"></i> +1 234 567 890</li>
              <li><i class="fas fa-map-marker-alt mr-2"></i> 123 Finance Street</li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Réseaux Sociaux</h3>
            <div class="flex space-x-4">
              <a href="#" class="hover:text-white/80"><i class="fab fa-linkedin text-2xl"></i></a>
              <a href="#" class="hover:text-white/80"><i class="fab fa-twitter text-2xl"></i></a>
              <a href="#" class="hover:text-white/80"><i class="fab fa-facebook text-2xl"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
`;

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  // Observe all animated elements
  document.querySelectorAll('.slide-in-left, .slide-in-right, .fade-up, .feature-card, .stat-card, .form-field').forEach((element) => {
    observer.observe(element);
  });

  // Partners slider animation
  const partnersTrack = document.querySelector('.partners-track');
  if (partnersTrack) {
    partnersTrack.addEventListener('mouseover', (e) => {
      const logo = e.target.closest('.partner-logo');
      if (logo) {
        logo.classList.add('partner-logo-hover');
      }
    });

    partnersTrack.addEventListener('mouseout', (e) => {
      const logo = e.target.closest('.partner-logo');
      if (logo) {
        logo.classList.remove('partner-logo-hover');
      }
    });
  }
});
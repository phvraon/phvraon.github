// Main content rendering
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
    <section class="section-padding">
      <div class="container">
        <div class="grid grid-cols-2">
          <div class="slide-in-left">
            <h1 class="section-title text-left">
              La technologie qui rend la finance <span class="text-primary">plus humaine</span>
            </h1>
            <p class="section-subtitle text-left">
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
    <section id="challenges" class="section-padding">
      <div class="container">
        <h2 class="section-title fade-up">Les défis des institutions de microfinance</h2>
        <div class="grid grid-cols-3">
          <div class="feature-card delay-100">
            <div class="text-4xl mb-4">
              <i class="fas fa-file-alt icon-primary"></i>
            </div>
            <h3>Processus Manuels</h3>
            <p>Trop de papier et de saisie manuelle, entraînant des <strong>inefficacités</strong></p>
          </div>
          <div class="feature-card delay-200">
            <div class="text-4xl mb-4">
              <i class="fas fa-sync-alt icon-primary"></i>
            </div>
            <h3>Fichiers Dispersés</h3>
            <p>Les dossiers clients sont <strong>éparpillés</strong> et difficiles à retrouver</p>
          </div>
          <div class="feature-card delay-300">
            <div class="text-4xl mb-4">
              <i class="fas fa-hourglass-half icon-primary"></i>
            </div>
            <h3>Longs Délais</h3>
            <p>Temps d'attente <strong>excessif</strong> entre la demande et l'approbation</p>
          </div>
          <div class="feature-card delay-400">
            <div class="text-4xl mb-4">
              <i class="fas fa-hand-holding-usd icon-primary"></i>
            </div>
            <h3>Suivi des Dettes Manuel</h3>
            <p>Processus de recouvrement <strong>complexe</strong> et manuel</p>
          </div>
          <div class="feature-card delay-500">
            <div class="text-4xl mb-4">
              <i class="fas fa-university icon-primary"></i>
            </div>
            <h3>Ouvertures de Comptes Dispersées</h3>
            <p>Non connectées aux <strong>applications existantes</strong></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="section-padding">
      <div class="container">
        <h2 class="section-title fade-up text-primary">Ce que notre application vous permet de faire</h2>
        <p class="section-subtitle fade-up text-primary-light">Une plateforme unique pour gérer toutes vos activités de crédit et de compte</p>
        <div class="grid grid-cols-4">
          <div class="feature-card delay-100">
            <h3 class="text-primary">
              <i class="fas fa-check-circle icon-primary"></i> Création de Dossiers
            </h3>
            <p class="text-primary-dark">Créez des dossiers clients <strong>directement sur le terrain</strong></p>
          </div>
          <div class="feature-card delay-200">
            <h3 class="text-primary">
              <i class="fas fa-check-circle icon-primary"></i> Scoring Automatique
            </h3>
            <p class="text-primary-dark">Basé sur les cadres SFD pour le <strong>nano et microcrédit</strong></p>
          </div>
          <div class="feature-card delay-300">
            <h3 class="text-primary">
              <i class="fas fa-check-circle icon-primary"></i> Visites Terrain
            </h3>
            <p class="text-primary-dark">Avec <strong>photos, commentaires et signatures</strong></p>
          </div>
          <div class="feature-card delay-400">
            <h3 class="text-primary">
              <i class="fas fa-check-circle icon-primary"></i> Transmission Directe
            </h3>
            <p class="text-primary-dark"><strong>Partage instantané</strong> avec les gestionnaires</p>
          </div>
          <div class="feature-card delay-500">
            <h3 class="text-primary">
              <i class="fas fa-tasks icon-primary"></i> Suivi des Statuts
            </h3>
            <p class="text-primary-dark"><strong>Pending, transmis, validé, refusé</strong></p>
          </div>
          <div class="feature-card delay-600">
            <h3 class="text-primary">
              <i class="fas fa-wallet icon-primary"></i> Module Comptes
            </h3>
            <p class="text-primary-dark">Ouverture de comptes <strong>épargne ou courant</strong></p>
          </div>
          <div class="feature-card delay-700">
            <h3 class="text-primary">
              <i class="fas fa-coins icon-primary"></i> Gestion des Dettes
            </h3>
            <p class="text-primary-dark"><strong>Digitalisation</strong> du recouvrement</p>
          </div>
          <div class="feature-card delay-800">
            <h3 class="text-primary">
              <i class="fas fa-chart-line icon-primary"></i> Tableau de Bord
            </h3>
            <p class="text-primary-dark"><strong>Performance</strong> des agents terrain</p>
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
            </div>
            <h3>Mode Hors-ligne</h3>
            <p><strong>Synchronisation automatique</strong> dès le retour du réseau</p>
          </div>
          <div class="feature-card delay-200">
            <div class="text-4xl mb-4">
              <i class="fas fa-mobile-alt icon-primary"></i>
            </div>
            <h3>Multi-appareils</h3>
            <p>Compatible <strong>smartphones, tablettes et terminaux</strong></p>
          </div>
          <div class="feature-card delay-300">
            <div class="text-4xl mb-4">
              <i class="fas fa-graduation-cap icon-primary"></i>
            </div>
            <h3>Formation Rapide</h3>
            <p>Utilisable après <strong>1h de formation</strong></p>
          </div>
          <div class="feature-card delay-400">
            <div class="text-4xl mb-4">
              <i class="fas fa-shield-alt icon-primary"></i>
            </div>
            <h3>Transmissions Sécurisées</h3>
            <p><strong>Sans perte d'information</strong></p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding">
      <div class="container">
        <h2 class="section-title fade-up">Une solution à impact : À propos de nous</h2>
        <div class="max-w-3xl mx-auto text-center fade-up">
          <p class="text-lg text-gray-600 mb-6">
            Nous sommes une équipe engagée dans la <strong>transformation des pratiques de financement en Afrique</strong>.
            Notre objectif est simple : équiper les institutions de microfinance d'une technologie <strong>fiable,
            accessible et centrée sur l'humain</strong>.
          </p>
          <p class="text-lg text-gray-600 mb-6">
            Notre solution est née d'un constat terrain : les agents sont confrontés à des outils <strong>lourds,
            manuels et mal adaptés</strong>. Le crédit est lent, parfois risqué et souvent difficile à suivre.
          </p>
          <p class="text-lg text-gray-600 mb-6">
            Nous avons conçu cette plateforme pour permettre aux IMF de :
          </p>
          <ul class="text-left list-none space-y-4 mb-8 list-with-icons">
            <li>
              <i class="fas fa-check-circle"></i>
              <strong>Atteindre plus de bénéficiaires</strong>
            </li>
            <li>
              <i class="fas fa-check-circle"></i>
              <strong>Prendre de meilleures décisions, plus rapidement</strong>
            </li>
            <li>
              <i class="fas fa-check-circle"></i>
              <strong>Mieux suivre les remboursements</strong>
            </li>
            <li>
              <i class="fas fa-check-circle"></i>
              <strong>Valoriser le travail de leurs agents</strong>
            </li>
          </ul>
          <p class="quote-text">
            "L'inclusion financière commence par de bons outils. Et nous sommes là pour vous les fournir."
          </p>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section id="partners" class="section-padding">
      <div class="container">
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
            <!-- Duplicate logos for continuous scroll effect -->
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

    <!-- Stats Section -->
    <section class="section-padding">
      <div class="container">
        <h2 class="section-title fade-up">Ce que vous gagnez</h2>
        <div class="grid grid-cols-3">
          <div class="stat-card delay-100">
            <div class="stat-number">70%</div>
            <div class="stat-label">de temps gagné sur les demandes</div>
          </div>
          <div class="stat-card delay-200">
            <div class="stat-number">90%+</div>
            <div class="stat-label">de dossiers complets</div>
          </div>
          <div class="stat-card delay-300">
            <div class="stat-number">48h</div>
            <div class="stat-label">délai maximum de validation</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-padding">
      <div class="container">
        <h2 class="section-title fade-up">Prêt à moderniser votre gestion de crédit ?</h2>
        <div class="max-w-md mx-auto">
          <form class="space-y-6">
            <div class="form-field delay-100">
              <label>Nom Complet</label>
              <input type="text" class="form-input">
            </div>
            <div class="form-field delay-200">
              <label>Nom de l'Institution</label>
              <input type="text" class="form-input">
            </div>
            <div class="form-field delay-300">
              <label>Email</label>
              <input type="email" class="form-input">
            </div>
            <div class="form-field delay-400">
              <label>Téléphone</label>
              <input type="tel" class="form-input">
            </div>
            <button type="submit" class="btn-primary w-full">
              <i class="fas fa-calendar-alt icon-primary"></i> Planifier une démo gratuite
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <img src="/images/logo.png" alt="Salem Logo" class="footer-logo">
            <p>La technologie qui rend la finance plus humaine</p>
          </div>
          <div>
            <h3>Navigation</h3>
            <ul class="footer-links">
              <li><a href="#challenges">Défis</a></li>
              <li><a href="#features">Fonctionnalités</a></li>
              <li><a href="#field-design">Terrain</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#partners">Partenaires</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul class="footer-links">
              <li><i class="fas fa-envelope"></i> contact@salem.finance</li>
              <li><i class="fas fa-phone"></i> +1 234 567 890</li>
              <li><i class="fas fa-map-marker-alt"></i> 123 Finance Street</li>
            </ul>
          </div>
          <div>
            <h3>Réseaux Sociaux</h3>
            <div class="social-links">
              <a href="#"><i class="fab fa-linkedin"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-facebook"></i></a>
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
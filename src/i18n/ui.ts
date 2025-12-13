export const languages = {
  fr: 'Français',
  en: 'English',
};

export const defaultLang = 'fr';

export const ui = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.camp': 'Verbier Camp',
    'nav.programs': 'Programmes & Tarifs',
    'nav.tournament': 'Tournoi ITF Junior',
    'nav.bike': 'BIKE + PLAY',
    'nav.golf': 'GOLF + PLAY',
    'nav.accommodation': 'Hébergement',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    
    // CTAs
    'cta.learnMore': 'En savoir plus',
    'cta.register': "S'inscrire",
    'cta.contact': 'Nous contacter',
    'cta.moreInfo': 'Plus d\'infos',
    
    // Hero
    'hero.tagline': 'Faites progresser votre jeu avec du coaching professionnel dans le décor grandiose de Verbier',
    'hero.weeks': '6 SEMAINES EN 2026',
    'hero.dates': '06 Juillet - 15 Août',
    'hero.welcome': 'L\'équipe de Advanced Tennis Camp vous souhaite la bienvenue pour sa 19ème édition à Verbier',
    'hero.hashtag': '#BUILDTHENEXTGENERATION',
    
    // Footer
    'footer.copyright': '© 2025 Advanced Tennis Camp. Tous droits réservés.',
    'footer.address': 'Verbier, Valais, Suisse',
    'footer.terms': 'Conditions Générales',
    
    // Contact
    'contact.title': 'Contact',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.bookings': 'Réservations',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.camp': 'Verbier Camp',
    'nav.programs': 'Programs & Prices',
    'nav.tournament': 'ITF Junior Tournament',
    'nav.bike': 'BIKE + PLAY',
    'nav.golf': 'GOLF + PLAY',
    'nav.accommodation': 'Accommodation',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // CTAs
    'cta.learnMore': 'Learn more',
    'cta.register': 'Register',
    'cta.contact': 'Contact us',
    'cta.moreInfo': 'More info',
    
    // Hero
    'hero.tagline': 'Develop and advance your game with professional tuition in the stunning alpine surroundings of Verbier',
    'hero.weeks': '6 WEEKS IN 2026',
    'hero.dates': 'July 6 - August 15',
    'hero.welcome': 'Everyone at the Advanced Tennis Camp are delighted to welcome you to the 19th edition of the camp in Verbier',
    'hero.hashtag': '#BUILDTHENEXTGENERATION',
    
    // Footer
    'footer.copyright': '© 2025 Advanced Tennis Camp. All rights reserved.',
    'footer.address': 'Verbier, Valais, Switzerland',
    'footer.terms': 'Terms & Conditions',
    
    // Contact
    'contact.title': 'Contact',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.bookings': 'Bookings',
  },
} as const;

export type UIKey = keyof typeof ui[typeof defaultLang];


export const routes = {
  fr: {
    'home': '/',
    'camp': '/le-camp/',
    'tournament': '/tournoi-itf-junior/',
    'bike': '/bike-play/',
    'golf': '/golf-play/',
    'accommodation': '/hebergement/',
    'gallery': '/galerie/',
    'contact': '/contact/',
  },
  en: {
    'home': '/en/',
    'camp': '/en/the-camp/',
    'tournament': '/en/junior-tour/',
    'bike': '/en/bike-play/',
    'golf': '/en/golf-play/',
    'accommodation': '/en/accommodation/',
    'gallery': '/en/gallery/',
    'contact': '/en/contact/',
  },
} as const;

// Reverse mapping for route detection
export const routeToKey: Record<string, string> = {
  '/': 'home',
  '/le-camp/': 'camp',
  '/tournoi-itf-junior/': 'tournament',
  '/bike-play/': 'bike',
  '/golf-play/': 'golf',
  '/hebergement/': 'accommodation',
  '/galerie/': 'gallery',
  '/contact/': 'contact',
  '/en/': 'home',
  '/en/the-camp/': 'camp',
  '/en/junior-tour/': 'tournament',
  '/en/bike-play/': 'bike',
  '/en/golf-play/': 'golf',
  '/en/accommodation/': 'accommodation',
  '/en/gallery/': 'gallery',
  '/en/contact/': 'contact',
};

export type RouteKey = keyof typeof routes['fr'];


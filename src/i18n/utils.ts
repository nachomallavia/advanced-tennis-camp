import { ui, defaultLang, type UIKey } from './ui';
import { routes, routeToKey, type RouteKey } from './routes';

export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: UIKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRouteFromUrl(url: URL): RouteKey | undefined {
  let pathname = url.pathname;
  
  // Normalize pathname - ensure trailing slash
  if (!pathname.endsWith('/')) {
    pathname = pathname + '/';
  }
  
  // Try exact match
  if (routeToKey[pathname]) {
    return routeToKey[pathname] as RouteKey;
  }
  
  return undefined;
}

export function getLocalizedRoute(routeKey: RouteKey, lang: keyof typeof routes): string {
  return routes[lang][routeKey] || '/';
}

export function getAlternateUrl(url: URL): string {
  const currentLang = getLangFromUrl(url);
  const routeKey = getRouteFromUrl(url);
  const alternateLang = currentLang === 'fr' ? 'en' : 'fr';
  
  if (routeKey) {
    return getLocalizedRoute(routeKey, alternateLang);
  }
  
  return alternateLang === 'fr' ? '/' : '/en/';
}

// Navigation items for building menus
export function getNavItems(lang: keyof typeof ui) {
  const t = useTranslations(lang);
  
  return [
    { key: 'home', label: t('nav.home'), href: routes[lang].home },
    { key: 'camp', label: t('nav.camp'), href: routes[lang].camp },
    
    { key: 'tournament', label: t('nav.tournament'), href: routes[lang].tournament },
    { key: 'bike', label: t('nav.bike'), href: routes[lang].bike },
    { key: 'golf', label: t('nav.golf'), href: routes[lang].golf },
    { key: 'accommodation', label: t('nav.accommodation'), href: routes[lang].accommodation },
    { key: 'gallery', label: t('nav.gallery'), href: routes[lang].gallery },
    { key: 'contact', label: t('nav.contact'), href: routes[lang].contact },
  ];
}


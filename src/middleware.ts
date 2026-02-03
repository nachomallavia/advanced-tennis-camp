import { defineMiddleware } from 'astro:middleware';

const COOKIE_NAME = 'preferred_lang';

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, cookies, redirect, url } = context;
  
  // Skip middleware for static assets
  if (url.pathname.startsWith('/_') || 
      url.pathname.includes('.') && !url.pathname.endsWith('/')) {
    return next();
  }
  
  // Only handle root path redirects
  const isRootPath = url.pathname === '/' || url.pathname === '/en' || url.pathname === '/en/';
  if (!isRootPath) {
    return next();
  }
  
  // Get hostname and cookie
  const hostname = request.headers.get('host') || '';
  const cookieLang = cookies.get(COOKIE_NAME)?.value as 'en' | 'fr' | undefined;
  
  // Determine what language to show
  let targetLang: 'en' | 'fr';
  
  if (cookieLang) {
    // Cookie exists - use it
    targetLang = cookieLang;
  } else {
    // No cookie - use domain default
    targetLang = hostname.includes('.com') ? 'en' : 'fr';
  }
  
  // Redirect if needed
  const isEnglishPage = url.pathname.startsWith('/en');
  
  if (targetLang === 'en' && !isEnglishPage) {
    const redirectUrl = new URL('/en/', url.origin);
    redirectUrl.search = url.search;
    return redirect(redirectUrl.toString(), 302);
  }
  
  if (targetLang === 'fr' && isEnglishPage) {
    const redirectUrl = new URL('/', url.origin);
    redirectUrl.search = url.search;
    return redirect(redirectUrl.toString(), 302);
  }
  
  return next();
});

# Domain Language Detection Testing Guide

## Test Scenarios

### ✅ Scenario 1: First visit to .com domain
**Setup:**
- Clear all cookies for the site
- Visit: `https://advancedtenniscamp.com/` (or `http://local.advancedtenniscamp.com:4321/`)

**Expected:**
- Should redirect to `/en/`
- Cookie `preferred_lang` should be set to `en`
- URL should be: `https://advancedtenniscamp.com/en/`

### ✅ Scenario 2: First visit to .ch domain
**Setup:**
- Clear all cookies for the site
- Visit: `https://advancedtenniscamp.ch/` (or `http://local.advancedtenniscamp.ch:4321/`)

**Expected:**
- Should stay on `/` (French homepage)
- Cookie `preferred_lang` should be set to `fr`
- No redirect should occur

### ✅ Scenario 3: Returning visitor with preference
**Setup:**
- Set cookie: `preferred_lang=fr`
- Visit: `https://advancedtenniscamp.com/`

**Expected:**
- Should stay on French version `/`
- No redirect to `/en/`
- Cookie remains `fr`

### ✅ Scenario 4: Language switcher
**Setup:**
- Visit French homepage
- Click language switcher to English

**Expected:**
- Navigates to `/en/`
- Cookie updates to `preferred_lang=en`
- Future visits respect this preference

### ✅ Scenario 5: Deep link on .com
**Setup:**
- Clear all cookies
- Visit: `https://advancedtenniscamp.com/le-camp/` (French page on .com domain)

**Expected:**
- Should serve French page without redirect
- Cookie `preferred_lang` should be set to `fr` (respects URL choice)

### ✅ Scenario 6: Deep link to English page on .ch
**Setup:**
- Clear all cookies
- Visit: `https://advancedtenniscamp.ch/en/the-camp/`

**Expected:**
- Should serve English page
- Cookie `preferred_lang` should be set to `en`

### ✅ Scenario 7: Query parameters preservation
**Setup:**
- Clear all cookies
- Visit: `https://advancedtenniscamp.com/?utm_source=test&ref=email`

**Expected:**
- Should redirect to `/en/?utm_source=test&ref=email`
- Query parameters are preserved
- Cookie set to `en`

## Manual Testing Steps

### Local Testing Setup:

1. **Edit hosts file:**
   ```bash
   # Mac/Linux
   sudo nano /etc/hosts
   
   # Add:
   127.0.0.1 local.advancedtenniscamp.com
   127.0.0.1 local.advancedtenniscamp.ch
   ```

2. **Start dev server:**
   ```bash
   npm run dev
   ```

3. **Test URLs:**
   - http://local.advancedtenniscamp.com:4321/
   - http://local.advancedtenniscamp.ch:4321/

### Cookie Inspection:

**Chrome/Edge:**
1. F12 → Application → Cookies → Select domain
2. Look for `preferred_lang` cookie
3. Check value, path, expiration

**Firefox:**
1. F12 → Storage → Cookies → Select domain
2. Look for `preferred_lang` cookie

**Safari:**
1. Develop → Show Web Inspector → Storage → Cookies

### Clear Cookies Between Tests:

**Quick method (Console):**
```javascript
document.cookie = "preferred_lang=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
location.reload();
```

**Or use DevTools:**
Right-click on cookie → Delete

## Production Testing

Once deployed:

1. **Test .com domain:**
   - https://advancedtenniscamp.com/ → Should redirect to /en/
   - https://www.advancedtenniscamp.com/ → Should redirect to /en/

2. **Test .ch domain:**
   - https://advancedtenniscamp.ch/ → Should stay on /
   - https://www.advancedtenniscamp.ch/ → Should stay on /

3. **Cross-domain testing:**
   - Visit .ch, set language to French
   - Visit .com with same browser
   - Should respect French preference (no redirect)

## Automated Testing (Optional)

You can use tools like Playwright or Cypress:

```javascript
// Example Playwright test
test('should redirect .com to English', async ({ page }) => {
  await page.goto('https://advancedtenniscamp.com/');
  await expect(page).toHaveURL(/\/en\//);
  
  const cookie = await page.context().cookies();
  const langCookie = cookie.find(c => c.name === 'preferred_lang');
  expect(langCookie?.value).toBe('en');
});
```

## Troubleshooting

### Issue: Redirect not working locally
- **Solution:** Ensure you've edited hosts file and added local domains
- **Solution:** Check if middleware.ts is in the correct location (src/)
- **Solution:** Restart dev server after adding middleware

### Issue: Cookie not being set
- **Solution:** Check browser console for errors
- **Solution:** Verify cookie settings allow cookies from localhost
- **Solution:** Check that domain is correctly detected in middleware

### Issue: Infinite redirect loop
- **Solution:** Check middleware logic for conflicting conditions
- **Solution:** Clear all cookies and try again
- **Solution:** Verify URL pathname checks in middleware

## Checklist

Before considering testing complete:

- [ ] .com root redirects to /en/
- [ ] .ch root stays at /
- [ ] Cookie is set on first visit
- [ ] Cookie is updated when language changes
- [ ] Returning visitors see their preferred language
- [ ] Deep links work without unwanted redirects
- [ ] Query parameters are preserved
- [ ] Language switcher updates preference
- [ ] Both www and non-www subdomains work
- [ ] Localhost defaults to French

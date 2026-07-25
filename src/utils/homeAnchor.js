// Builds an anchor href that works both on the homepage (in-page scroll)
// and on a separate page like privacy-policy.html (links back to the
// homepage section instead).
export function homeAnchor(id) {
  const onHomePage =
    typeof window === 'undefined' ||
    !/privacy-policy|terms-of-service/.test(window.location.pathname)
  return onHomePage ? `#${id}` : `./index.html#${id}`
}

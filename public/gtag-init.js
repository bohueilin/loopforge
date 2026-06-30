// Google Analytics 4 (gtag.js) bootstrap. Kept in an external, same-origin file so the
// strict Content-Security-Policy needs no script-src 'unsafe-inline'. The measurement ID
// is public by design. GA domains are allowlisted in public/_headers (script/connect/img-src).
window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', 'G-E3G7Z5GG8K')

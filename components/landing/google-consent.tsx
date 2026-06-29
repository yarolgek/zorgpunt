import Script from "next/script"

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim()

/**
 * Google Consent Mode v2 — defaults denied until the user accepts.
 * When declined, Google may still receive anonymised, cookieless pings for
 * aggregate conversion modelling (no personal ads tracking).
 *
 * @see https://developers.google.com/tag-platform/security/guides/consent
 */
export function GoogleConsent() {
  if (!GTM_ID) return null

  const consentBootstrap = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted',
      wait_for_update: 500
    });
    gtag('set', 'ads_data_redaction', true);
    gtag('set', 'url_passthrough', true);
    (function () {
      var match = document.cookie.match(/(?:^|; )zpc_consent=([^;]*)/);
      var stored = match && match[1];
      if (stored === 'accepted') {
        gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
          analytics_storage: 'granted'
        });
      }
    })();
  `

  return (
    <>
      <Script id="google-consent-defaults" strategy="beforeInteractive">
        {consentBootstrap}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
    </>
  )
}

export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}

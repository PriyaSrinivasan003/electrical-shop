import sharp from 'sharp';

async function removeTextFromBanner() {
  const img = sharp('public/images/contact-banner.jpg');
  
  // Sample a patch from the clean sky/background right above or adjacent
  // The area at x=200..320, y=20..80 is clean dark blue backdrop
  // Or create a seamless multi-stop linear gradient that matches the ambient dark blue
  const svgOverlay = Buffer.from(`
    <svg width="1024" height="384">
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0a192e" />
          <stop offset="40%" stop-color="#091629" />
          <stop offset="70%" stop-color="#0b1b30" />
          <stop offset="100%" stop-color="#0c1f38" />
        </linearGradient>
        <filter id="softBlur">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>
      <!-- Cover the text and breadcrumb line with soft blurred seamless edge -->
      <rect x="220" y="80" width="490" height="150" fill="url(#skyGrad)" filter="url(#softBlur)" />
    </svg>
  `);

  await img
    .composite([
      { input: svgOverlay, top: 0, left: 0 }
    ])
    .toFile('public/images/contact-banner-clean.jpg');

  console.log('Clean banner saved to public/images/contact-banner-clean.jpg');
}

removeTextFromBanner();

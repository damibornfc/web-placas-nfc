export const metadata = {
  metadataBase: new URL('https://tapplus.com.ar'),
  title: 'TapPlus | Tarjetas y Placas NFC + QR para Reseñas de Google en Argentina',
  description: 'Aumentá tus reseñas de Google y seguidores con tarjetas, calcos y placas expositoras con chip NFC y código QR personalizadas. Sin abonos mensuales y con envíos a toda Argentina.',
  keywords: [
    'tarjetas reseñas google nfc argentina',
    'placas nfc qr reseñas google',
    'tarjeta nfc google reviews',
    'calcos nfc qr mostrador',
    'menu digital qr nfc mesas',
    'tapplus argentina',
  ],
  alternates: {
    canonical: 'https://tapplus.com.ar',
  },
  openGraph: {
    title: 'TapPlus | Tarjetas y Placas NFC + QR para Reseñas de Google',
    description: 'Placas expositoras, calcos y porta menú con NFC y QR personalizados para negocios en Argentina. Sin suscripciones.',
    url: 'https://tapplus.com.ar',
    siteName: 'TapPlus Argentina',
    locale: 'es_AR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'TapPlus Argentina',
    url: 'https://tapplus.com.ar',
    description: 'Fabricación y venta de tarjetas, placas expositoras, calcos y acrílicos con tecnología NFC y QR para reseñas de Google, Instagram, WhatsApp y Menú Digital en Argentina.',
    areaServed: {
      '@type': 'Country',
      name: 'Argentina',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Rosa',
      addressRegion: 'La Pampa',
      addressCountry: 'AR',
    },
    sameAs: ['https://instagram.com'],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Calco NFC + QR Personalizado 10x10 cm para Reseñas de Google',
          brand: { '@type': 'Brand', name: 'TapPlus' },
        },
        priceCurrency: 'ARS',
        price: '10000',
        availability: 'https://schema.org',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Placa Expositora Mostrador NFC + QR 10x15 cm para Reseñas de Google',
          brand: { '@type': 'Brand', name: 'TapPlus' },
        },
        priceCurrency: 'ARS',
        price: '25000',
        availability: 'https://schema.org',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Mini Acrílico Menú Mesas NFC + QR 6x9 cm',
          brand: { '@type': 'Brand', name: 'TapPlus' },
        },
        priceCurrency: 'ARS',
        availability: 'https://schema.org',
      },
    ],
  };

  return (
    <html lang="es-AR">
      <body style={{ margin: 0 }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

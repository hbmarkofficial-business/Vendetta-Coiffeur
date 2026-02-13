import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Friseursalon Mönchengladbach | Vendetta Coiffeur</title>
        <meta
          name="description"
          content="Besuche unseren Premium Friseursalon Vendetta Coiffeur in Mönchengladbach für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Friseursalon, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Mönchengladbach"
        />
        <link rel="canonical" href="https://gentlemanscut.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Vendetta Coiffeur | Premium Friseursalon Mönchengladbach" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Look bei Vendetta Coiffeur in Mönchengladbach."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gentlemanscut.de" />
        <meta property="og:image" content="https://gentlemanscut.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vendetta Coiffeur | Premium Friseursalon Mönchengladbach" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für Ihren individuellen Stil."
        />
        <meta name="twitter:image" content="https://gentlemanscut.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            "name": "Vendetta Coiffeur",
            "image": "https://gentlemanscut.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Waldhausener Str. 86",
              "addressLocality": "Mönchengladbach",
              "postalCode": "41061",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.1947",
              "longitude": "6.4297"
            },
            "url": "https://gentlemanscut.de",
            "telephone": "+49 176 24316809",
            "openingHours": "Mo-Fr 10:00-18:00, Sa 09:00-17:00",
            "priceRange": "€€",
            "servesCuisine": "Friseursalon Services",
            "sameAs": [
              "https://www.facebook.com/vendettacoiffeur",
              "https://www.instagram.com/vendettacoiffeur"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;


export default function JsonLd() {
  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Nilachal Hospital & Research Centre",
    "alternateName": "Nilachal Hospital",
    "url": "https://nilachalhospital.com",
    "logo": "https://nilachalhospital.com/logo.png",
    "image": "https://nilachalhospital.com/facility_exterior.png",
    "description": "Premium multi-specialty hospital in Guwahati providing advanced medical care in surgery, pediatrics, and emergency medicine.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "S.K. Baruah Road, Rukmini Gaon",
      "addressLocality": "Guwahati",
      "addressRegion": "Assam",
      "postalCode": "781022",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.1300",
      "longitude": "91.7850"
    },
    "telephone": "+91 361 222 6658",
    "emergencyService": true,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }}
    />
  );
}

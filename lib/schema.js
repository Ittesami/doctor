const SITE_URL = "https://www.drmdahsanhabib.com";

export function buildPhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Prof. Dr. Md. Ahsan Habib",
    url: SITE_URL,
    medicalSpecialty: "Colorectal Surgery",
    telephone: "+8801721036644",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Dhanmondi, Dhaka",
        addressCountry: "BD",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Tangail",
        addressCountry: "BD",
      },
    ],
  };
}

export function buildMedicalProcedureSchema(service, language = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: language === "en" ? service.titleEn : service.titleBn,
    description:
      language === "en" ? service.shortDescriptionEn : service.shortDescriptionBn,
    url: `${SITE_URL}/services/${service.slug}`,
  };
}

export function buildArticleSchema(publication) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: publication.title,
    author: publication.authors
      ? publication.authors.split(",").map((name) => ({
          "@type": "Person",
          name: name.trim(),
        }))
      : undefined,
    datePublished: publication.publishedDate,
    publisher: {
      "@type": "Organization",
      name: publication.journal || "Prof. Dr. Md. Ahsan Habib",
    },
    description: publication.excerpt,
    url: `${SITE_URL}/publications/${publication.slug}`,
  };
}

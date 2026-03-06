import type { Locale } from "./config";

export interface CommonTranslations {
  nav: {
    home: string;
    services: string;
    industries: string;
    contact: string;
    about: string;
    getStarted: string;
    viewAllServices: string;
    serviceLinks: { label: string; slug: string }[];
    aboutLinks: { label: string; path: string }[];
  };
  footer: {
    tagline: string;
    company: string;
    services: string;
    support: string;
    allRights: string;
    privacyPolicy: string;
    terms: string;
    cookiePolicy: string;
    cookieSettings: string;
    companyLinks: { label: string; path: string }[];
    serviceLinks: { label: string; path: string }[];
  };
  cookie: {
    title: string;
    description: string;
    cookiePolicyLink: string;
    necessary: string;
    necessaryDesc: string;
    analytics: string;
    analyticsDesc: string;
    marketing: string;
    marketingDesc: string;
    customize: string;
    savePreferences: string;
    rejectAll: string;
    acceptAll: string;
  };
}

const en: CommonTranslations = {
  nav: {
    home: "Home",
    services: "Services",
    industries: "Industries",
    contact: "Contact",
    about: "About",
    getStarted: "Get Started",
    viewAllServices: "View All Services",
    serviceLinks: [
      { label: "AI & Automation", slug: "artificial-intelligence" },
      { label: "Digital Transformation", slug: "digital-transformation" },
      { label: "Data & Analytics", slug: "data-analytics" },
      { label: "Cybersecurity", slug: "cybersecurity" },
      { label: "Cloud & Infrastructure", slug: "cloud-infrastructure" },
      { label: "Enterprise Solutions", slug: "enterprise-solutions" },
      { label: "IT Advisory & Talent", slug: "it-advisory" },
    ],
    aboutLinks: [
      { label: "About Us", path: "/about/" },
      { label: "Success Stories", path: "/success-stories/" },
      { label: "Partners", path: "/partners/" },
      { label: "Resources", path: "/resources/" },
      { label: "Careers", path: "/careers/" },
    ],
  },
  footer: {
    tagline:
      "Empowering businesses through innovative software solutions and digital transformation across the globe.",
    company: "Company",
    services: "Services",
    support: "Support",
    allRights: "All Rights Reserved.",
    privacyPolicy: "Privacy Policy",
    terms: "Terms & Conditions",
    cookiePolicy: "Cookie Policy",
    cookieSettings: "Cookie Settings",
    companyLinks: [
      { label: "About Us", path: "/about/" },
      { label: "Services", path: "/services/" },
      { label: "Industries", path: "/industries/" },
      { label: "Partners", path: "/partners/" },
    ],
    serviceLinks: [
      { label: "AI & Automation", path: "/services/artificial-intelligence/" },
      {
        label: "Cloud & Infrastructure",
        path: "/services/cloud-infrastructure/",
      },
      { label: "Cybersecurity", path: "/services/cybersecurity/" },
      {
        label: "Enterprise Solutions",
        path: "/services/enterprise-solutions/",
      },
    ],
  },
  cookie: {
    title: "We value your privacy",
    description:
      "We use cookies to enhance your browsing experience, serve personalized content and analyze our traffic. You can choose which categories to allow. Read our",
    cookiePolicyLink: "Cookie Policy",
    necessary: "Necessary",
    necessaryDesc: "Essential for the website to function. Always active.",
    analytics: "Analytics",
    analyticsDesc:
      "Help us understand how visitors interact with our website.",
    marketing: "Marketing",
    marketingDesc:
      "Used to deliver relevant ads and track campaign performance.",
    customize: "Customize",
    savePreferences: "Save Preferences",
    rejectAll: "Reject All",
    acceptAll: "Accept All",
  },
};

const es: CommonTranslations = {
  nav: {
    home: "Inicio",
    services: "Servicios",
    industries: "Industrias",
    contact: "Contacto",
    about: "Nosotros",
    getStarted: "Comenzar",
    viewAllServices: "Ver Todos los Servicios",
    serviceLinks: [
      { label: "IA y Automatizacion", slug: "artificial-intelligence" },
      { label: "Transformacion Digital", slug: "digital-transformation" },
      { label: "Datos y Analitica", slug: "data-analytics" },
      { label: "Ciberseguridad", slug: "cybersecurity" },
      { label: "Cloud e Infraestructura", slug: "cloud-infrastructure" },
      { label: "Soluciones Empresariales", slug: "enterprise-solutions" },
      { label: "Consultoria IT y Talento", slug: "it-advisory" },
    ],
    aboutLinks: [
      { label: "Sobre Nosotros", path: "/about/" },
      { label: "Casos de Exito", path: "/success-stories/" },
      { label: "Partners", path: "/partners/" },
      { label: "Recursos", path: "/resources/" },
      { label: "Carreras", path: "/careers/" },
    ],
  },
  footer: {
    tagline:
      "Impulsando negocios a traves de soluciones de software innovadoras y transformacion digital en todo el mundo.",
    company: "Empresa",
    services: "Servicios",
    support: "Soporte",
    allRights: "Todos los derechos reservados.",
    privacyPolicy: "Politica de Privacidad",
    terms: "Terminos y Condiciones",
    cookiePolicy: "Politica de Cookies",
    cookieSettings: "Ajustes de Cookies",
    companyLinks: [
      { label: "Sobre Nosotros", path: "/about/" },
      { label: "Servicios", path: "/services/" },
      { label: "Industrias", path: "/industries/" },
      { label: "Partners", path: "/partners/" },
    ],
    serviceLinks: [
      {
        label: "IA y Automatizacion",
        path: "/services/artificial-intelligence/",
      },
      {
        label: "Cloud e Infraestructura",
        path: "/services/cloud-infrastructure/",
      },
      { label: "Ciberseguridad", path: "/services/cybersecurity/" },
      {
        label: "Soluciones Empresariales",
        path: "/services/enterprise-solutions/",
      },
    ],
  },
  cookie: {
    title: "Valoramos tu privacidad",
    description:
      "Usamos cookies para mejorar tu experiencia de navegacion, ofrecer contenido personalizado y analizar nuestro trafico. Puedes elegir que categorias permitir. Lee nuestra",
    cookiePolicyLink: "Politica de Cookies",
    necessary: "Necesarias",
    necessaryDesc:
      "Esenciales para el funcionamiento del sitio web. Siempre activas.",
    analytics: "Analiticas",
    analyticsDesc:
      "Nos ayudan a entender como los visitantes interactuan con nuestro sitio.",
    marketing: "Marketing",
    marketingDesc:
      "Se utilizan para mostrar anuncios relevantes y medir el rendimiento de campanas.",
    customize: "Personalizar",
    savePreferences: "Guardar Preferencias",
    rejectAll: "Rechazar Todo",
    acceptAll: "Aceptar Todo",
  },
};

const fr: CommonTranslations = {
  nav: {
    home: "Accueil",
    services: "Services",
    industries: "Industries",
    contact: "Contact",
    about: "A propos",
    getStarted: "Commencer",
    viewAllServices: "Voir Tous les Services",
    serviceLinks: [
      { label: "IA et Automatisation", slug: "artificial-intelligence" },
      { label: "Transformation Digitale", slug: "digital-transformation" },
      { label: "Donnees et Analytique", slug: "data-analytics" },
      { label: "Cybersecurite", slug: "cybersecurity" },
      { label: "Cloud et Infrastructure", slug: "cloud-infrastructure" },
      { label: "Solutions Entreprise", slug: "enterprise-solutions" },
      { label: "Conseil IT et Talents", slug: "it-advisory" },
    ],
    aboutLinks: [
      { label: "A propos", path: "/about/" },
      { label: "Succes Clients", path: "/success-stories/" },
      { label: "Partenaires", path: "/partners/" },
      { label: "Ressources", path: "/resources/" },
      { label: "Carrieres", path: "/careers/" },
    ],
  },
  footer: {
    tagline:
      "Accompagner les entreprises grace a des solutions logicielles innovantes et a la transformation digitale dans le monde entier.",
    company: "Entreprise",
    services: "Services",
    support: "Support",
    allRights: "Tous droits reserves.",
    privacyPolicy: "Politique de Confidentialite",
    terms: "Conditions Generales",
    cookiePolicy: "Politique de Cookies",
    cookieSettings: "Parametres de Cookies",
    companyLinks: [
      { label: "A propos", path: "/about/" },
      { label: "Services", path: "/services/" },
      { label: "Industries", path: "/industries/" },
      { label: "Partenaires", path: "/partners/" },
    ],
    serviceLinks: [
      {
        label: "IA et Automatisation",
        path: "/services/artificial-intelligence/",
      },
      {
        label: "Cloud et Infrastructure",
        path: "/services/cloud-infrastructure/",
      },
      { label: "Cybersecurite", path: "/services/cybersecurity/" },
      {
        label: "Solutions Entreprise",
        path: "/services/enterprise-solutions/",
      },
    ],
  },
  cookie: {
    title: "Nous respectons votre vie privee",
    description:
      "Nous utilisons des cookies pour ameliorer votre experience de navigation, proposer du contenu personnalise et analyser notre trafic. Vous pouvez choisir les categories a autoriser. Lisez notre",
    cookiePolicyLink: "Politique de Cookies",
    necessary: "Necessaires",
    necessaryDesc:
      "Essentiels au fonctionnement du site web. Toujours actifs.",
    analytics: "Analytiques",
    analyticsDesc:
      "Nous aident a comprendre comment les visiteurs interagissent avec notre site.",
    marketing: "Marketing",
    marketingDesc:
      "Utilises pour diffuser des publicites pertinentes et mesurer les performances des campagnes.",
    customize: "Personnaliser",
    savePreferences: "Enregistrer les Preferences",
    rejectAll: "Tout Refuser",
    acceptAll: "Tout Accepter",
  },
};

export const translations: Record<Locale, CommonTranslations> = { en, es, fr };

export function getTranslations(locale: Locale): CommonTranslations {
  return translations[locale] || translations.en;
}

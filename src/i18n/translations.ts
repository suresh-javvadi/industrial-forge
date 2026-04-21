export type Language = "en" | "fr" | "es" | "de";

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

const en = {
  // Navbar
  nav_home: "Home",
  nav_about: "About",
  nav_services: "Services",
  nav_domains: "Domains",
  nav_why_us: "Why Us",
  nav_clients: "Clients",
  nav_contact: "Contact",
  nav_quote: "Get a Quote",

  // Hero
  hero_badge: "Precision Engineering & Manufacturing",
  hero_title1: "Engineering Excellence.",
  hero_title2: "Delivered on Time.",
  hero_desc:
    "ISO 9001:2015 & AS9100D certified manufacturer of high-quality CNC machined components, press tools, and special purpose machines for Defence, Aerospace, and more.",
  hero_cta_quote: "Get a Quote",
  hero_cta_domains: "View Domains",
  hero_stat1_value: "25+",
  hero_stat1_label: "Years Experience",
  hero_stat2_value: "10+",
  hero_stat2_label: "Trusted Clients",
  hero_stat3_value: "2",
  hero_stat3_label: "ISO Certifications",

  // About
  about_label: "About Us",
  about_title: "Built for",
  about_title_highlight: "Industrial Excellence",
  about_desc:
    "Sri Satyaritha Engineers (SSR Engineers) serves industries including Defence, Aerospace, Electronics, Communications, Automobiles, and Robotics — delivering precision parts and designs that meet the highest standards.",
  about_card1_title: "Who We Are",
  about_card1_text:
    "Sri Satyaritha Engineers is an Indian proprietorship company specializing in Engineering Design and Precision Component Manufacturing, with a proven track record of on-time delivery and high-quality work.",
  about_card2_title: "Our Expertise",
  about_card2_text:
    "With 25+ years of experience gained through collaboration with French companies, we specialize in high-precision components, sub-assemblies, press tools, and special purpose machines.",
  about_card3_title: "Our Commitment",
  about_card3_text:
    "We are committed to customer satisfaction, brand reputation, and IP protection. Every project starts with an NDA to safeguard our clients' intellectual property and business data.",

  // Services
  services_label: "What We Do",
  services_title: "Our",
  services_title_highlight: "Services",
  services_desc:
    "From concept to delivery — design, machining, press tools, and special purpose machines for Defence, Aerospace, and beyond.",
  service1_title: "Engineering 3D Design & CAD Services",
  service1_desc:
    "Advanced 3D modeling, detailed production drawings with GD&T, bill of material generation, assembly tagging, and CAD conversion from paper/PDF/AutoCAD to full 3D models.",
  service2_title: "CNC Precision Component Manufacturing",
  service2_desc:
    "High-quality CNC machined components for Defence, Aerospace, Communications, and Robotics. We supply small to medium assemblies with precise tolerances and thorough inspection.",
  service3_title: "Press Tools Manufacturing",
  service3_desc:
    "Custom press tools designed and manufactured for mass production of sheet metal and plastic parts. Specialized in aluminium extrusion press tools for French clients.",
  service4_title: "Sheet Metal Component Supply",
  service4_desc:
    "Bulk production of high-precision sheet metal parts using custom press tools. We offer competitive rates and consistent quality for repeat orders.",
  service5_title: "Special Purpose Machines (SPMs)",
  service5_desc:
    "Design and manufacturing of custom-built machines for specific industrial applications — including pneumatic, hydraulic, and automated SPMs as per customer specifications.",
  service6_title: "Surface Treatment & Finishing",
  service6_desc:
    "Heat treatment, hardening, anodising (colour or clear), zinc/nickel/cadmium/chrome plating, and spray booth painting for aluminium and steel components.",

  // Domains
  domains_label: "Domains",
  domains_title: "Industries We",
  domains_title_highlight: "Serve",
  domains_desc:
    "Trusted by leading organisations across Defence, Aerospace, Communications, and more.",
  domain1_title: "Defence & Radar",
  domain1_cat: "Defence",
  domain1_desc:
    "Precision components and sub-assemblies for radar systems, control panels, and defence equipment — manufactured to strict tolerance requirements.",
  domain2_title: "Aerospace Structures",
  domain2_cat: "Aerospace",
  domain2_desc:
    "High-quality structural and mechanical parts for aerospace applications, compliant with AS9100D quality standards.",
  domain3_title: "Communications Equipment",
  domain3_cat: "Communications",
  domain3_desc:
    "CNC machined enclosures, housings, and precision parts for communication systems used in civilian and military applications.",
  domain4_title: "Press Tools & Extrusion",
  domain4_cat: "Press Tools",
  domain4_desc:
    "Specialized press tool design and manufacturing for aluminium extrusion processes — a core expertise developed through collaboration with French industry.",
  domain5_title: "Robotics & Automation",
  domain5_cat: "Robotics",
  domain5_desc:
    "Precision components and mechanical sub-assemblies for robotics and industrial automation systems, engineered for reliability and repeatability.",
  domain6_title: "Marine Communications",
  domain6_cat: "Marine",
  domain6_desc:
    "Durable, high-precision parts for marine communication and navigation systems, built to withstand demanding environments.",

  // Why Choose Us
  why_label: "Why Us",
  why_title: "Why Choose",
  why_title_highlight: "Sri Satyaritha",
  why1_title: "25+ Years of Experience",
  why1_desc:
    "Led by professionals with 25 years of hands-on experience working with French companies on high-precision components, press tools, and SPMs.",
  why2_title: "Cost-Effective Solutions",
  why2_desc:
    "We partner with experienced micromachining shops to reduce costs while maintaining quality — saving you money without cutting corners.",
  why3_title: "Modern CNC Equipment",
  why3_desc:
    "Our workshop has VMC machines (bed sizes up to 1365mm), CNC lathes, fitting section machines, and a Trimos V7 precision measuring instrument.",
  why4_title: "On-Time Delivery",
  why4_desc:
    "We have a strong track record of delivering orders on time. Reliable schedules and clear communication are central to how we work.",
  why5_title: "ISO 9001:2015 & AS9100D Certified",
  why5_desc:
    "Independently certified by QRO and UK Certifications for quality management in Defence, Aerospace, and Communications manufacturing.",
  why6_title: "IP Protection & NDA",
  why6_desc:
    "We take intellectual property seriously. Every client engagement begins with a Non-Disclosure Agreement to protect your designs and business data.",

  // Clients
  clients_label: "Certifications & Clients",
  clients_title: "Certified Quality.",
  clients_title_highlight: "Trusted Partners.",
  clients_cert_label: "Our Certifications",
  clients_client_label: "Our Esteemed Clients",
  cert1_name: "ISO 9001:2015",
  cert1_detail: "Quality Management System",
  cert2_name: "AS9100D",
  cert2_detail: "Aviation, Space & Defence QMS",

  // Contact
  contact_label: "Contact",
  contact_title: "Let's Build Something",
  contact_title_highlight: "Strong Together",
  contact_name: "Your Name",
  contact_email: "Email Address",
  contact_phone: "Phone Number",
  contact_requirement: "Describe your requirement...",
  contact_send: "Send Message",
  contact_get_in_touch: "Get In Touch",
  contact_desc:
    "Have a machining requirement, design project, or press tool need? Reach out to our team and we'll respond quickly with a solution tailored to your specifications.",
  contact_phone_label: "Phone",
  contact_email_label: "Email",
  contact_admin_label: "Admin Office",
  contact_works_label: "Works",
  contact_toast_title: "Message sent!",
  contact_toast_desc: "We'll get back to you shortly.",

  // Footer
  footer_tagline:
    "ISO 9001:2015 & AS9100D certified manufacturer of precision components, press tools, and special purpose machines. Serving Defence, Aerospace, and Communications since 25+ years.",
  footer_quick_links: "Quick Links",
  footer_contact: "Contact",
  footer_copyright: "Sri Satyaritha Engineers. All rights reserved.",
};

const fr: typeof en = {
  nav_home: "Accueil",
  nav_about: "À Propos",
  nav_services: "Services",
  nav_domains: "Domaines",
  nav_why_us: "Pourquoi Nous",
  nav_clients: "Clients",
  nav_contact: "Contact",
  nav_quote: "Demander un Devis",

  hero_badge: "Ingénierie & Fabrication de Précision",
  hero_title1: "Excellence en Ingénierie.",
  hero_title2: "Livré dans les Délais.",
  hero_desc:
    "Fabricant certifié ISO 9001:2015 & AS9100D de composants CNC de haute qualité, d'outils de presse et de machines spéciales pour la Défense, l'Aérospatiale et plus encore.",
  hero_cta_quote: "Demander un Devis",
  hero_cta_domains: "Voir les Domaines",
  hero_stat1_value: "25+",
  hero_stat1_label: "Ans d'Expérience",
  hero_stat2_value: "10+",
  hero_stat2_label: "Clients de Confiance",
  hero_stat3_value: "2",
  hero_stat3_label: "Certifications ISO",

  about_label: "À Propos",
  about_title: "Conçu pour",
  about_title_highlight: "l'Excellence Industrielle",
  about_desc:
    "Sri Satyaritha Engineers (SSR Engineers) sert les industries de la Défense, de l'Aérospatiale, de l'Électronique, des Communications, de l'Automobile et de la Robotique — en livrant des pièces de précision conformes aux normes les plus élevées.",
  about_card1_title: "Qui Sommes-Nous",
  about_card1_text:
    "Sri Satyaritha Engineers est une entreprise indienne spécialisée dans la conception d'ingénierie et la fabrication de composants de précision, avec un historique éprouvé de livraison ponctuelle et de travail de haute qualité.",
  about_card2_title: "Notre Expertise",
  about_card2_text:
    "Avec plus de 25 ans d'expérience acquise en collaboration avec des entreprises françaises, nous nous spécialisons dans les composants haute précision, les sous-ensembles, les outils de presse et les machines spéciales.",
  about_card3_title: "Notre Engagement",
  about_card3_text:
    "Nous nous engageons envers la satisfaction client, la réputation et la protection de la propriété intellectuelle. Chaque projet commence par un NDA pour protéger les données et la propriété de nos clients.",

  services_label: "Ce Que Nous Faisons",
  services_title: "Nos",
  services_title_highlight: "Services",
  services_desc:
    "Du concept à la livraison — conception, usinage, outils de presse et machines spéciales pour la Défense, l'Aérospatiale et au-delà.",
  service1_title: "Conception 3D & Services CAO",
  service1_desc:
    "Modélisation 3D avancée, dessins de production détaillés avec GD&T, nomenclature, étiquetage d'assemblage et conversion CAO de papier/PDF/AutoCAD vers des modèles 3D complets.",
  service2_title: "Fabrication CNC de Composants de Précision",
  service2_desc:
    "Composants CNC haute qualité pour la Défense, l'Aérospatiale, les Communications et la Robotique. Assemblages petits et moyens avec des tolérances précises et inspection rigoureuse.",
  service3_title: "Fabrication d'Outils de Presse",
  service3_desc:
    "Outils de presse sur mesure pour la production en masse de pièces en tôle et en plastique. Spécialisés dans les outils pour l'extrusion d'aluminium pour les clients français.",
  service4_title: "Fourniture de Pièces en Tôle",
  service4_desc:
    "Production en série de pièces en tôle haute précision avec des outils de presse sur mesure. Tarifs compétitifs et qualité constante pour les commandes récurrentes.",
  service5_title: "Machines Spéciales (SPMs)",
  service5_desc:
    "Conception et fabrication de machines sur mesure pour des applications industrielles spécifiques — pneumatiques, hydrauliques et automatisées selon les spécifications client.",
  service6_title: "Traitement de Surface & Finition",
  service6_desc:
    "Traitement thermique, durcissement, anodisation (couleur ou incolore), galvanisation zinc/nickel/cadmium/chrome et peinture en cabine pour aluminium et acier.",

  domains_label: "Domaines",
  domains_title: "Industries que",
  domains_title_highlight: "Nous Servons",
  domains_desc:
    "Approuvé par les principales organisations dans la Défense, l'Aérospatiale, les Communications et plus encore.",
  domain1_title: "Défense & Radar",
  domain1_cat: "Défense",
  domain1_desc:
    "Composants de précision et sous-ensembles pour systèmes radar, panneaux de contrôle et équipements de défense — fabriqués selon des exigences de tolérance strictes.",
  domain2_title: "Structures Aérospatiales",
  domain2_cat: "Aérospatiale",
  domain2_desc:
    "Pièces structurelles et mécaniques haute qualité pour applications aérospatiales, conformes aux normes qualité AS9100D.",
  domain3_title: "Équipements de Communication",
  domain3_cat: "Communications",
  domain3_desc:
    "Boîtiers usinés CNC et pièces de précision pour systèmes de communication civils et militaires.",
  domain4_title: "Outils de Presse & Extrusion",
  domain4_cat: "Outils de Presse",
  domain4_desc:
    "Conception et fabrication spécialisées d'outils de presse pour l'extrusion d'aluminium — une expertise développée en collaboration avec l'industrie française.",
  domain5_title: "Robotique & Automatisation",
  domain5_cat: "Robotique",
  domain5_desc:
    "Composants de précision et sous-ensembles mécaniques pour systèmes robotiques et d'automatisation industrielle, conçus pour la fiabilité et la répétabilité.",
  domain6_title: "Communications Marines",
  domain6_cat: "Marine",
  domain6_desc:
    "Pièces durables et haute précision pour systèmes de communication et navigation marine, conçues pour résister aux environnements exigeants.",

  why_label: "Pourquoi Nous",
  why_title: "Pourquoi Choisir",
  why_title_highlight: "Sri Satyaritha",
  why1_title: "Plus de 25 Ans d'Expérience",
  why1_desc:
    "Dirigé par des professionnels avec 25 ans d'expérience pratique avec des entreprises françaises sur des composants haute précision, outils de presse et SPMs.",
  why2_title: "Solutions Rentables",
  why2_desc:
    "Nous collaborons avec des ateliers de micro-usinage pour réduire les coûts tout en maintenant le même niveau de qualité.",
  why3_title: "Équipements CNC Modernes",
  why3_desc:
    "Notre atelier dispose de machines VMC (lits jusqu'à 1365mm), tours CNC, machines de montage et un instrument de mesure Trimos V7.",
  why4_title: "Livraison dans les Délais",
  why4_desc:
    "Nous avons un solide historique de livraison ponctuelle. Des plannings fiables et une communication claire sont au cœur de notre façon de travailler.",
  why5_title: "Certifié ISO 9001:2015 & AS9100D",
  why5_desc:
    "Certifié indépendamment par QRO et UK Certifications pour la gestion de la qualité dans la Défense, l'Aérospatiale et les Communications.",
  why6_title: "Protection PI & NDA",
  why6_desc:
    "Nous prenons la propriété intellectuelle au sérieux. Chaque engagement client commence par un Accord de Non-Divulgation.",

  clients_label: "Certifications & Clients",
  clients_title: "Qualité Certifiée.",
  clients_title_highlight: "Partenaires de Confiance.",
  clients_cert_label: "Nos Certifications",
  clients_client_label: "Nos Clients Estimés",
  cert1_name: "ISO 9001:2015",
  cert1_detail: "Système de Management de la Qualité",
  cert2_name: "AS9100D",
  cert2_detail: "SMQ Aviation, Espace & Défense",

  contact_label: "Contact",
  contact_title: "Construisons Quelque Chose",
  contact_title_highlight: "de Solide Ensemble",
  contact_name: "Votre Nom",
  contact_email: "Adresse E-mail",
  contact_phone: "Numéro de Téléphone",
  contact_requirement: "Décrivez votre besoin...",
  contact_send: "Envoyer le Message",
  contact_get_in_touch: "Nous Contacter",
  contact_desc:
    "Vous avez un besoin d'usinage, un projet de conception ou un besoin d'outil de presse ? Contactez notre équipe et nous répondrons rapidement avec une solution adaptée.",
  contact_phone_label: "Téléphone",
  contact_email_label: "E-mail",
  contact_admin_label: "Bureau Administratif",
  contact_works_label: "Usine",
  contact_toast_title: "Message envoyé !",
  contact_toast_desc: "Nous vous répondrons sous peu.",

  footer_tagline:
    "Fabricant certifié ISO 9001:2015 & AS9100D de composants de précision, outils de presse et machines spéciales. Au service de la Défense, l'Aérospatiale et les Communications depuis plus de 25 ans.",
  footer_quick_links: "Liens Rapides",
  footer_contact: "Contact",
  footer_copyright: "Sri Satyaritha Engineers. Tous droits réservés.",
};

const es: typeof en = {
  nav_home: "Inicio",
  nav_about: "Nosotros",
  nav_services: "Servicios",
  nav_domains: "Sectores",
  nav_why_us: "Por Qué Nosotros",
  nav_clients: "Clientes",
  nav_contact: "Contacto",
  nav_quote: "Solicitar Cotización",

  hero_badge: "Ingeniería y Fabricación de Precisión",
  hero_title1: "Excelencia en Ingeniería.",
  hero_title2: "Entregado a Tiempo.",
  hero_desc:
    "Fabricante certificado ISO 9001:2015 y AS9100D de componentes CNC de alta calidad, herramientas de prensa y máquinas especiales para Defensa, Aeroespacial y más.",
  hero_cta_quote: "Solicitar Cotización",
  hero_cta_domains: "Ver Sectores",
  hero_stat1_value: "25+",
  hero_stat1_label: "Años de Experiencia",
  hero_stat2_value: "10+",
  hero_stat2_label: "Clientes de Confianza",
  hero_stat3_value: "2",
  hero_stat3_label: "Certificaciones ISO",

  about_label: "Sobre Nosotros",
  about_title: "Construido para",
  about_title_highlight: "la Excelencia Industrial",
  about_desc:
    "Sri Satyaritha Engineers (SSR Engineers) sirve a industrias como Defensa, Aeroespacial, Electrónica, Comunicaciones, Automóviles y Robótica — entregando piezas de precisión que cumplen los más altos estándares.",
  about_card1_title: "Quiénes Somos",
  about_card1_text:
    "Sri Satyaritha Engineers es una empresa india especializada en Diseño de Ingeniería y Fabricación de Componentes de Precisión, con un historial comprobado de entrega puntual y trabajo de alta calidad.",
  about_card2_title: "Nuestra Experiencia",
  about_card2_text:
    "Con más de 25 años de experiencia adquirida en colaboración con empresas francesas, nos especializamos en componentes de alta precisión, subconjuntos, herramientas de prensa y máquinas especiales.",
  about_card3_title: "Nuestro Compromiso",
  about_card3_text:
    "Estamos comprometidos con la satisfacción del cliente y la protección de la propiedad intelectual. Cada proyecto comienza con un NDA para salvaguardar los datos e IP de nuestros clientes.",

  services_label: "Lo Que Hacemos",
  services_title: "Nuestros",
  services_title_highlight: "Servicios",
  services_desc:
    "Desde el concepto hasta la entrega — diseño, mecanizado, herramientas de prensa y máquinas especiales para Defensa, Aeroespacial y más.",
  service1_title: "Diseño 3D e Ingeniería CAD",
  service1_desc:
    "Modelado 3D avanzado, dibujos de producción detallados con GD&T, listas de materiales, etiquetado de ensamblajes y conversión CAD de papel/PDF/AutoCAD a modelos 3D completos.",
  service2_title: "Fabricación de Componentes CNC de Precisión",
  service2_desc:
    "Componentes CNC de alta calidad para Defensa, Aeroespacial, Comunicaciones y Robótica. Ensamblajes pequeños y medianos con tolerancias precisas e inspección exhaustiva.",
  service3_title: "Fabricación de Herramientas de Prensa",
  service3_desc:
    "Herramientas de prensa personalizadas para producción en masa de piezas de chapa y plástico. Especializados en herramientas para extrusión de aluminio para clientes franceses.",
  service4_title: "Suministro de Piezas de Chapa Metálica",
  service4_desc:
    "Producción a granel de piezas de chapa de alta precisión con herramientas de prensa personalizadas. Tarifas competitivas y calidad constante para pedidos repetidos.",
  service5_title: "Máquinas de Propósito Especial (SPMs)",
  service5_desc:
    "Diseño y fabricación de máquinas a medida — neumáticas, hidráulicas y automatizadas según especificaciones del cliente.",
  service6_title: "Tratamiento Superficial y Acabado",
  service6_desc:
    "Tratamiento térmico, endurecimiento, anodizado, galvanizado zinc/níquel/cadmio/cromo y pintura en cabina para aluminio y acero.",

  domains_label: "Sectores",
  domains_title: "Industrias que",
  domains_title_highlight: "Servimos",
  domains_desc:
    "De confianza para las principales organizaciones en Defensa, Aeroespacial, Comunicaciones y más.",
  domain1_title: "Defensa y Radar",
  domain1_cat: "Defensa",
  domain1_desc:
    "Componentes de precisión y subconjuntos para sistemas de radar, paneles de control y equipos de defensa — fabricados según requisitos de tolerancia estrictos.",
  domain2_title: "Estructuras Aeroespaciales",
  domain2_cat: "Aeroespacial",
  domain2_desc:
    "Piezas estructurales y mecánicas de alta calidad para aplicaciones aeroespaciales, conformes con los estándares de calidad AS9100D.",
  domain3_title: "Equipos de Comunicación",
  domain3_cat: "Comunicaciones",
  domain3_desc:
    "Carcasas mecanizadas CNC y piezas de precisión para sistemas de comunicación civiles y militares.",
  domain4_title: "Herramientas de Prensa y Extrusión",
  domain4_cat: "Herramientas de Prensa",
  domain4_desc:
    "Diseño y fabricación especializada de herramientas para extrusión de aluminio — experiencia desarrollada en colaboración con la industria francesa.",
  domain5_title: "Robótica y Automatización",
  domain5_cat: "Robótica",
  domain5_desc:
    "Componentes de precisión y subconjuntos mecánicos para robótica y automatización industrial, diseñados para fiabilidad y repetibilidad.",
  domain6_title: "Comunicaciones Marinas",
  domain6_cat: "Marina",
  domain6_desc:
    "Piezas duraderas de alta precisión para sistemas de comunicación y navegación marina, diseñadas para entornos exigentes.",

  why_label: "Por Qué Nosotros",
  why_title: "Por Qué Elegir",
  why_title_highlight: "Sri Satyaritha",
  why1_title: "Más de 25 Años de Experiencia",
  why1_desc:
    "Liderado por profesionales con 25 años de experiencia trabajando con empresas francesas en componentes de alta precisión, herramientas de prensa y SPMs.",
  why2_title: "Soluciones Rentables",
  why2_desc:
    "Nos asociamos con talleres de micromecanizado para reducir costos manteniendo la misma calidad — sin compromisos.",
  why3_title: "Equipos CNC Modernos",
  why3_desc:
    "Nuestro taller tiene máquinas VMC (camas hasta 1365mm), tornos CNC, máquinas de ajuste y un instrumento de medición Trimos V7.",
  why4_title: "Entrega a Tiempo",
  why4_desc:
    "Historial sólido de entrega puntual. Horarios confiables y comunicación clara son esenciales en nuestra forma de trabajar.",
  why5_title: "Certificado ISO 9001:2015 y AS9100D",
  why5_desc:
    "Certificado por QRO y UK Certifications para gestión de calidad en Defensa, Aeroespacial y Comunicaciones.",
  why6_title: "Protección de PI y NDA",
  why6_desc:
    "Cada compromiso comienza con un Acuerdo de No Divulgación para proteger sus diseños y datos comerciales.",

  clients_label: "Certificaciones y Clientes",
  clients_title: "Calidad Certificada.",
  clients_title_highlight: "Socios de Confianza.",
  clients_cert_label: "Nuestras Certificaciones",
  clients_client_label: "Nuestros Estimados Clientes",
  cert1_name: "ISO 9001:2015",
  cert1_detail: "Sistema de Gestión de Calidad",
  cert2_name: "AS9100D",
  cert2_detail: "SGC Aviación, Espacio y Defensa",

  contact_label: "Contacto",
  contact_title: "Construyamos Algo",
  contact_title_highlight: "Sólido Juntos",
  contact_name: "Su Nombre",
  contact_email: "Dirección de Correo",
  contact_phone: "Número de Teléfono",
  contact_requirement: "Describa su requisito...",
  contact_send: "Enviar Mensaje",
  contact_get_in_touch: "Ponerse en Contacto",
  contact_desc:
    "¿Tiene un requisito de mecanizado, proyecto de diseño o necesidad de herramienta de prensa? Contacte a nuestro equipo y responderemos rápidamente con una solución a medida.",
  contact_phone_label: "Teléfono",
  contact_email_label: "Correo Electrónico",
  contact_admin_label: "Oficina Administrativa",
  contact_works_label: "Planta de Trabajo",
  contact_toast_title: "¡Mensaje enviado!",
  contact_toast_desc: "Nos pondremos en contacto pronto.",

  footer_tagline:
    "Fabricante certificado ISO 9001:2015 y AS9100D de componentes de precisión, herramientas de prensa y máquinas especiales. Al servicio de la Defensa, Aeroespacial y Comunicaciones durante más de 25 años.",
  footer_quick_links: "Enlaces Rápidos",
  footer_contact: "Contacto",
  footer_copyright: "Sri Satyaritha Engineers. Todos los derechos reservados.",
};

const de: typeof en = {
  nav_home: "Startseite",
  nav_about: "Über Uns",
  nav_services: "Leistungen",
  nav_domains: "Branchen",
  nav_why_us: "Warum Wir",
  nav_clients: "Kunden",
  nav_contact: "Kontakt",
  nav_quote: "Angebot Anfragen",

  hero_badge: "Präzisionstechnik & Fertigung",
  hero_title1: "Technische Exzellenz.",
  hero_title2: "Pünktlich geliefert.",
  hero_desc:
    "ISO 9001:2015 & AS9100D zertifizierter Hersteller von hochwertigen CNC-Bauteilen, Presswerkzeugen und Sondermaschinen für Verteidigung, Luft- und Raumfahrt und mehr.",
  hero_cta_quote: "Angebot Anfragen",
  hero_cta_domains: "Branchen Ansehen",
  hero_stat1_value: "25+",
  hero_stat1_label: "Jahre Erfahrung",
  hero_stat2_value: "10+",
  hero_stat2_label: "Vertrauensvolle Kunden",
  hero_stat3_value: "2",
  hero_stat3_label: "ISO-Zertifizierungen",

  about_label: "Über Uns",
  about_title: "Gebaut für",
  about_title_highlight: "industrielle Exzellenz",
  about_desc:
    "Sri Satyaritha Engineers (SSR Engineers) bedient Branchen wie Verteidigung, Luft- und Raumfahrt, Elektronik, Kommunikation, Automobile und Robotik — mit Präzisionsteilen nach höchsten Standards.",
  about_card1_title: "Wer Wir Sind",
  about_card1_text:
    "Sri Satyaritha Engineers ist ein indisches Unternehmen, das sich auf Engineering-Design und Präzisionsbauteilfertigung spezialisiert hat, mit bewährter Leistung bei pünktlicher Lieferung.",
  about_card2_title: "Unsere Expertise",
  about_card2_text:
    "Mit mehr als 25 Jahren Erfahrung aus der Zusammenarbeit mit französischen Unternehmen spezialisieren wir uns auf Hochpräzisionsbauteile, Unterbaugruppen, Presswerkzeuge und Sondermaschinen.",
  about_card3_title: "Unser Engagement",
  about_card3_text:
    "Wir sind der Kundenzufriedenheit und dem IP-Schutz verpflichtet. Jedes Projekt beginnt mit einer Geheimhaltungsvereinbarung zum Schutz der Daten unserer Kunden.",

  services_label: "Was Wir Tun",
  services_title: "Unsere",
  services_title_highlight: "Leistungen",
  services_desc:
    "Vom Konzept bis zur Lieferung — Design, Bearbeitung, Presswerkzeuge und Sondermaschinen für Verteidigung, Luft- und Raumfahrt und darüber hinaus.",
  service1_title: "3D-Konstruktion & CAD-Dienstleistungen",
  service1_desc:
    "Fortgeschrittene 3D-Modellierung, detaillierte Fertigungszeichnungen mit GD&T, Stücklistenerstellung, Baugruppenkennzeichnung und CAD-Konvertierung von Papier/PDF/AutoCAD zu 3D-Modellen.",
  service2_title: "CNC-Präzisionsbauteilfertigung",
  service2_desc:
    "Hochwertige CNC-Bauteile für Verteidigung, Luft- und Raumfahrt, Kommunikation und Robotik. Kleine bis mittlere Baugruppen mit präzisen Toleranzen und gründlicher Inspektion.",
  service3_title: "Presswerkzeugfertigung",
  service3_desc:
    "Maßgeschneiderte Presswerkzeuge für die Massenproduktion von Blech- und Kunststoffteilen. Spezialisiert auf Aluminiumextrusions-Presswerkzeuge für französische Kunden.",
  service4_title: "Blechbauteillieferung",
  service4_desc:
    "Massenproduktion von hochpräzisen Blechteilen mit maßgeschneiderten Presswerkzeugen. Wettbewerbsfähige Preise und konstante Qualität für Wiederholungsaufträge.",
  service5_title: "Sondermaschinen (SPMs)",
  service5_desc:
    "Konstruktion und Fertigung von maßgeschneiderten Maschinen — einschließlich pneumatischer, hydraulischer und automatisierter SPMs gemäß Kundenspezifikationen.",
  service6_title: "Oberflächenbehandlung & Veredelung",
  service6_desc:
    "Wärmebehandlung, Härtung, Eloxieren, Zink-/Nickel-/Cadmium-/Chromgalvanisierung und Spritzlackierung für Aluminium- und Stahlkomponenten.",

  domains_label: "Branchen",
  domains_title: "Industrien, die",
  domains_title_highlight: "Wir Bedienen",
  domains_desc:
    "Vertrauenswürdig für führende Organisationen in Verteidigung, Luft- und Raumfahrt, Kommunikation und mehr.",
  domain1_title: "Verteidigung & Radar",
  domain1_cat: "Verteidigung",
  domain1_desc:
    "Präzisionsbauteile und Unterbaugruppen für Radarsysteme, Steuerungspanele und Verteidigungsausrüstung nach strengen Toleranzanforderungen.",
  domain2_title: "Luft- und Raumfahrtstrukturen",
  domain2_cat: "Luft- & Raumfahrt",
  domain2_desc:
    "Hochwertige Struktur- und Maschinenbauteile für Luft- und Raumfahrtanwendungen, konform mit AS9100D-Qualitätsstandards.",
  domain3_title: "Kommunikationsausrüstung",
  domain3_cat: "Kommunikation",
  domain3_desc:
    "CNC-gefräste Gehäuse und Präzisionsteile für Kommunikationssysteme in zivilen und militärischen Anwendungen.",
  domain4_title: "Presswerkzeuge & Extrusion",
  domain4_cat: "Presswerkzeuge",
  domain4_desc:
    "Spezialisierte Presswerkzeuge für Aluminiumextrusionsprozesse — eine Kernkompetenz aus der Zusammenarbeit mit der französischen Industrie.",
  domain5_title: "Robotik & Automatisierung",
  domain5_cat: "Robotik",
  domain5_desc:
    "Präzisionsbauteile für Robotik- und Industrieautomatisierungssysteme, konzipiert für Zuverlässigkeit und Wiederholbarkeit.",
  domain6_title: "Marine-Kommunikation",
  domain6_cat: "Marine",
  domain6_desc:
    "Langlebige, hochpräzise Teile für marine Kommunikations- und Navigationssysteme, geeignet für anspruchsvolle Umgebungen.",

  why_label: "Warum Wir",
  why_title: "Warum",
  why_title_highlight: "Sri Satyaritha Wählen",
  why1_title: "Über 25 Jahre Erfahrung",
  why1_desc:
    "Geleitet von Fachleuten mit 25 Jahren Praxiserfahrung bei französischen Unternehmen an Hochpräzisionsbauteilen, Presswerkzeugen und SPMs.",
  why2_title: "Kostengünstige Lösungen",
  why2_desc:
    "Wir kooperieren mit erfahrenen Mikrozerspanungsbetrieben, um Kosten zu senken und gleichzeitig die Qualität beizubehalten.",
  why3_title: "Moderne CNC-Ausrüstung",
  why3_desc:
    "Unser Betrieb verfügt über VMC-Maschinen (Betten bis 1365mm), CNC-Drehmaschinen, Montagemaschinen und ein Trimos V7 Präzisionsmessgerät.",
  why4_title: "Pünktliche Lieferung",
  why4_desc:
    "Starke Erfolgsbilanz bei der pünktlichen Lieferung. Zuverlässige Zeitpläne und klare Kommunikation sind zentral für unsere Arbeitsweise.",
  why5_title: "ISO 9001:2015 & AS9100D Zertifiziert",
  why5_desc:
    "Unabhängig zertifiziert von QRO und UK Certifications für Qualitätsmanagement in Verteidigung, Luft- und Raumfahrt und Kommunikation.",
  why6_title: "IP-Schutz & NDA",
  why6_desc:
    "Jedes Kundenengagement beginnt mit einer Geheimhaltungsvereinbarung zum Schutz Ihrer Konstruktionen und Geschäftsdaten.",

  clients_label: "Zertifizierungen & Kunden",
  clients_title: "Zertifizierte Qualität.",
  clients_title_highlight: "Vertrauensvolle Partner.",
  clients_cert_label: "Unsere Zertifizierungen",
  clients_client_label: "Unsere Geschätzten Kunden",
  cert1_name: "ISO 9001:2015",
  cert1_detail: "Qualitätsmanagementsystem",
  cert2_name: "AS9100D",
  cert2_detail: "QMS Luftfahrt, Raumfahrt & Verteidigung",

  contact_label: "Kontakt",
  contact_title: "Lassen Sie Uns Gemeinsam",
  contact_title_highlight: "Etwas Starkes Bauen",
  contact_name: "Ihr Name",
  contact_email: "E-Mail-Adresse",
  contact_phone: "Telefonnummer",
  contact_requirement: "Beschreiben Sie Ihre Anforderung...",
  contact_send: "Nachricht Senden",
  contact_get_in_touch: "In Kontakt Treten",
  contact_desc:
    "Haben Sie eine Bearbeitungsanforderung, ein Konstruktionsprojekt oder einen Bedarf an Presswerkzeugen? Kontaktieren Sie uns für eine schnelle Antwort mit einer maßgeschneiderten Lösung.",
  contact_phone_label: "Telefon",
  contact_email_label: "E-Mail",
  contact_admin_label: "Verwaltungsbüro",
  contact_works_label: "Werkstatt",
  contact_toast_title: "Nachricht gesendet!",
  contact_toast_desc: "Wir melden uns in Kürze bei Ihnen.",

  footer_tagline:
    "ISO 9001:2015 & AS9100D zertifizierter Hersteller von Präzisionsbauteilen, Presswerkzeugen und Sondermaschinen. Seit mehr als 25 Jahren im Dienst von Verteidigung, Luft- und Raumfahrt und Kommunikation.",
  footer_quick_links: "Schnelllinks",
  footer_contact: "Kontakt",
  footer_copyright: "Sri Satyaritha Engineers. Alle Rechte vorbehalten.",
};

export const translations: Record<Language, typeof en> = { en, fr, es, de };
export type TranslationKey = keyof typeof en;

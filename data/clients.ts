interface client {
  name: string;
  linkedin: string;
  logoPath: string;
  domain: string;
  solutions: {
    transLinear: boolean;
    transEcommerce: boolean;
    transPromo: boolean;
    transImpact: boolean;
  };
}

const clients: client[] = [
  {
    name: "Bausch & Lomb",
    linkedin: "",
    logoPath: "/images/company-logos/Bausch-lomb-logo.png",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "Bayer",
    linkedin: "",
    logoPath: "/images/company-logos/Bayer-logo.png",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "Colgate",
    linkedin: "",
    logoPath: "/images/company-logos/Colgate-logo.png",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "Elanco",
    linkedin: "",
    logoPath: "/images/company-logos/Elanco-logo.png",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "Haleon",
    linkedin: "",
    logoPath: "/images/company-logos/Haleon-logo.png",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "Ipsen",
    linkedin: "",
    logoPath: "/images/company-logos/Ipsen-logo.png",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "J&J",
    linkedin: "",
    logoPath: "/images/company-logos/J&J-logo.png",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "L'Oreal",
    linkedin: "",
    logoPath: "/images/company-logos/L'Oreal-logo.png",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "Naos",
    linkedin: "",
    logoPath: "/images/company-logos/Naos-logo.jpg",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "Nestlé",
    linkedin: "",
    logoPath: "/images/company-logos/Nestlé-logo.png",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "Nuxe",
    linkedin: "",
    logoPath: "/images/company-logos/Nuxe-logo.jpg",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "P&G",
    linkedin: "",
    logoPath: "/images/company-logos/P&G-logo.png",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "Perrigo",
    linkedin: "",
    logoPath: "/images/company-logos/Perrigo-logo.png",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "Pierre Fabre",
    linkedin: "",
    logoPath: "/images/company-logos/Pierre-Fabre-logo.png",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "Pileje",
    linkedin: "",
    logoPath: "/images/company-logos/Pileje-logo.png",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "Recordati",
    linkedin: "",
    logoPath: "/images/company-logos/Recordati-logo.png",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "Sanofi",
    linkedin: "",
    logoPath: "/images/company-logos/Sanofi-logo.png",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "Urgo",
    linkedin: "",
    logoPath: "/images/company-logos/Urgo-logo.png",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
  {
    name: "Weleda",
    linkedin: "",
    logoPath: "/images/company-logos/Weleda-logo.jpg",
    domain: "",
    solutions: {
      transLinear: false,
      transEcommerce: false,
      transPromo: false,
      transImpact: true,
    },
  },
];

const activeClients = clients.filter(
  (client) =>
    client.solutions.transLinear ||
    client.solutions.transEcommerce ||
    client.solutions.transPromo ||
    client.solutions.transImpact
);

export { activeClients };
export default clients;

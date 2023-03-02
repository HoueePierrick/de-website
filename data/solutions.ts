interface Methodology {
  text: String;
  icon: String;
}

interface Solution {
  title: String;
  logo: String;
  descriptionShort: { DE: String; EN: String };
  descriptionOne: { DE: String; EN: String };
  descriptionTwo: { DE: String; EN: String };
  detailedDescriptionBullets: {
    DE: String[];
    EN: String[];
  };
  detailedMethodology: {
    DE: Methodology[];
    EN: Methodology[];
  };
  keyIndicators: {
    DE: String[];
    EN: String[];
  };
  color: String;
  active: boolean;
}

const solutions: Solution[] = [
  {
    title: "TransLinear",
    logo: "prescription-bottle",
    descriptionShort: {
      DE: "Erhalten Sie detaillierte Daten über den Inhalt der Apothekenregale",
      EN: "Get detailed data on the content of pharmacies' shelves",
    },
    descriptionOne: {
      DE: "Ein Panel von 800 Apotheken in ganz Deutschland",
      EN: "A panel of 800 pharmacies throughout Germany",
    },
    descriptionTwo: {
      DE: "Dashboards basierend auf Ihrer Marktsicht",
      EN: "Dashboards based on your view of the market",
    },
    detailedDescriptionBullets: {
      DE: [
        "Identifizieren Sie Ihre wichtigsten Handelsmöglichkeiten im Vergleich zur Konkurrenz",
        "Messen Sie die Effektivität Ihrer Vertriebsmaßnahmen",
        "Überwachen Sie die Erreichung Ihrer kommerziellen und Trade-Marketing-Ziele",
      ],
      EN: [
        "Identify your main trade opportunities vs. competition",
        "Measure the effectiveness of your sales force actions",
        "Monitor the achievement of your commercial and trade marketing objectives",
      ],
    },
    detailedMethodology: {
      DE: [
        {
          text: "Repräsentatives Gremium der Apotheken in Deutschland",
          icon: "map-location-dot",
        },
        {
          text: "Tracking über die Zeit",
          icon: "arrow-up-right-dots",
        },
        {
          text: "Erfassung aller Referenzdaten, in allen Apothekenstandorten",
          icon: "boxes-stacked",
        },
        {
          text: "Anpassung: Marktreferenz & Apotheken",
          icon: "star",
        },
      ],
      EN: [
        {
          text: "Representative panel of pharmacies in Germany",
          icon: "map-location-dot",
        },
        {
          text: "Tracking over time",
          icon: "arrow-up-right-dots",
        },
        {
          text: "Collection of all references data, in all pharmacy locations",
          icon: "boxes-stacked",
        },
        {
          text: "Customization: market reference & pharmacies",
          icon: "star",
        },
      ],
    },
    keyIndicators: {
      DE: [
        "Facings, linear, Sortiment: Segment, Marken",
        "Sichtbarkeit der Marke: % Facings, Linear, Referenzen",
        "Sichtbarkeit nach Art der Apotheke",
        "Durchdringung und Sichtbarkeit nach Standort",
      ],
      EN: [
        "Facings, linear, assortment: segment, brands",
        "Brand visibility: % Facings, Linear, References",
        "Visibility by type of pharmacy",
        "Penetration and visibility by location",
      ],
    },
    color: "red",
    active: true,
  },
  {
    title: "TransEcommerce",
    logo: "money-bill-trend-up",
    descriptionShort: {
      DE: "Holen Sie sich alle Daten über Ihre E-Commerce-Präsenz",
      EN: "Get all the data about your ecommerce presence",
    },
    descriptionOne: {
      DE: "15 Top-Sites und 1.000 Click-and-Collect wöchentlich gescreent",
      EN: "15 top-sites and 1,000 click and collect screened weekly",
    },
    descriptionTwo: {
      DE: "Detaillierte Daten zu Preis, Vertrieb und Inhalt all Ihrer Referenzen",
      EN: "Detailed data on price, distribution and content of all your references",
    },
    detailedDescriptionBullets: {
      DE: [
        "Identifizieren Sie Chancen auf wichtigen Websites und Gruppierungen",
        "Identifizieren und beheben Sie Engpässe bei Ihren wichtigsten Referenzen",
        "Verfolgen Sie die Entwicklung der Preise und Werbeaktionen Ihrer Marken",
        "Stellen Sie die Einhaltung Ihrer Markeninhalte, Bezeichnungen und Packungen sicher",
      ],
      EN: [
        "Identify opportunities on key sites and groupings",
        "Identify and address shortages on your key references",
        "Follow the evolution of prices and promotions on your brands",
        "Ensure compliance with your brand content, denominations and packs",
      ],
    },
    detailedMethodology: {
      DE: [
        {
          text: "+20 Top-Sites",
          icon: "globe",
        },
        {
          text: "+700 Click & Collect Apotheken",
          icon: "map-location-dot",
        },
        {
          text: "Ansicht nach Gruppierung: Alphega, Mea, Linda...",
          icon: "shop",
        },
      ],
      EN: [
        {
          text: "+20 top-sites",
          icon: "globe",
        },
        {
          text: "+700 click & collect pharmacies",
          icon: "map-location-dot",
        },
        {
          text: "View by grouping: Alphega, Mea, Linda...",
          icon: "shop",
        },
      ],
    },
    keyIndicators: {
      DE: [
        "Sortiment teilen, DN, Pausen",
        "Preise und Aktionen",
        "Markeninhalt: Name, Verpackung",
        "Ratings & Reviews: Kundenrezensionen",
      ],
      EN: [
        "Assortment share, DN, Breaks",
        "Prices and Promotions",
        "Brand content: name, packaging",
        "Ratings & Reviews: customer reviews",
      ],
    },
    color: "blue",
    active: true,
  },
  {
    title: "TransPromo",
    logo: "rectangle-ad",
    descriptionShort: {
      DE: "Sehen Sie sich die vollständigen Details darüber an, wie Ihre Werbeaktionen und die Ihrer Konkurrenten gespielt werden",
      EN: "See the full details of how your promotions and your competitors' are played",
    },
    descriptionOne: {
      DE: "Monatlich gesammelte und analysierte Broschüren für 15 Händler",
      EN: "Leaflets collected and analysed monthly for 15 distributors",
    },
    descriptionTwo: {
      DE: "Detaillierte Daten bis hin zu jedem Angebot jedes Spielers für jeden Händler",
      EN: "Detailed data up to each offer of each player for each distributor",
    },
    detailedDescriptionBullets: {
      DE: [
        "Die Werbedynamik aller Marken verstehen",
        "Analysieren Sie die Strategie Ihrer Konkurrenten: Werbemechanismen, Preise, bevorzugte Marken",
        "Optimieren und verwalten Sie Ihre Werbestrategie: Wettbewerbsfähigkeit, Angebote, Marken",
      ],
      EN: [
        "Understand the promotional dynamics of all brands",
        "Analyze the strategy of your competitors: promotional mechanisms, prices, preferred brands",
        "Optimize and manage your promotional strategy: competitiveness, offers, brands",
      ],
    },
    detailedMethodology: {
      DE: [
        {
          text: "Nationale Aktionen: Katalog, Kundenkarte",
          icon: "map-location-dot",
        },
        {
          text: "+10 Gruppierungen: Alphega, Mea, Linda usw.",
          icon: "shop",
        },
        {
          text: "Parapharmaziemarken",
          icon: "prescription-bottle-medical",
        },
      ],
      EN: [
        {
          text: "National promotions: catalogue, loyalty card",
          icon: "map-location-dot",
        },
        {
          text: "+10 Groupings: Alphega, Mea, Linda, etc.",
          icon: "shop",
        },
        {
          text: "Parapharmacy brands",
          icon: "prescription-bottle-medical",
        },
      ],
    },
    keyIndicators: {
      DE: [
        "Markenstrategie: Druck, Märkte, Rabatt",
        "Angebotsdetails: Ansprüche, Preise, Rabatte, Mechanismus",
        "Share of Voice nach Marke: % der gewichteten Angebote",
        "Aufschlüsselung des Share of Voice nach Marke / Gruppierung",
      ],
      EN: [
        "Brand strategy: pressure, markets, discount",
        "Details of offers: claims, prices, discounts, mechanism",
        "Share of voice by brand: % of weighted offers",
        "Breakdown of share of voice by Brand / Grouping",
      ],
    },
    color: "green",
    active: true,
  },
  {
    title: "TransImpact",
    logo: "arrow-up-right-dots",
    descriptionShort: {
      DE: "Wir tauchen tief in Ihre Daten ein, um Ihnen aussagekräftige Einblicke zu geben",
      EN: "We deep-dive in you data to give you powerful insights",
    },
    descriptionOne: {
      DE: "Unsere proprietären Daten kreuzten sich mit Ihren eigenen und den Daten der Panelisten",
      EN: "Our proprietary data crossed with your own, and panelist data",
    },
    descriptionTwo: {
      DE: "Einzigartige Einblicke, wie Sie Ihre Umsätze und Margen steigern können",
      EN: "Unique insights on how you can boost your sales and margins",
    },
    detailedDescriptionBullets: {
      DE: [
        "Messen Sie die Auswirkungen auf Ihren Umsatz und priorisieren Sie Ihre Bemühungen in Bezug auf Regalfläche, Sortiment usw.",
        "Identifizieren Sie Apothekenstandorte zur Priorisierung für Ihre Segmente und Marken",
        "Bewertung der Merchandising-Wirkung: Highlights und Promotions, POS, Multi-Location",
        "Empfehlen Sie wirkungsvolle Sortimente für Ihre Marken und die Apotheke",
      ],
      EN: [
        "Measure the impact on your sales and prioritize your efforts on shelf space, assortment, etc.",
        "Identify pharmacy locations to prioritize for your segments and brands",
        "Evaluate the merchandising impact: highlights and promotions, POS, multi-location",
        "Recommend effective assortments for your brands and the pharmacy",
      ],
    },
    detailedMethodology: {
      DE: [
        {
          text: "Multifaktor-Modellierung",
          icon: "magnifying-glass-chart",
        },
        {
          text: "Zeitreihen",
          icon: "business-time",
        },
        {
          text: "Normalisierte Sortierungen",
          icon: "filter-circle-xmark",
        },
      ],
      EN: [
        {
          text: "Multifactor modeling",
          icon: "magnifying-glass-chart",
        },
        {
          text: "Time series",
          icon: "business-time",
        },
        {
          text: "Normalized sorts",
          icon: "filter-circle-xmark",
        },
      ],
    },
    keyIndicators: {
      DE: [
        "Lineare Elastizität",
        "Priorisierung von Standorten",
        "Standortübergreifende Wirkung, Highlights",
        "Effizientes Sortiment, lineare Erträge",
      ],
      EN: [
        "Linear elasticity",
        "Prioritization of locations",
        "Multi-location impact, highlights",
        "Efficient Assortment, Linear Yields",
      ],
    },
    color: "orange",
    active: true,
  },
];

const activeSolutions = solutions.filter((solution) => solution.active);

export { activeSolutions };

export default solutions;

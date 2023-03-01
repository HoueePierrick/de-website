interface Solution {
  title: String;
  logo: String;
  descriptionShort: { DE: String; EN: String };
  descriptionOne: { DE: String; EN: String };
  descriptionTwo: { DE: String; EN: String };
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
    color: "orange",
    active: true,
  },
];

const activeSolutions = solutions.filter((solution) => solution.active);

export { activeSolutions };

export default solutions;

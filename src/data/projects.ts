export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "azure",
    title: "Microsoft Azure",
    role: "Software Engineer",
    period: "2025 \u2013 Present",
    description:
      "Scaling GPU, Compute, and Storage infrastructure across 400+ Azure datacenters worldwide.",
    highlights: [
      "Validating and securing hardware SKUs from factories to customers for cloud infrastructure",
      "Delivered a security initiative for secure hardware onboarding \u2014 preventing devices from accessing other devices until fully provisioned",
      "Promoted in under 1 year \u2014 rare for a graduate hire",
      "Also performing PM and team leadership work within role",
    ],
    tags: ["C#", "Azure", "Infrastructure"],
  },
  {
    id: "thesis",
    title:
      "AdMU E-Jeepney Time of Arrival Prediction Using XGBoost and Transformers",
    role: "Undergraduate Thesis",
    period: "2023 \u2013 2024",
    description:
      "Built sensor modules, collected real-world data, and trained ML models to predict campus e-jeepney arrival times with near-perfect accuracy.",
    highlights: [
      "Co-authors: Anna Ysabella Habana, Franco Manuel D. Velasco",
      "Advisers: Patricia Angela R. Abu, PhD; Raphael B. Alampay, PhD",
      "Accepted for Oral Presentation at Macau",
      "Built 3 Raspberry Pi sensor modules (GPS, temperature, humidity) placed on campus e-jeeps across 9 operational days",
      "Full ML pipeline: data collection \u2192 42 feature extraction \u2192 preprocessing \u2192 model training \u2192 hyperparameter tuning (Bayesian Optimization) \u2192 feature reduction (PCA + Autoencoders)",
      "Transformer + Autoencoders achieved R\u00B2 = 0.9992 \u2014 near-perfect prediction",
      "Demonstrated Transformers\u2019 viability for transportation time-series data",
    ],
    tags: [
      "Python",
      "XGBoost",
      "Transformers",
      "Raspberry Pi",
      "Machine Learning",
    ],
  },
  {
    id: "arfid",
    title: "ARFID: Automated RFID-Based ID System",
    role: "High School Thesis",
    period: "Age 16\u201317",
    description:
      "Built an RFID-based attendance system from scratch using Arduino, a spare PC, GSM module, and RFID cards.",
    highlights: [
      "Features: attendance logging, parent SMS notification, teacher email summaries, visual interface",
      "Tested with 100 students, 100 parents, 5 teachers",
      "Statistically significant improvement in adoption and positive perception",
      "Won Best Thesis in Applied Sciences & Engineering",
    ],
    tags: ["Arduino", "RFID", "GSM", "Hardware"],
  },
  {
    id: "hackfest",
    title: "Google HackFest 2023 \u2014 Grand Champion",
    role: "Google Developer Student Clubs \u2013 Loyola",
    period: "2023",
    description:
      'Built "Refind": an app bridging the preloved clothes market into a dating-swipe format.',
    highlights: [
      "Built the team, developed the idea, and pitched \u2014 all in 2 days",
    ],
    tags: ["Hackathon", "Product Design", "Pitch"],
  },
  {
    id: "citi",
    title: "Citibank \u2014 Summer Analyst",
    role: "Enterprise Operations & Technology",
    period: "Jun \u2013 Aug 2023",
    description:
      "Proposed CISO recommendations for IAM operations globally by analysing automation failures.",
    highlights: [
      "Built a tool independently that saves 8 hours/month from analysts globally",
      "Led as main local developer migrating manual work into AI virtual assistant (Kore.AI)",
      "Received return offer for exclusive Management Trainee graduate program",
    ],
    tags: ["IAM", "Kore.AI", "Automation"],
  },
  {
    id: "cs-summit",
    title: "CS Summit 5.0 Ideathon \u2014 1st Runner-up + MDI Novare Award",
    role: "Ideathon Competition",
    period: "Jan 2022",
    description:
      "Smart agriculture advisory app using weather and IoT data to advise farmers on optimal crop strains.",
    highlights: [
      "Incorporated farmer knowledge feedback loops and collective coordination to prevent market imbalance",
    ],
    tags: ["IoT", "Agriculture", "Product Design"],
  },
];

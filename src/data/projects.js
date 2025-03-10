export const projects = [
  {
    id: 1,
    title: "Sales Data Analysis Dashboard",
    description: "Interactive dashboard analyzing sales trends across regions with forecasting models.",
    technologies: ["Python", "Pandas", "Plotly", "Scikit-learn", "Tableau"],
    image: "https://placehold.co/600x400?text=Sales+Dashboard",
    github: "https://github.com/yourusername/sales-analysis",
    demo: "https://your-demo-link.com",
    category: "Data Visualization",
    highlights: [
      "Analyzed 50,000+ sales records to identify key revenue drivers",
      "Built predictive models with 92% accuracy for sales forecasting",
      "Created interactive Tableau dashboard for stakeholder presentations"
    ],
    fullDescription: `
      This project involved cleaning and analyzing a large sales dataset to derive actionable insights.
      I employed statistical methods to identify trends and built predictive models using time-series
      analysis to forecast future sales with high accuracy. The interactive dashboard was used by the
      sales team to monitor KPIs and identify growth opportunities.
    `,
    process: [
      "Data Collection & Cleaning",
      "Exploratory Data Analysis",
      "Statistical Testing",
      "Time Series Modeling",
      "Dashboard Development"
    ]
  },
  {
    id: 2,
    title: "Customer Segmentation Analysis",
    description: "Leveraged clustering algorithms to identify customer segments for targeted marketing.",
    technologies: ["Python", "Scikit-learn", "K-means", "Matplotlib", "Pandas"],
    image: "https://placehold.co/600x400?text=Customer+Segmentation",
    github: "https://github.com/yourusername/customer-segmentation",
    demo: "https://your-demo-link.com",
    category: "Machine Learning",
    highlights: [
      "Segmented 100,000+ customers into 5 distinct groups based on purchasing behavior",
      "Increased marketing campaign ROI by 35% through targeted strategies",
      "Developed cluster visualization tool for marketing team"
    ],
    fullDescription: `
      This project focused on analyzing customer behavior data to identify distinct segments for
      targeted marketing campaigns. Using K-means clustering and other unsupervised learning techniques,
      I identified 5 customer segments with unique characteristics. The segmentation model was integrated
      into the company's CRM system, allowing for personalized marketing approaches that significantly
      improved campaign performance metrics.
    `,
    process: [
      "Data Preprocessing",
      "Feature Engineering & Selection",
      "Model Selection & Evaluation",
      "Cluster Analysis & Interpretation",
      "Implementation & Tracking"
    ]
  },
  {
    id: 3,
    title: "COVID-19 Data Analysis & Visualization",
    description: "Analysis of COVID-19 trends across different regions with interactive dashboards.",
    technologies: ["R", "ggplot2", "Shiny", "dplyr", "Leaflet"],
    image: "https://placehold.co/600x400?text=COVID+Analysis",
    github: "https://github.com/yourusername/covid-analysis",
    demo: "https://your-demo-link.com",
    category: "Data Visualization",
    highlights: [
      "Processed and cleaned pandemic data from multiple sources",
      "Created interactive R Shiny dashboard for real-time monitoring",
      "Developed predictive models for case trend forecasting"
    ],
    fullDescription: `
      In this project, I analyzed COVID-19 data to understand infection rates, vaccination impacts, and
      regional variations. I developed an interactive dashboard using R Shiny that allowed users to explore
      trends across different geographic areas and time periods. The visualizations included choropleth maps,
      time series charts, and statistical analyses that helped identify patterns and correlations between
      various factors affecting infection rates.
    `,
    process: [
      "Data Collection from Multiple Sources",
      "Data Cleaning & Integration",
      "Statistical Analysis & Modeling",
      "Dashboard Development",
      "Insights Communication"
    ]
  }
];

/**
 * Cursor-reveal scenes for the home interactive statement.
 *
 * 6 industries × 5 statements = 30 scenes. Each scene has its own image.
 *
 * Images live in one folder:
 *   public/images/interactive-statement/
 *
 * Filename pattern:
 *   {industry}-{01-05}.png
 *
 *   cities-01.png … cities-05.png
 *   environment-01.png … environment-05.png
 *   security-01.png … security-05.png
 *   trade-01.png … trade-05.png
 *   government-01.png … government-05.png
 *   workforce-01.png … workforce-05.png
 *
 * Replace any file in that folder (keep the name) to update the hover image.
 *
 * Eyebrow renders as: `{lead} + {governed} + {critical}`
 */

const IMAGE_FOLDER = '/images/interactive-statement';

function statementImage(industry: IndustryId, index: 1 | 2 | 3 | 4 | 5) {
  return `${IMAGE_FOLDER}/${industry}-${String(index).padStart(2, '0')}.png`;
}

export type IndustryId =
  | 'cities'
  | 'environment'
  | 'security'
  | 'trade'
  | 'government'
  | 'workforce';

export type InteractiveStatementScene = {
  industry: IndustryId;
  title: string;
  image: string;
  lead: string;
  governed: string;
  critical: string;
};

type StatementDraft = {
  title: string;
  lead: string;
  governed: string;
  critical: string;
};

function expandIndustry(
  industry: IndustryId,
  statements: readonly [
    StatementDraft,
    StatementDraft,
    StatementDraft,
    StatementDraft,
    StatementDraft,
  ]
): InteractiveStatementScene[] {
  return statements.map((statement, index) => ({
    industry,
    image: statementImage(industry, (index + 1) as 1 | 2 | 3 | 4 | 5),
    ...statement,
  }));
}

export const interactiveStatementScenes: readonly InteractiveStatementScene[] = [
  ...expandIndustry('cities', [
    {
      title: 'Rush Hour Network',
      lead: 'Traffic Flow',
      governed: 'Digital Twin Simulation',
      critical: 'Traffic Modeler',
    },
    {
      title: 'Public Transport Demand',
      lead: 'Passenger Demand',
      governed: 'Transit Capacity Model',
      critical: 'Transport Planner',
    },
    {
      title: 'Road Safety',
      lead: 'Collision Patterns',
      governed: 'Road Risk Model',
      critical: 'Safety Engineer',
    },
    {
      title: 'Urban Growth',
      lead: 'Population Growth',
      governed: 'Land-Use Simulation',
      critical: 'Urban Planner',
    },
    {
      title: 'Infrastructure Capacity',
      lead: 'Network Load',
      governed: 'Capacity Forecasting',
      critical: 'Infrastructure Director',
    },
  ]),
  ...expandIndustry('environment', [
    {
      title: 'Marine Incident',
      lead: 'Marine Currents',
      governed: 'Oil Spill Simulation',
      critical: 'Emergency Operator',
    },
    {
      title: 'Urban Air Quality',
      lead: 'Emissions',
      governed: 'Dispersion Model',
      critical: 'Air Quality Specialist',
    },
    {
      title: 'Groundwater Pressure',
      lead: 'Aquifer Levels',
      governed: 'Groundwater Model',
      critical: 'Water Resource Manager',
    },
    {
      title: 'Ecological Development',
      lead: 'Habitat Change',
      governed: 'Biodiversity Risk Model',
      critical: 'Environmental Regulator',
    },
    {
      title: 'Energy Demand',
      lead: 'Power Consumption',
      governed: 'Load Forecasting',
      critical: 'Grid Operator',
    },
  ]),
  ...expandIndustry('security', [
    {
      title: 'Emerging Threat',
      lead: 'Incident Data',
      governed: 'Threat Correlation',
      critical: 'Intelligence Analyst',
    },
    {
      title: 'Major Incident',
      lead: 'Live Incidents',
      governed: 'Response Orchestration',
      critical: 'Duty Officer',
    },
    {
      title: 'Border Activity',
      lead: 'Crossing Patterns',
      governed: 'Anomaly Detection',
      critical: 'Border Officer',
    },
    {
      title: 'Criminal Investigation',
      lead: 'Case Networks',
      governed: 'Link Analysis',
      critical: 'Investigator',
    },
    {
      title: 'Public Safety',
      lead: 'Emergency Calls',
      governed: 'Hotspot Model',
      critical: 'Police Operations Officer',
    },
  ]),
  ...expandIndustry('trade', [
    {
      title: 'Port Clearance',
      lead: 'Cargo Manifests',
      governed: 'Risk Scoring',
      critical: 'Customs Inspector',
    },
    {
      title: 'Trade Flows',
      lead: 'Import Flows',
      governed: 'Trade Anomaly Detection',
      critical: 'Customs Analyst',
    },
    {
      title: 'High-Risk Shipment',
      lead: 'Shipment History',
      governed: 'Targeting Model',
      critical: 'Inspection Officer',
    },
    {
      title: 'Border Congestion',
      lead: 'Vehicle Arrivals',
      governed: 'Queue Forecasting',
      critical: 'Border Operations Manager',
    },
    {
      title: 'Air Cargo',
      lead: 'Air Freight Movements',
      governed: 'Clearance Prediction',
      critical: 'Cargo Officer',
    },
  ]),
  ...expandIndustry('government', [
    {
      title: 'Service Pressure',
      lead: 'Service Demand',
      governed: 'Capacity Forecasting',
      critical: 'Minister',
    },
    {
      title: 'City Performance',
      lead: 'City KPIs',
      governed: 'Performance Intelligence',
      critical: 'Governor',
    },
    {
      title: 'Emergency Services',
      lead: 'Response Times',
      governed: 'Resource Optimization',
      critical: 'Civil Defense Director',
    },
    {
      title: 'Public Investment',
      lead: 'Capital Projects',
      governed: 'Impact Modeling',
      critical: 'Infrastructure Minister',
    },
    {
      title: 'Executive Oversight',
      lead: 'Agency Performance',
      governed: 'Cross-Government Intelligence',
      critical: 'Cabinet Official',
    },
  ]),
  ...expandIndustry('workforce', [
    {
      title: 'National Skills',
      lead: 'Skills Supply',
      governed: 'Labor Demand Forecasting',
      critical: 'Economic Policy Maker',
    },
    {
      title: 'Future Employment',
      lead: 'Job Creation',
      governed: 'Economic Scenario Model',
      critical: 'Labor Minister',
    },
    {
      title: 'Skills Gaps',
      lead: 'Occupation Data',
      governed: 'Skills Gap Model',
      critical: 'Education Policy Maker',
    },
    {
      title: 'Workforce Distribution',
      lead: 'Employment Patterns',
      governed: 'Geospatial Labor Model',
      critical: 'Economic Planner',
    },
    {
      title: 'Talent Pipeline',
      lead: 'Graduate Supply',
      governed: 'Workforce Demand Model',
      critical: 'Higher Education Official',
    },
  ]),
];

export const interactiveStatementImages = interactiveStatementScenes.map(
  (scene) => scene.image
);

export const interactiveStatementIdleEyebrow = {
  lead: 'Sovereign Data',
  governed: 'Governed AI',
  critical: 'Critical People',
} as const;

export const interactiveStatementCopy =
  'Our software enables governments and enterprises to understand what is happening, detect what is forming, and coordinate action in real time.' as const;

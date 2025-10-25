export interface Industry {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  advantages: string[];
  useCases: string[];
  metrics?: {
    label: string;
    value: string;
    description: string;
  }[];
  caseStudies?: {
    title: string;
    description: string;
    result: string;
    image?: string;
  }[];
}

export const industries: Industry[] = [
  {
    slug: 'mobility',
    title: 'Mobility & Transportation',
    description: 'Transform urban mobility with intelligent data solutions that optimize traffic flow, reduce congestion, and enhance transportation efficiency across cities and regions.',
    shortDescription: 'Optimize traffic flow and reduce congestion with intelligent mobility solutions.',
    icon: '🚗',
    color: 'from-blue-500 to-cyan-500',
    advantages: [
      'Real-time traffic optimization',
      'Predictive maintenance for vehicles',
      'Smart route planning',
      'Reduced carbon emissions',
      'Enhanced passenger experience'
    ],
    useCases: [
      'Smart traffic management systems',
      'Public transit optimization',
      'Fleet management solutions',
      'Parking space optimization',
      'Emergency response coordination'
    ],
    metrics: [
      {
        label: 'Traffic Reduction',
        value: '35%',
        description: 'Average reduction in traffic congestion'
      },
      {
        label: 'Fuel Savings',
        value: '25%',
        description: 'Decrease in fuel consumption'
      },
      {
        label: 'Travel Time',
        value: '40%',
        description: 'Reduction in average commute time'
      }
    ]
  },
  {
    slug: 'real-estate',
    title: 'Real Estate & Assets',
    description: 'Maximize property value and operational efficiency through data-driven insights for asset management, market analysis, and tenant experience optimization.',
    shortDescription: 'Maximize property value with data-driven asset management solutions.',
    icon: '🏢',
    color: 'from-green-500 to-emerald-500',
    advantages: [
      'Property value optimization',
      'Tenant satisfaction improvement',
      'Maintenance cost reduction',
      'Market trend analysis',
      'Energy efficiency optimization'
    ],
    useCases: [
      'Smart building management',
      'Property valuation models',
      'Tenant behavior analytics',
      'Maintenance scheduling',
      'Market forecasting'
    ],
    metrics: [
      {
        label: 'Property Value',
        value: '20%',
        description: 'Average increase in property valuation'
      },
      {
        label: 'Energy Savings',
        value: '30%',
        description: 'Reduction in energy consumption'
      },
      {
        label: 'Tenant Satisfaction',
        value: '85%',
        description: 'Improved tenant satisfaction scores'
      }
    ]
  },
  {
    slug: 'citizen-services',
    title: 'Citizen & Service Experience',
    description: 'Enhance public service delivery and citizen engagement through intelligent data analytics that improve service quality, accessibility, and responsiveness.',
    shortDescription: 'Enhance public service delivery with citizen-centric data solutions.',
    icon: '👥',
    color: 'from-purple-500 to-pink-500',
    advantages: [
      'Improved service accessibility',
      'Faster response times',
      'Citizen satisfaction enhancement',
      'Resource optimization',
      'Transparent governance'
    ],
    useCases: [
      'Digital service portals',
      'Citizen feedback systems',
      'Service queue optimization',
      'Resource allocation',
      'Performance monitoring'
    ],
    metrics: [
      {
        label: 'Service Speed',
        value: '50%',
        description: 'Faster service delivery'
      },
      {
        label: 'Citizen Satisfaction',
        value: '90%',
        description: 'Improved satisfaction ratings'
      },
      {
        label: 'Processing Time',
        value: '60%',
        description: 'Reduction in processing time'
      }
    ]
  },
  {
    slug: 'technology',
    title: 'Technology Infrastructure',
    description: 'Build robust, scalable technology foundations with data-driven infrastructure management, security optimization, and performance monitoring solutions.',
    shortDescription: 'Build robust technology foundations with intelligent infrastructure management.',
    icon: '💻',
    color: 'from-orange-500 to-red-500',
    advantages: [
      'Infrastructure optimization',
      'Security enhancement',
      'Performance monitoring',
      'Cost reduction',
      'Scalability improvement'
    ],
    useCases: [
      'Cloud infrastructure management',
      'Network optimization',
      'Security monitoring',
      'Performance analytics',
      'Capacity planning'
    ],
    metrics: [
      {
        label: 'Uptime',
        value: '99.9%',
        description: 'System availability improvement'
      },
      {
        label: 'Cost Savings',
        value: '40%',
        description: 'Infrastructure cost reduction'
      },
      {
        label: 'Performance',
        value: '3x',
        description: 'Faster system performance'
      }
    ]
  },
  {
    slug: 'military',
    title: 'Military & Defense',
    description: 'Strengthen national security with advanced data analytics for threat assessment, resource allocation, and strategic decision-making in defense operations.',
    shortDescription: 'Strengthen national security with advanced defense analytics.',
    icon: '🛡️',
    color: 'from-gray-600 to-gray-800',
    advantages: [
      'Threat intelligence analysis',
      'Resource optimization',
      'Strategic planning support',
      'Operational efficiency',
      'Risk assessment'
    ],
    useCases: [
      'Threat detection systems',
      'Resource allocation models',
      'Strategic planning tools',
      'Operational analytics',
      'Risk assessment platforms'
    ],
    metrics: [
      {
        label: 'Threat Detection',
        value: '95%',
        description: 'Accuracy in threat identification'
      },
      {
        label: 'Response Time',
        value: '70%',
        description: 'Faster response to threats'
      },
      {
        label: 'Resource Efficiency',
        value: '45%',
        description: 'Improved resource utilization'
      }
    ]
  },
  {
    slug: 'safety',
    title: 'Safety & Law Enforcement',
    description: 'Enhance public safety and law enforcement effectiveness through predictive analytics, crime prevention, and emergency response optimization.',
    shortDescription: 'Enhance public safety with predictive law enforcement analytics.',
    icon: '🚔',
    color: 'from-indigo-500 to-blue-600',
    advantages: [
      'Crime prevention',
      'Emergency response optimization',
      'Resource allocation',
      'Public safety enhancement',
      'Data-driven policing'
    ],
    useCases: [
      'Predictive policing',
      'Emergency response systems',
      'Crime pattern analysis',
      'Resource deployment',
      'Public safety monitoring'
    ],
    metrics: [
      {
        label: 'Crime Reduction',
        value: '25%',
        description: 'Decrease in crime rates'
      },
      {
        label: 'Response Time',
        value: '35%',
        description: 'Faster emergency response'
      },
      {
        label: 'Case Resolution',
        value: '40%',
        description: 'Improved case resolution rate'
      }
    ]
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find(industry => industry.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map(industry => industry.slug);
}

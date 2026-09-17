import { alterEngineDestination } from './navigation';

export interface ProductInfo {
  id: string;
  category: string;
  title: string;
  description: string;
  points: string[];
  ctaLabel: string;
  ctaHref: string;
  detailTitle: string;
  detailExplanation: string;
  detailRows: { label: string; text: string }[];
}

export const productsData: ProductInfo[] = [
  {
    id: 'engine',
    category: 'FLAGSHIP PRODUCT',
    title: 'Alter Engine',
    description: 'Turn one objective into a clear sequence of work. Review the plan, approve important actions and inspect the result.',
    points: [
      'Structures the work',
      'Pauses for decisions',
      'Checks what comes back'
    ],
    ctaLabel: 'Try Alter Engine',
    ctaHref: alterEngineDestination,
    detailTitle: 'From one objective to reviewable work.',
    detailExplanation: 'Alter Engine identifies what needs to be completed, proposes the steps and keeps approval points clear before actions run.',
    detailRows: [
      { label: 'What you provide', text: 'The result you need and the relevant context.' },
      { label: 'What the Engine does', text: 'Structures the work and carries out approved steps.' },
      { label: 'What you receive', text: 'A result with its decisions, actions and checks available for review.' }
    ]
  },
  {
    id: 'cognitive',
    category: 'INVENTORY OPERATIONS',
    title: 'Cognitive AI',
    description: 'Bring stock attention, forecasting signals, product decisions and supplier actions into one operating view.',
    points: [
      'See what needs attention',
      'Understand the next decision',
      'Route actions for approval'
    ],
    ctaLabel: 'Explore Cognitive AI',
    ctaHref: '/cognitive-ai',
    detailTitle: 'Every inventory decision, explained and routed.',
    detailExplanation: 'Instead of searching dashboards, Cognitive AI surfaces what needs your attention, explains why, and routes the necessary supplier actions for approval.',
    detailRows: [
      { label: 'What you provide', text: 'Your forecast data and current inventory states.' },
      { label: 'What the Engine does', text: 'Identifies signals, explains the cause, and drafts the next action.' },
      { label: 'What you receive', text: 'Clear decisions ready for human approval.' }
    ]
  },
  {
    id: 'custom',
    category: 'ENTERPRISE',
    title: 'Custom workflows',
    description: 'Design an Alter Engine workflow around your existing systems, permissions, handoffs and operating rules.',
    points: [
      'Map the real process',
      'Define authority',
      'Connect approved systems'
    ],
    ctaLabel: 'Discuss a workflow',
    ctaHref: '#discuss',
    detailTitle: 'Your process. Our Engine.',
    detailExplanation: 'Bring the capability of Alter Engine into your unique operating environment without compromising your existing permissions or security.',
    detailRows: [
      { label: 'What you provide', text: 'Your operating rules and authorized systems.' },
      { label: 'What the Engine does', text: 'Translates objectives into your specific workflow steps.' },
      { label: 'What you receive', text: 'Engine automation that respects your governance.' }
    ]
  },
  {
    id: 'build',
    category: 'PRODUCTS AND INTERNAL SYSTEMS',
    title: 'Build with AlterX',
    description: 'Bring planned, approval-aware Alter Engine workflows into a product or internal environment.',
    points: [
      'Submit an objective',
      'Receive execution states',
      'Return a reviewable result'
    ],
    ctaLabel: 'Explore developer access',
    ctaHref: '#developer',
    detailTitle: 'Approval-aware automation for your product.',
    detailExplanation: 'Provide your users with reliable, step-by-step automation that pauses for their approval and returns a fully transparent execution record.',
    detailRows: [
      { label: 'What you provide', text: 'An API connection and user objectives.' },
      { label: 'What the Engine does', text: 'Plans the work and streams execution states back.' },
      { label: 'What you receive', text: 'A deterministic, reviewable result for your users.' }
    ]
  }
];

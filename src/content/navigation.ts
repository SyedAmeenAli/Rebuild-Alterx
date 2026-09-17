export interface NavLink {
  label: string;
  href: string;
  description?: string;
  disabled?: boolean;
}

export const alterEngineDestination = process.env.NEXT_PUBLIC_ALTER_ENGINE_URL ?? "/try-alter-engine";

export interface NavMenu {
  id: string;
  trigger: string;
  primaryAction?: NavLink;
  links: NavLink[];
  secondaryLinks?: NavLink[];
  visualType: 'engine' | 'solutions' | 'products' | 'developers' | 'company' | 'resources';
}

export const navigationData: NavMenu[] = [
  {
    id: 'engine',
    trigger: 'Alter Engine',
    visualType: 'engine',
    links: [
      { label: 'Overview', href: '#engine-overview' },
      { label: 'How it works', href: '#engine-how-it-works' },
      { label: 'Control and governance', href: '#engine-governance' },
    ]
  },
  {
    id: 'solutions',
    trigger: 'Solutions',
    visualType: 'solutions',
    links: [
      { label: 'Cognitive AI', href: '#cognitive-ai' },
      { label: 'Custom workflows', href: '#custom-workflows' },
      { label: 'Voice workflows', href: '#voice-workflows', disabled: true }, // Controlled by availability gate
      { label: 'Operational coordination', href: '#operational' },
      { label: 'Research and reporting', href: '#research' },
    ]
  },
  {
    id: 'products',
    trigger: 'Products',
    visualType: 'products',
    primaryAction: { label: 'Alter Engine', href: '#engine' },
    links: [
      { label: 'Cognitive AI', href: '#cognitive-ai' }
    ],
    secondaryLinks: [
      { label: 'Platform experience', href: '#platform', description: 'The workspace used to supervise Alter Engine.' }
    ]
  },
  {
    id: 'developers',
    trigger: 'Developers',
    visualType: 'developers',
    links: [
      { label: 'Developer overview', href: '#developer-overview' },
      { label: 'Architecture', href: '#architecture' },
      { label: 'Request developer access', href: '/request-access?type=developer' },
      { label: 'Documentation', href: '#docs', disabled: true },
      { label: 'API access', href: '#api', disabled: true }
    ]
  },
  {
    id: 'company',
    trigger: 'Company',
    visualType: 'company',
    links: [
      { label: 'About AlterX', href: '#about' },
      { label: 'Mission', href: '#mission' },
      { label: 'Updates', href: '#updates', disabled: true },
      { label: 'Contact', href: '#contact' }
    ]
  },
  {
    id: 'resources',
    trigger: 'Resources',
    visualType: 'resources',
    links: [
      { label: 'Security and governance', href: '#security' },
      { label: 'How Alter Engine works', href: '#engine-how-it-works' },
      { label: 'Guides', href: '#guides', disabled: true },
      { label: 'Updates', href: '#updates', disabled: true },
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy and terms', href: '#privacy' }
    ]
  }
];

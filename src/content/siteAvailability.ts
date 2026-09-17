export interface SiteAvailability {
  tryEngine: boolean;
  cognitiveAI: boolean;
  customWorkflows: boolean;
  voiceWorkflows: boolean;
  developerAccess: boolean;
  publicAPI: boolean;
  documentation: boolean;
  updates: boolean;
  verifiedMetrics: boolean;
  customerLogos: boolean;
}

export const siteAvailability: SiteAvailability = {
  tryEngine: false,
  cognitiveAI: true,
  customWorkflows: true,
  voiceWorkflows: false,
  developerAccess: true,
  publicAPI: false,
  documentation: false,
  updates: false,
  verifiedMetrics: false,
  customerLogos: false,
};

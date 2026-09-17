export interface ComparisonRow {
  id: string;
  feature: string;
  assistant: string;
  automation: string;
  engine: string;
  explanation: string;
}

export const comparisonData: ComparisonRow[] = [
  {
    id: 'start',
    feature: 'Starts with the required result',
    assistant: 'Yes',
    automation: 'Requires manual setup',
    engine: 'Yes',
    explanation: 'Alter Engine accepts the objective directly, just like an assistant, without needing manual step-by-step programming beforehand.'
  },
  {
    id: 'plan',
    feature: 'Creates the plan',
    assistant: 'Yes',
    automation: 'No',
    engine: 'Yes',
    explanation: 'The Engine generates a structured, visible plan from the objective before execution begins.'
  },
  {
    id: 'multiple',
    feature: 'Handles multiple dependent steps',
    assistant: 'Limited',
    automation: 'Yes',
    engine: 'Yes',
    explanation: 'Unlike simple chat assistants, the Engine orchestrates complex dependencies where step C requires step B.'
  },
  {
    id: 'systems',
    feature: 'Uses approved systems',
    assistant: 'Limited',
    automation: 'Yes',
    engine: 'Yes',
    explanation: 'Integrates deeply with enterprise systems using defined permissions and verified API boundaries.'
  },
  {
    id: 'decisions',
    feature: 'Pauses for human decisions',
    assistant: 'No',
    automation: 'Depends on configuration',
    engine: 'Yes',
    explanation: 'Native approval points pause the workflow, allowing human judgement before risky or high-value actions run.'
  },
  {
    id: 'progress',
    feature: 'Shows current progress',
    assistant: 'No',
    automation: 'Yes',
    engine: 'Yes',
    explanation: 'Provides real-time visibility into what is completed, what is currently running, and what is waiting.'
  },
  {
    id: 'checks',
    feature: 'Checks the result',
    assistant: 'Limited',
    automation: 'No',
    engine: 'Yes',
    explanation: 'Automatically compares the final output against the original objective to ensure it actually succeeded.'
  },
  {
    id: 'failure',
    feature: 'Responds when a step fails',
    assistant: 'No',
    automation: 'Limited',
    engine: 'Yes',
    explanation: 'Returns failed steps for revision, automatic retry, or immediate human intervention.'
  },
  {
    id: 'evidence',
    feature: 'Preserves evidence',
    assistant: 'No',
    automation: 'Yes',
    engine: 'Yes',
    explanation: 'Stores an immutable record of every decision, permission check, and action taken.'
  }
];

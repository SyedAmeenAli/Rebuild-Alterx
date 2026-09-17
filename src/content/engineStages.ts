export interface EngineStage {
  id: string;
  heading: string;
  explanation: string;
  typedLine: string;
}

export const engineStages: EngineStage[] = [
  {
    id: 'understand',
    heading: 'Begin with the result.',
    explanation: 'Describe what needs to be completed in ordinary language. Alter Engine identifies the objective and asks only for context that is genuinely missing.',
    typedLine: 'The goal is clear.'
  },
  {
    id: 'plan',
    heading: 'See the path before the work begins.',
    explanation: 'The Engine turns the objective into a sequence of steps, dependencies and decisions that can be reviewed.',
    typedLine: 'The work has a structure.'
  },
  {
    id: 'approve',
    heading: 'Keep important decisions with the right person.',
    explanation: 'Actions involving permission, judgement or risk pause until someone approves them or changes the plan.',
    typedLine: 'Authority remains visible.'
  },
  {
    id: 'act',
    heading: 'Follow the work as it moves.',
    explanation: 'Approved steps run in order. Completed, current and waiting actions remain visible throughout the process.',
    typedLine: 'Progress is no longer hidden.'
  },
  {
    id: 'check',
    heading: 'Review the result, not just the activity.',
    explanation: 'Alter Engine compares what came back with the original objective. Weak or failed steps return for revision, retry or human judgement.',
    typedLine: 'The result is ready to review.'
  }
];

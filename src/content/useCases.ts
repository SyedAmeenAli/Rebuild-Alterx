export interface UseCase {
  id: string;
  context: string;
  statement: string;
}

export const useCasesData: UseCase[] = [
  {
    id: 'coordination',
    context: 'Operational coordination',
    statement: 'Manage cross-team dependencies and maintain visibility across parallel workstreams.'
  },
  {
    id: 'inventory',
    context: 'Inventory decisions',
    statement: 'React to stock signals, propose reallocation and request human approval for significant shifts.'
  },
  {
    id: 'research',
    context: 'Research and reporting',
    statement: 'Gather disparate data, synthesize evidence and prepare draft reports for expert review.'
  },
  {
    id: 'conversations',
    context: 'Customer conversations',
    statement: 'Turn natural language requests into structured, trackable actions within internal systems.'
  },
  {
    id: 'custom',
    context: 'Custom enterprise processes',
    statement: 'Map specific organizational constraints into enforced procedural steps.'
  }
];

# @driftos/client

JavaScript SDK for [driftos-core](https://github.com/DriftOS/driftos-core) - conversation routing and context management for AI applications.

## Install
```bash
npm install @driftos/client
```

## Quick Start
```typescript
import { createDriftClient } from '@driftos/client';

const drift = createDriftClient('http://localhost:3000');

// Route a message
const result = await drift.route('conv-123', 'I want to plan a trip to Paris');
console.log(result.branchTopic); // "Paris trip planning"

// Get context for LLM
const { system, messages } = await drift.buildPrompt(result.branchId);

// Use with OpenAI
const response = await openai.chat.completions.create({
  model: 'gpt-5',
  messages: [
    { role: 'system', content: system },
    ...messages,
    { role: 'user', content: 'What hotels do you recommend?' }
  ]
});
```

## API

### `route(conversationId, content, role?)`
Route a message to the appropriate branch.

### `getBranches(conversationId)`
List all branches for a conversation.

### `getContext(branchId)`
Get messages and facts for a branch.

### `extractFacts(branchId)`
Extract facts from branch messages.

### `getFacts(branchId)`
Get existing facts for a branch.

### `buildPrompt(branchId, systemPrompt?)`
Build a ready-to-use prompt with context for LLM calls.

## License

MIT
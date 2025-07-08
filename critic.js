const { callLLM } = require('./llm');

async function critiquePost(post) {
  const prompt = `
Here is a LinkedIn post:
"${post}"

Critique it honestly. Point out what could be improved: tone, length, clarity, engagement. Then rewrite a better version.
Respond in this format:
CRITIQUE: ...
REWRITE: ...
`;

  const response = await callLLM(prompt);
  const [_, critique, rewrite] = response.match(/CRITIQUE:\s*(.+?)\s*REWRITE:\s*(.+)/s) || [];
  return { critique: critique?.trim(), rewrite: rewrite?.trim() };
}

module.exports = { critiquePost };
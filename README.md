# Agentic LinkedIn Bot

A smart agentic AI bot that reads tech news from the web, critiques its own writing, and posts polished, human-like LinkedIn updates — autonomously. Built with Node.js and powered by a free LLM (e.g., Ollama, LocalAI), this project demonstrates how agentic patterns and open-source tools can be combined to automate quality content generation for social platforms.

### Feature

  1. **News Scraper** – Fetches articles from a predefined list of tech news URLs. 
  2. **Draft Generator** – Uses an LLM to summarize and write a LinkedIn-style post.
  3. **Self-Critique Loop** – Critiques its own post and improves it through iterative refinement.
  4. **Agentic Workflow** – Simulates autonomous agent behavior (Read → Think → Act → Improve).
  5. **CLI Interface** – Easy to run and interact with via terminal.
  5. **Free LLM Compatible** – Works with local LLMs like Ollama or OpenRouter-compatible models.

### File Structure
``` ├── index.js              # Main entrypoint
├── agent.js              # Agent loop logic
├── scraper.js            # URL content fetcher
├── prompt.js             # Prompts for generation and critique
├── urls.json             # List of article URLs to scan
├── .env                  # Environment variables (e.g., LLM config)
└── README.md             # This file
```

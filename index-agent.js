import readline from 'readline-sync';
import chalk from 'chalk';
import fs from 'fs';
import { fetchArticle } from './scraper.js';
import { callLLM } from './llm.js';
import { critiquePost } from './critic.js';

async function generatePost(content) {
  const prompt = `
You are a tech-savvy content writer for LinkedIn. Write a concise, engaging post based on this article:
"${content}"

Use emojis, make it insightful, and keep it under 100 words.
`;

  return await callLLM(prompt);
}

(async () => {
  const urls = fs.readFileSync('urls.txt', 'utf-8').split('\n').filter(Boolean);
  const allPosts = [];

  for (const url of urls) {
    console.log(chalk.blue(`----Reading: ${url}`));
    const article = await fetchArticle(url);

    let initialPost = await generatePost(article);
    console.log(chalk.yellow("----Initial Post:\n"), initialPost);

    do {
      const { critique, rewrite } = await critiquePost(initialPost);
      console.log(chalk.red("----Critique:\n"), critique);
      console.log(chalk.green("----Rewritten Post:\n"), rewrite);

      const save = readline.question("Save this post? (y/n): ");

      if (save.toLowerCase() === 'y' || save.toLowerCase() === 'yes') {
        allPosts.push(rewrite);
        console.log(chalk.green("----Saved."));
        break;
      }

      initialPost = rewrite;
      console.log(chalk.blue("Retrying with the rewritten post..."));
    } while (true);

    fs.writeFileSync('final_posts.txt', allPosts.join('\n---\n'), 'utf-8');
  }

  console.log(chalk.magenta("All done! Your polished posts are in final_posts.txt."));
  // fs.writeFileSync('final_posts.txt', allPosts.join('\n---\n'), 'utf-8');
})();
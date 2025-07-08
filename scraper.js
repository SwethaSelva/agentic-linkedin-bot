const axios = require('axios');
const cheerio = require('cheerio');

async function fetchArticle(url) {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const paragraphs = $('p').map((_, el) => $(el).text()).get().slice(0, 10);
  return paragraphs.join(' ');
}

module.exports = { fetchArticle };
const axios = require("axios");
require("dotenv").config();

const baseURL = process.env.OLLAMA_BASE_URL || "http://localhost:11434";
const model = process.env.MODEL || "llama3";

async function callLLM(prompt) {
  const res = await axios.post(`${baseURL}/api/generate`, {
    model,
    prompt,
    stream: false
  });
  return res.data.response;
}

module.exports = { callLLM };
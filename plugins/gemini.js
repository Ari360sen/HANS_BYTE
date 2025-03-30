const { cmd, commands } = require("../command");
const axios = require("axios");
const config = require("../config");

const GEMINI_API_KEY = config.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

cmd({
  pattern: "hansai",
  alias: ["ai"],
  react: "🤖",
  desc: "Ask anything to Google Gemini AI.",
  category: "ai",
  use: ".gemini <Your Question>",
  filename: __filename
}, async (
  _context, _message, _args, {
    from,
    quoted,
    body,
    isCmd,
    command,
    args,
    q,
    isGroup,
    sender,
    senderNumber,
    pushname,
    reply
  }) => {
  try {
    if (!q) return reply("❗️ Please provide a question.");

    const userQuery = `My name is ${pushname}. Your name is HANS BYTE. You are a WhatsApp AI Bot made by HANS TECH. Answer in the same language as the user. Answer naturally as if you are human. Use meaningful emojis. My question is: ${q}`;

    const requestBody = {
      contents: [{ parts: [{ text: userQuery }] }]
    };

    const response = await axios.post(GEMINI_API_URL, requestBody, {
      headers: { "Content-Type": "application/json" }
    });

    if (!response.data || !response.data.candidates || !response.data.candidates[0]?.content?.parts) {
      return reply("❌ Error: No response from AI.");
    }

    const aiResponse = response.data.candidates[0].content.parts[0].text;
    await reply(aiResponse);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    reply("❌ Error processing your question 😢");
  }
});

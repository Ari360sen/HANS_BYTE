const { cmd } = require("../command");
const axios = require("axios");

cmd(
  {
    pattern: "prompt",
    alias: ["gen2"],
    react: "📺",
    desc: "Generate AI images using Promt.",
    category: "ai",
    use: ".gen2 <Your Question>",
    filename: __filename
  },
  async (conn, mek, msg, { reply, args }) => {
    try {
      const text = args.join(" ");
      if (!text) {
        return reply("❗️ Please provide a prompt.");
      }

      const apiUrl = `https://dark-shan-yt.koyeb.app/ai/generate-image?q=${encodeURIComponent(text)}`;

      await conn.sendMessage(msg.key.remoteJid, { react: { text: "🎨", key: msg.key } });

      // Fetch the image from API
      const response = await axios.get(apiUrl, { responseType: "arraybuffer" });

      // Send image as buffer
      await conn.sendMessage(msg.key.remoteJid, { 
        image: Buffer.from(response.data), 
        caption: `🖼 Generated Image for: *${text}*`
      });

    } catch (error) {
      console.error("Error:", error);
      reply("❌ Error generating image.");
    }
  }
);

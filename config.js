// Import the built-in filesystem module to check for file existence.
const fs = require("fs");

// Check if the configuration file exists, and if so, load environment variables from it.
if (fs.existsSync("config.env")) {
  require("dotenv").config({ path: "./config.env" }); // Loads environment variables from config.env
}

// Application Configuration Object
module.exports = {
  // Session and Owner Information
  SESSION_ID: process.env.SESSION_ID || "vZcEjZQa#QIZ5gyh8SdXsuvzOTT8jO0CU97ZLLtCStG6k_SHnqzI", // Add your session ID here
  SUDO: process.env.SUDO || "237696900612", // Add your admin/sudo number here
  OWNER_NUM: process.env.OWNER_NUM || "237680260772", // Add the owner's number here
  OWNER_NAME: process.env.OWNER_NAME || "HANS TECH", // Add the owner's name here
  OWNER_EMAIL: "your@email.com", // Add your email address here
  OWNER_LOCATION: "Africa/Douala", // Add your location here
  OWNER_GITHUB: "https://github.com/HansTech1", // Add your GitHub profile URL here

  // API Keys for third-party services
  OMDB_API_KEY: "5e339fb7", // Add your OMDB API key here
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDrhALyWLk7RN40C1sX5a03XVk8tO48P_8", // Add your Gemini API key here
  MOVIE_API_KEY: process.env.MOVIE_API_KEY || "sky|d154108e41377cceb22ef92434509bc9081ae46b", // Add your Movie API key here

  // Bot Settings
  BOT_NAME: "𝙃𝘼𝙉𝙎-𝙱𝙔𝙏𝙀", // Add your bot's name here
  PREFIX: process.env.PREFIX || ".", // Add your command prefix here (e.g., ".", "!", "/")
  MODE: process.env.MODE || "public", // Set your bot mode (e.g., "public" or "private")
  VERSION: "𝙑3.2.1", // Bot version (do not change unless updating)
  STATUS_MESSAGE: "🚀 𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮 𝙃𝘼𝙉𝙎-𝙱𝙔𝙏𝙀", // Customize the bot's status message

  // Auto Features (toggle features on/off)
  AUTO_REACT: process.env.AUTO_REACT || "true", // Enable/disable auto reaction (true/false)
  AUTO_VOICE: process.env.AUTO_VOICE || "true", // Enable/disable auto voice messages (true/false)
  AUTO_STICKER: process.env.AUTO_STICKER || "true", // Enable/disable auto sticker rea (true/false)
  AUTO_REPLY: process.env.AUTO_REPLY || "true", // Enable/disable auto reply feature (true/false)
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", // Enable/disable auto read status (true/false)
  CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  
  // Alive Message & Image
  ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/6Rxhg321/Chat-GPT-Image-Mar-30-2025-03-39-42-AM.png", // Add your alive image URL here
  ALIVE_MSG: process.env.ALIVE_MSG || "Hello , I am alive now!!", // Customize the alive message here

  // Sticker Settings
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || "HANS BYTE MD", // Set your sticker pack name here
  STICKER_AUTHOR: process.env.STICKER_AUTHOR || "HANS TECH", // Set your sticker author name here

  // Image Sizes
  GROUP_PP_SIZE: process.env.GROUP_PP_SIZE || 512, // Set the group profile picture size here
  USER_PP_SIZE: process.env.USER_PP_SIZE || 640, // Set the user profile picture size here

  // Miscellaneous
  GITHUB: "HaroldMth", // Add your GitHub username here
  TIMEZONE: "𝙒𝘼𝙏+1" // Set your timezone here (e.g., "WAT+1")
};

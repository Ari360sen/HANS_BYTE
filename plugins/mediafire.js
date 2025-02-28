const { cmd } = require("../command");
const axios = require("axios");
const path = require("path");

cmd(
  {
    pattern: "mediafire",
    react: "📤",
    desc: "Upload files from Mediafire",
    category: "upload",
    filename: __filename,
  },
  async (robin, mek, m, { from, quoted, args, q, reply }) => {
    try {
      if (!q) return reply("*Provide a Mediafire link to upload.* 📤");

      const mediafireUrl = q;
      const apiUrl = `https://ipa-oya.vercel.app/mfire?url=${encodeURIComponent(mediafireUrl)}`;

      reply("🔄 *Downloading file from Mediafire...*");

      // Get the direct download link
      const { data } = await axios.get(apiUrl);
      if (!data || !data.direct_link) return reply("❌ *Failed to retrieve download link.*");

      const fileUrl = data.direct_link;
      const fileName = data.file_name || path.basename(fileUrl);
      const fileExtension = path.extname(fileName).substring(1);

      // Get the file as a buffer
      const fileBuffer = await axios.get(fileUrl, { responseType: "arraybuffer" });

      // Set MIME type based on file extension
      let mimeType = "application/octet-stream"; // Default MIME type
      if (fileExtension === "mp4") mimeType = "video/mp4";
      else if (fileExtension === "apk") mimeType = "application/vnd.android.package-archive";
      else if (fileExtension === "jpg" || fileExtension === "jpeg") mimeType = "image/jpeg";
      else if (fileExtension === "png") mimeType = "image/png";
      else if (fileExtension === "pdf") mimeType = "application/pdf";

      // Send file to user
      await robin.sendMessage(
        from,
        {
          document: { url: fileUrl },
          mimetype: mimeType,
          fileName: fileName,
          caption: `Here is your ${fileExtension.toUpperCase()} file!`,
        },
        { quoted: mek }
      );

      reply(`✅ *Your ${fileExtension.toUpperCase()} file has been uploaded successfully!* 📤`);
    } catch (e) {
      console.error(e);
      reply(`❌ Error: ${e.message}`);
    }
  }
);

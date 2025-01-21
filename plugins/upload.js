import { handleMediaUpload } from './lib/catbox.js';
import { haki } from '#lib';
haki(
  {
    pattern: "catbox",
    desc: "Upload an image to Catbox",
    public: false,
    type: "upload",
  },
  async (message, match) => {
    try {
      if (!message.reply_message || !message.reply_message.image) {
        return await message.send("Please reply to an image to upload it.");
      }

      const mime = message.reply_message.mimetype || "unknown";
      const mediaUrl = await handleMediaUpload(message.reply_message, mime);

      if (mediaUrl.startsWith("http")) {
        await message.send(`Media uploaded successfully: ${mediaUrl}`);
      } else {
        await message.send(mediaUrl);
      }
    } catch (error) {
      console.error("Error in upload command:", error);
      await message.send("Failed to upload the image. Please try again.");
    }
  }
);


import fileType from 'file-type';
import FormData from 'form-data';
import fetch from 'node-fetch';

const MAX_FILE_SIZE_MB = 200;

async function uploadMedia(buffer) {
  try {
    const { ext } = await fileType.fromBuffer(buffer);
    const bodyForm = new FormData();
    bodyForm.append("fileToUpload", buffer, "file." + ext);
    bodyForm.append("reqtype", "fileupload");

    const res = await fetch("https://catbox.moe/user/api.php", {
      method: "POST",
      body: bodyForm,
    });

    if (!res.ok) {
      throw new Error(`Upload failed with status ${res.status}: ${res.statusText}`);
    }

    const data = await res.text();
    return data;
  } catch (error) {
    console.error("Error during media upload:", error);
    throw new Error('Failed to upload media');
  }
}

async function handleMediaUpload(m, mime) {
  if (/jpg|jpeg|png|webp|video|sticker|audio/.test(mime)) {
    XliconStickWait();
    let media = await (m.quoted ? m.quoted.download() : m.download());
    const fileSizeMB = media.length / (1024 * 1024);

    if (fileSizeMB > MAX_FILE_SIZE_MB) {
      return `File size exceeds the limit of ${MAX_FILE_SIZE_MB}MB.`;
    }

    let mediaUrl = await uploadMedia(media);
    return mediaUrl;
  } else {
    return 'Send the media you want to upload!';
  }
}

export { uploadMedia, handleMediaUpload };

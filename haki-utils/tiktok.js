import axios from 'axios';

export async function tiktok(url) {
    if (!url) {
        throw new Error("URL is required");
    }

    try {
        const response = await axios.get(`https://nikka-api.us.kg/dl/tiktok?apiKey=nikka&url=${encodeURIComponent(url)}`);
        const res = response.data.data;

        if (!res) {
            throw new Error("No data found in response");
        }

        return res;
    } catch (error) {
        console.error("Error fetching TikTok data:", error.message);
        throw error;
    }
}

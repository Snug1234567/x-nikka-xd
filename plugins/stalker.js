import { haki } from '#lib';
import { getJson } from 'xstro-utils';

haki(
    {
        pattern: "npmstalk",
        public: false,
        desc: "npm stalker",
        type: "stalker"
    },
    async (message, match, { pushName }) => {
        if (!match) {
            return await message.send("Hello " + pushName + ", please provide a search query.");
        }

        // Build the API URL
        const apiUrl = `https://nikka-api.us.kg/stalker/npmstalk?apiKey=nikka&q=${encodeURIComponent(match)}`;

        try {
            const response = await getJson(apiUrl);

            // Ensure the response structure matches the expected format
            if (
                response &&
                response.data &&
                response.data.success &&
                response.data.data
            ) {
                const res = response.data.data;

                // Construct the response message
                const text = `
Name: ${res.name || "N/A"}
Latest Version: ${res.versionLatest || "N/A"}
Published Version: ${res.versionPublish || "N/A"}
Version Updates: ${res.versionUpdate || "N/A"}
Latest Dependencies: ${res.latestDependencies || "N/A"}
Publish Dependencies: ${res.publishDependencies || "N/A"}
Publish Time: ${new Date(res.publishTime).toLocaleString() || "N/A"}
Latest Publish Time: ${new Date(res.latestPublishTime).toLocaleString() || "N/A"}

> powered by nikka tech inc
                `;

                return await message.send(text, {
                    //gifPlayback: true,
                    contextInfo: {
                        forwardingScore: 1,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363315875885444@newsletter',
                            newsletterName: 'ɴᴋᴋᴀ ᴍᴅ',
                        },
                    },
                });
            } else {
                // Handle unexpected or incomplete responses
                return await message.send("Unable to retrieve the data. Please check your query or try again later.");
            }
        } catch (error) {
            console.error("Error fetching API: ", error);
            return await message.send("An error occurred while fetching the data. Please try again later.");
        }
    }
);



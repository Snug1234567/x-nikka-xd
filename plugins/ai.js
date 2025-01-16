import { haki } from '#lib';
import { upload } from '#utils';
import { getBuffer, getJson } from 'xstro-utils';

haki(
	{
		pattern: 'ai',
		public: true,
		desc: 'Chat with an AI Bot',
		type: 'ai'
	},
	async (message, match, { pushName }) => {
		if (!match && !message.reply_message.text)
			return message.send('_Hello there ' + pushName + '_');
		const msg = await message.send('*Thinking*');
		const res = (
			await getJson(`https://bk9.fun/ai/chataibot?q=${match || message.reply_message.text}`)
		).BK9;
		return await msg.edit(res);
	}
);

haki(
	{
		pattern: 'llama',
		public: true,
		desc: 'Chat with llama',
		type: 'ai'
	},
	async (message, match) => {
		if (!match && !message.reply_message?.text) return message.send('_How can i help?_');
		const msg = await message.send('*hmm*');
		const res = (await getJson(`https://bk9.fun/ai/llama?q=${match}`)).BK9;
		return await msg.edit(res);
	}
);

haki(
	{
		pattern: 'gpt',
		public: true,
		desc: 'Chat with Gpt4 Ai',
		type: 'ai'
	},
	async (message, match) => {
		if (!match && !message.reply_message?.text) return message.send('_How can i help?_');
		const que = match || message.reply_message.text;
		const msg = await message.send('*Thinking*');
		const res = (
			await getJson(`https://bk9.fun/ai/GPT4o?q=${que}&userId=${message.sender.split('@')[0]}`)
		).BK9;
		return await msg.edit(res);
	}
);

haki(
	{
		pattern: 'askimg',
		public: true,
		desc: 'Ask Ai about an image',
		type: 'ai'
	},
	async (message, match) => {
		if (!match || !message.reply_message.image)
			return message.send('_Reply An Image and ask me questions about it_');
		const image = await message.download();
		const { rawUrl } = await upload(image);
		const res = (await getJson(`https://bk9.fun/ai/geminiimg?url=${rawUrl}&q=${match}`)).BK9;
		return message.send(res);
	}
);

haki(
	{
		pattern: 'dalle',
		public: true,
		desc: 'Generates Images',
		type: 'ai'
	},
	async (message, match) => {
		if (!match) return message.send('_Give me a prompt!_');
		const res = await getBuffer(`https://bk9.fun/ai/magicstudio?prompt=${match}`);
		return await message.send(res, {
			caption: `_Here is your image for:_ ${match}`
		});
	}
);

haki(
	{
		pattern: 'claude',
		public: true,
		desc: 'Chat with Claude Opus',
		type: 'ai'
	},
	async (message, match, { pushName }) => {
		if (!match && !message.reply_message.text)
			return message.send('_Hello there ' + pushName + '_');
		const prompt = match || message.reply_message.text;
		const msg = await message.send('_Parsing to Claude Opus_');
		const res = (
			await getJson(
				`https://bk9.fun/ai/Claude-Opus?q=${prompt}&userId=${message.sender.split('@')[0]}`
			)
		).BK9;
		return msg.edit(res);
	}
);

haki(
	{
		pattern: 'hakiu',
		public: true,
		desc: 'Chat with Claude Opus',
		type: 'ai'
	},
	async (message, match, { pushName }) => {
		if (!match && !message.reply_message.text)
			return message.send('_Hello there ' + pushName + '_');
		const prompt = match || message.reply_message.text;
		const msg = await message.send('_Parsing to Claude Hakiu_');
		const res = (
			await getJson(
				`https://bk9.fun/ai/Claude-Haiku?q=${prompt}&userId=${message.sender.split('@')[0]}`
			)
		).BK9;
		return msg.edit(res);
	}
);

haki(
	{
		pattern: 'gemini',
		public: true,
		desc: 'Chat with Gemini Flash',
		type: 'ai'
	},
	async (message, match, { pushName }) => {
		if (!match && !message.reply_message.text)
			return message.send('_Hello there ' + pushName + '_');
		const prompt = match || message.reply_message.text;
		const msg = await message.send('_hmm_');
		const res = (
			await getJson(
				`https://bk9.fun/ai/Gemini-Flash?q=${prompt}&userId=${message.sender.split('@')[0]}`
			)
		).BK9;
		return msg.edit(res);
	}
);

haki(
	{
		pattern: 'aisearch',
		public: true,
		desc: 'Search with Ai',
		type: 'ai'
	},
	async (message, match, { pushName }) => {
		if (!match && !message.reply_message.text)
			return message.send('_Hello there ' + pushName + '_');
		const prompt = match || message.reply_message.text;
		const msg = await message.send('_hmm_');
		const res = (await getJson(`https://bk9.fun/ai/ai-search-2?q=${prompt}`)).BK9;
		return msg.edit(res);
	}
);

haki(
	{
		pattern: 'gpt4o',
		public: true,
		desc: 'Chat with Gpt4o model',
		type: 'ai'
	},
	async (message, match, { pushName }) => {
		if (!match && !message.reply_message.text)
			return message.send('_Hello there ' + pushName + '_');
		const prompt = match || message.reply_message.text;
		const msg = await message.send('_hmm_');
		const res = (
			await getJson(`https://bk9.fun/ai/GPT4o?q=${prompt}&userId=${message.sender.split('@')[0]}`)
		).BK9;
		return msg.edit(res);
	}
);
//https://nikka-api.us.kg/ai/moshai?q=hi&apiKey=nikka

haki(
	{
		pattern: "shaka",
		desc: "shaka ai by haki",
		public: true,
		type: "ai"
	},
	async (message, match, { pushName }) => {
		if (!match && !message.reply_message?.text) {
			return await message.send(`Hi ${pushName}, I am Shaka. How can I help you?`);
		}
		let query = match || message.reply_message.text;
		const msg = await message.send("*_Thinking..._*");
		const apiUrl = `https://nikka-api.us.kg/ai/moshai?q=${encodeURIComponent(query)}&apiKey=nikka`;
		const res = await getJson(apiUrl);
		console.log("API Response:", res);
		await message.react("")
		return msg.edit(res?.data || "Sorry, I couldn't process your request.");
		
	}
);



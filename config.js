import dotenv from 'dotenv';
dotenv.config();

const config = {
	SESSION_ID: process.env.SESSION_ID || 'NIKKA_00_13_59',
	SUDO: process.env.SUDO || '2348109243618,2349012640680',
	API_ID: process.env.API_ID || 'https://xstro-api-4fb28ece11a9.herokuapp.com',
	BOT_INFO: process.env.BOT_INFO || 'NIKKA;MD',
	STICKER_PACK: process.env.STICKER_PACK || '𝕵𝖊 𝖛𝖔𝖎𝖘 𝖘𝖙𝖎𝖈𝖐𝖊𝖗 𝖕𝖆𝖈𝖐;𝕯𝖆𝖛𝖎𝖉',
	WARN_COUNT: process.env.WARN_COUNT || 3,
	TIME_ZONE: process.env.TIME_ZONE || 'Africa/Lagos',
	DEBUG: process.env.DEBUG || false,
	VERSION: '1.2.2'
};

const getSessionId = async () =>
	(await fetch(`https://nikkaxsession.onrender.com/uploads/${config.SESSION_ID}/session.json`)
		.then(res => (res.ok ? res.json() : null))
		.catch(() => null)) ?? null;

const sessionData = await getSessionId();

export { config, sessionData };
export default { config, sessionData };

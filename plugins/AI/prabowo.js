import fetch from "node-fetch";

let handler = async (m, { conn, usedPrefix, command, args }) => {
    let text;
    if (args.length >= 1) {
        text = args.join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else throw 'Tehnya mana, bro?';

    try {
        let res = await generateVoice(text);
        if (res) {
            await conn.sendMessage(m.chat, {
                audio: res,
                mimetype: 'audio/mp4',
                ptt: true,
            }, { quoted: m });
        }
    } catch (e) {
        console.error(e);
        await m.reply('Ada yang salah, bro! Coba lagi nanti.');
    }
};

handler.help = ["prabowo"];
handler.tags = ["ai"];
handler.command = /^(prabowo)$/i;
handler.limit = 10;

export default handler;

async function generateVoice(query) {
    const response = await fetch(`https://api.yanzbotz.live/api/tts/voice-over?query=${encodeURIComponent(query)}&model=prabowo&apiKey=yanzdev`);
    if (!response.ok) throw new Error('Gagal ambil suara.');
    const buffer = await response.buffer();
    return buffer;
}
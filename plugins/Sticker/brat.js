import fs from "fs-extra";
import WSF from 'wa-sticker-formatter';

const handler = async (m, { q, conn, args, text, usedPrefix, command }) => {
const quoted = m.quoted ? m.quoted : m.msg === undefined ? m : m.msg;
      if (!q) return m.reply(` ${prefix}brat anjay`);

    let media = `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(q)}`;

    try {
        await conn.toSticker(m.chat, media, m);
    } catch (e) {
        console.log(e);
        await m.reply('eror kak T-T');
    }
};

handler.command = ['brat'];
handler.help = ['brat'];
handler.tags = ['sticker'];
export default handler;
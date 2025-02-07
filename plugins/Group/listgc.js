import moment from "moment-timezone";

let handler = async (m, { conn, isOwner, setReply }) => {
  if (!isOwner) return await setReply(mess.only.owner);

  let getGroups = await conn.groupFetchAllParticipating();
  let groups = Object.values(getGroups);

  let po = [];
  let teks = "––––––『 *LIST GROUP* 』––––––\n\n";

  for (let metadata2 of groups) {
    if (!metadata2.isCommunity) {
        let chat = db.data.chats[metadata2.id]
      po.push(metadata2);
      teks += `◉ Nama : ${metadata2.subject} ${chat? 
        db.data.chats[metadata2.id].expired !== 0
          ? ""
          : "\n◉ Warning : Grup ini tidak ada dalam database order" 
          : '◉ Warning : Grup ini tidak terdaftar dalam database bot'
      }\n◉ Owner : ${
        metadata2.owner !== undefined
          ? "@" + metadata2.owner.split`@`[0]
          : "Tidak diketahui"
      }\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000)
        .tz("Asia/Jakarta")
        .format("DD/MM/YYYY HH:mm:ss")}\n◉ Member : ${
        metadata2.participants.length
      }\n\n────────────────────────\n\n`;
    }
  }

  teks += `Total Group : ${po.length}\n\n`;
  await conn.sendTextWithMentions(m.chat, teks, m);
};

handler.help = ["listgc", "listgroup"];
handler.tags = ["owner"];
handler.command = /^(listgc|listgroup)$/i;
handler.owner = true;

export default handler;

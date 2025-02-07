let handler = async (m, { q, conn, isOwner, command, setReply }) => {
  if (!m.users) return setReply("reply/tag targetnya");
  if (!m.isAdmin && !isOwner) return setReply(mess.only.admin);
  if (!m.isGroup) return setReply(mess.only.group);
  if (!m.isBotAdmin) return setReply(mess.only.Badmin);
  await conn
    .groupParticipantsUpdate(m.chat, [m.users], "promote")
    .then((res) => setReply(`Sukses Promote ${m.users}`))
    .catch((err) => setReply(jsonformat(err)));
};

handler.tags = ["admin"];
handler.command = ["admin","promote"];
handler.group = true;
handler.admin = true;
export default handler;

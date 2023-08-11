let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝐌𝐄𝐍𝐒𝐀𝐉𝐄𝐒: ${pesan}`
let teks = `《 ᴘʀᴏʜɪʙɪᴅᴀ sᴜ ʀᴇᴠᴇɴᴛᴀ, ᴘᴀʀᴀ ᴄᴏᴍᴘʀᴀʀʟᴏ +51 940509321 》 \n\n❏ ${oi}\n❏ 🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:: \n`
for (let mem of participants) {
teks += `🌱  @${mem.id.split('@')[0]}\n`}
teks += `🐾𝐉𝐚𝐳𝐳 𝐁𝐨𝐭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler

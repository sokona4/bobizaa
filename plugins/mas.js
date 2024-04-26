const imglist = 'https://telegra.ph/file/f0c39c4211077c2689ae8.jpg''
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => conn.sendFile(m.chat, imglist, 'darkman.jpg', `
bot blac

`.trim(), m)
handler.help = ['المهام،اوامر']
handler.tags = ['main']
handler.command = ['اوامر','المهام'] 

export default handler

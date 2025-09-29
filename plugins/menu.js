const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "menu3",
    desc: "Show interactive menu system",
    category: "menu",
    react: "🧾",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        // Show loading reaction
        await conn.sendMessage(from, {
            react: { text: '⏳', key: mek.key }
        });

        const menuCaption = `╭━━━〔 *${config.BOT_NAME}* 〕━━━┈⊷
┃★╭──────────────
┃★│ 👑 *Owner :* ${config.OWNER_NAME}
┃★│ 🤖 *Baileys :* Multi Device
┃★│ 💻 *Type :* NodeJs
┃★│ 🚀 *Platform :* vercel
┃★│ ⚙️ *Mode :* [${config.MODE}]
┃★│ 🔣 *Prefix :* [${config.PREFIX}]
┃★│ 🏷️ *Version :* 5.0.0 Pro
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━━〔 *Menu List* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈│1️⃣  📥 *Download Menu*
┃◈│2️⃣  👥 *Group Menu*
┃◈│3️⃣  😄 *Fun Menu*
┃◈│4️⃣  👑 *Owner Menu*
┃◈│5️⃣  🤖 *AI Menu*
┃◈│6️⃣  🎎 *Anime Menu*
┃◈│7️⃣  🔄 *Convert Menu*
┃◈│8️⃣  📌 *Other Menu*
┃◈│9️⃣  💞 *Reactions Menu*
┃◈│🔟  🏠 *Main Menu*
┃◈╰───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363417599637828@newsletter',
                newsletterName: config.OWNER_NAME,
                serverMessageId: 143
            }
        };

        const sentMsg = await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL || 'https://res.cloudinary.com/dgy2dutjs/image/upload/v1751624587/url.crissvevo.co.tz/IMG_2353_fze42l.jpg' },
                caption: menuCaption,
                contextInfo: contextInfo
            },
            { quoted: mek }
        );

        // Send menu audio only once
        await conn.sendMessage(from, {
            audio: { url: '' },
            mimetype: 'audio/mp4',
            ptt: true,       
        }, { quoted: mek });

        const messageID = sentMsg.key.id;

        // Complete menu data
        const menuData = {
            '1': {
                title: "📥 *Download Menu* 📥",
                content: `╭━━━〔 *Download Menu* 〕━━━┈⊷
┃★╭──────────────
┃★│ 🌐 *Social Media*
┃★│ • facebook [url]
┃★│ • mediafire [url]
┃★│ • tiktok [url]
┃★│ • twitter [url]
┃★│ • Insta [url]
┃★│ • apk [app]
┃★│ • img [query]
┃★│ • tt2 [url]
┃★│ • pins [url]
┃★│ • apk2 [app]
┃★│ • fb2 [url]
┃★│ • pinterest [
┃★╰──────────────

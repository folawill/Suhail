const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349021204279";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_46_01_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI4LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwLFxuICAgICAgICAzOSxcbiAgICAgICAgNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMixcbiAgICAgICAgODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU1LFxuICAgICAgICA3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDM5LFxuICAgICAgICA2MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDUxLFxuICAgICAgICA5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAzNixcbiAgICAgICAgMjA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NixcbiAgICAgICAgODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDc4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAyNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDgwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTczLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNFT0l3NUoxYnRVWlRwUjJSYzN3UFdpZmlJdVd3dUNvbnpkcHZCT1dKREU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdHMjVvTXVsVHZhdW85WWZXUExBckFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWYwZGI2ZTYtNDQ4Yi00ZmNjLWIyZWYtYTc4YTcxYTk5NWI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMTM0LFxuICAgICAgMTM5LFxuICAgICAgMjIwLFxuICAgICAgMjksXG4gICAgICA5MyxcbiAgICAgIDE3OSxcbiAgICAgIDE3NSxcbiAgICAgIDIwMyxcbiAgICAgIDE4MCxcbiAgICAgIDE1LFxuICAgICAgMjcsXG4gICAgICAyMDEsXG4gICAgICA5NCxcbiAgICAgIDIyOCxcbiAgICAgIDExOSxcbiAgICAgIDE0NSxcbiAgICAgIDEwMCxcbiAgICAgIDE2OCxcbiAgICAgIDIyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OSxcbiAgICAgIDQsXG4gICAgICAxMDQsXG4gICAgICAxMDksXG4gICAgICAyNTIsXG4gICAgICAxNzgsXG4gICAgICAxMzUsXG4gICAgICA2NyxcbiAgICAgIDIzMCxcbiAgICAgIDE0NSxcbiAgICAgIDc3LFxuICAgICAgNixcbiAgICAgIDEzMixcbiAgICAgIDksXG4gICAgICA2OSxcbiAgICAgIDE5MCxcbiAgICAgIDQyLFxuICAgICAgMTk5LFxuICAgICAgMjA5LFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFNR0JWTEpRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDIxMjA0Mjc5OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ29hY2ggRm9sYWtlIFdpbGxpYW1zXCIsXG4gICAgXCJsaWRcIjogXCI3NDIxNzQzNzU0NDYxNDozOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPT0pqUGdERU5UNTlyc0dHQllnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjRsc1EvZWx0dmNSWG5sSW9IU3Qrb1FZeVRhbkwxVDdOK2JBKzRwbUVxajg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidWV1dEswTVZJek1DS1pTNDc1dk1pNkg5Y3h1NDhDSWdyQ3FYYkg4MnkrbzJBYytkQ2s5VUw1YmRucjlNNFYwNTRFalpEZFNIVXRxc2NwU3dXRGU1RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibEpNKzkwU3IydlpiR0E2ZVduM1d3WHd2bEppeWJiNUthL29ya0RIei9oaithR290RzgxN3d1SEkxdWQrKzk2TVFZRWt1M1lhMXp0Y01XMHRjaXB1Q2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyMTIwNDI3OTozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzYyOTM1OTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKZHZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpkdi5qc29uIjogIntcImtleURhdGFcIjpcImNsMlZDRXhaL0UwSmU2V0VWVG1uYlNnQndHNXJ6ZmVQT2JWbkRNS3puWHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA1NzE2MjQ2NyxcImN1cnJlbnRJbmRleFwiOjE1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

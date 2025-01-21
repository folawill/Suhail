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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_50_01_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNixcbiAgICAgICAgNDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMyLFxuICAgICAgICAzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQzLFxuICAgICAgICA3NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDg3LFxuICAgICAgICAzMixcbiAgICAgICAgMTU3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NyxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NixcbiAgICAgICAgMTA5LFxuICAgICAgICA2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVTZGNzlkdGlpUy9EMi8xN0RrazFDQ2wxenhjNTFENDJNYndXSklvUkVpdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTY3NjkxOTEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTdGMEY1OUNEQzczOTRDRkUzQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mzc0MDYyNDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTY3NjkxOTEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUI1OEJCRTYzNkJCMkZBN0U2RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mzc0MDYyNTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTY3NjkxOTEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUZFNDcxMUYyMTMxMUE0QjEzRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mzc0MDYyNTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZS00WktPMlBSSVdjNDRJVWt1VEJvd1wiLFxuICBcInBob25lSWRcIjogXCI4ZDI4YjNkZi04NGU5LTQwMDYtOWUzNi1lMjhmOTYxYTEyMTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgNDcsXG4gICAgICAxNDQsXG4gICAgICAyNDIsXG4gICAgICA0MixcbiAgICAgIDE5MSxcbiAgICAgIDQ0LFxuICAgICAgODAsXG4gICAgICA5NyxcbiAgICAgIDEwMSxcbiAgICAgIDE5MixcbiAgICAgIDEyMSxcbiAgICAgIDgxLFxuICAgICAgMzAsXG4gICAgICAxNixcbiAgICAgIDEwMyxcbiAgICAgIDk1LFxuICAgICAgMTI2LFxuICAgICAgNTQsXG4gICAgICA4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICAxMDUsXG4gICAgICAzMSxcbiAgICAgIDE2OCxcbiAgICAgIDExNixcbiAgICAgIDE2LFxuICAgICAgMTMzLFxuICAgICAgNjgsXG4gICAgICAyMDQsXG4gICAgICA4NixcbiAgICAgIDEwNSxcbiAgICAgIDExOCxcbiAgICAgIDEzMyxcbiAgICAgIDExNixcbiAgICAgIDI0LFxuICAgICAgMjcsXG4gICAgICA2NyxcbiAgICAgIDEzNSxcbiAgICAgIDEzMCxcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTi8xNU1FTEVLWHV1cndHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYSTRkeStDc1FPdzViQ1oxbzY1RUF4VTBEV01uR1FZbHlvVnhJdkxqZTA4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlh5Q2JqcVNaeURXdVBsaXNodlZXMWZaSFNBMlZBNXN2RjJrd2hvZ2g5MkdXREJXaFF5OWNzOSt2dzlyRG5iZCtNYmdXNUxTbEppelJJWFdjc2FmTmhBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZGVDFJTFYxU0R1U0VXckVmaE01SDN4TzN2VzBOdXp1b1NiQjhacXlGRnhGMHdabzB0TnVxcCtPQytNVVpKdWZRdUtzQmlCMzlYSFFuYUxmY2tNV2lBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2NzY5MTkxMzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDU3OTc1NjM4MDk5MTc6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJDQVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2NzY5MTkxMzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNzQwNjI0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUs2ZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzZmLmpzb24iOiAie1wia2V5RGF0YVwiOlwic2trVWRDcS9tODk5dGREME05WnpqVnhxa01zanhPUHMwK2ZQRW1Od1RZOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMDkwNzU4MzY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mzc0MDYyNTIwMzlcIn0iCn0="  // PUT your SESSION_ID 


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

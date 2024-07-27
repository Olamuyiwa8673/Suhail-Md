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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "african/lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/FRjdLL0PFWV93kjEMMe21R";
global.website=process.env.GURL || "https://chat.whatsapp.com/FRjdLL0PFWV93kjEMMe21R" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "🤪𝙲𝙰𝙻𝙻 𝙼𝙷𝙴 𝙱𝚄𝙼𝙱𝚄𝙼 𝙱𝙾𝚃🤪" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349010895477";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349010895477";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "234xxxxxxxx,null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "234xxxxxxxx,null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "234xxxxxxxx,923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_58_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQyLFxuICAgICAgICA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAyLFxuICAgICAgICA3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgxLFxuICAgICAgICA0OSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI2LFxuICAgICAgICA1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDcyLFxuICAgICAgICA5NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDksXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg3LFxuICAgICAgICA5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMixcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk1LFxuICAgICAgICA1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDI2LFxuICAgICAgICA1OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInQvenV5Z3JiQTR2TVNXcTU2WGRXSERyQWtCQzcxMEFoNzh2dU1aM2RzMDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAxMDg5NTQ3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUU0RTkwODI4RjgyNzRFN0VGMTQ1Qjc3RUY5NUY1RDhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMDUyNjk1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFvWXgwU3F2U3Myd291UW9uOUZ1M2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGVhMmNmNzAtNTlmMC00OTcyLTg5ZDYtOTRjYWI2YzUwNzEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDY3LFxuICAgICAgMzgsXG4gICAgICAxMjUsXG4gICAgICA1OCxcbiAgICAgIDIyOCxcbiAgICAgIDEzNyxcbiAgICAgIDIzOCxcbiAgICAgIDcyLFxuICAgICAgNDMsXG4gICAgICAyMDAsXG4gICAgICAyMzgsXG4gICAgICAxMDcsXG4gICAgICA5NixcbiAgICAgIDEzLFxuICAgICAgNjUsXG4gICAgICA1LFxuICAgICAgNSxcbiAgICAgIDE4MixcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgMjgsXG4gICAgICAxMDksXG4gICAgICAxNDYsXG4gICAgICA0LFxuICAgICAgMzcsXG4gICAgICA4MSxcbiAgICAgIDIwNyxcbiAgICAgIDMyLFxuICAgICAgMjI1LFxuICAgICAgMTQ4LFxuICAgICAgMjI5LFxuICAgICAgMTg3LFxuICAgICAgMjAzLFxuICAgICAgMTk5LFxuICAgICAgMTk5LFxuICAgICAgMjAxLFxuICAgICAgMTYwLFxuICAgICAgNjUsXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyNUI1QlZQNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxMDg5NTQ3Nzo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkxMjM3OTE1MjA5ODI3OjgxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pyWXc2OEdFTTNna2JVR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOGQrOWlBTW9nd09OaklGOVRmVUd0MEwweHlOa05xdG1aZE96ajJESy9HND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZSW1HVkM3OExac1pwWjA1YU04MFM3cnNmNUZnWXNYS0xBQlQ5U2xvclE3bDlzMTRPaDAwTzJ4T3U5MWF3QWRFZnp0bDdCbFllZTYvTDdNQzJKVkhEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5WFQ1cUhaYTJuRlZ1Ky9xcmhhUG1qRHRWZ0xyTkdqeGJRSGhuUXhqLzhVSHpYa09vM29NR3ZQUGpIZVBJRTBPRHR3NDZMQTdTODNzNytUWjZNTDRqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDEwODk1NDc3OjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDUyNjg5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDJsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIMmwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4WTJFV1gwNnVYSWJZWUpTaFFhMzRBOTlmT1N2bVpVVEZvc3Rzb093T3RFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MTAyODc4OTgsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIxNzIyMDUyMTc0ODIxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "🤪𝙲𝙰𝙻𝙻 𝙼𝙷𝙴 𝙱𝚄𝙼𝙱𝚄𝙼 𝙱𝙾𝚃🤪" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "🤪𝙲𝙰𝙻𝙻 𝙼𝙷𝙴 𝙱𝚄𝙼𝙱𝚄𝙼 𝙱𝙾𝚃🤪",
  ownername:process.env.OWNER_NAME|| "🤪𝙲𝙰𝙻𝙻 𝙼𝙷𝙴 𝙱𝚄𝙼𝙱𝚄𝙼🤪",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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

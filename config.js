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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_16_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1OSxcbiAgICAgICAgOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDUwLFxuICAgICAgICA3MixcbiAgICAgICAgMTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU2LFxuICAgICAgICA5MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg0LFxuICAgICAgICA2LFxuICAgICAgICA4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDY2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMjh2WDgveTF4dllXV1BlQ2cvMHRHZ0J2b0xxdnRSQ1pKVDgwbXYrOFRYZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibERKb2hYTEpTazItT1FNcHRSdTRMd1wiLFxuICBcInBob25lSWRcIjogXCJiZmJmZTAyOS0zMTZmLTQ2MjctYmEyYS1jYjk2NjM5YTM4YjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg5LFxuICAgICAgOCxcbiAgICAgIDIwNCxcbiAgICAgIDEyMCxcbiAgICAgIDE0NyxcbiAgICAgIDE5NixcbiAgICAgIDI5LFxuICAgICAgMTc3LFxuICAgICAgMTcsXG4gICAgICAxMDksXG4gICAgICA2NCxcbiAgICAgIDIzOSxcbiAgICAgIDY3LFxuICAgICAgMjA4LFxuICAgICAgMjE5LFxuICAgICAgMTI2LFxuICAgICAgMTg2LFxuICAgICAgMjUsXG4gICAgICAxNTAsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDk5LFxuICAgICAgMTM0LFxuICAgICAgMTU1LFxuICAgICAgMjI4LFxuICAgICAgMTU3LFxuICAgICAgNTYsXG4gICAgICAzNSxcbiAgICAgIDI0NixcbiAgICAgIDE2NCxcbiAgICAgIDIyLFxuICAgICAgMTA2LFxuICAgICAgMjE0LFxuICAgICAgMzgsXG4gICAgICA2MSxcbiAgICAgIDIwNCxcbiAgICAgIDE5OSxcbiAgICAgIDE2MSxcbiAgICAgIDEyMyxcbiAgICAgIDY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlUMVNWRUpHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTU2MzA1ODk2Ojc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQlVNQlVNIEJPVFwiLFxuICAgIFwibGlkXCI6IFwiNTYyMjU4MDI4MDUyODA6NzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTExZL0p3SEVMNklyclFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKRDlYNU9UK0VJS1k3dFFDWENPYURGUytHbERJNko5Q1R3RlNOM1BPRnpnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5sME9RcnFLQU42S0djbHdmMm9zcWxXZzFNZEdhM2Z0bmFvU00rVTc3Y2VuTmprT21TdmNxS3Vhbk4wbXpac1hMRGtHekdGdVRnb21QMW16Z3Nwd0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhZZHI5VDVRYjZDL1N1RGI0QlNWdGNvMDYxdzZBdkdnSmhJOWxxajFXNnRVbWFtdnYyUXFVeG9uMUw5MVdSOUxTc2NWRFVEcWNWQ3NadjZETEU1U2dnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTYzMDU4OTY6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDE5Mzk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2FHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDYUcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzVlRZSzJESGhORUkxWlFuTCtFcTExaTU0VXlGUTFQeGsweTFXb3paT2NVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5Mzk4MTEzNzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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

const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "2349010895477"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="segunolamuyiwa02@gmail.com"
global.location="Nigeria, Rivers State, Port Harcourt"
global.mongodb= process.env.MONGODB_URI || ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 




global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349010895477";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349010895477";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "🤪𝑪𝑨𝑳𝑳 𝑴𝑯𝑬 𝑩𝑼𝑴𝑩𝑼𝑴🤪" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "🤪𝑪𝑨𝑳𝑳 𝑴𝑯𝑬 𝑩𝑼𝑴𝑩𝑼𝑴🤪",
  packname: process.env.PACK_NAME || "🤪𝑪𝑨𝑳𝑳 𝑴𝑯𝑬 𝑩𝑼𝑴𝑩𝑼𝑴🤪",
  botname : process.env.BOT_NAME  || "🤪𝑪𝑨𝑳𝑳 𝑴𝑯𝑬 𝑩𝑼𝑴𝑩𝑼𝑴🤪",
  ownername:process.env.OWNER_NAME|| "🤪𝑪𝑨𝑳𝑳 𝑴𝑯𝑬 𝑩𝑼𝑴𝑩𝑼𝑴🤪",


  sessionName:process.env.SESSION_ID|| "SESSION_22_01_01_16_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1BvZWNyYlVkY25Tb1o5NmJCM09jK3I4Q3dTVGlEVGp4dk1BOExkUWNsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1pkK3l2SE1LRFJtOElsZEZmZ0s4d29IK1VFZzB4RWM1bTMyYWF4ZGJnOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLS21xc2RjbHhqYlc4ZXRvaEhDdXRxb3NDc0xEaU52a3FsR2pMaUwvSDBrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVV1R5em1USnBiTUVSTXBBeWJZVW9TV0ptVzBCYlAvbkQ1SjVvbWxZT2t3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlJRjlXR1UxTWw4MWp2enFTVFZ6K2NHenArWk1UcFl6V1c3U2dEUkg0bUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ino2T3NMQ1BiN0w3L0s4T3NLMEs0MFZyaGd6UlE1TytsR0xRRjczMFdiRWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtzbnRJK0pvS3M0elN4cEdHUlNDaU1NdkQ1b0pqNm5ENkVEZGp1NWxtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDluVGQvQXIyWUt3WllvZm5NbzlONHR3ZGpUMy9SZ01nenlrMEdRb2dYST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdGc1V1dzdZTFpITW9GS1lORjI0RUlqRzlDdEtkTVpLR1ZCQU5ZZTdzaW9ZQ24ycWxvSm5NUmxVaWFVejMwVVlUYlhTN2QyU2hEM2J0WklxUVFQQWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA0LCJhZHZTZWNyZXRLZXkiOiIzVEQvdU5YOSt4QWFUaG5pSEZmMm5EQUJlZjZPaldjYkxUcHRrOTlWZWdrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzQsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozNCwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItY0hKdTFrTlN1eWdmSWQ0QUl0eG93IiwicGhvbmVJZCI6IjI4NzkwMTFiLTdmNTAtNGI3OS1hNjAwLTMwOTIwNDFhMTZhZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyMUhZaXpmVUZsbkNZMGtzbmE1VGxydU9UODg9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVaalFJNndIMmJEWHZETHhyV05XazJ4UDYvQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BpM21Yc1F3UG1iclFZWUNTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InpkREFTSmUrR2k5Nk1PMkJiN1hLcnZmSmUyZkU1eE15UEsrVzVxWU5PbVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVtV05Md0wxTFFrYi9WdUpwanhIcENneXh5K1lkTm9kRndWSFh0ejJHM1p3VFJUSzdvd1FPcFpuVEIvVi9SWUpzUk5laHp1L1JCanoyemFud2thcENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3U09wNDl2RjNYbkNJNkxYNENlcC9nb0VoTkh5b2tsSld2aXkydENYWnJzTzVpYVBOKy80L2JvL0RtWXp1cm0rTlZHcktFQ0xmdzloK2lwOE15MkZqUT09In0sIm1lIjp7ImlkIjoiMjM0OTAxMDg5NTQ3NzoyMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLqp4HimaHDh8OlbGwgTWjDqiDhup7Du20g4bqew7tt4pmh6qeC4oGp4oGpIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMTA4OTU0Nzc6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYzNRd0VpWHZob3ZlakR0Z1crMXlxNzN5WHRueE9jVE1qeXZsdWFtRFRwbCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNTQ0MjUwMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMTlIifQ==",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "true",
  save_status: process.env.AUTO_SAVE_STATUS || "true",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "063913f8-93da-448c-84e5-5f875d0cfcf0",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "bumbum0011",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

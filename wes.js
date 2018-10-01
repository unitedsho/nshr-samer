const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
حياكم متجر
يتوفر كلشي يخطر ببالك:fire:
وفي نظام انفايت للرتب هايبكسل :fire:                               [ https://discord.gg/uE4dFQJ ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login(process.env.BOT_TOKEN);  //

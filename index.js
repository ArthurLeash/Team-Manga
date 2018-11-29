const Discord = require('discord.js');
const bot = new Discord.Client()
const cfg = process.env.token
const prefix = ("/")

bot.on(' ready' , function () {
    console.log(" je suis prêt a être utilisé. ")
});



bot.login(cfg);

const Discord = require('discord.js');
const Bot = new Discord.Client()
const cfg = process.env.token
const prefix = ("/")

bot.on(' ready' , function () {
    console.log(" je suis prêt a être utilisé. ")
})


bot.login(cfg);

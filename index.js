const Discord = require('discord.js');
const Bot = new Discord.Client()
const cfg = require('./index.json');
const prefix = ("/")

bot.on(' ready' , function () {
    console.log(" je suis prêt a être utilisé. ")
})


bot.login(cfg.token);
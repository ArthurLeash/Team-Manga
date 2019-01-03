const Discord = require('discord.js')
const bot = new Discord.Client()
const cfg = require('./index.json')
const giphy = require('giphy')('7XnyOQobDV75nO1D6VFdiYWZOPTPGhIJ')
const ban = require('./bans/ban');
 
let prefix = "/"
 
bot.on('ready' , function () {
    console.log(" je suis prêt a être utilisé. ")
    bot.user.setActivity("Regarder des Mangas").catch(console.error)
});
 
bot.on('guildMemberadd' , member => {
    member.createDM().then(channel => {
        return channel.send('bienvenue sur le serveur' + member.displayName)
        console.log('$(member.displayName) a rejoint le serveur')
    }).catch(console.error)
});
 
bot.on('message', function (message){
    if(message.match("/^\.ban .+$/")){
        return ban.action(message)
    }
 
    if(msg.content === "bonjour"){
        msg.reply("Ohayô.")
    }
 
    if(msg.content === ".hug"){
        msg.reply("Trop kawaiii !", {
            file: giphy.search('hug manga')
        })
    }
 
    if(msg.content === ".info"){
        msg.reply("je suis actuellement en codage par Arthur Leash")
    }
 
    if(msg.content === ".help"){
        msg.reply("les commandes dispnibles sont:\n/info afin de donner des informations peu utile sur le bot")
    }
})
 
bot.login(cfg.token);

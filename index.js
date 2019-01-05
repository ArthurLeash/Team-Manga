const Discord = require('discord.js')
const bot = new Discord.Client()
const ban = require('./kick et ban/ban')
const http = require('http')
const cfg = require('./index.json')
 
bot.on('ready' , function () {
    bot.user.setActivity("regarde des Mangas").catch(console.error)
});
 
bot.on('guildMemberAdd' , member => {
    member.createDM().then(channel => {
        return channel.send('bienvenue sur le serveur' + member.displayName)
        console.log('$(member.displayName) a rejoint le serveur !')
    }).catch(console.error)
});
 
bot.on('message', function (msg){
    if(ban.check(msg)){
        return ban.action(msg)
    }
 
    if(msg.content === "bonjour"){
        msg.reply("Ohayô.")
    }
 
    if(msg.content.startsWith('.hug')){
        const args = msg.content.slice(1).split(/ +/)
        const command = args.shift().toLowerCase()
        let member = msg.mentions.members.first();
        if(!member){
            member = msg.author
            msg.author = "Le bot"
        }
        http.get("http://api.giphy.com/v1/gifs/search?q=manga%20hug&api_key=7XnyOQobDV75nO1D6VFdiYWZOPTPGhIJ&limit=100", res => {
            res.setEncoding = "utf-8"
            let body = ""
            res.on('data', data => {
                body += data
            })
            res.on('end', () => {
                body = JSON.parse(body)
                msg.channel.send( member + ", " + msg.author + " te fait un calin", {
                    embed: {
                        image: {
                            url: body.data[Math.floor(Math.random() * 101)].images.original.url
                        }
                    }
                })
            })
        })
    }
     if(msg.content.startsWith('.kill')){
        const args = msg.content.slice(1).split(/ +/)
        const command = args.shift().toLowerCase()
        let member = msg.mentions.members.first();
        if(!member){
            member = msg.author
            msg.author = "Le bot"
        }
        http.get("http://api.giphy.com/v1/gifs/search?q=manga%20gun&api_key=7XnyOQobDV75nO1D6VFdiYWZOPTPGhIJ&limit=100", res => {
            res.setEncoding = "utf-8"
            let body = ""
            res.on('data', data => {
                body += data
            })
            res.on('end', () => {
                body = JSON.parse(body)
                msg.channel.send( member + ", " + msg.author + " ta tué", {
                    embed: {
                        image: {
                            url: body.data[Math.floor(Math.random() * 101)].images.original.url
                        }
                    }
                })
            })
        })
}
 
    if(msg.content === ".info"){
        msg.reply("Ce Bot a été fait par la TeamPaul\n @here Beaucoup de mise a jour sont a prévoir sur les commandes")
    }
 
    if(msg.content === ".help"){
        msg.reply("les commandes disponibles sont:\n.info afin de donner des informations peu utile sur le bot\n.hug @x afin de faire un calin a la personne mentionner")
    }
 
    if(msg.content === ".staff"){
        msg.reply("les commandes disponibles sont:\n.ban @xx#0000 afin de bannir la personne mentionner")
    }
})
 
bot.login(cfg.token);

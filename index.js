const Discord = require('discord.js')
const bot = new Discord.Client()
const ban = require('./kick et ban/ban')
const http = require('http')
const cfg = require('./index.json')
 
bot.on('ready' , function () {
    bot.user.setActivity("lit Les Gémoires de Vanitas").catch(console.error)
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
 
    if(msg.content === "Bonjour"){
        msg.reply("Ohayô.")
    }

    if(msg.content === "bonjour"){
        msg.reply("Ohayô.")
    }

    if(msg.content === "salut"){
        msg.reply("Ohayô.")
    }
    if(msg.content === "Salut"){
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
        http.get("http://api.giphy.com/v1/gifs/search?q=Manga%20Hug&api_key=7XnyOQobDV75nO1D6VFdiYWZOPTPGhIJ&limit=50", res => {
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
    
   
     if(msg.content.startsWith('.shoot')){
        const args = msg.content.slice(1).split(/ +/)
        const command = args.shift().toLowerCase()
        let member = msg.mentions.members.first();
        if(!member){
            member = msg.author
            msg.author = "Le bot"
        }
        http.get("http://api.giphy.com/v1/gifs/search?q=anime%20shoot&api_key=7XnyOQobDV75nO1D6VFdiYWZOPTPGhIJ&limit=50", res => {
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
   if(msg.content.startsWith('.kiss')){
        const args = msg.content.slice(1).split(/ +/)
        const command = args.shift().toLowerCase()
        let member = msg.mentions.members.first();
        if(!member){
            member = msg.author
            msg.author = "Le bot"
        }
        http.get("http://api.giphy.com/v1/gifs/search?q=anime%20kiss&api_key=7XnyOQobDV75nO1D6VFdiYWZOPTPGhIJ&limit=50", res => {
            res.setEncoding = "utf-8"
            let body = ""
            res.on('data', data => {
                body += data
            })
            res.on('end', () => {
                body = JSON.parse(body)
                msg.channel.send( member + ", " + msg.author + " t'embrasse", {
                    embed: {
                        image: {
                            url: body.data[Math.floor(Math.random() * 101)].images.original.url
                        }
                    }
                })
            })
        })
}
   if(msg.content.startsWith('.cry')){
        const args = msg.content.slice(1).split(/ +/)
        const command = args.shift().toLowerCase()
        let member = msg.mentions.members.first();
        if(!member){
            member = msg.author
            msg.author = "Le bot"
        }
        http.get("http://api.giphy.com/v1/gifs/search?q=anime%20cry&api_key=7XnyOQobDV75nO1D6VFdiYWZOPTPGhIJ&limit=50", res => {
            res.setEncoding = "utf-8"
            let body = ""
            res.on('data', data => {
                body += data
            })
            res.on('end', () => {
                body = JSON.parse(body)
                msg.channel.send( member + ", " + msg.author + " pleure avec toi", {
                    embed: {
                        image: {
                            url: body.data[Math.floor(Math.random() * 101)].images.original.url
                        }
                    }
                })
            })
        })
}

if(msg.content.startsWith('.pat')){
    const args = msg.content.slice(1).split(/ +/)
    const command = args.shift().toLowerCase()
    let member = msg.mentions.members.first();
    if(!member){
        member = msg.author
        msg.author = "Le bot"
    }
    http.get("http://api.giphy.com/v1/gifs/search?q=anime%20pat&api_key=7XnyOQobDV75nO1D6VFdiYWZOPTPGhIJ&limit=50", res => {
        res.setEncoding = "utf-8"
        let body = ""
        res.on('data', data => {
            body += data
        })
        res.on('end', () => {
            body = JSON.parse(body)
            msg.channel.send( member + ", " + msg.author + " te caresse la tête gentillement", {
                embed: {
                    image: {
                        url: body.data[Math.floor(Math.random() * 101)].images.original.url
                    }
                }
            })
        })
    })
}
if(msg.content.startsWith('.neko')){
    const args = msg.content.slice(1).split(/ +/)
    const command = args.shift().toLowerCase()
    let member = msg.mentions.members.first();
    if(!member){
        member = msg.author
        msg.author = "Le bot"
    }
    http.get("http://api.giphy.com/v1/gifs/search?q=anime%20Neko&api_key=7XnyOQobDV75nO1D6VFdiYWZOPTPGhIJ&limit=50", res => {
        res.setEncoding = "utf-8"
        let body = ""
        res.on('data', data => {
            body += data
        })
        res.on('end', () => {
            body = JSON.parse(body)
            msg.channel.send(msg.author + " Un Néko <3 apparait", {
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
        msg.reply("Ce Bot a été fait par la TeamPaul, Jean Paul ainsi qu'Arthur Leash")
    }
 
    if(msg.content === ".help"){
        msg.reply("les commandes disponibles sont:\n.info afin de donner des informations peu utile sur le bot\n.hug @x afin de faire un calin a la personne mentionné\n.kiss afin de faire un bisous a la personne mentionnée\n.shoot afin de tirer sur la personne mentionnée\n.pat afin de faire caresser la tete de la personne mentionnée\n.neko pour qu'un néko apparaisse")
    }
 
    if(msg.content === ".staff"){
        msg.reply("les commandes disponibles sont:\n.ban @xx#0000 afin de bannir la personne mentionner")
    }
  
})
 

bot.login(cfg.token);

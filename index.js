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
    
    if(msg.content.startsWith('.fuck')){
        if(!msg.channel.nsfw) return ("Pas ici \:warning: ")
        const args = msg.content.slice(1).split(/ +/)
        const command = args.shift().toLowerCase()
        let member = msg.mentions.members.first();
        if(!member){
            member = msg.author
            msg.author = "Le bot"
        }
        http.get("http://api.giphy.com/v1/gifs/search?q=middle%20finger&api_key=7XnyOQobDV75nO1D6VFdiYWZOPTPGhIJ&limit=100", res => {
            res.setEncoding = "utf-8"
            let body = ""
            res.on('data', data => {
                body += data
            })
            res.on('end', () => {
                body = JSON.parse(body)
                msg.channel.send( member + ", " + msg.author + " t'emmerde", {
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
        http.get("http://api.giphy.com/v1/gifs/search?q=manga%20gun%20shoot&api_key=7XnyOQobDV75nO1D6VFdiYWZOPTPGhIJ&limit=100", res => {
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
        http.get("http://api.giphy.com/v1/gifs/search?q=manga%20kiss&api_key=7XnyOQobDV75nO1D6VFdiYWZOPTPGhIJ&limit=100", res => {
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
        http.get("http://api.giphy.com/v1/gifs/search?q=manga%20cry&api_key=7XnyOQobDV75nO1D6VFdiYWZOPTPGhIJ&limit=100", res => {
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
    if(msg.content === ".info"){
        msg.reply("Ce Bot a été fait par la TeamPaul\n***Si vous avez un problème avec le bot rejoignez le serveur de support https://discord.gg/ANd3aTS***")
    }
 
    if(msg.content === ".help"){
        msg.reply("les commandes disponibles sont:\n.info afin de donner des informations peu utile sur le bot\n.hug @x afin de faire un calin a la personne mentionné\n.kiss afin de faire un bisous a la personne mentionnée\n.kill afin de tuer la personne mentionnée\n.fuck afin de faire un Fuck a la personne")
    }
 
    if(msg.content === ".staff"){
        msg.reply("les commandes disponibles sont:\n.ban @xx#0000 afin de bannir la personne mentionner")
    }
  
})
 

bot.login(cfg.token);

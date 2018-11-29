const Discord = require('discord.js');
const bot = new Discord.Client()
const cfg = process.env.token
const prefix = ("/")

bot.on(' ready' , function () {
    console.log(" je suis prêt a être utilisé. ")
    bot.user.setActivity("Regarder des Mangas").catch(console.error)
});

bot.on('guildMemberadd' , member => {
    member.createDM().then(channel => {
        return channel.send('bienvenue sur le serveur' + member.displayName)
        console.log('$(member.displayName) a rejoint le serveur')
    }).catch(console.error)
});

bot.on('message' , msg => {
    if(msg.content === "bonjour")
    msg.reply("Ohayô.")
});

bot.login(cfg);

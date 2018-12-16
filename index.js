const Discord = require('discord.js');
const bot = new Discord.Client()
const cfg = process.env.token
const prefix = ("/")

bot.on('ready' , async () => {
    console.log(" je suis prêt a être utilisé. ")
    bot.user.setActivity("Regarder des Mangas")
});

bot.on('guildMemberAdd' , member => {
    member.createDM().then(channel => {
        return channel.send('bienvenue sur le serveur' + member.displayName)
        console.log('$(member.displayName) a rejoint le serveur')
    }).catch(console.error)
});

bot.on('message' , msg => {
    if(msg.content === "bonjour")
    msg.reply("Ohayô.")
});

bot.on('message' , msg => {
    if(msg.content === "/info")
    msg.reply("je suis actuellement en codage par Arthur Leash")
})

bot.login(cfg);

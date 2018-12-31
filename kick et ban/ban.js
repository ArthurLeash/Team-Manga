const prefix = ("/")

module.exports =class ban {
    static match (message){
        return message.content.startsWith('!ban')
    }
    static action (message) {
        const args = msg.content.slice(prefix.length).split(/ +/)
        const command = args.shift().tolowerCase()
       // if (command === "ban"){
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('tu n\'est pas administateur du serveur !')
        const member = message.mentions.members.first();
        if (!member) return message.reply('commande invalid, il faut mettre `/ban @user#1234`')
        member.ban({
            days: args[1] || null,
reason: `Banni par ${message.author.tag}`
        });
    }
  }
       

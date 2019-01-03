module.exports = class {
 
    static check (msg){
        return msg.content.startsWith('.ban')
    }
 
    static action (msg) {
        const args = msg.content.slice(1).split(/ +/)
        const command = args.shift().toLowerCase()
        if(!msg.member.permissions.has('ADMINISTRATOR')) return msg.reply('Tu n\'es pas administateur du serveur !')
        let member = msg.mentions.members.first();
        if (!member) return msg.reply('Utilisateur non trouvé :\'(')
        member.ban({
            days: args[1] || null,
            reason: `Banni par ${msg.author.tag}`
        })
    }
 
}

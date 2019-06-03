const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "ban",
        description: "Bans a member from the server.",
        usage: "!ban <member> <reason>",
        accessableby: "Administrators",
        aliases: ["b"]
    },
    run: async (bot, message, args) => {
        let perembed = new RichEmbed()
        .setTitle(bot.user.username + ` Bot`)
        .setDescription(`You do not have access to \`ban\`, ${message.author}.`)
        .setColor(message.guild.roles.find(r => r.name === "Krypto Bot").color)
        .setFooter(message.id)
        .setTimestamp();

        let memembed = new RichEmbed()
        .setTitle(bot.user.username + ` Bot`)
        .setDescription(`Please provide a valid user to ban, ${message.author}.`)
        .setColor(message.guild.roles.find(r => r.name === "Krypto Bot").color)
        .setFooter(message.id)
        .setTimestamp();

        if(!message.member.hasPermissions(["BAN_MEMBERS"])) return message.channel.send(perembed)

        let banMember = message.mentions.members.first() || message.guild.members.get(args[0])
        if(!banMember) return message.channel.send(memembed)

        let reason = args.slice(1).join(" ");
        if(!reason) reason = "No reason given"

        if(!message.guild.me.hasPermissions(["BAN_MEMBERS"])) return console.log("I don't have enough permissions to run some commands!")

        let adminembed = new RichEmbed()
        .setTitle(bot.user.username + ` Bot`)
        .setDescription(`You are not allowed to perform \`ban\` on user ${banMember}, ${message.author}.`)
        .setColor(message.guild.roles.find(r => r.name === "Krypto Bot").color)
        .setFooter(message.id)
        .setTimestamp();

        if(banMember.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(adminembed)

        let banmemembed = new RichEmbed()
        .setTitle(bot.user.username + ` Bot`)
        .setDescription(`You have been banned from the ` + message.guild.name + ` Discord by ${message.author} for reason \'${reason}\'.\n\n**Do not attempt to bypass bans, you will just be banned again.**`)
        .setColor(message.guild.roles.find(r => r.name === "Krypto Bot").color)
        .setFooter(message.id)
        .setTimestamp();

        let banembed = new RichEmbed()
        .setTitle(bot.user.username + ` Bot`)
        .setDescription(`User ${banMember} has been successfully banned, ${message.author}.`)
        .setColor(message.guild.roles.find(r => r.name === "Krypto Bot").color)
        .setFooter(message.id)
        .setTimestamp();

        let logembed = new RichEmbed()
        .setTitle(bot.user.username + ` Bot`)
        .setDescription(`User **${banMember}** with ID **${banMember.id}** has been banned by ${message.author} for reason \`${reason}\`.`)
        .setColor(message.guild.roles.find(r => r.name === "Krypto Bot").color)
        .setFooter(message.id)
        .setTimestamp();

        banMember.send(banmemembed).then(() => 
        message.guild.ban(banMember, { days: 1, reason: reason})).catch(err => console.log(err))

        message.channel.send(banembed)
        message.guild.channels.get("400161452008275978").send(logembed)
        
    }
}

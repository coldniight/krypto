const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "nickname",
        description: "Changes the nickname of a user.",
        usage: "!nickname <member> <nick>",
        accessableby: "Helpers",
        aliases: ["nick"]
    },
    run: async (bot, message, args) => {
        let perembed = new RichEmbed()
        .setTitle(bot.user.username + ` Bot`)
        .setDescription(`You do not have access to \`nickname\`, ${message.author}.`)
        .setColor(message.guild.roles.find(r => r.name === "Krypto Bot").color)
        .setFooter(message.id)
        .setTimestamp();

        let memembed = new RichEmbed()
        .setTitle(bot.user.username + ` Bot`)
        .setDescription(`Please provide a valid user to change nickname, ${message.author}.`)
        .setColor(message.guild.roles.find(r => r.name === "Krypto Bot").color)
        .setFooter(message.id)
        .setTimestamp();

        let timeembed = new RichEmbed()
        .setTitle(bot.user.username + ` Bot`)
        .setDescription(`Please provide a nickname, ${message.author}.`)
        .setColor(message.guild.roles.find(r => r.name === "Krypto Bot").color)
        .setFooter(message.id)
        .setTimestamp();
  

        if(!message.member.hasPermissions(["MANAGE_MESSAGES"])) return message.channel.send(perembed)

        let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
        if(!mutee) return message.channel.send(memembed)

        let adminembed = new RichEmbed()
        .setTitle(bot.user.username + ` Bot`)
        .setDescription(`You are not allowed to perform \`nickname\` on user ${mutee}, ${message.author}.`)
        .setColor(message.guild.roles.find(r => r.name === "Krypto Bot").color)
        .setFooter(message.id)
        .setTimestamp();

        if(mutee.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(adminembed)

        let name = args.slice(1).join(" ");
        if(!name) return message.channel.send(timeembed)

        if(!message.guild.me.hasPermissions(["MANAGE_ROLES"])) return console.log("I don't have enough permissions to run some commands!");

        let muteembed = new RichEmbed()
        .setTitle(bot.user.username + ` Bot`)
        .setDescription(`Changed ${mutee}'s nickname to \`${name}\`, ${message.author}.`)
        .setColor(message.guild.roles.find(r => r.name === "Krypto Bot").color)
        .setFooter(message.id)
        .setTimestamp();

        await(mutee.setNickname(name))
        message.channel.send(muteembed)
    }
}

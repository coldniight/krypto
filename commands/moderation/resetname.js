const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "resetname",
        description: "Resets the name of a user.",
        usage: "!resetname <member>",
        accessableby: "Helpers",
        aliases: ["rname", "rnick"]
    },
    run: async (bot, message, args) => {
        let perembed = new RichEmbed()
        .setTitle("Astronaut Bot")
        .setDescription(`You do not have access to \`resetname\`, ${message.author}.`)
        .setColor(0x3c368f)
        .setFooter(message.id)
        .setTimestamp();

        let memembed = new RichEmbed()
        .setTitle("Astronaut Bot")
        .setDescription(`Please provide a valid user to resetname, ${message.author}.`)
        .setColor(0x3c368f)
        .setFooter(message.id)
        .setTimestamp();

        if(!message.member.hasPermissions(["MANAGE_MESSAGES"])) return message.channel.send(perembed)

        let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
        if(!mutee) return message.channel.send(memembed)

        let adminembed = new RichEmbed()
        .setTitle("Astronaut Bot")
        .setDescription(`You are not allowed to perform \`resetname\` on user ${mutee}, ${message.author}.`)
        .setColor(0x3c368f)
        .setFooter(message.id)
        .setTimestamp();

        if(mutee.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(adminembed)

        if(!message.guild.me.hasPermissions(["MANAGE_ROLES"])) return console.log("I don't have enough permissions to run some commands!");

        let muteembed = new RichEmbed()
        .setTitle("Astronaut Bot")
        .setDescription(`Reseted ${mutee}'s nickname, ${message.author}.`)
        .setColor(0x3c368f)
        .setFooter(message.id)
        .setTimestamp();

        await(mutee.setNickname(""))
        message.channel.send(muteembed)
    }
}

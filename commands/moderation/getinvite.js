const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "getinvite",
        description: "Generates an invite for the server.",
        usage: "!getinvite",
        accessableby: "Administrators",
        aliases: ["getinv"]
    },
    run: async (bot, message, args) => {
        let perembed = new RichEmbed()
        .setTitle("Astronaut Bot")
        .setDescription(`You do not have access to \`getinvite\`, ${message.author}.`)
        .setColor(0x3c368f)
        .setFooter(message.id)
        .setTimestamp();
        
        let invite = await message.channel.createInvite({
            maxUses: 1
        })

        let logembed = new RichEmbed()
        .setTitle("Astronaut Bot")
        .setDescription(`User ${message.author} generated the invite \`${invite}\` in channel ${message.channel}.`)
        .setColor(0x3c368f)
        .setFooter(message.id)
        .setTimestamp();

        if(!message.member.hasPermissions(["BAN_MEMBERS"])) return message.channel.send(perembed)

        if(!message.guild.me.hasPermissions(["BAN_MEMBERS"])) return console.log("I don't have enough permissions to run some commands!")

        let inviteembed = new RichEmbed()
        .setTitle("Astronaut Bot")
        .setDescription(`Your invite has been generated, ${message.author}: \`${invite}\`.`)
        .setColor(0x3c368f)
        .setFooter(message.id)
        .setTimestamp();

        let invitechannelembed = new RichEmbed()
        .setTitle("Astronaut Bot")
        .setDescription(`Successfully send invite to your DM's, ${message.author}.`)
        .setColor(0x3c368f)
        .setFooter(message.id)
        .setTimestamp();

        message.author.send(inviteembed)
        message.channel.send(invitechannelembed)
        message.guild.channels.get("577253140601241600").send(logembed)
    }
}

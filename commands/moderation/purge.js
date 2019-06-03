const { RichEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "purge",
        description: "Deletes an specific amount of messages.",
        usage: "!purge <amount>",
        accessableby: "Helpers",
        aliases: ["clear"]
    },
    run: async (bot, message, args) => {
         let perembed = new RichEmbed()
        .setTitle("Astronaut Bot")
        .setDescription(`You do not have access to \`purge\`, ${message.author}.`)
        .setColor(0x3c368f)
        .setFooter(message.id)
        .setTimestamp();
        
        if(!message.member.hasPermissions(["MANAGE_MESSAGES"])) return message.channel.send(perembed)
        
        let amountembed = new RichEmbed()
        .setTitle("Astronaut Bot")
        .setDescription(`Please provide a valid amount of messages, ${message.author}.`)
        .setColor(0x3c368f)
        .setFooter(message.id)
        .setTimestamp();

        let hundredembed = new RichEmbed()
        .setTitle("Astronaut Bot")
        .setDescription(`Please provide a number less than 100, ${message.author}.`)
        .setColor(0x3c368f)
        .setFooter(message.id)
        .setTimestamp();
        
        let successembed = new RichEmbed()
        .setTitle("Astronaut Bot")
        .setDescription(`Successfully purged ${args[0]} messages, ${message.author}.`)
        .setColor(0x3c368f)
        .setFooter(message.id)
        .setTimestamp();
        
        if (isNaN(args[0])) return message.channel.send(amountembed)
        if(args[0] > 100) return message.channel.send(hundredembed)

        message.channel.bulkDelete(args[0])
        .then(message.channel.send(successembed))
        .catch( error => message.channel.send(`[E] ${error.message}`))
    }
}

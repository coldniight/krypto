const { prefix } = require("../../botconfig.json")
const {	RichEmbed } = require("discord.js")

module.exports = async (bot, message) => {
    if (message.author.bot || message.channel.type === "dm") return;

    let perembed = new RichEmbed()
    .setTitle(bot.user.username + ` Bot`)
    .setDescription(`Please use the <#396382367423397889> channel to run commands, ${message.author}.`)
    .setColor(message.guild.roles.find(r => r.name === "Krypto Bot").color)
    .setFooter(message.id)
    .setTimestamp();

    if (message.channel.id === '396382367423397889'){
    
    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase()
    if(!message.content.startsWith(prefix)) return;
    
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(commandfile) commandfile.run(bot, message, args)
   }
  else{
  	if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.channel.send(perembed)

  	let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase()
    if(!message.content.startsWith(prefix)) return;
    
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(commandfile) commandfile.run(bot, message, args)
   }
}

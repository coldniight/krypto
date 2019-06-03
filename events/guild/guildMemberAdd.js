const { prefix } = require("../../botconfig.json")

module.exports = async (bot, member) => {
    var role = bot.guilds.get("396381495180394496").roles.find('id', '396384147750518784');
    member.addRole(role);
}
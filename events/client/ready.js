const { botconfig } = require("../../botconfig.json")
const botstatus = "beating beaners";

module.exports = async (bot) => {
    bot.user.setActivity(botstatus, {type: 'PLAYING'});
}

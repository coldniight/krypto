module.exports = (bot) => {
let prompt = process.openStdin()
prompt.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    bot.channels.get("396381495180394498").send(x.join(" "));
});
}
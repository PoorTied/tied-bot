module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args, client){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('A24430')
        .setTitle('Ping')
        .setDescription("Pong! 0.00 Ping")
        message.channel.send(helpEmbed)
    }
}
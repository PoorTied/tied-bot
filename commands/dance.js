module.exports = {
    name: 'dance',
    description: "this is a Dance command!",
    execute(message, args, client){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('A24430')
        .setTitle('Dance')
        .setDescription("Stick man do be dancing tho")
        .setImage("https://cdn.discordapp.com/attachments/830209154093285446/830273161605283860/image0-5.gif")
        message.channel.send(helpEmbed)
    }
}
module.exports = {
    name: 'av',
    description: "This Command av a member!",
    execute(message, args, Discord){
      let user = message.mentions.first().user || message.author
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#A24430')
        .setTitle('Avatar')
        .setDescription("Users Avatar.")
        .setImage(user.displayAvatarURL())
        message.channel.send(helpEmbed)
    }
} 
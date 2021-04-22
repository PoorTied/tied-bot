module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args, client){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('A24430')
        .setTitle('Help')
        .setDescription("this is a help command!")
        .addFields(
            {name: 'Prefix', value: '`-`'},
            {name: 'Categorys', value: '`Fun,Moderation`'},
            {name: 'Usage', value: '`-help <category/command>`'}
        )
        message.channel.send(helpEmbed)
    }
}
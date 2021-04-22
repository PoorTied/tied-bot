module.exports = {
    name: 'kick',
    description: "This Command Kicks a member!",
    execute(message, args, client){
if (!message.member.hasPermission(`KICK_MEMBERS`)) return message.channel.send(`You do not have permission to kick members!`)
        const member = message.mentions.users.first();
        if(member){
            const membertarget = message.guild.members.cache.get(member.id)
            membertarget.kick()
            message.channel.send("Succesfully kicked member")
        }else{
            message.channel.send('Could not kick, Please Choose a Valid User')
        }
    }
}

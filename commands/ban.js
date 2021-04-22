module.exports = {
    name: 'ban',
    description: "This Command Kicks a member!",
    execute(message, args, client){
if (!message.member.hasPermission(`BAN_MEMBERS`)) return message.channel.send(`You do not have permission to Ban members!`)
        const member = message.mentions.users.first();
        if(member){
            const membertarget = message.guild.members.cache.get(member.id)
            membertarget.ban()
            message.channel.send("Succesfully Banned member")
        }else{
            message.channel.send('Could not Ban, Please Choose a Valid User')
        }
    }
}

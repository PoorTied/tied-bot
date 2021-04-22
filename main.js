const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandfiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandfiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase()

    if(command === 'help'){
        client.commands.get('help').execute(message, args, client)
    } 
    if(command === 'dance'){
        client.commands.get('dance').execute(message, args, client)
    } 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, client)
    } 
    if(command === 'kick'){
        client.commands.get('kick').execute(message, args, client)
    } 
    if(command === 'ban'){
        client.commands.get('ban').execute(message, args, client)
    } 
    if(command === 'eval'){
        client.commands.get('eval').execute(message, args, client)
    } 
    if(command === 'av'){
        client.commands.get('av').execute(message, args, client)
    } 
});

client.login(process.env.token);
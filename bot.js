const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    client.user.setActivity('with hot ladies');

});

 

client.on('message', message => {

    if (message.content === '!ping') {

       message.reply('!!!ping received!!!');

    }

});

client.login(process.env.BOT_TOKEN);
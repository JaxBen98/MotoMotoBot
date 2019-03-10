const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame('with hot ladies');

});

client.on('message', message => {

    if (message.content === '!chunky') {

        let chunky = Math.floor((Math.random() * 100) + 1);

        if (chunky < 11) {
            message.reply("you are: " + chunky.toString() + "% chunky. Not worth it in my opinion.");
        } else if (chunky < 31) {
            message.reply("you are: " + chunky.toString() + "% chunky. Maybe if i was blind, wearing glasses, deaf, disabled, and an idiot, you would be okay.");
        } else if (chunky < 51) {
            message.reply("you are: " + chunky.toString() + "% chunky. You are half of my dream woman");
        } else if (chunky < 71) {
            message.reply("you are: " + chunky.toString() + "% chunky. You wearing a fat suit?");
        } else if (chunky <= 99) {
            message.reply("you are: " + chunky.toString() + "% chunky. Still not enough.");
        } else if (chunky == 100) {
            message.reply("you are: " + chunky.toString() + "% chunky. You are perfect for me.");
        }

    } else if (message.content === '!help') {
        message.reply('!chunky -- I rate your plump level.');
    }

});

client.login(process.env.BOT_TOKEN);
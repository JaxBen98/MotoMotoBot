const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame('with hot ladies');

});

client.on('message', message => {

    if (message.content === '/chunky') {

        let chunky = Math.floor((Math.random() * 100) + 1); // maybe assign a chunky/sexy value to each ID so they can't just re-run the command?

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

    } else if (message.content === '/help') {
        message.reply('\n/chunky -- I rate your plump level.\n/flirt -- I flirt with you on demand.\n/moto -- Gives you a post from my insta <3\n/sexy - I rate your sexiness');
    } else if (message.content === '/flirt') {

        let flirt = Math.floor((Math.random() * 11) + 1);
        
        if (flirt == 1) {
            message.reply("you are the sexiest thing i have seen today, and i looked in a mirror this morning.");
        } else if (flirt == 2) {
            message.reply("i would call you sexy but i would be lying.");
        } else if (flirt == 3) {
            message.reply("i like 'em big and chunky, just like you.");
        } else if (flirt == 4) {
            message.reply("i thought i was looking in a mirror but then it turned out to be you.");
        } else if (flirt == 5) {
            message.reply("u sexy");
        } else if (flirt == 6) {
            message.reply("if you spell my name backwards it means otom otom which im guessing is your name.");
        } else if (flirt == 7) {
            message.reply("my name backwards is otom otom which rhymes with bottom bottom so show me your bottom.");
        } else if (flirt == 8) {
            message.reply("i threw up looking at you.");
        } else if (flirt == 9) {
            message.reply("i love your body");
        } else if (flirt == 10) {
            message.reply("are you a girl?");
        } else if (flirt == 11) {
            message.reply("u sexy");
        }

    } else if (message.content === '/moto') {
        let random = Math.floor((Math.random() * 3) - 1);

        if (random == 1) {
            message.reply("https://media.discordapp.net/attachments/553680627573063693/553681712035397653/moto_hero.jpg");
        } else if (random == 2) {
            message.reply("https://vignette.wikia.nocookie.net/penguinsofmadagascar/images/5/51/MotoMoto2.jpg/revision/latest/top-crop/width/360/height/450?cb=20120622005912");
        }
    } else if (message.content === '/sexy') {
        let sexy = Math.floor((Math.random() * 100) + 1);

        if (sexy == 1) {
            message.reply("You disgusting little rat. " + sexy.toString() + "% sexy.");
        } else if ((sexy > 1) && (sexy < 10)) {
            message.reply("My turds look better than you bb. " + sexy.toString() + "% sexy.");
        } else if ((sexy > 11) && (sexy < 25)) {
            message.reply("You are ugly. " + sexy.toString() + "% sexy.");
        } else if ((sexy > 26) && (sexy < 49)) {
            message.reply("You are extremely ugly. " + sexy.toString() + "% sexy");
        } else if (sexy == 50) {
            message.reply("You are half as sexy as me. " + sexy.toString() + "% sexy");
        } else if (sexy == 51) {
            message.reply("ngl you so ugly you dont wanna see your number");
        } else if ((sexy > 52) && (sexy < 70)) {
            message.reply("You look almost as good as my mirror honey. " + sexy.toString() + "% sexy.");
        } else if ((sexy > 71) && (sexy < 80)) {
            message.reply("dang girl you a hotty with a body. " + sexy.toString() + "% sexy.");
        } else if ((sexy > 80) && (sexy < 98)) {
            message.reply("dang girl you almost as hot as me. " + sexy.toString() + "% sexy.");
        } else if (sexy == 99) {
            message.reply("dang girl you as hot as me. " + sexy.toString() + "% sexy.");
        } else if (sexy == 100) {
            message.reply("wow you too hot for even me. " + sexy.toString() + "% sexy.");
        }
    }

});

client.login(process.env.BOT_TOKEN);
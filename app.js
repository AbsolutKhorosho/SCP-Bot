// JavaScript source code
const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
client.on('ready', () => {
    console.log('I\'m gay')
})
client.on('message', message => {
    if (message.content === '!scp') {
        x = getRandomInt(3998) + 1;
        if (x.toString().length > 2) {
            message.reply('http://www.scp-wiki.net/scp-' + x);
        } else if (x.toString().length == 2) {
            message.reply('http://www.scp-wiki.net/scp-0' + x);
        } else if (x.toString().length == 1) {
            message.reply('http://www.scp-wiki.net/scp-00' + x);
        }
    }
})

client.login(settings.token);

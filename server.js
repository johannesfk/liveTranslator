require('dotenv').config()
const axios = require('axios')
const Discord = require('discord.js')
const client = new Discord.Client()
const {Translate} = require('@google-cloud/translate');
const projectId = 'bothosting';
// const keep_alive = require('./keep_alive.js')

// Instantiates a translate client
const translate = new Translate({
  projectId: projectId,
});

client.on('message', msg => {
  // The text to translate
  var text = msg.content;
  // The target language
  const target = 'ru';
  if (text[0] !== msg.content) {
    msg.reply("In English it is:\n" + text[0])
    console.log("Translated " + msg.content + " to " + text[0]);
  }
})

client.login(process.env.BOT_TOKEN)
console.log("Up and running");
console.log("Bot Token = " + process.env.BOT_TOKEN);

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
  axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate', {
    params: {
      key: process.env.YANDEX_API_KEY,
      text: msg.content,
      lang: 'en'
    }
  // The text to translate
  var text = msg.content;

  // The target language
  const target = 'ru';
  }).then(res => {
    if (text[0] !== msg.content) {
      msg.reply("In English it is:\n" + res.data.text[0])
      console.log("Translated " + msg.content + " to " + res.data.text[0]);
    }
  })
})

client.login(process.env.BOT_TOKEN)
console.log("Up and running");
console.log("Token = " + process.env.BOT_TOKEN);
console.log("Yandex API key = " + process.env.YANDEX_API_KEY);

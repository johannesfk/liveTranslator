const axios = require('axios')
const Discord = require('discord.js')
const client = new Discord.Client()
const keep_alive = require('./keep_alive.js')

client.on('message', msg => {
  axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate', {
    params: {
      key: process.env.YANDEX_API_KEY,
      text: msg.content,
      lang: 'en'
    }
  }).then(res => {
    if (res.data.text[0] !== msg.content) {
      msg.reply("In English it is:\n" + res.data.text[0])
    }
  })
})

client.login(process.env.BOT_TOKEN)
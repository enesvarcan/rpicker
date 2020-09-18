// RandomPicker - index.js
// Starting point of the application

require('dotenv').config()
const Discord = require('discord.js')       // Import discord.js module
const client = new Discord.Client()         // Create client instance
const process = require('./Controller')
const store = require('./Store')

client.on('ready', () => {
    console.log('Ready to go!')
})

client.on('message', (message) => {
    process(message, store)
})

client.login(process.env.DISCORD_TOKEN)

// RandomPicker - index.js
// Starting point of the application

const ck = require('ckey')                  // Using dotenv variables
const Discord = require('discord.js')       // Import discord.js module
const client = new Discord.Client()         // Create client instance
const process = require('./Controller')

client.on('ready', () => {
    console.log('Ready to go!')
})

client.on('message', (message) => {
    process(message)
})

client.login(ck.DISCORD_TOKEN)

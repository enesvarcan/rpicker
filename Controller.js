// RandomPicker - Controller.js
// Process the command and produce output

const parser = require('./Parser')
const store = require('./Store')

function process(message) {
    try {
        var parsedMessage = parser(message)

        switch (parsedMessage.command) {
            case "add":
                store.add(parsedMessage.text)
                message.channel.send("Added: " + parsedMessage.text)
                break
            case "list":
                message.channel.send(store.list())
                break
            case "remove":
                let removed = store.remove(parsedMessage.text)[0]
                message.channel.send("Removed: " + removed)
                break
            case "pick":
                message.channel.send("I picked: \n\t" + store.pick())
                break
            case "clear":
                store.clear()
                message.channel.send("List cleared.")
                break
            case "toss":
                let coin = ["Heads", "Tails"]
                message.channel.send(coin[Math.floor(Math.random() * coin.length)])  
                break
            case "random":
                message.channel.send(Math.floor(Math.random() * parsedMessage.text))
                break  
            default:
                message.channel.send("Commands:\n" + 
                "*add [option], " +
                "*remove [index], " + 
                "*list, " +
                "*clear, " + 
                "*pick, " + 
                "*toss, " + 
                "*random [limit]")
        }
    }
    catch (e){ 
        // Ignore messages which are not any of the commands
        if(e.message === "ignore_message")  return
         
        console.log(e.message)
        message.channel.send('An error occured, try again.')
    }
}

module.exports = process
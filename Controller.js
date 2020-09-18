// RandomPicker - Controller.js
// Process the command and produce output

const parser = require('./Parser')

function process(message, store) {
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
            default:
                message.channel.send("Commands:\n \
                *add, *remove, *list, *clear, *pick")
        }
    }
    catch (e){
        if(e.message === "ignore_message")  return
        console.log(e.message)
        message.channel.send('An error occured, try again.')
    }
}

module.exports = process
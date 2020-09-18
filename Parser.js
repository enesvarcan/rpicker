// RandomPicker - Parser.js
// Parse the message as text and command

function parse(message) {
    var content = message.content
    if (content[0] != "*" )             // If message does not start with '*'
        throw Error("ignore_message")   // Throw error

     // Split the message as ["command", "text"]
     var strList = content.substring(1).toLowerCase().split(" ")
     var strs = {                    // Create the object
         command:    strList[0],
         text:       strList[1]
    }    

    return strs   
}

module.exports = parse
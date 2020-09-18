// RandomPicker - Store.js
// Singleton implementation of the list

const _data = []

const Store = {
    add: (item) => _data.push(item),
    get: (index) => __data[index - 1],
    remove: (index) => _data.splice(index - 1, 1),
    pick: () => _data[Math.floor(Math.random() * _data.length)],
    clear: () => _data.splice(0, _data.length),
    list: () => {
        if (_data.length == 0)
            return "List is empty."

        var str = ""
        for(var i = 0; i < _data.length; i++){
            str += (i + 1) + ": " + _data[i] + "\n"
        }
        return str
    }
}

Object.freeze(Store)
module.exports = Store
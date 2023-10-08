const fs = require('node:fs')
const field_set = ['Доходи, усього', 'Витрати, усього']

fs.readFile('data.json', (err, data) => {
    var string = '';
    var content = JSON.parse(data.toString())
    for (const record of content) {
        if (field_set.includes(record.txt)) {
            string += record.txt + ':' + record.value + '\n'
        }
    }
    writeFile('output.txt', string)
}
)

function writeFile (path, data) {
    fs.writeFile(path, data, err => {
        console.log('File has been written')
    })
}
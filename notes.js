const fs = require('fs')
const chalk = require('chalk')


const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(note => title === note.title)

    debugger

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes)
        console.log(chalk.green.inverse('Note saved'));
        
    } else console.log(chalk.red.inverse('Note title taken'));
    
     
    
    
}

const removeNotes = (title) => {
    const notes = loadNotes()

    const newNotes = notes.filter(note => title !== note.title)

    if (newNotes.length === notes.length) {
        console.log(chalk.red.inverse('Note does not exist'));
        
        
    } else {
        saveNotes(newNotes)
        console.log(chalk.green.inverse('Note removed'));
        
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

const loadNotes = () => {
    try {
       const dataBuffer = fs.readFileSync('notes.json')
       const dataJSON = dataBuffer.toString()
       return JSON.parse(dataJSON)

    } catch(e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your notes...'));
    notes.forEach(note => console.log(chalk.green.inverse(`- ${note.title}`))
    )
    
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find(note => note.title === title)
    if (note) {
        console.log(chalk.green(note.title));
        console.log(note.body);    
    } else console.log(chalk.red('No note found'));
    
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}
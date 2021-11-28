const chalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')


yargs.version('1.1.0')

// Add new note

yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true, 
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
        
    }
})

// Remove note

yargs.command({
    command: 'remove',
    describe: 'Remove new note',
    builder: {
        title: {
            describe: 'Put name of the title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
        
    }
})

// List notes

yargs.command({
    command: 'list',
    describe: 'Get list of all notes',
    handler() {
        notes.listNotes()
        
    }
})

// Read note

yargs.command({
    command: 'read',
    describe: 'Display note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
        
    }
})

//console.log(yargs.argv);

yargs.argv

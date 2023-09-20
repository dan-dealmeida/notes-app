const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add', 
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
})
//Create remove command
yargs.command({
    command: 'remove',
    describe: 'removes a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
    
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'lists all notes',
    handler: () => notes.listNotes()
    
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'reads a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.readNote(argv.title)

})

//create edit command
yargs.command({
    command: 'edit',
    describe: 'edits a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.editNote(argv.title)
})

yargs.parse()
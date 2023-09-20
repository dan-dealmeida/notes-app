const fs = require("fs")
const chalk = require ('chalk')
const prompt = require('prompt-sync')();


const addNote = (title, body = "") => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    } else{
        console.log(chalk.red.inverse('Note title taken!'))
    }
    
    
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.green(note.title + ":"))
        console.log(chalk.blue(note.body))
    } else{
        console.log(chalk.red("no note named "+title))
    }
}

const editNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
  
    if (note) {
      // Prompt the user to enter the new contents of the note.
      const newBody = prompt('Enter the new contents of the note: ');
  
      // Update the note with the new contents.
      note.body = newBody;
  
      // Save the updated note to the JSON file.
      saveNotes(notes);
  
      console.log(chalk.green.inverse('Note edited!'));
    } else {
      console.log(chalk.red.inverse('No note found with that title!'));
    }
  };

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e){
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes:'))

    notes.forEach((note) => {
        console.log(chalk.blue(note.title))
    })
}



module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
    editNote: editNote
}
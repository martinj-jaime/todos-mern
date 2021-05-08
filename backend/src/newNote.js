require('./database');
const Note = require('./models/Note');

async function newNote() {

    const hw = new Note({
            title: 'hacer la tarea',
            content: 'stack mern',
            author: 'martincho'
    })
    
    const NoteSavedd = await hw.save();
    console.log(NoteSavedd)

    const ejer = new Note({
        title: 'hacer ejercicio',
        content: 'a la tarde',
        author: 'martincho'
    })

    const NoteSaveddd = await ejer.save();
    console.log(NoteSaveddd)

}
newNote()
    .then(NoteSaved => console.log(NoteSaved))
    .catch(err => console.log(err))

// node src/newNote.js
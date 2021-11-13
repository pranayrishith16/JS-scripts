export default class NotesAPI{
    static getAllNotes(){
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

        return notes.sort((a,b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(noteToSave){
        const notes = NotesAPI.getAllNotes();
        const exist = notes.find(note => note.id == noteToSave.id);

        if(exist){
            exist.title = noteToSave.title;
            exist.body = noteToSave.body;
            exist.updatedOn = new Date().toISOString();
        }
        else{
            noteToSave.id = Math.floor(Math.random() * 1000000);
            noteToSave.updatedOn = new Date().toISOString();
            notes.push(noteToSave);
        }


        localStorage.setItem("notesapp-notes", JSON.stringify(notes));
    }
    
    static deleteNote(id){
        const notes = NotesAPI.getAllNotes();
        const newNotes = notes.filter(note => note.id != id);
        
        localStorage.setItem("notesapp-notes", JSON.stringify(notes));
    }

}
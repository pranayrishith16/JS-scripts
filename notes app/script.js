import NotesView from "./NotesView.js";

// NotesAPI.saveNote({
//     id:776474,
//     title:"Changed the title again",
//     body:"and also body",
// })

// NotesAPI.saveNote({
//     title:"Hello",
//     body:"I am another new note",
// })

const app = document.getElementById("app")
const view = new NotesView(app, {
    onNoteAdd(){
        console.log("Note has been selected");
    },

    onNoteSelect(id){
        console.log("Note Selected: "+ id)
    },

    onNoteEdit(newTitle,newBody){
        console.log(newTitle);
        console.log(newBody);
    },

    onNoteDelete(id){
        console.log("Note Deleted: " + id);
    }
})
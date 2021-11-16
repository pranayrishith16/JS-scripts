export default class NotesView{
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}){
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        this.root.innerHTML = `
            <div class="notes__sidebar">
            <button class="notes__add">Add Note</button>
            <div class="notes__list"></div>
            </div>
            <div class="notes__preview">
            <input class="notes__title" type="text" placeholder="Enter a title...">
            <textarea name="" class="notes__body" placeholder="Enter..."></textarea>
            </div>
        `;

        const btnAddNote = this.root.querySelector(".notes__add");
        const inpTitle = this.root.querySelector(".notes__title");
        const inpBody = this.root.querySelector(".notes__body");

        btnAddNote.addEventListener("click", () => {
            this.onNoteAdd();
        });

        [inpTitle,inpBody].forEach(inputField => {  
            inputField.addEventListener("blur",() => {
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value.trim();

                this.onNoteEdit(updatedTitle,updatedBody);
            });
        });
        }


    _createListItemHTML(id, title, body, updated){
        const MAX_BODY_LENGTH = 60;

        return `
            <div class="notes__list-item data-note-id=${id}">
                <div class="notes__small-title">${title}</div>
                <div class="notes__small-body">
                    ${body.substring(0,MAX_BODY_LENGTH)}
                    ${body.length > MAX_BODY_LENGTH ? "..." : ""}
                </div>
                <div class="notes__small-updated">
                    ${updated.toLocalString(undefined,{dateStyle:"full", timeStyle:"short"})}
                </div>
            </div>
        `;
    }

    updateNoteList(notes){
        const notesListContainer = this.root.querySelector(".notes__list");

        // Empty the list container
        notesListContainer.innerHTML = "";

        for(const note of notes){
            const html = this._createListItemHTML(note.id, note.title, note.body, note.updated);

            notesListContainer.insertAdjacentHTML("beforeend",html);
        }

        // add select/delete events for each list item
        notesListContainer.querySelectorAll(".notes__list-item".forEach(noteListItem => {
            noteListItem.addEventListener("click", () => {
                this.onNoteSelect(noteListItem.dataset.noteId);
            })
        }));
    }
}
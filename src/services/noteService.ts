import { Note } from "../models/notes";

export class NoteService {
    private notes: Note[] = [];

    public createNote(title: string, body: string): Note {
        const newNote = new Note(title, body);
        this.notes.push(newNote);
        return newNote;
    }

    public getAllNotes(): Note[] {
        return this.notes;
    }

    public getNoteById(id: string): Note | undefined {
        return this.notes.find(note => note.id === id);
    }

    public updateNote(id: string, title: string, body: string): Note | undefined {
        const note = this.getNoteById(id);
        if (note) {
            note.title = title;
            note.body = body;
        }
        return note;
    }

    public deleteNote(id: string): boolean {
        const noteIndex = this.notes.findIndex(note => note.id === id);
        if (noteIndex > -1) {
            this.notes.splice(noteIndex, 1);
            return true;
        }
        return false;
    }
}

import { Request, ResponseToolkit, ServerRoute } from '@hapi/hapi';
import { NoteService } from '../services/noteService';

const noteService = new NoteService();

const noteRoutes: ServerRoute[] = [
    {
        method: 'POST',
        path: '/notes',
        handler: (request: Request, h: ResponseToolkit) => {
            const { title, body } = request.payload as any;
            const note = noteService.createNote(title, body);
            return h.response(note).code(201);
        }
    },
    {
        method: 'GET',
        path: '/notes',
        handler: (request: Request, h: ResponseToolkit) => {
            return noteService.getAllNotes();
        }
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: (request: Request, h: ResponseToolkit) => {
            const { id } = request.params;
            const note = noteService.getNoteById(id);
            if (note) {
                return note;
            }
            return h.response('Not Found').code(404);
        }
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: (request: Request, h: ResponseToolkit) => {
            const { id } = request.params;
            const { title, body } = request.payload as any;
            const updatedNote = noteService.updateNote(id, title, body);
            if (updatedNote) {
                return updatedNote;
            }
            return h.response('Not Found').code(404);
        }
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: (request: Request, h: ResponseToolkit) => {
            const { id } = request.params;
            const deleted = noteService.deleteNote(id);
            if (deleted) {
                return h.response().code(204);
            }
            return h.response('Not Found').code(404);
        }
    }
];

export { noteRoutes };

import express from 'express';
import { getNotesList, getStatsList, getNoteById, removeNote, addNote, editNote } from '../models/noteModels.js';
import { validateNote } from '../middleware/validateNote.js';

const notesRouter: express.Router = express.Router();

notesRouter.get('/', getNotesList);
notesRouter.get('/stats', getStatsList);
notesRouter.get('/:id', getNoteById);

notesRouter.post('/', validateNote, addNote);
notesRouter.delete('/:id', removeNote);
notesRouter.patch('/:id', validateNote, editNote);

export default notesRouter;
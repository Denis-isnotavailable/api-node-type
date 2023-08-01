import express from 'express';
import { getNotesList, getStatsList, getNoteById, removeNote, addNote, editNote } from '../models/noteModels.js';

const notesRouter: express.Router = express.Router();

notesRouter.get('/', getNotesList);
notesRouter.get('/stats', getStatsList);
notesRouter.get('/:id', getNoteById);

notesRouter.post('/', addNote);
notesRouter.delete('/:id', removeNote);
notesRouter.patch('/:id', editNote);

export default notesRouter;
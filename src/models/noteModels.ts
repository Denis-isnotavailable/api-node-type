import express from 'express';
import { getAllNotesService, getStatsService, getNoteByIdService, addNoteService, deleteNoteService, editNoteService, Note } from '../../src/services/noteService.js';



// GET ALL
export const getNotesList = async (req: express.Request, res: express.Response) => {
    try {
        const notes = await getAllNotesService();
    
        res.status(200).json({ status: 'success', notes });

    } catch (e) {
        console.error(e);
    }
};

// GET STATS
export const getStatsList = async (req: express.Request, res: express.Response) => {
    try {
        const stats = await getStatsService();
    
        res.status(200).json({ status: 'success', stats });

    } catch (e) {
        console.error(e);
    }
};

// GET BY ID
export const getNoteById = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const note = await getNoteByIdService(id);

        if (!note) {
            res.status(404).json({ status: 'error', message: "Not found" })
        }
    
        res.status(200).json({ status: 'success', note });

    } catch (e) {
        res.status(404).json({ status: 'error', message: "Not found" });
        console.error(e);
    }
};

// ADD NOTE
export const addNote = async (req: express.Request, res: express.Response) => {
    try {
        const note: Note = req.body; 
        const data = await addNoteService(note);
    
        res.status(201).json({status: 'success', data });

    } catch (e) {
        console.error(e);
    }
};

// DELETE NOTE
export const removeNote = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const notes = await deleteNoteService(id);

        if (!notes) {
            res.status(404).json({ status: 'error', message: "Not found"})
        }
    
        res.status(200).json({ status: 'success', notes });

    } catch (e) {
        res.status(404).json({ status: 'error', message: "Not found" });
        console.error(e);
    }
};

// EDIT NOTE
export const editNote = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const note: Note = req.body;
        
        const notes = await editNoteService(id, note);    

        if (!notes) {
            res.status(404).json({ status: 'error', message: "Not found"})
        }
    
        res.status(200).json({ status: 'success', notes });

    } catch (e) {
        res.status(404).json({ status: 'error', message: "Not found" });
        console.error(e);
    }
};
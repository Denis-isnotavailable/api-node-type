import fs from 'fs';

const path: string = 'src/db/notes.json';

export interface IArchived {
    id: string,    
    category: string,
    archivedItems: number,
    activeItems: number
}

export interface Note {
    id: string,
    name: string,
    createdAt: string,
    category: string,
    content: string,
    dates: string,
    archived: boolean
}

const createArchive = (notes: Note[]): IArchived[] => {
    const currentList: IArchived[] = [];

    notes.forEach((note: Note) => {
        const i = currentList.findIndex(item => item.category === note.category);
        if (i !== -1) {
            note.archived ? currentList[i].archivedItems += 1 : currentList[i].activeItems += 1;
        } else {
            currentList.push({
                category: note.category,
                activeItems: note.archived ? 0 : 1,
                archivedItems: note.archived ? 1 : 0,
                id: Math.random().toString()
            });
        }            
    });
    
    return currentList;
}


export const getAllNotesService = async () => {    
    const notes = JSON.parse(fs.readFileSync(path, 'utf8'));    
    
    return notes;
}

export const getStatsService = async () => {    
    const notes = JSON.parse(fs.readFileSync(path, 'utf8'));   
    const stats = createArchive(notes);
    
    return stats;
}

export const getNoteByIdService = async (contactId: string) => {
    const notes = JSON.parse(fs.readFileSync(path, 'utf8'));   
    const i = notes.findIndex((note: Note) => note.id === contactId);
    
    return notes[i];
}

export const addNoteService = async (note: any) => { 
    const notes = JSON.parse(fs.readFileSync(path, 'utf8'));
    const id = Math.random().toString();
    const noteToAdd = { ...note, id };

    notes.push(noteToAdd);
    fs.writeFileSync(path, JSON.stringify(notes), "utf-8");
    
    return notes;    
}

export const deleteNoteService = async (contactId: string) => {
    const notes = JSON.parse(fs.readFileSync(path, 'utf8'));   
    const i = notes.findIndex((note: Note) => note.id === contactId);

    if (i === -1) {
        return null;
    }

    notes.splice(i, 1);
    fs.writeFileSync(path, JSON.stringify(notes), "utf-8");
    
    return notes;
}

export const editNoteService = async (contactId: string, note: Note) => {
    const notes = JSON.parse(fs.readFileSync(path, 'utf8'));   
    const i = notes.findIndex((note: Note) => note.id === contactId);

    if (i === -1) {
        return null;
    }

    notes.splice(i, 1, {...note, id: contactId});
    fs.writeFileSync(path, JSON.stringify(notes), "utf-8");
    
    return notes;
}
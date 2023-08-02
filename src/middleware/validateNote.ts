import yup, { AnySchema, string, boolean, date } from 'yup';
import express from 'express';

const schema: AnySchema = yup.object({    
    id: string(),
    name: string().required("Name is required"),
    createdAt: string().required(),
    category: string().required("Category is required"),
    content: string().required(),
    dates: string(),
    archived: boolean().required()
});

export const validateNote = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.body);
    const {id, name, createdAt, category, content, dates, archived} = req.body;
    try {
        await schema.validate({
            id, name, createdAt, category, content, dates, archived
        });

        next();
    } catch (e: any) {
        res.status(400).send(e.message + " (check input data)");
    }
};
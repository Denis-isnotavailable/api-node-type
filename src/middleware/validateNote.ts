import yup, { AnySchema, string, boolean } from 'yup';
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
    try {
        await schema.validate({
            ...req.body
        });

        next();
    } catch (e: any) {
        res.status(400).send(e.message + " (check input data)");
    }
};
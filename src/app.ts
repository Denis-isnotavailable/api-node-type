import express from 'express';
import notesRouter from './routes/router.js';

const app: express.Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/notes', notesRouter);


app.use((req: express.Request, res: express.Response): void => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction): void => {
  res.status(500).json({ message: err.message })
})



app.get('/', (request: express.Request, responce: express.Response): void => {
    responce.status(200).send(`<h3>HELLO</h3>`);
})

app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
});

// const startApp = async () => {
//   try {
//     // await connectionToMongo();
//     // console.log("Database connection successful");

//     app.listen(PORT, () => {
//       console.log(`Server running. Use our API on port: ${PORT}`);
//     })
//   } catch (e) {
//     console.error(`Failed to launch app with error: ${e.message}`);
//     process.exit(1);
//   }
// }

// startApp();
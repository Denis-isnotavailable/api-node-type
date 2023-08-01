import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/', (request, responce) => {
    responce.status(200).send(`<h3>HELLO</h3>`);
});
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
//# sourceMappingURL=app.js.map
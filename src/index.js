import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();
const port = 4500;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages","index.html"));
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
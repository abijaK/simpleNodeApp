import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 4500;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/' , express.static(path.join((__dirname , "./pages"))));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/index.html"));
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
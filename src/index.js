import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();
const port = 4500;

app.use(express.static(__dirname + "/assets"));

app.use("/css", express.static(path.join(__dirname + "node_modules/bootstrap/dist/css")));

app.use("/js", express.static(path.join(__dirname + "node_modules/bootstrap/dist/js")));

app.use("/js", express.static(path.join(__dirname + "node_modules/jquery/js")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "index.html"));
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
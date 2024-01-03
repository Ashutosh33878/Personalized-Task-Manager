import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
let tasks = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/create", (req, res) => {
    let task = req.body.newTask;
    if (task){
        tasks.push(task);
    }
    res.render("index.ejs");
});

app.get("/view", (req, res) => {
    res.render("view.ejs", {tasksList: tasks});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

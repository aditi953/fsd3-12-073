import express from "express";
import path from "path";
import {fileURLToPath} from "node:url";

const app = express();

const urlPath= fileURLToPath(import.meta.url);
const rootFolder = path.dirname(urlPath)

app.use(express.static(path.join(rootFolder ,"pages")));

app.use((req,res)=>{
    res.status(404).send("<h1>page not found</h1>");
});

app.listen(4444,()=>console.log("prg3 is running at 4444"));
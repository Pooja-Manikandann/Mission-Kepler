import express from 'express';
import fs from 'fs';
import path from 'path'
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

const app = express();
const PORT = 8000;

app.use("^/$", (req, res, next) => {
    console.log("app used")
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        console.log('file read')
        if (err) {
            console.log(err);
            return res.status(500).send("Error occured", err);
        }
        console.log('data', data)
        return res.send(data.replace(`<div id="root"></div>`, `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`))
        // return res.send(data.replace(`<div id="root"></div>`, `<div id="root"><p>I'm rendered from server</p></div>`))
    })
})

app.use(express.static(path.resolve(__dirname, "..", "build")))

app.listen(PORT, () => {
    console.log(`app launched at ${PORT}`)
})
const express = require('express');
const path = require('path');
const fs = require('fs')
const app =  express();
const React = require('react');
const {renderToString, renderToPipeableStream} = require('react-dom/server')
const App = require('./Appp').default;


app.use('/container/latest/', express.static(path.resolve(__dirname, '../dist')));

// app.use(express.static(path.resolve(path.join(__dirname, '/container/latest/'), '../dist')))



app.use('/reactstream', (req, res) => {
    const html = renderToString(<App />);
    res.send(html);
});

app.use('/react', (req, res) => {
    const { pipe } = renderToPipeableStream(<App />, {
        bootstrapScripts: [],
        onShellReady() {
          res.setHeader('content-type', 'text/html');
          pipe(res);
        }
    });
});

app.get('/', (req, res) => {
    res.send({test: 'test'})
});

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.listen(3004, () => {
    console.log('server started');
})
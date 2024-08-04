import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
    res.send("hello Express!");
});

app.listen(3000, () => console.log('Sever Started'));


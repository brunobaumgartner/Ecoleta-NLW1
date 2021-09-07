import express from 'express';

const app = express();

app.get('/users', (req, res)=>{
    console.log("Lista de usuarios");

    res.json([
        'Diego',
        'Cleyton',
        'Robson',
        'Bruno'
    ]);
});

app.post('/users', (req, res)=>{
    const user = {
        name: "Sergio",
        email: "sergio@oi.com"
    }

    return res.json(user)
})

app.listen(3333)
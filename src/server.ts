import express from 'express';

const app = express();

// Routes
app.get('/users', (req, res) => {
    return res.json({
        "res": "Imagine uma lista de usuários"
    });
});

app.post('/user', (req, res) => {
    return res.json({
        "res": "Usuário adicionado com sucesso!"
    });
});

app.listen(3333, () => console.log('Server is running!'))
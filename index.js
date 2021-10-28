const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello there! I am from Node. Who are you?');
});


const users = [
    { id: 0, name: 'Shabana', phone: '017888888' },
    { id: 1, name: 'Suchorita', phone: '017884454' },
    { id: 2, name: 'Mousomi', phone: '01754454455' },
    { id: 3, name: 'Sabnur', phone: '01745454545' },
    { id: 4, name: 'Purnima', phone: '017454545454' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka Fazli');
})

app.listen(port, () => {
    console.log('Listening from port:', port)
})
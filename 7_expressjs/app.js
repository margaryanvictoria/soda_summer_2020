const express = require('express');
const app = express();
const port = 3000;

const database = [
	{
		id: 12341234,
		fName: "Bob",
		lName: "Dylan",
		type: "admin"
	},
	{
		id: 9123458919,
		fName: "Jane",
		lName: "Smith",
		type: "user"
	},
	{
		id: 823171914,
		fName: "Peter",
		lName: "Parker",
		type: "user"
	},
	{
		id: 128341451,
		fName: "John",
		lName: "Cena",
		type: "user"
	},
	{
		id: 90121922,
		fName: "Elon",
		lName: "Musk",
		type: "admin"
	}
];

app.get('/', (req, res) => {
    res.json({
        message: "hello"
    })
})

app.post('/users', (req, res) => {
    console.log(req.body)

    res.end()
})

app.get('/users', (req, res) => {
    const users = database.filter((apple) => apple.type === 'user')

    res.json(users)
});

app.get('/users/:id', (req, res) => {
    const user = database.filter((person) => person.type === 'user' && person.id === Number.parseInt(req.params.id))

    if (user) {
        res.json(user)
    } else {
        res.status(404)
            .json({
                message: `Could not find user with id ${req.params.id}`
            })
    }
});

app.get('/admins', (req, res) => {
    const admins = database.filter((apple) => apple.type === 'admin')

    res.json(admins)
});

app.get('/admins/:id', (req, res) => {
    const admin = database.find((person) => person.type === 'admin' && person.id === Number.parseInt(req.params.id))

    if(admin !== undefined && admin !== null) {
        res.json(admin)
    } else {
        res.status(404)
            .json({
                message: `Could not find admin with id ${req.params.id}`
            })
    }
});

app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});

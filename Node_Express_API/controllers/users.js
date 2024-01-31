import { v4 as uuidv4 } from 'uuid';

let users = [
    {
        firstName: "john",
        lastName: "doe",
        age: 25
    },
    {
        firstName: "Hmed",
        lastName: "Yajoura",
        age: 24
    }
]

export const getAllUsers = (req,res) => {
    res.send(users)
}

export const createUser = (req,res) => {
    const user = req.body;

    users.push({...user, id: uuidv4()});

    res.send(`USER with the username: ${user.firstName} added to the db!`)
}

export const getUser = (req,res) => {
    const {id} = req.params

    const founduser = users.find((user) => user.id === id);

    res.send(founduser)
}

export const deleteUser = (req,res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);
    res.send(`user with id ${id} deleted from the database!`)
}

export const updateUser = (req,res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age; 

    res.send(`user with id ${id} is patched!`);

}
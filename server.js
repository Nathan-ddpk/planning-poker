const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./mongodb/User')

mongoose.connect('mongodb://localhost:27017/testdb')

run()
async function run() {
    try {
        // const user = await User.create({ 
        //     name: "RacerDon",
        //     age: 20,
        //     email: "TEST@racerdon.com",
        //     hobbies: ["sleeping", "More Sleeping", "Zzzzzzz"],
        //     address: {
        //         street: "Anna Nagar",
        //         city: "Chennai"
        //     }
        // })
        const user = await User.where("age")
            .gt(12)
            .where("name")
            .equals("Kaiju")
            .populate("bestFriend")
            .limit(1)
        console.log(user)    
    } catch (e) {
        console.log(e.message)
    }

}








// app.listen(3000, () => console.log("Server Started at PORT 3000"))
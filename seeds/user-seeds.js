//create user seed data
const { User } = require("../models");

constUserData = [

    {
        username: "test",
        email: "test@yahoo.com",
        password: "password123",
    }
    
]

const seedUsers = () => User.bulkcreate(userData);
module.exports = seedUsers;
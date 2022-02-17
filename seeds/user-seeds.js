//create user seed data
const { User } = require("../models");

constUserData = [

    {
        username: "test",
        email: "test@yahoo.com",
        password: "password123",
    }
    
]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
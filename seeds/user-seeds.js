//create user seed data
const { User } = require("../models");

const  userData = [

    {
        username: "test",
        email: "test@yahoo.com",
        password: "password123",
    }
    
]

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;
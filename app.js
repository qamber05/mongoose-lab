const mongoose = require('mongoose');
const dotenv = require("dotenv").config() // allows me to use .env values
const Food = require("./models/Food")
async function connectToDB() {
    try {
        const connection = await mongoose.connect(process.env.CONNECTION)
        console.log("Connected to database!")
        return connection;

    } catch (error) {
        console.log("Connection failed.")
    }

}


connectToDB()


async function createFood() {
    const createdObject = await Food.create(
        {
                    name: "pasta",
        ingredients:["cheese","chicken","watefmedlon"],
        instructions:"do it good",
        prices:47,
        
        isBestSeller:true,
        rating: 3
        }
    )
    console.log(createdObject)
}

//createFood()

async function deleteFood(id) {
    const deletedFood = await Food.findByIdAndDelete(id)
    console.log(deletedFood)
}

//deleteFood("6881c71c97f163263ac072d8")

async function getallFood() {
    const allFoods = await Food.find()
    console.log(allFoods)
}
async function getFood(id) {
    const deletedFood = await Food.findById(id)
    console.log(deletedFood)
}

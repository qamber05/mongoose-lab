//name	String	Required
//ingredients	[String]	Must be an array of strings
//instructions	String	Optional
//prepTime	Number	Optional
//difficulty	String	Must be one of 'Easy', 'Medium', 'Hard'; default: 'Easy'
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
        name: {
            type:String,
            required:true,
            unique:true
        },
        ingredients:[String],
        instructions:String,
        prices:Number,
        isBestSeller:Boolean,
        rating: {
            type:Number,
            enum:[1,2,3,4,5]
        }


    })

    const Food = mongoose.model("food", foodSchema)

module.exports = Food
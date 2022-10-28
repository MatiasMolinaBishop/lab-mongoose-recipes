const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data'); 

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"

const recipe = async function(){
  try {
    const x = await mongoose.connect(MONGODB_URI)
    console.log(`connected to ${x.connection.name}`)
    //addRecipe()
    //importRecepies()
    //updateRecipe()
    //removeRecipe()
    const y = mongoose.disconnect()
    console.log('disconnected')
  }catch(err){
    console.log(err)
  }
}

const addRecipe = async function() {
  try {
    const recipe = await Recipe.create({ title:'Lentels Mental', 
    level: "Amateur Chef", 
    ingredients:["lentels", "onions", "potatoes", "water", "salt"],
    cuisine:"Russian",
    dishType:"soup",
    duration: 60,
    creator:"Matias Molina"
   });
   console.log(recipe.title)
  } catch (err){
    console.log(err)
  }
}

const importRecepies = async function(){
  try{
  const recipeImported = await Recipe.insertMany(data)
  //console.log(recipeImported.title)
  }catch(err){
    console.log(err)
  }
}

const updateRecipe = async function() {
  try{
    const updatedRecipe = await Recipe.findOneAndUpdate({title:"Rigatoni alla Genovese"}, {duration: 100})

  }catch(err){
    console.log(err)
  }
}

const removeRecipe = async function(){
  try{
    const recipeRemoved = await Recipe.deleteOne({title:"Carrot Cake"})
  }catch(err){
    console.log(err)
  }
}



recipe()


//THIS IS ANOTHER WAY OF CONNECTING TO THE DATA BASE HOWEVER ASYNC ISS NEWER / BETTER
// mongoose
//   .connect(MONGODB_URI)
//   .then(x => {
//     console.log(`Connected to the database: "${x.connection.name}"`);
//     // Before adding any recipes to the database, let's remove all existing ones
//     return Recipe.deleteMany()
//   })
//   .then(() => {
//     // Run your code here, after you have insured that the connection was made
//   })
//   .catch(error => {
//     console.error('Error connecting to the database', error);
//   });

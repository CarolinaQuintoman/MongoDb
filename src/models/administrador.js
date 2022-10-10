const mongoose = require('mongoose');


const adminSchema =  mongoose.Schema({
      nombre: {
        type: String,
        required: true
      },
      apellidos: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
      
});

module.exports= mongoose.model("Admin",adminSchema)
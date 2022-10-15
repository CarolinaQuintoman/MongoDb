//const mongoose = require('mongoose');
import { Schema , model } from "mongoose";

const AdminSchema = new Schema({
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
      },
      password:{
        type: String,
        required:true
      },
      confirmarPassword:{
        type: String,
        required:true
      }
      
      
});

export default model( 'administrador', AdminSchema)

const {Schema, model}=require('mongoose')
const TaskSchema= new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
})
module.exports= model('Task', TaskSchema)
const express= require('express')
const Task=require('../models/Tasks')
const router= express.Router()
router.get('/', async (req,res)=>{
    const task= await Task.find();
    console.log(task)
    res.json(task)
})
router.post('/', async(req,res)=>{
    const {nombre, apellido}= req.body
    const task= new Task({nombre,apellido})
    await task.save()
    console.log(task)
    res.json('recibido')
})
module.exports= router
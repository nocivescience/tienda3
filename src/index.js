const express= require('express')
const morgan= require('morgan')
const bodyParse=require('body-parser')
const mongoose= require('./database')
const {engine}= require('express-handlebars')
const path= require('path')
const app= express()
//settings
app.set('port', process.env.PORT||3000)
app.set('views', path.join(__dirname, 'views'))
app.engine(
    '.hbs',
    engine({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs'
    })
)
app.set('engine view', '.hbs')
//middlewares
app.use(morgan('dev'))
app.use(bodyParse.json())
app.use('/api/tasks',require('./routes/tasks.routes'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
// console.log(__dirname)
app.listen(app.get('port'), ()=>{
    console.log(`servidor funcionando en el puerto: ${app.get('port')}`)
})
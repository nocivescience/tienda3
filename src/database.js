const mongoose= require('mongoose')
const URI= 'mongodb://localhost/tareasdata'
mongoose.connect(URI)
    .then(bd= console.log('la base esta conectada'))
    .catch(error=>console.log(`error de tipo ${error}`))
module.exports= mongoose
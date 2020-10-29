const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')
const mongoose = require('mongoose')
 
app.use(cors())


app.use(
    bodyParser.urlencoded({
        extended: false
    }));

app.use(bodyParser.json())

mongoose.connect('mongodb+srv://yash_8080:ackQCzTIRrz1YqcY@cluster0.ihecy.mongodb.net/gamerGround?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
.then(()=>{
    console.log('MongoDB successfully connected')
})
.catch(err =>{
    console.log(err)
})


app.use(express.static('./'))

app.use('/games', require('./api/routes'))


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
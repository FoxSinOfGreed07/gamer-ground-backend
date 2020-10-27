const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')
 
app.use(cors())


app.use(
    bodyParser.urlencoded({
        extended: false
    }));

app.use(bodyParser.json())


app.use(express.static('./'))

app.use('/games', require('./api/routes'))


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
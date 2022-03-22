const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

//Import Routes
/* const route = require('./routes/products') */


//usar rutas
/* app.use('/ruta', route); */




app.set('port',process.env.PORT || 5000);

//ROUTES
app.get('/',async (req,res)=>{
    try {
        res.send('Complete')
    } catch (err) {
        res.json({message:err})
        res.send(err)
    }
});

// conectando la db
mongoose.connect("mongodb://localhost/db-yagul")
.then( db => console.log('db connected'))
.catch(err=>console.log(err))

app.listen(app.get('port'),()=>{
    console.log('Listen on port: '+app.get('port'))
})
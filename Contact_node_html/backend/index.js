const express = require('express')
const cors=require('cors');
const app=express();
const bodyParser=require('body-parser');


const PORT=5050

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(cors())

// Create route
const contactsRouter=require('./routes/contacts');

//This is api endpoint to send data 
app.use('/api/contacts', contactsRouter)

app.listen(PORT, ()=>console.log(`Server runing on port ${PORT}`)
)


// Here we done serve with databse lets test this
const express = require('express');
const cors = require('cors');
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors())
app.use(express.json())




const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.7pthm.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try{

    }finally{

 }   
}
run().catch(console.dir)



app.get('/', (req, res) => {
    res.send('Contact form is running and  waiting for data')
})
app.listen(port, () => {
    console.log('Contact form is running on port : ', port);
})
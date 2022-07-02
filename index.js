
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Contact form is running and  waiting for data')
})
app.listen(port, () => {
    console.log('Contact form is running on port : ', port);
})
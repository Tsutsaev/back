require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())



app.use(require('./routes/users.route'));

mongoose.connect(process.env.MONGO_SERVER, {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.listen(process.env.PORT, () => console.log('Connected'))

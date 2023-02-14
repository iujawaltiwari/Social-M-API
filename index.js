const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

//Connect with MongoDB Databse
mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected Successfully !!");
}).catch((err) => {
    console.log(err.message);
})

const PORT = process.env.PORT || 9000;

app.listen(PORT, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is runing on port ${PORT}`);
})
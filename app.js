const express = require('express');
const config = require('config');
const auth = require('./routes/auth.routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const home = require('./routes/home.routes');

const app = express();

app.use(bodyParser.json());
app.use('/api/auth', auth);
app.use('/api', home);

const start = async () => {
    try {
        await mongoose.connect(config.get("mongoUri"), {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })

        app.listen(config.get('PORT'), () => {
            console.log(`server runnin is port: ${config.get('PORT')}`)
        })
    } catch(e) {
        return console.log(e.message)
    }
}

start();
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
let events = require('./model');
const router = express.Router();
const PORT = process.env.PORT

dotenv.config();

app.use(cors());

app.use('/', router);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connected to DB.");
    app.listen(PORT, () => console.log("Web server running."));
});

router.route('/getEvents').get( (req, res) => {
    events.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }   else {
            res.send(result);
        }
    });
});


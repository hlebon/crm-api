import express from 'express';
import { Connection } from 'tedious'
import bodyParser from 'body-parser'
import routes from './src/routes/crmRoutes'
import config from './config-server'

//var Request = require('tedious').Request;
//var TYPES = require('tedious').TYPES;

const app = express();
const PORT = 3001;

const connection = new Connection(config);
connection.on('connect', function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected');
    }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
    res.send(`My firts request`)
});

app.listen(PORT, () => {
    console.log(`Magic is here in port ${PORT}`)
})
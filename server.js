const express = require('express')
const app = express()
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv').config({
    path: path.join(__dirname, 'process.env'),
});
const port = process.env.PORT
const masterRoutes = require('./routes/masterRoutes');
const pool = require('./dbconnect');

const corsOptions = {
    origin: [
        'http://localhost:9030',
    ],
    default: 'http://localhost:9030',
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

masterRoutes(app);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`api listening at http://localhost:${port}`)
});
const express = require('express');
const cors = require('cors');
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const app = express();

require ('./server/config/mongoose.config');

app.use( cookieParser() );
app.use(cors({credentials: true, origin: "http://localhost:3006"}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/routes/product.routes')(app);
require("./server/routes/usuario.router")(app);

app.listen(8000,() => {
    console.log("Listening at port 8000")
})

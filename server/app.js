const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: './config.env' });
require('./db/cons');


app.use(express.json())
app.use(require('./router/auth'));
app.use(require('./router/child'))
app.use(require('./router/state'))
app.use(require('./router/district'))

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`server is running on the port no ${PORT}`)
})
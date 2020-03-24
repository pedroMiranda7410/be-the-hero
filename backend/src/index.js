const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); // para fazer o front-end acessar o back
app.use(express.json()); //Usar JSON nas requisições
app.use(routes);



app.listen(3333);
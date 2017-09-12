const express = require('express');
//stores whatever is in the express module in a variable

const app = express();

const PORT = process.argv[2] || process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//ROUTES
app.use(require('./resources'));





app.listen(PORT, () => console.log(`server  up and listening on port ${PORT}`));

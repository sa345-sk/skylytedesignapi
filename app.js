const express = require('express');
const route = require('./routes/routes');
const app = express();

app.use(route)

app.listen(4000, () => {
//
})
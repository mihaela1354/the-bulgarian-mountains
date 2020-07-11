const PORT = 8080;
const express = require('express');
const mountainRoutes = require('./routes/mountain');

const app = express();
app.use('/mountains',mountainRoutes)

app.listen(PORT, console.log(`Server is listening on post ${PORT}`));
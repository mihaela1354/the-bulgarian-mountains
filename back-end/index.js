require('./config/database')().then(() => {
    const config = require('./config/config');
    const express = require('express');

    const app = express();

    app.use(express.json());

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    })


    require('./config/routes')(app);


    app.listen(config.port, console.log(`Server is ready! Listening on port ${config.port}...`))
}).catch(console.log)
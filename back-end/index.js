require('./config/database')().then(()=>{
    const config = require('./config/config');
    const express = require('express');

    const app = express();
    app.use(express.urlencoded({ extended: true }))
    
   
    require('./config/routes')(app);


    app.listen(config.port,console.log(`Server is ready! Listening on port ${config.port}...`))
})
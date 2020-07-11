const mongoose = require('mongoose');
const config = require('./config');
const dbName = 'bg-mountains';

module.exports = () => {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    
    return mongoose.connect(config.dbURL + dbName, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
        console.log('Database is ready!'))
}
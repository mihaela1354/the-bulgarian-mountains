const routers = require('../routes');

module.exports = (app) =>{

    app.use('/mountains',routers.mountain);

}
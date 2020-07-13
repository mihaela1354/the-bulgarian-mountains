const routers = require('../routes');

module.exports = (app) =>{

    app.use('/mountains',routers.mountain);
    app.use('/users', routers.users)

}
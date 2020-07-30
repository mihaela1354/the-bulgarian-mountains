const routes = require('../routes');

module.exports = (app) =>{

    app.use('/mountains',routes.mountain);
    app.use('/users', routes.users);
    app.use('/honored', routes.honored);

}
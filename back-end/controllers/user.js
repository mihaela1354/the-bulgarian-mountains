const models = require('../models');
const jwt = require('../utils/jwt');
const config = require('../config/config');

const logUser = (res, user) => {
    const token = jwt.createToken({ id: user._id });
    res.cookie(config.cookie, token).status(200).json({ id: user._id, username: user.username})
}

exports.register = (req, res, next) => {
    const { username, password, rePassword } = req.body;
    if (password !== rePassword) { throw new Error("Passwords don't match! Please, try again!"); };

    models.User.create({ username, password })
        .then(logUser.bind(this, res))
        .catch(console.error)
}

exports.login = (req, res, next) => {
    const { username, password } = req.body;
    console.log(username);

    models.User.findOne({ username })
        .then(user => {
            Promise.all([user, user.matchPassword(password)])
                .then(([user, match]) => {

                    console.log(user, match)

                    if (!match) { throw new Error("Wrong password or username! Please try again!"); }
                    logUser(res, user);
                })
        })
}

exports.logout = (req, res, next)=>{
    res.clearCookie(config.cookie).status(200).json()
}
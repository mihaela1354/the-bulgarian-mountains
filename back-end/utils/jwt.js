const jwt = require('jsonwebtoken');
const SECRET = 'kjdsfnslkweh38923eald';

function createToken(data){
    return jwt.sign(data, SECRET,{expiresIn: '3d'});
}

function verifyToken(token) {
    return new Promise((resolve, reject)=>{
        jwt.verify(token, SECRET, (err, data)=>{
            if(err) { reject(err) };
            resolve(data);
        })
    })
}

module.exports = {
    createToken,
    verifyToken
}
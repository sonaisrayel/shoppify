const bcrypt = require('bcrypt');



async function encript(password){
    return  bcrypt.hash(password, 2)
}


async function compare(password, passwordHash){
    return bcrypt.compare(password, passwordHash)

}




module.exports = { encript, compare }




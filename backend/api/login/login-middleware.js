const db = require("../../data/db-config");

module.exports = {
    authenticator,
}

async function authenticator(req,res,next) {
    try {
        const {user_password, user_username} = req.body;
        if (!user_password || !user_username) {
            next({status : 400, message : "username and password required"})
        } else {
            const result = await db("users").where({user_password : user_password, user_username : user_username}).first();
            if (!result) {
                next({status : 400, message : "incorrect username or password"})
            } else {
                const token = process.env.TOKEN;
                req.token = token; 
                next();
            }
        }
    } catch (err) {
        next(err);
    }
}
const db = require("../../data/db-config");

module.exports = {
    loggingIn,
}

async function loggingIn(credentials) {
    const result = await db("users")
    .where({user_username : credentials.username, user_password: credentials.password});
    if (result.length > 0) {
        return true;
    } else {
        return false;
    }
}
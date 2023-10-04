const db = require("../../data/db-config");

module.exports = {
    create,
}

async function create(created) { 
    const result = await db("users").insert(created); //eslint-disable-line
    return await db("users").where({user_id : result[0]});
}
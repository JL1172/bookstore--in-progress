const db = require("../../data/db-config");

module.exports = {
    findAll,
    findId,

}

async function findAll(query) {
    const {page = 1, limit = 10, sortby = "book_id", sortdir = "asc"} = query; // eslint-disable-line
    const offset = limit * (page - 1);
    if (limit === "all") {
        return await db("books").orderBy(sortby,sortdir);
    } else {
    const result = await db("books").orderBy(sortby,sortdir).limit(limit).offset(offset)
    return result;
    }
}
async function findId(id) {
    const result = await db("books").where({book_id : id})
    return result;
}




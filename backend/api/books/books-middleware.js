const db = require("../../data/db-config");

module.exports = {
    validatePost,
    validateId,
}


async function validateId(req, res, next) {
    try {
        const result = await db("books").where({ book_id: req.params.id });
        if (result.length === 0) {
            next({ status: 404, message: "ID could not be found" })
        } else {
            req.book = result;
            next();
        }
    } catch (err) { next(err) }
}

async function validatePost(req, res, next) {
    try {
        const { book_title, book_author, book_genre, book_year, book_edition, book_pages, book_cover, book_description } = req.body; // eslint-disable-line
        const values = Object.values(req.body);
        if (values.length < 8) {
            next({ status: 422, message: "need all fields to complete post" });
        } else {
            if (NaN(book_year) || NaN(book_pages)) {
                next({ status: 422, message: "book year and pages must be a number" })
            } else {
                next();
            }
        }
    } catch (err) { next(err) }
}




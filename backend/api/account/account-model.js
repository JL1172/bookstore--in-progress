const db = require("../../data/db-config");//eslint-disable-line

module.exports = {
    findId,
    create,
    update, 
    remove,
    findStat,
}


async function findId(id) {//eslint-disable-line
    const returnValue = await db("users").where({user_id : id});
    return returnValue; 
}
async function findStat(id) {
    const result = await db("orders").where({order_user_id : id});
    const bookRet = result.order_order_id;
    const resultOfBook = await db("books").where({book_id : bookRet});
    const obj = {
        bookData : resultOfBook,
        orderData : result,
    }
    return obj;
}
async function create(purchaseInformation) {//eslint-disable-line
    const {book_id} = purchaseInformation; 
    const {user_id} = purchaseInformation;
    const price = db("books").where({book_id : book_id});
    const total = price.book_price;
    const insertionObj = {
        order_book_id : book_id,
        order_total : total,
        order_user_id : user_id,
    }
    const result = await db("orders").insert(insertionObj); //eslint-disable-line
    return {...insertionObj, extraData : price};
}

async function update(id,changes) {//eslint-disable-line
   const updatedValue = await db("users").where({user_id : id}).update(changes); //eslint-disable-line
   const returnUpdated = await db("users").where({user_id : id});
   return returnUpdated;
}

async function remove(id) {//eslint-disable-line
    const removedValue = await db("users").where({user_id : id}).del(); //eslint-disable-line
    return "successfully removed"
}

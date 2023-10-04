const yup = require("yup");

const schema = yup.object().shape({
    user_username : yup.string().required("username is required").min(5,"username must be longer than 5 characters"),
    user_password : yup.string().required("password is required").min(8, "password must be longer than 8 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "password must contain a special character, number, capital letter, and lowercase letter"),
    user_email : yup.string().email("must be a valid email").required("email is required"),
    user_first_name : yup.string().required("first name is required").matches(/^[A-Za-z]*$/,"first name must only be letters"),
    user_last_name : yup.string().required("last name is required").matches(/^[A-Za-z]*$/,"last name must only be letters"),
})

module.exports = {
    authenticator,
    validateCredentials,
    validatePurchase
}


async function validateCredentials(req,res,next) {
    try {  
        const result = schema.validateSync(req.body, {abortEarly : false, stripUnknown : true });//eslint-disable-line
        next();
    } catch (err) {
        const error = err;
        next({status : 422, message : {error : error.errors}})
    }
}

async function authenticator(req,res,next) {
    try {
        const token = process.env.TOKEN;
        const {authorization} = req.headers;
        if (authorization === token) {
            next();
        } else {
            next({status : 403, message : "need to login"})
        }
    } catch (err) {
        next(err)
    }
}

async function validatePurchase(req,res,next) {
    try {
        const {book_id} = req.body;
        if (!book_id) {
            next({status : 422, message : "need book for purchase"})
        } else {next()}
    } catch (err) {next(err)}
}
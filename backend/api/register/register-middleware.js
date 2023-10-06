const db = require("../../data/db-config");
const yup = require("yup");

const schema = yup.object().shape({
    user_username : yup.string().required("username is required").min(5,"username must be longer than 5 characters"),
    user_password : yup.string().required("password is required").min(8, "password must be longer than 8 characters")
    .matches(/^[A-Za-z]*$/, "password must contain a special character, number, capital letter, and lowercase letter"),
    user_email : yup.string().email("must be a valid email").required("email is required"),
    user_first_name : yup.string().required("first name is required").matches(/^[A-Za-z]*$/,"first name must only be letters"),
    user_last_name : yup.string().required("last name is required").matches(/^[A-Za-z]*$/,"last name must only be letters"),
})

module.exports = {
    validateUniqueness,
    validateCredentials,
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

async function validateUniqueness(req,res,next) {
    try {
        const {user_email} = req.body;
        const result = await db("users").where({user_email : user_email}).first();
        if (result) {
            next({status : 400, message : "account with email already exists"})
        } else {
            next();
        }
    } catch (err) {next(err)}
}
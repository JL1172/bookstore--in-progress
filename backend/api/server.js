const express = require("express");
const BookRouter = require("./books/books-router");
const LoginRouter = require("./login/login-router");
const RegisterRouter = require("./register/register-router");
const AccountRouter = require("./account/account-router");
//pulling middlewares in
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
//pulling middlewares in


//pulling routes in 

//pulling routes in 


//instantiation
const server = express();
//instantiation


//global middleware
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());
server.use(helmet());
//global middleware


//server using routes
server.use("/api/books",BookRouter)
server.use("/api/login",LoginRouter)
server.use("/api/register",RegisterRouter)
server.use("/api/account",AccountRouter)
//server using routes



module.exports = server;
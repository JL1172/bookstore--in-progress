const express = require("express");
const BookRouter = require("./books/books-router");

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
//server using routes



module.exports = server;
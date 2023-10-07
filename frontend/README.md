# Bookstore Application

Welcome to the README for the Bookstore Application! This project is a full-stack application that simulates a bookstore specializing in programming and computer science-focused books. It leverages a range of technologies and features to provide a user-friendly experience.

## Technologies Used

1. **Express**: The backend of this application is powered by Express.js, a Node.js web application framework.
2. **Other Supporting Backend Middleware**: Various middleware components are used to enhance the functionality and security of the backend.
3. **SQLite3 and Knex**: The database is implemented using SQLite3, and Knex.js is used as a query builder and ORM to interact with the database.
4. **React**: The frontend of the application is built using React, a popular JavaScript library for building user interfaces.
5. **Redux**: Redux is used for state management on the frontend, ensuring a predictable and centralized state.
6. **JWT Authentication**: The application employs JWT (JSON Web Tokens) for secure authentication, ensuring that all API endpoints are password-protected.
7. **RESTful APIs**: All APIs are designed following RESTful principles, making it easy to interact with and manipulate resources.

****Features****

- **User Authentication**: Users can register and log in to access the bookstore's features.
- **Home Page**: The home page displays featured books for the day and offers a visually pleasing UI/UX.
- **Shopping Cart**: Users can add, remove, increment, and decrement items in their shopping cart.
- **Search Functionality**: A search bar with data list recommendations simplifies finding books.
- **Book Filters**: Users can apply filters to narrow down their book choices.
- **User Profiles**: User profiles include analytics on their favorite types of books and a history of their purchases.
- **Relational Database**: All data is persisted in a relational database created from scratch using Knex and SQLite.

## Getting Started

To run the application locally, follow these steps:

> [!IMPORTANT] this section is in progress to make the installation and setup process more concise.


# Here are the following endpoints used and their purposes

### For FetchingBooks 
> [!IMPORTANT] 
> * all endpoints require credentials in the req.body and an authorization token sent from the backend. 
> * The auth token is implemented in `axios.create({headers : {authorization : token pull from local storage}})`
> * NOTE!! Password is not HSA encrypted when in REDUX store. 


* [POST] `http://localhost:9000/api/books, CREDENTIALS`

* [POST] `http://localhost:9000/api/books?limit=10&sortby=book_title&sortdir=asc&page=1, CREDENTIALS`
* NOTE!! the above query strings are the default values set by the backend. 

* [POST] `http://localhost:9000/api/login, CREDENTIALS`
* this does not need a jwt token in the headers. 

* [POST] `http://localhost:9000/api/register, CREDENTIALS` 
* NOTE!! after successful completion, this will generate an account, place in relational database and send back to login page to complete login.
* this does not need a jwt token in the headers. 


* [GET] `http://localhost:9000/api/account/:id` 
* this fetched the data of that specific account
* only takes id 

* [GET] `http://localhost:9000/api/account/:id/order` 
* this returns all orders made by customer
* only takes id 

* [POST] `http://localhost:9000/api/account/:id/orders/books`
* this takes an id and book_id to purchase a book and mark all purchases in relational database

* [PUT] `http://localhost:9000/api/account/:id` 
* this takes all changes to make to the profile, any piece of data etc associated with profile.

* [DELETE] `http://localhost:9000/api/account/:id` 
* this deletes a user, this is permanent, so add double verification 

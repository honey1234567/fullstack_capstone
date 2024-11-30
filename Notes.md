## What is Express.js?
Express.js is a Node.js web application framework that provides a robust set of features to build web and mobile applications. It facilitates the rapid development of Node-based web applications. Express acts as a minimal and flexible Node.js web application framework.
Usage of Express.js
Express is used for building efficient and high-performance web applications. It simplifies the process of managing routes, handling requests, and serving static files【4:1†transcript.txt】.
HTTP Methods in Express

## Common HTTP Methods
GET: Requests data from a server at the specified resource.
POST: Sends data to a server to create/update a resource【4:1†transcript.txt】.
PUT: Updates an existing resource.
DELETE: Deletes a specified resource.
PATCH: Partially updates a resource.


## Example of a Simple Server with Routes
const express = require('express');
const app = express();

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, server');
});

app.listen(3000, () => {
  console.log('Server running on localhost:3000');
});
In this example, the '/' route is configured to send a "Hello, server" response【4:10†transcript.txt】.

## Implementing Requests in Express
GET and POST Requests
Express makes the management of different HTTP requests like GET, POST, etc., straightforward by allowing you to define these routes using simple methods like app.get() and app.post().
An example of a POST method that accepts JSON data and uses middleware:
app.use(express.json());

app.post('/user', (req, res) => {
  const user = req.body;
  console.log(user);
  res.send('User Created');
});

Using CURL and Postman
CURL: A tool to transfer data with URLs. It allows you to make requests from the command line【4:10†transcript.txt】.
Postman: A GUI tool to test APIs. Postman simplifies the request process and provides a user-friendly interface【4:7†transcript.txt】.
## Understanding Middleware
# What is Middleware?
Middleware functions execute during the lifecycle of a request to the server. They have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
Custom Middleware Example
function loggerMiddleware(req, res, next) {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next(); // Pass control to the next middleware
}

app.use(loggerMiddleware);
This example logs each incoming request's method and URL【4:12†transcript.txt】.

## Built-in Middleware Functions
express.json(): Parses incoming requests with JSON payloads【4:18†transcript.txt】.
express.urlencoded(): Parses incoming requests with URL-encoded payloads.

## vKey Takeaways
APIs: Understand how to create RESTful APIs using Express.
Middleware: It can be used for logging, enabling CORS, parsing request bodies, and more.
HTTP Methods: Utilize different HTTP methods for sending and receiving data.
Testing Tools: Use CURL and Postman for testing APIs to ensure they work as expected【4:19†transcript.txt】.

## Routing
Defining url in express to  http request with specific handler

## static files
files like html,css,js served by express using express.static()

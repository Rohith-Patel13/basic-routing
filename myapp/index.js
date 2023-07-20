//Testing the network calls
/*
a network call refers to the process of sending and receiving data over
 the network between the server and clients (such as web browsers,
 mobile apps, or other servers). This data exchange typically happens
  using HTTP (Hypertext Transfer Protocol) methods like GET, POST,
   PUT, DELETE, etc.
*/

const express = require("express"); //importing "express" package.
const expressServerInstance = express(); //creating express server instance
const net = require("net");
//express js gives "request object" and "response object"
expressServerInstance.get("/", (requestObject, responseObject) => {
  responseObject.send("Hello express js"); //sending message to client
  console.log("response send successfully");
  console.log(requestObject); //gives information about request
  console.log(responseObject); //gives information about response
});
expressServerInstance.listen(3000, () => {
  console.log("server is running on port 3000");
}); //The code snippet expressServerInstance.listen(3000);
// starts the Express.js server on port 3000. This means the server will listen for incoming HTTP requests on port 3000.

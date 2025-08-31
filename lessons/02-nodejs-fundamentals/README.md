# Lesson 2: Node.js Fundamentals

In this lesson, we will cover the fundamentals of Node.js and set up the basic structure for our backend server.

## What is Node.js?

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side, outside of a web browser.

## Core Concepts

*   **Modules:** Node.js has a built-in module system. You can use the `require` function to import modules and `module.exports` to export them.
*   **Asynchronous Programming:** Node.js uses an event-driven, non-blocking I/O model. This makes it efficient and suitable for building scalable network applications. We will use callbacks, Promises, and async/await to handle asynchronous operations.
*   **NPM (Node Package Manager):** NPM is the default package manager for Node.js. We will use it to install and manage our project's dependencies.

## Project Setup

First, we need to initialize a `package.json` file for our server. This file will keep track of our project's metadata and dependencies. Navigate to the `server` directory and run the following command:

```bash
npm init -y
```

This will create a `package.json` file with default values.

## Dependencies

Next, we need to install the necessary dependencies for our server. Here's a brief overview of the packages we'll be using:

*   **express:** A minimal and flexible Node.js web application framework.
*   **mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js.
*   **dotenv:** A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
*   **nodemon:** A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
*   **bcryptjs:** A library to help you hash passwords.
*   **jsonwebtoken:** An implementation of JSON Web Tokens.
*   **cors:** A node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

You can install these dependencies by running the following command in the `server` directory:

```bash
npm install express mongoose dotenv bcryptjs jsonwebtoken cors
npm install -D nodemon
```

Your `package.json` file should now look something like this:

```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^7.5.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

## Starting the Server

Now, let's create our main server file, `server.js`. This file will be the entry point for our backend application.

**`server/server.js`**
```javascript
const app = require('./app');
const connectDB = require('./config/database');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

To start the server, you can run the following command in the `server` directory:

```bash
npm run dev
```

This will start the server using `nodemon`, which will automatically restart the server whenever you make changes to the code.

In the next lesson, we will set up our Express application in the `app.js` file.

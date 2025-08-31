# MERN Stack for Beginners

This project is a boilerplate for a MERN (MongoDB, Express, React, Node.js) stack application. It provides a basic setup for both the client and server, along with a structured directory for lessons and documentation.

## Project Structure

```
mern-stack-beginners/
├── README.md
├── LICENSE
├── .gitignore
├── package.json
├── server/
│   ├── app.js
│   ├── config/
│   │   └── database.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── productRoutes.js
│   ├── controllers/
│   │   ├── userController.js
│   │   └── productController.js
│   ├── models/
│   │   ├── User.js
│   │   └── Product.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   └── server.js
├── client/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── UserList.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   └── Dashboard.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   │       └── App.css
│   └── package.json
├── docs/
│   ├── setup-guide.md
│   ├── api-reference.md
│   └── deployment-guide.md
└── lessons/
    ├── 01-introduction/
    │   └── README.md
    ├── 02-nodejs-fundamentals/
    │   └── README.md
    ├── 03-express-setup/
    │   └── README.md
    ├── 04-mongodb-integration/
    │   └── README.md
    ├── 05-react-setup/
    │   └── README.md
    ├── 06-full-stack-integration/
    │   └── README.md
    └── 07-deployment/
        └── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB

### Installation

1.  **Backend:**
    ```bash
    cd server
    npm install
    ```

2.  **Frontend:**
    ```bash
    cd client
    npm install
    ```

## Available Scripts

### Backend

-   `npm start`: Starts the server.
-   `npm run dev`: Starts the server in development mode with nodemon.

### Frontend

-   `npm start`: Starts the React development server.
-   `npm test`: Runs the tests.
-   `npm run build`: Builds the app for production.
# Lesson 3: Setting up the Express Server

In this lesson, we will set up our backend server using Express.js. We will create the main application file, define our API routes, and create the controllers and middleware to handle the requests.

## The Express App (`app.js`)

The `app.js` file is the heart of our Express application. It's where we create the Express app, configure middleware, and connect our API routes.

**`server/app.js`**
```javascript
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the MERN Stack for Beginners API');
});

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

module.exports = app;
```

In this file, we are:
- Importing `express` and other necessary modules.
- Creating an instance of the Express application.
- Using middleware like `cors` to enable Cross-Origin Resource Sharing and `express.json` to parse incoming JSON requests.
- Defining a simple route for the root URL (`/`) to send a welcome message.
- Mounting our API routes for users and products.
- Exporting the `app` to be used in `server.js`.

## Routes

Routes define the endpoints of our API. We will create separate files for user-related and product-related routes to keep our code organized.

**`server/routes/userRoutes.js`**
```javascript
const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.route('/').get(authMiddleware, getUsers).post(createUser);
router.route('/login').post(loginUser);
router
  .route('/:id')
  .get(authMiddleware, getUserById)
  .put(authMiddleware, updateUser)
  .delete(authMiddleware, deleteUser);

module.exports = router;
```

**`server/routes/productRoutes.js`**
```javascript
const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

router.route('/').get(getProducts).post(authMiddleware, createProduct);
router
  .route('/:id')
  .get(getProductById)
  .put(authMiddleware, updateProduct)
  .delete(authMiddleware, deleteProduct);

module.exports = router;
```

In these files, we are:
- Creating an Express router.
- Defining the API endpoints for different HTTP methods (GET, POST, PUT, DELETE).
- Connecting the routes to the corresponding controller functions.
- Protecting certain routes with our authentication middleware.

## Controllers

Controllers contain the logic for handling API requests. They interact with the models to perform CRUD (Create, Read, Update, Delete) operations on the database.

**`server/controllers/userController.js`**
```javascript
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ... (controller functions for users)
```

**`server/controllers/productController.js`**
```javascript
const Product = require('../models/Product');

// ... (controller functions for products)
```
*(The full code for the controllers is in the corresponding files in the `server/controllers` directory.)*

## Middleware

Middleware functions are functions that have access to the request and response objects. They can be used for various tasks like logging, authentication, and error handling.

**`server/middleware/authMiddleware.js`**
```javascript
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  // ... (authentication logic)
};

module.exports = authMiddleware;
```
*(The full code for the middleware is in the `server/middleware/authMiddleware.js` file.)*

In the next lesson, we will connect our application to a MongoDB database and create the data models.

# Lesson 4: Integrating MongoDB

In this lesson, we will connect our Express server to a MongoDB database and create the data models for our application.

## Connecting to MongoDB (`config/database.js`)

We will create a dedicated file to handle the database connection. This will keep our code organized and easy to maintain.

**`server/config/database.js`**
```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

In this file, we are:
- Importing `mongoose`.
- Creating an asynchronous function `connectDB` to connect to our MongoDB database.
- Using the `MONGODB_URI` from our `.env` file as the connection string.
- Adding error handling to exit the process if the connection fails.

We also need to create a `.env` file in the `server` directory to store our environment variables.

**`server/.env`**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-stack-beginners
JWT_SECRET=your-jwt-secret
```

## Creating Models

Models define the structure of our data. We will create two models: `User` and `Product`.

### User Model

The `User` model will define the schema for our users, including their name, email, and password.

**`server/models/User.js`**
```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```

### Product Model

The `Product` model will define the schema for our products, including their name, description, price, and image URL.

**`server/models/Product.js`**
```javascript
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
```

With the database connection and models in place, our backend is now ready to interact with data. In the next lesson, we will set up our React client to provide a user interface for our application.

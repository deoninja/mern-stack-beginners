# Lesson 7: Deployment

In this final lesson, we will deploy our MERN stack application to the web. We will deploy the backend to Heroku and the frontend to Netlify.

## Deploying the Backend to Heroku

Heroku is a cloud platform as a service (PaaS) that makes it easy to deploy, manage, and scale applications.

### 1. Prepare the Backend for Deployment

First, we need to make a few changes to our backend code to prepare it for deployment.

**`server/server.js`**

In the `server.js` file, we need to make sure that our server can handle requests from the deployed frontend. We also need to configure the server to serve the React build files in production.

```javascript
const express = require('express');
const path = require('path');
const app = require('./app');
const connectDB = require('./config/database');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*' , (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

**`server/package.json`**

We need to add a `heroku-postbuild` script to our `package.json` file. This script will be executed by Heroku after the dependencies are installed. It will build our React application.

```json
"scripts": {
  "start": "node server.js",
  "server": "nodemon server.js",
  "client": "npm start --prefix client",
  "dev": "concurrently \"npm run server\" \"npm run client\"",
  "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
}
```

### 2. Create a Heroku App

1.  Create a Heroku account if you don't have one.
2.  Install the Heroku CLI.
3.  Log in to your Heroku account using the CLI: `heroku login`.
4.  Create a new Heroku app: `heroku create`.

### 3. Deploy to Heroku

1.  Initialize a git repository in your project's root directory if you haven't already: `git init`.
2.  Add your code to the repository: `git add .` and `git commit -m "Initial commit"`.
3.  Add the Heroku remote to your repository: `heroku git:remote -a your-heroku-app-name`.
4.  Deploy your code to Heroku: `git push heroku master`.

### 4. Configure Environment Variables

We need to set our environment variables on Heroku.

```bash
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set JWT_SECRET=your-jwt-secret
```

## Deploying the Frontend to Netlify

Netlify is a great platform for deploying modern web applications.

### 1. Build the Frontend

First, we need to build our React application.

```bash
cd client
npm run build
```

This will create a `build` directory with the optimized production build of our application.

### 2. Deploy to Netlify

1.  Create a Netlify account if you don't have one.
2.  Log in to your Netlify account.
3.  Drag and drop the `client/build` folder to the Netlify dashboard.

Netlify will automatically deploy your application and provide you with a URL.

### 3. Configure the API Proxy

We need to configure a proxy to forward API requests to our Heroku backend.

Create a `_redirects` file in the `client/public` directory with the following content:

```
/api/*  https://your-heroku-app-name.herokuapp.com/:splat  200
```

This will redirect all requests to `/api` to your Heroku backend.

Congratulations! You have successfully deployed your MERN stack application.

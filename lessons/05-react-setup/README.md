# Lesson 5: Setting up the React Client

In this lesson, we will set up our client-side application using React. We will use `create-react-app` to bootstrap our project and set up the basic folder structure.

## Setting up the React App

`create-react-app` is the official command-line tool for creating React applications. It sets up a modern React project with a sensible default configuration.

To create our client application, navigate to the root of the project and run the following command:

```bash
npx create-react-app client
```

This will create a new `client` directory with a standard React project structure.

## Dependencies

Next, we need to install the dependencies for our client application. We will be using `axios` to make HTTP requests to our backend and `react-router-dom` for routing.

Navigate to the `client` directory and run the following command:

```bash
npm install axios react-router-dom
```

## Folder Structure

After cleaning up the default files, we will create the following folder structure inside the `src` directory:

*   **`components`:** This directory will contain our reusable UI components, such as `Header` and `Footer`.
*   **`pages`:** This directory will contain our main pages, such as `Home`, `Login`, and `Dashboard`.
*   **`styles`:** This directory will contain our CSS stylesheets.

## The Root Component (`App.js`)

The `App.js` file is the root component of our application. It's where we set up the main layout and routing.

**`client/src/App.js`**
```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

In this file, we are:
- Importing `React` and other necessary modules.
- Setting up the routing using `react-router-dom`.
- Defining the routes for our different pages.
- Rendering the `Header` and `Footer` components.

## Components and Pages

We will create several components and pages for our application.

*   **`components/Header.js`:** The header of our application.
*   **`components/Footer.js`:** The footer of our application.
*   **`pages/Home.js`:** The home page.
*   **`pages/Login.js`:** The login page.
*   **`pages/Dashboard.js`:** The user dashboard.

In the next lesson, we will connect our React client to the backend API and build out the functionality of our pages.

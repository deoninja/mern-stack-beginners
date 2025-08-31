# Lesson 6: Full-Stack Integration

In this lesson, we will connect our React client to the Express backend. We will fetch data from our API, display it in our components, and implement user authentication.

## Connecting the Frontend to the Backend

To make API requests from our React application, we will use the `axios` library. We also need to configure a proxy to avoid CORS (Cross-Origin Resource Sharing) issues during development.

Open the `client/package.json` file and add the following line:

```json
"proxy": "http://localhost:5000"
```

This will proxy API requests from our React app to the backend server running on port 5000.

## Fetching Products on the Home Page

Now, let's update our `Home.js` page to fetch the products from our backend and display them.

**`client/src/pages/Home.js`**
```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Welcome to our store!</h2>
      <div>
        <h3>Our Products</h3>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
```

## User Login

Next, let's implement the user login functionality in our `Login.js` page.

**`client/src/pages/Login.js`**
```javascript
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/login', { email, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
      window.location.href = '/dashboard';
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    // ... (login form)
  );
}

export default Login;
```
*(The full code for the login form is in the `client/src/pages/Login.js` file.)*

## Protected Routes and User Dashboard

Finally, let's create a protected `Dashboard.js` page that only logged-in users can access.

**`client/src/pages/Dashboard.js`**
```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setUser(userInfo);
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const fetchUsers = async () => {
        const { data } = await axios.get('/api/users', config);
        setUsers(data);
      };
      fetchUsers();
    } else {
      window.location.href = '/login';
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    window.location.href = '/login';
  };

  return (
    // ... (dashboard content)
  );
}

export default Dashboard;
```
*(The full code for the dashboard is in the `client/src/pages/Dashboard.js` file.)*

With the frontend and backend connected, we now have a fully functional MERN stack application! In the final lesson, we will learn how to deploy our application to the web.

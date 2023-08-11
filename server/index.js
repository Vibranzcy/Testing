```javascript
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnection = require('./db/connection');

// Import routes
const servicesRoutes = require('./routes/services');
const contactRoutes = require('./routes/contact');
const blogRoutes = require('./routes/blog');
const faqRoutes = require('./routes/faq');
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/services', servicesRoutes);
app.use('/contact', contactRoutes);
app.use('/blog', blogRoutes);
app.use('/faq', faqRoutes);
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);

// Connect to database
dbConnection();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
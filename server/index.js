const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoute');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));

// Define routes
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from serverless function!' });
  });
  
app.use('/api', userRoutes);
app.use('/api', productRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('../config/db'); // Adjust path as needed
// const cors = require('cors');
// const userRoutes = require('../routes/userRoute'); // Adjust path as needed
// const productRoutes = require('../routes/productRoute'); // Adjust path as needed
// const serverless = require('serverless-http');

// dotenv.config();
// connectDB();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors({ origin: '*' }));

// // Define routes
// app.get('/api', (req, res) => {
//   res.json({ message: 'Hello from serverless function!' });
// });

// // Mount routes
// app.use('/api/users', userRoutes);
// app.use('/api/products', productRoutes);

// // Export as a serverless function
// module.exports.handler = serverless(app);

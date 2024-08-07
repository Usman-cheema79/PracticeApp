const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const { loginUser } = require('./controllers/userController');
const productRoutes = require('./routes/productRoute');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));

// Define routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello from serverless function!' });
  });
  
  app.post('/login', loginUser);
  // app.use('/', productRoutes);
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  });
const PORT = 3002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


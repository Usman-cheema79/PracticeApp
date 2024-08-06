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
app.get('/', (req, res) => {
    res.json({ message: 'Hello from serverless function!' });
  });
  
app.use('/api', userRoutes);
app.use('/api', productRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

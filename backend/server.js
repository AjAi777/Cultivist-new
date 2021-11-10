import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';
import cors from 'cors';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import colors from 'colors';
import morgan from 'morgan';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';

// Server
dotenv.config();

// DB Connect
connectDB();

const app = express();

// Cors Middleware
app.use(cors());

// Logger Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

new Razorpay({
  key_id: rzp_test_vkC5Shtm5QoG1y, // RAZORPAY KEY
  key_secret: bH57qKB96xn7i0iFKefC1YB1, // RAZORPAY SECRET
});

// Use JSON
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/orders', paymentRoutes);

const __dirname = path.resolve();

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

//Custom Error Handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

// Port Listen
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);

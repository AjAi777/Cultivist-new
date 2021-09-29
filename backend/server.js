import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import path from 'path';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import colors from 'colors';
import morgan from 'morgan';
import productRoutes from './routes/productRoutes.js';

// Server
dotenv.config();

const app = express();

// DB Connect
connectDB();

// Logger Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Use JSON
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

const __dirname = path.resolve();

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(resolve(__dirname, 'frontend', 'build', 'index.html'))
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

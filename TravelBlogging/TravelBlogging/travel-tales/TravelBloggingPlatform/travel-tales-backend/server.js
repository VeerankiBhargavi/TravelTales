// const express = require('express');
// const connectDB = require('./config/db');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const errorHandler = require('./utils/errorHandler');

// dotenv.config();

// const app = express();

// connectDB();

// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/posts', require('./routes/blogRoutes'));
// app.use('/api/comments', require('./routes/commentRoutes'));
// app.use('/api/destinations', require('./routes/destinationRoutes'));
// app.use('/api/media', require('./routes/mediaRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/admin', require('./routes/adminRoutes'));

// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const errorHandler = require('./utils/errorHandler');

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/posts', require('./routes/blogRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));
app.use('/api/destinations', require('./routes/destinationRoutes'));
app.use('/api/media', require('./routes/mediaRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

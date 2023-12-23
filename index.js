
const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');

//instantiating express to create an server
const app = express();
const port = 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost/quiz_app', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

app.use(express.json());

// Routes
const quizRoutes = require('./routes/quizRoutes');
app.use('/quizzes', quizRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

cron.schedule('*/5 * * * *', async () => {
  // Update quizzes that have passed their endDate
  await Quiz.updateMany({ endDate: { $lt: new Date() } }, { $set: { endDate: null } });
});
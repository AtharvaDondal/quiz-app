
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Quiz = require('../models/QuizModel');

// Middleware for verifying JWT token
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied. Token not provided.' });

  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token.' });

    req.userId = decoded.id;
    next();
  });
};

// Create Quiz
router.post('/', verifyToken, async (req, res) => {
  
// Validating request body 
  const quiz = new Quiz({
    questions: req.body.questions,
    options: req.body.options,
    rightAnswer: req.body.rightAnswer,
    startDate: new Date(),
    endDate: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes from now
  });
  const quiz2 = new Quiz({
    questions: req.body.questions,
    options: req.body.options,
    rightAnswer: req.body.rightAnswer,
    startDate: new Date(),
    endDate: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes from now
  });

  await quiz.save();
  res.status(201).json({ message: 'Quiz created successfully.' });
});

// Get All Quizzes
router.get('/all', verifyToken, async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});

module.exports = router;

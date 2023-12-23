import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quiz from './Quiz';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch quizzes from the backend
    axios.get('http://localhost:3000/quizzes/all')
      .then(response => setQuizzes(response.data))
      .catch(error => console.error('Error fetching quizzes:', error));
  }, []);

  return (
    <div>
      <h1>Quiz List</h1>
      {quizzes.map(quiz => (
        <Quiz key={quiz._id} quiz={quiz} />
      ))}
    </div>
  );
};

export default QuizList;

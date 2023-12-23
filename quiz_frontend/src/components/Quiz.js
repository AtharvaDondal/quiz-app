import React from 'react';

const Quiz = ({ quiz }) => {
  const handleStartQuiz = () => {
    // Handle starting the quiz or navigating to the quiz page
    // You can use react-router-dom or other navigation methods
    console.log(`Starting quiz with ID ${quiz._id}`);
  };

  return (
    <div>
      <h2>Quiz</h2>
      <p>Questions: {quiz.questions.length}</p>
      <p>Start Date: {new Date(quiz.startDate).toLocaleString()}</p>
      <p>End Date: {new Date(quiz.endDate).toLocaleString()}</p>
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default Quiz;

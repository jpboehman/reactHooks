import React, { useMemo } from 'react';
import SCORES_DATA from './scores.json';

const THRESHOLD = 20;

const getResult = (userId, score) => {
  const nextScore = SCORES_DATA.filter((score) => score.id === userId)[0].score;
  return Math.abs(score - nextScore) < THRESHOLD
    ? 'You two are team members'
    : 'Try again';
};

const App = ({ nextUserId, setNextUserId, user }) => {
  const memoizedResult = useMemo(
    () => getResult(nextUserId, user.score),
    [nextUserId, user.score]
  );

  return (
    <div className="App">
      <h1>{memoizedResult}</h1>
      <button onClick={() => setNextUserId(5)}>Positive</button>
      <button className="negative" onClick={() => setNextUserId(6)}>
        Negative
      </button>
    </div>
  );
};

export default App;

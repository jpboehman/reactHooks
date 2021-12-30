import React, { useCallback } from 'react';

const compute = () => {
  // do something complex
  return 'result';
};

const TestComponent = ({ onClick }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      Click me
    </button>
  );
};

const App = ({ user, nextUserId }) => {
  const memoizedCb = useCallback(() => {
    compute(nextUserId, user.score);
  }, [nextUserId, user.score]);

  return (
    <div className="App">
      <TestComponent onClick={memoizedCb} />
    </div>
  );
};

export default App;

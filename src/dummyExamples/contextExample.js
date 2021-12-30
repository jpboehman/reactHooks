import React, { useState, createContext } from 'react';
import { Header } from './Header';
import { Layout } from './Layout';

export const ThemeContext = createContext('light');

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={isDark ? 'dark' : 'light'}>
      <Layout>
        <Header />
        <div className="settings">
          <input
            id="dark-option"
            type="checkbox"
            onChange={(event) => setIsDark(event.target.checked)}
            checked={isDark}
          />
          <label htmlFor="dark-option">Dark theme</label>
        </div>
      </Layout>
    </ThemeContext.Provider>
  );
};

export default App;

import { createContext, useContext } from 'react';
const ThemeContext = createContext('green');

const Content = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button theme={theme} />
    </div>
  );
};

export default Content;

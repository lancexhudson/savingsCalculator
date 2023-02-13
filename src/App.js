import { useState } from 'react';
import Header from './components/Header';
import SavingsInput from './components/SavingsInput';
function App() {
  const [input, setInput] = useState([
    {
      id: 1,
      salary: 60000,
      frequency: 1,
      rate: 10,
    },
  ]);
  return (
    <div className="container">
      <Header />
      <SavingsInput input={input} />
    </div>
  );
}

export default App;

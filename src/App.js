import { useState } from 'react';
import Header from './components/Header';
import SavingsInput from './components/SavingsInput';
import SavingsForm from './components/SavingsForm';
function App() {
  const [input, setInput] = useState([
    // {
    //   id: 1,
    //   salary: 60000,
    //   frequency: 1,
    //   rate: 10,
    // },
  ]);

  // Salary Input
  const addSalary = (salary) => {
    const test = salary / 12;
    return test;
  };

  return (
    <div className="container">
      <Header />
      <SavingsForm onAdd={addSalary} />
      <SavingsInput input={input} />
    </div>
  );
}

export default App;

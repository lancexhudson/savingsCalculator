import { useState } from 'react';
import Header from './components/Header';
import SavingsInput from './components/SavingsInput';
import SavingsForm from './components/SavingsForm';
function App() {
  const [showSavings, setShowSavings] = useState(true);
  const [inputs, setInput] = useState([
    // {
    //   id: 1,
    //   salary: 60000,
    //   frequency: 1,
    //   rate: 10,
    // },
  ]);

  // Salary Input
  const addSalary = (input) => {
    const idSalary = Math.floor(Math.random() * 10000) + 1;
    // return totalSal;
    const newSalary = { idSalary, ...input };
    setInput([...inputs, newSalary]);
  };

  // Delete Input
  const deleteSalary = (idSalary) => {
    setInput(inputs.filter((input) => input.idSalary !== idSalary));
  };

  const toggleSalary = (idSalary) => {
    setInput(
      inputs.map((input) =>
        input.idSalary === idSalary
          ? { ...input, toggle: !input.toggle }
          : input
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowSavings(!showSavings)}
        showAdd={showSavings} //unused as prop in header
      />
      {showSavings && <SavingsForm onAdd={addSalary} />}
      {inputs.length > 0 ? (
        <SavingsInput
          input={inputs}
          onDelete={deleteSalary}
          onToggle={toggleSalary}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default App;

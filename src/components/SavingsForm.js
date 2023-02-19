import { useState } from 'react';

const SavingsForm = ({ onAdd }) => {
  const [salary, setSalary] = useState('');
  const [frequency, setFrequency] = useState('');
  // const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();

    if (!salary) {
      alert('Please enter in numeric form');
      return;
    }

    onAdd({ salary });

    setSalary('');
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label id="text">Annual Salary:</label>
        <input
          type="text"
          id="userInput"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label id="text">Frequency of Pay:</label>
        <select id="userInput">
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="annually">Annually</option>
        </select>
      </div>
      <input className="btn btn-block" type="submit" value="Submit" />
    </form>
  );
};

export default SavingsForm;

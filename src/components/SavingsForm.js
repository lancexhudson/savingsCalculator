import { useState } from 'react';
const SavingsForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please enter in numeric form');
      return;
    }

    onAdd({ text });

    setText('');
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label id="text">Annual Salary:</label>
        <input
          type="text"
          id="userInput"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Submit" />
    </form>
  );
};

export default SavingsForm;

const SavingsInput = ({ input }) => {
  return (
    <>
      {input.map((input) => (
        <h3 key={input.id}>{input.salary}</h3>
      ))}
    </>
  );
};

// Annual Salary
// Frequency (weekly, bi-weekly, monthly, annually)
// Desired Savings Rate

export default SavingsInput;

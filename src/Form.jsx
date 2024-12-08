import React from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    navigate('/success');
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();

  // Simulate fetching user data based on the ID
  const userData = {
    1: { name: 'John Doe', age: 30, email: 'john@example.com' },
    2: { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
  };

  const user = userData[id];

  return (
    <div>
      <h2>User Details</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}

export default User;

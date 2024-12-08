import React, { useState, useEffect } from 'react';

function project() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading state
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Example API
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Set data state
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Turn off loading state
      }
    };

    fetchData(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="App">
      <h1>Data Fetch Example</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && (
        <ul>
          {data.slice(0, 10).map((item) => ( // Display first 10 items
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default project;

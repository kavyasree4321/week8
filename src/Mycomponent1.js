import React, { useEffect } from 'react';

const Mycomponent1 = () => {
  useEffect(() => {
    console.log('Component has mounted!');
  }, []); 
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default Mycomponent1;
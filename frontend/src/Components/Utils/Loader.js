import React from 'react';

const Loader = () => {
  return (
    <div
      className='spinner-border text-success'
      role='status'
      animation='border'
      style={{
        width: '50px',
        height: '50px',
        margin: 'auto',
        marginBottom: "70vh",
        display: 'block',
      }}
    >
    </div>
  );
};

export default Loader;

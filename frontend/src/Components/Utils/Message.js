import React from 'react';

const Message = ({ variant, children }) => {
  return (
    <div className='alert' role='alert' variant={variant}>
      {children}
    </div>
  );
};

export default Message;

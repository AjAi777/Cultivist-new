import React from 'react';

const Message = ({ variant, children }) => {
  return (
    <div className={`alert alert-${variant}`} role='alert'>
      <strong>{children}</strong>
    </div>
  );
};

export default Message;

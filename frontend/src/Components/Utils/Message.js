import React from 'react';

const Message = ({ variant, children }) => {
  return (
    <div
      className={`jadoo alert alert-${variant}`}
      role='alert'
      style={{ marginBottom: '70vh' }}
    >
      <strong>{children}</strong>
    </div>
  );
};

export default Message;

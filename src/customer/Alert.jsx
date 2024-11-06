import React from 'react';

const Alert = ({ visible, text }) => {
  if (!visible) return null;
  return (
    <div className="alert visible">
      <p>{text}</p>
    </div>
  );
};

export default Alert;
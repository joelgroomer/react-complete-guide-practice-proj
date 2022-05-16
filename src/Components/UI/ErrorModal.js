import React from 'react';

const ErrorModal = props => {
  const errorMessages = props.errorMessages;
  return <div>Errors: {errorMessages.count}</div>;
};

export default ErrorModal;

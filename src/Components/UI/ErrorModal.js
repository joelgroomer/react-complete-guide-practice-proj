import React from 'react';
import Button from './Button';

const ErrorModal = props => {
  /// PROPS
  const errorMessages = props.errorMessages;
  const acknowledge = props.acknowledge;

  /// HANDLERS
  const handleOK = () => {
    acknowledge(errorMessages[0]);
  };

  return (
    <div>
      <div>Errors: {errorMessages.count}</div>
      <div>{errorMessages[0]}</div>
      <Button onClick={handleOK}>OK</Button>
    </div>
  );
};

export default ErrorModal;

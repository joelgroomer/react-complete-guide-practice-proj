import React from 'react';
import Button from './Button';
import Card from './Card';

import styles from './ErrorModal.module.css';

const ErrorModal = props => {
  /// PROPS
  const errorMessages = props.errorMessages;
  const acknowledge = props.acknowledge;

  /// HANDLERS
  const handleOK = () => {
    acknowledge(errorMessages[0]);
  };

  return (
    <Card className={styles['error-card']}>
      <div>{errorMessages[0]}</div>
      <Button onClick={handleOK}>OK</Button>
    </Card>
  );
};

export default ErrorModal;

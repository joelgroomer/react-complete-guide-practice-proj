import React, { useState } from 'react';
import styles from './NewUserForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const NewUserForm = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isValid, setIsValid] = useState(true);

  return (
    <Card>
      <form
        className={`${styles['new-user-form']}${isValid ? '' : ' invalid'}`}
      >
        <label>Username</label>
        <input type="text" value={enteredUsername} />
        <label>Age (Years)</label>
        <input type="number" value={enteredAge} />
        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default NewUserForm;

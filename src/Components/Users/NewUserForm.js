import React, { useState } from 'react';
import styles from './NewUserForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const NewUserForm = props => {
  // STATE
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);

  // PROPS
  const addErrorMessage = props.addErrorMessage;
  const onSubmit = props.onSubmit;

  // HELPERS
  const isFormValid = isUsernameValid && isAgeValid;

  // HANDLERS
  const handleUsernameChange = event => {
    if (event.target.value.trim().length > 0) {
      setIsUsernameValid(true);
    }
    setEnteredUsername(event.target.value);
  };

  const handleAgeChange = event => {
    if (parseInt(event.target.value.trim()) > -1) {
      setIsAgeValid(true);
    }
    setEnteredAge(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const username = enteredUsername.trim();
    const age = parseInt(enteredAge.trim());

    if (username.length === 0) {
    }

    if (age < 0) {
    }

    if (isNaN(age)) {
    }

    if (username.length > 0) {
      if (!isNaN(age)) {
        if (age >= 0) {
          onSubmit(username, age);
        } else {
          addErrorMessage('Please enter a valid age of 0 or older.');
          setIsAgeValid(false);
        }
      } else {
        addErrorMessage("Please enter a number for the user's age.");
        setIsAgeValid(false);
      }
    } else {
      addErrorMessage('Please enter a valid username.');
      setIsUsernameValid(false);
    }
  };

  // OUTPUT
  return (
    <Card>
      <form
        className={`${styles['new-user-form']}${isFormValid ? '' : ' invalid'}`}
        onSubmit={handleSubmit}
      >
        <label className={isUsernameValid ? '' : 'invalid'}>Username</label>
        <input
          className={isUsernameValid ? '' : 'invalid'}
          type="text"
          value={enteredUsername}
          onChange={handleUsernameChange}
        />
        <label className={isAgeValid ? '' : 'invalid'}>Age (Years)</label>
        <input
          className={isAgeValid ? '' : 'invalid'}
          type="number"
          value={enteredAge}
          onChange={handleAgeChange}
        />
        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default NewUserForm;

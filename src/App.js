import React, { useState } from 'react';
import NewUserForm from './Components/Users/NewUserForm';
import UserList from './Components/Users/UserList';
import User from './Classes/User';
import ErrorModal from './Components/UI/ErrorModal';

function App() {
  const [errorMessages, setErrorMessages] = useState([]);
  const [userList, setUserList] = useState([]);

  const addErrorMessage = msg => {
    setErrorMessages(prevValue => {
      return [msg, ...prevValue];
    });
  };

  const removeErrorMessage = msg => {
    setErrorMessages(prevValue => {
      const newValue = prevValue.filter(m => m !== msg);
      return newValue;
    });
  };

  const addNewUser = (username, age) => {
    let user;
    try {
      user = new User(username, age);
    } catch {
      addErrorMessage('Invalid user details returned. User not added.');
      return;
    }

    setUserList(prevValue => [...prevValue, user]);
  };

  return (
    <div>
      <NewUserForm addErrorMessage={addErrorMessage} onSubmit={addNewUser} />
      <UserList users={userList} />
      {errorMessages.length > 0 && (
        <ErrorModal
          errorMessages={errorMessages}
          acknowledge={removeErrorMessage}
        />
      )}
    </div>
  );
}

export default App;

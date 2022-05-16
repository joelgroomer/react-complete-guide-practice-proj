import React, { useState } from 'react';
import NewUserForm from './Components/Users/NewUserForm';
import UserList from './Components/Users/UserList';
import User from './Classes/User';
import ErrorModal from './Components/UI/ErrorModal';

function App() {
  const [errorMessages, setErrorMessages] = useState(new Set());
  const [userList, setUserList] = useState(new Set());

  const addErrorMessage = msg => {
    setErrorMessages(prevValue => {
      prevValue.add(msg);
      return prevValue;
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

    setUserList(prevValue => prevValue.add(user));
  };

  return (
    <div>
      <NewUserForm addErrorMessage={addErrorMessage} onSubmit={addNewUser} />
      <UserList users={userList} />
      <ErrorModal errorMessages={errorMessages} />
    </div>
  );
}

export default App;

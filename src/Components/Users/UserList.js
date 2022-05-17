import React from 'react';
import Card from '../UI/Card';
import UserListItem from './UserListItem';
import styles from './UserList.module.css';

const UserList = props => {
  /// PROPS
  // const users = props.users;

  /// OUTPUT
  let output;
  if (props.users.length) {
    output = (
      <ul className={styles['user-list']}>
        {props.users.map(user => (
          <UserListItem key={user.id} name={user.username} age={user.age} />
        ))}
      </ul>
    );
  } else {
    output = <h3>No users have been added yet.</h3>;
  }

  return <Card>{output}</Card>;
};

export default UserList;

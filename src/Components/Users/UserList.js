import React from 'react';
import Card from '../UI/Card';
import UserListItem from './UserListItem';

const UserList = props => {
  /// PROPS
  const users = Array.from(props.users);

  return (
    <Card>
      <ul className="user-list">
        {users.map(user => (
          <UserListItem key={user.id} name={user.username} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;

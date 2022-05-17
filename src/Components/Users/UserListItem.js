import React from 'react';

const UserListItem = props => {
  // PROPS
  // const name = props.name;
  // const age = props.age;

  // OUTPUT
  const output = `${props.name} (${props.age} ${
    props.age === 1 ? 'year' : 'years'
  } old)`;

  return (
    <li className="user-list-item">
      <div>{output}</div>
    </li>
  );
};

export default UserListItem;

import React from 'react';
import styles from './UserListItem.module.css';

const UserListItem = props => {
  // PROPS
  // const name = props.name;
  // const age = props.age;

  // OUTPUT
  const output = `${props.name} (${props.age} ${
    props.age === 1 ? 'year' : 'years'
  } old)`;

  return <li className={styles['user-list-item']}>{output}</li>;
};

export default UserListItem;

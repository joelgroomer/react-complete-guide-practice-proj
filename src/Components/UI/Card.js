import React from 'react';
import styles from './Card.module.css';

const Card = props => {
  let styleClass = styles.card;
  if (props.className) {
    styleClass += ' ' + props.className;
  }

  return <div className={styleClass}>{props.children}</div>;
};

export default Card;

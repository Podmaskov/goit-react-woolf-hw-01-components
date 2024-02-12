import React from 'react';

import styles from './styles.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles['item']}>
      <span
        className={`${styles['status']} ${
          isOnline ? styles['status-online'] : ''
        }`}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={styles['name']}>{name}</p>
    </li>
  );
};

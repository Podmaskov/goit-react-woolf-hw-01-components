import React from 'react';
import { FriendListItem } from '../FriendListItem/FriendListItem';

import styles from './styles.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(({ id, ...restProps }) => (
        <FriendListItem {...restProps} key={id} />
      ))}
    </ul>
  );
};

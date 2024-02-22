import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import USER from './Profile/user.json';
import STATISTICS from './Statistics/data.json';
import FRIENDS from './FriendList/friends.json';
import TRANSACTIONS from './TransactionHistory/transactions.json';
import '../index.css';

export const App = () => {
  return (
    <>
      <Profile
        username={USER.username}
        tag={USER.tag}
        location={USER.location}
        avatar={USER.avatar}
        stats={USER.stats}
      />
      <Statistics title="Upload stats" stats={STATISTICS} />
      <FriendList friends={FRIENDS} />
      <TransactionHistory transactions={TRANSACTIONS} />
    </>
  );
};

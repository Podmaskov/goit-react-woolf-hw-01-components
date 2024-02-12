import { Profile } from './Profile/index';
import { Statistics } from './Statistics/index';
import { FriendList } from './FriendList/index';
import { TransactionHistory } from './TransactionHistory/index';
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

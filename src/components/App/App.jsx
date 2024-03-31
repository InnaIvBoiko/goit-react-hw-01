import Profile from '../Profile/Profile.jsx';
import FriendList from '../FriendList/FriendList.jsx'

import userData from '../../userData.json';
import friends from '../../friends.json';

import css from './App.module.css'

export default function App() {
  return (
    <main className={css.container}>
      <Profile userData={userData} />
      <FriendList friends={friends} />
    </main>
  );
}
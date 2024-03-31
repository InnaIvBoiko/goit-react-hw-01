import Profile from './Profile/Profile.jsx';
import userData from '../userData.json';

export default function App() {
  return (
    <>
      <Profile userData={userData} />
    </>
  );
}
import {useState} from 'react';

import LoginScreen from '../components/LoginScreen'
import MapScreen from '../components/MapScreen'

export default function Home() {
  const [userData, setUserData] = useState();
  console.log(userData);

  const offName = userData.name.find(x => x.use === 'official');
  const namePref = offName.prefix[0];
  const firstName = offName.given[0];
  const lastName = offName.family;

  return (
    <>
      <h1>Scheduler</h1>
      {
        userData ? (
          <>
            Welcome, {namePref} {firstName} {lastName}
            <br />
            <MapScreen />
          </>
        ) : 
        <LoginScreen setSession={(userData) => {
          setUserData(userData);
        }} />
      }
    </>
  )
}

import {useState} from 'react';

import LoginScreen from '../components/LoginScreen'
import MapScreen from '../components/MapScreen'

export default function Home() {
  const [userData, setUserData] = useState();

  return (
    <>
      <h1>Scheduler</h1>
      {
        userData ? <MapScreen /> : 
        <LoginScreen setSession={(userData) => {
          setUserData(userData);
        }} />
      }
    </>
  )
}

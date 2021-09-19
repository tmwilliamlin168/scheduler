import {useState} from 'react';

import LoginScreen from '../components/LoginScreen'

export default function Home() {
  const [userData, setUserData] = useState();

  return (
    <>
      <h1>Scheduler</h1>
      {
        userData ? 'Logged in' : 
        <LoginScreen setSession={(userData) => {
          setUserData(userData);
        }} />
      }
    </>
  )
}

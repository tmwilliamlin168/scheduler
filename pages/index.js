import {useState} from 'react';

import AppointmentScreen from '../components/AppointmentScreen';
import LoginScreen from '../components/LoginScreen'
import MapScreen from '../components/MapScreen'

export default function Home() {
  const [userData, setUserData] = useState();
  const [mapScreen, setMapScreen] = useState(false);
  console.log(userData);

  if (userData) {
    const offName = userData.name.find(x => x.use === 'official');
    const namePref = offName.prefix[0];
    const firstName = offName.given[0];
    const lastName = offName.family;
    return (
      <>
        Welcome, {namePref} {firstName} {lastName}
        <button onClick={() => setMapScreen(s => !s)}>Switch to {mapScreen ? 'Appointments' : 'Map'}</button>
        <br />
        { mapScreen ? <MapScreen /> : <AppointmentScreen userData={userData} /> }
      </>
    )
  } else {
    return (
      <>
        <h1>Scheduler</h1>
        <LoginScreen setSession={(userData) => {
          setUserData(userData);
        }} />
      </>
    )
  }
}

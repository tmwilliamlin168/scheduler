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
    const namePref = offName.prefix && offName.prefix[0];
    const firstName = offName.given[0];
    const lastName = offName.family;
    return (
      <div style={{height: '100vh', backgroundColor: '#9390FF'}}>
        Welcome, {namePref} {firstName} {lastName}
        <button onClick={() => setMapScreen(s => !s)}>Switch to {mapScreen ? 'Appointments' : 'Map'}</button>
        <br />
        { mapScreen ? <MapScreen /> : <AppointmentScreen userData={userData} /> }
      </div>
    )
  } else {
    return (
      <div style={{height: '100vh', backgroundColor: '#9390FF', textAlign: 'center'}}>
        <h1 style={{margin: 0, fontSize: 60, fontWeight: 700}}>Fhigure</h1>
        <LoginScreen setSession={(userData) => {
          setUserData(userData);
        }} />
      </div>
    )
  }
}

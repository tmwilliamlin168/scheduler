import {useState} from 'react';

export default function LoginScreen({setSession}) {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState();
  
  return (
    <>
      <br />
      <input type="text" className="loginfield" placeholder="User ID" value={userID} onChange={e => setUserID(e.target.value)} />
      <br />
      <input type="password" className="loginfield" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <br />
      <button className="loginButton" onClick={async () => {
          const res = await fetch('api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid: userID, pwd: password}),
          });
          if (!res.ok) {
            setErrMsg('Login unsuccessful');
          } else {
              const dat = await res.json();
              if (!dat.ok)
                setErrMsg('Login unsuccessful');
              else {
                setSession(dat.userData);
              }
          }
      }}>Login</button>
      {
        errMsg ? <p style={{color: 'red'}}>{errMsg}</p> : null
      }
    </>
  );
}
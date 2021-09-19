import {useState} from 'react';

const apmtTypes = [{code: 'checkup', email: 'checkup@fhirgure.com'}, {code: 'vision', email: 'vision@fhirgure.com'}, {code: 'dental', email: 'dental@fhirgure.com'}];

const Card = ({title, children}) => {
    return (
        <div style={{border: '2px solid', display: 'inline-block', margin: 8, backgroundColor: 'white', borderRadius: 15, border: 'none', padding: 20, width: 300, height: 150}}>
            <span style={{textTransform: 'uppercase', fontWeight: 600, fontSize: 20}}>{title}</span>
            <br />
            {children}
        </div>
    )
};

export default function AppointmentScreen({userData}) {
    const [showPersonalInfo, setShowPersonalInfo] = useState(false);

    // console.log(userData.apmts.entry.find(a => a.resource.serviceCategory[0].coding[0].code === apmtTypes[0]));
    const bookNow = [];
    const recentAppointments = [];
    apmtTypes.forEach(a => {
        let ca = null;
        if(userData.apmts.entry) {
            userData.apmts.entry.forEach(b => {
                if (b.resource.serviceCategory[0].coding[0].code !== a.code)
                    return;
                if (!ca || b.resource.created > ca.created)
                    ca = b.resource;
            })
        }
        if (!ca || Date.now()-new Date(ca.created) > 1000*60*60*24*365)
            bookNow.push(<Card key={a.code} title={a.code}><a style={{color: 'blue'}} href={`mailto:${a.email}`} target="_window">Email</a></Card>)
        else
            recentAppointments.push(<Card key={a.code} title={a.code}>{ca.created}</Card>)
    });
    // userData.apmts.entry.forEach(a => {
    //     console.log(a.resource.created, (Date.now()-new Date(a.resource.created))/1000/60/60/24/365);
    // })
    return (
        <div style={{padding: 30}}>
            {
                showPersonalInfo && (
                    <>
                        Addresses:
                        {userData.address.map((a, _) => (
                            <p key={_}>{a.line[0]} {a.city} {a.state} {a.country}</p>
                        ))}
                        Birth Date: {userData.birthDate}
                        <br />
                        Communication: {userData.communication[0].language.text}
                        <br />
                        Gender: {userData.gender}
                        <br />
                        ID: {userData.id}
                        <br />
                        Phone numbers:
                        {userData.telecom.map((a, _) => (
                            <p key={_}>{a.value}</p>
                        ))}
                    </>
                )
            }
            <button class="button" onClick={() => setShowPersonalInfo(!showPersonalInfo)}>{showPersonalInfo ? 'Hide' : 'Show'} Personal Information</button>
            <br />
            { bookNow.length ? (
                <>
                    <h1 style={{color: 'white'}}>Book Now:</h1>
                    {bookNow}
                </>
            ) : 'Congrats! You are all caught up!' }
            <h1 style={{color: 'white'}}>Recent Appointments:</h1>
            { recentAppointments.length ? (
                recentAppointments
            ) : 'You have no recent appointments' }
        </div>
    );
}
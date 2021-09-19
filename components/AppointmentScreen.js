const apmtTypes = [{code: 'checkup', email: 'checkup@fhirgure.com'}, {code: 'vision', email: 'vision@fhirgure.com'}, {code: 'dental', email: 'dental@fhirgure.com'}];

const cardStyle = {border: '2px solid', display: 'inline-block', margin: 4, padding: 4 };

export default function AppointmentScreen({userData}) {
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
            bookNow.push(<div key={a.code} style={cardStyle}>{a.code} <a style={{color: 'blue'}} href={`mailto:${a.email}`} target="_window">Email</a></div>)
        else
            recentAppointments.push(<div key={a.code} style={cardStyle}>{a.code} {ca.created}</div>)
    });
    // userData.apmts.entry.forEach(a => {
    //     console.log(a.resource.created, (Date.now()-new Date(a.resource.created))/1000/60/60/24/365);
    // })
    return (
        <>
            { bookNow.length ? (
                <>
                    <h1>Book Now:</h1>
                    {bookNow}
                </>
            ) : 'Congrats! You are all caught up!' }
            <h1>Recent Appointments:</h1>
            { recentAppointments.length ? (
                recentAppointments
            ) : 'You have no recent appointments' }
        </>
    );
}
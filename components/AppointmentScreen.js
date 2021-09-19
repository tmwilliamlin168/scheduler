const apmtTypes = [{code: 'checkup'}, {code: 'vision'}, {code: 'dental'}];

export default function AppointmentScreen({userData}) {
    // console.log(userData.apmts.entry.find(a => a.resource.serviceCategory[0].coding[0].code === apmtTypes[0]));
    const bookNow = [];
    const recentAppointments = [];
    apmtTypes.forEach(a => {
        let ca=null;
        userData.apmts.entry.forEach(b => {
            if (b.resource.serviceCategory[0].coding[0].code !== a.code)
                return;
            if (!ca || b.resource.created > ca.created)
                ca = b.resource;
        })
        if (!ca || Date.now()-new Date(ca.created) > 1000*60*60*24*365)
            bookNow.push(<div key={a.code}>{a.code}</div>)
        else
            recentAppointments.push(<div key={a.code}>{a.code} {ca.created}</div>)
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
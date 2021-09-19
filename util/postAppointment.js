import fetch from 'node-fetch'

export default async (apmt) => {
    const res = await fetch('https://fhir.27q7z1k8xfh7.static-test-account.isccloud.io/Appointment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/fhir+json',
            'x-api-key': process.env.INTERSYSTEMS_APIKEY,
            'accept': '*/*',
        },
        body: JSON.stringify(apmt),
    });
    console.log(res);
};
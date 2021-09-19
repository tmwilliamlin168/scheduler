export default async (userID) => {
  const res = await fetch(`https://fhir.27q7z1k8xfh7.static-test-account.isccloud.io/Patient/${encodeURIComponent(userID)}`, {
    headers: {
        'x-api-key': process.env.INTERSYSTEMS_APIKEY,
    },
  });
  const dat = await res.json();
  if (dat.issue && dat.issue[0].severity === 'error')
    return;
  const res2 = await fetch(`https://fhir.27q7z1k8xfh7.static-test-account.isccloud.io/Appointment?actor=Patient%2F${encodeURIComponent(userID)}`, {
    headers: {
        'x-api-key': process.env.INTERSYSTEMS_APIKEY,
    },
  });
  const dat2 = await res2.json();
  return {...dat, apmts: dat2};
};
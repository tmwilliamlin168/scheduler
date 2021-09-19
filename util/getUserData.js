export default async (userID) => {
  const res = await fetch(`https://fhir.27q7z1k8xfh7.static-test-account.isccloud.io/Patient/${userID}`, {
    headers: {
        'x-api-key': process.env.INTERSYSTEMS_APIKEY,
    },
  });
  const dat = await res.json();
  return dat;
};
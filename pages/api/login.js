import getUserData from '../../util/getUserData';

export default async function handler(req, res) {
  if (!req.body.userid || !req.body.pwd) {
    res.status(400).end();
    return;
  }
//   const pwds = {'1': 'a'}
//   const userData = {'1': 'asdf'}
//   if (pwds[req.body.userid] === req.body.pwd)
//     res.status(200).json({ok: 1, userData: userData[req.body.userid]});
//   else
//     res.status(200).json({ok: 0});
  const userData = await getUserData(req.body.userid);
  if (req.body.pwd === 'password' && userData)
    res.status(200).json({ok: 1, userData});
  else
    res.status(200).json({ok: 0});
}
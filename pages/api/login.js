const pwds = {'1': 'a'}
const userData = {'1': 'asdf'}

export default function handler(req, res) {
  if (!req.body.userid || !req.body.pwd) {
    res.status(400).end();
    return;
  }
  if (pwds[req.body.userid] === req.body.pwd)
    res.status(200).json({ok: 1, userData: userData[req.body.userid]});
  else
    res.status(200).json({ok: 0});
}
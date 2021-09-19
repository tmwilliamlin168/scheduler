// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const pwds = {'1': 'a'}

export default function handler(req, res) {
  if (!req.body.userid || !req.body.pwd) {
    res.status(400).end();
    return;
  }
  if (pwds[req.body.userid] === req.body.pwd)
    res.status(200).json({ok: 1});
  else
    res.status(200).json({ok: 0});
}
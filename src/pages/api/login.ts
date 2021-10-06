import type { NextApiRequest, NextApiResponse } from 'next';

export default function handle(request: NextApiRequest, response: NextApiResponse) {

  if(request.method !== 'POST'){
    return response.status(405).json({error: 'Method not allowed'})
  }

  const {email, password} = request.body;

  if(!email || !password) {
    return response.status(401).json({error: 'User and Password are required'});
  }

  if(email !== 'admin' || password !== '123'){
    return response.status(401).json({error: 'User or Password are incorrect'});
  }

  const token = '123456';
  const user = {
    name: 'Kevin Cuomo',
    profile: 'administrator'
  }

  return response.json({token, user});

}
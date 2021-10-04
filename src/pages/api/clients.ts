import type { NextApiResponse, NextApiRequest } from 'next';

interface IClients {
  name: string,
  service: string
}

export default function handle(request: NextApiRequest, response: NextApiResponse) {

  const { token } = request.headers;

  if(!token || token !== '123456') {
    return response.status(401).json({error: 'You do not have access to this resource'});
  }

  const clients: IClients[] = [
    {
      name: 'Jon',
      service: 'website'
    },
    {
      name: 'Charles',
      service: 'hosting'
    },
    {
      name: 'Kevin',
      service: 'app mobile'
    }
  ];

  return response.json(clients);
}
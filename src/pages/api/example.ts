import { NextApiRequest, NextApiResponse } from 'next';
import { logError } from '../../utils/logger';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Simulate an error
    throw new Error('Something went wrong!');

    res.status(200).json({ message: 'Success' });
  } catch (error) {
    logError(error as Error); // Log the error on the server
    res.status(500).json({ message: 'Internal Server Error' }); // Send a generic error message to the client
  }
}
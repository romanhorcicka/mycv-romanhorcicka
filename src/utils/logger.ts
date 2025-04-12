import fs from 'fs';
import path from 'path';

const logFilePath = path.join(process.cwd(), 'logs', 'errors.log');

export const logError = (error: Error) => {
  console.error(`[${new Date().toISOString()}] ${error.stack || error.message}`);
};
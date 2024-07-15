import { createLogger, Logger } from 'winston';

export const testLogger = (): Logger =>
  createLogger({
    silent: true,
    level: 'info',
  });

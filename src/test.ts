import cron from 'node-cron';
import { exec } from 'child_process';

cron.schedule('* * * * *', () => {
  exec('ts-node scripts/testFunctions.ts', (err, stdout, stderr) => {
    if (err) console.error('Cron test error:', stderr);
    else console.log('Cron test output:', stdout);
  });
});

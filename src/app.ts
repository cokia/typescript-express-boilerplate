import config from './config';
import express from 'express';

async function startServer() {
  const app = express();
  await require('./loaders').default({ expressApp: app });
  // node without babel only support to use import/export at top level
app.listen(config.port, () => {
  console.log(`    
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
          Server listening on port: ${config.port}
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        `);
  }).on('error', error => {
    console.error(error);
    process.exit(1);
  });

}

startServer();
// const fs = require('fs');
// const path = require('path');
const { exec } = require('child_process');
const Status = require('./Handlers/Functions');

const checkInterval = 5 * 60 * 1000; // 5 minutes in milliseconds
// const usersFilePath = path.join(__dirname, 'Configs/users.json');

/**
 * Checks the screen session for the auto screener.
 * If the session is not active, starts a new session.
 */
function checkScreenSession() {
  exec('screen -list | grep API', (err, stdout, stderr) => { // Enter your screen name here
    if (stdout.includes('API')) {
      console.log(`${Status.SuccessColor} Screen session API is already active`);
    } else {
      console.log(`${Status.WarnColor} Screen session API is not active. Starting new session...`);
      // resetUserConnections();
      exec('screen -dmS API ./API', (err, stdout, stderr) => {
        if (err) {
          console.log(`${Status.ErrorColor} Error starting screen session: ${err}`);
        } else {
          console.log(`${Status.DebugColor} Screen session API started successfully`);
        }
      });
    }
  });
}

// Initial check on script startup
checkScreenSession();

// Periodically check for screen session
setInterval(() => {
  checkScreenSession();
}, checkInterval);
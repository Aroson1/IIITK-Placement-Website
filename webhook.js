const express = require('express');
const bodyParser = require('body-parser');
const simpleGit = require('simple-git');
const { exec } = require('child_process');

const app = express();
app.use(bodyParser.json());
const git = simpleGit();

app.post('/webhook', async (req, res) => {
  const { ref } = req.body;
  if (ref === 'refs/heads/main') {
    try {
      console.log('Starting git pull...');
      await git.pull('origin', 'main');
      console.log('Git pull successful. Installing dependencies...');
      exec('npm install', (errInstall) => {
        if (errInstall) {
          console.error('Error during npm install:', errInstall);
          return res.status(500).send('Deployment failed during npm install');
        }
        console.log('Dependencies installed. Building project...');
        exec('npm run build', (errBuild) => {
          if (errBuild) {
            console.error('Error during build:', errBuild);
            return res.status(500).send('Deployment failed during build');
          }
          console.log('Build successful. Restarting server...');
          exec('pm2 restart placement-site', (errRestart) => {
            if (errRestart) {
              console.error('Error restarting server:', errRestart);
              return res.status(500).send('Deployment failed during restart');
            }
            res.status(200).send('Deployed successfully!');
          });
        });
      });
    } catch (error) {
      console.error('Error during git pull:', error);
      res.status(500).send('Deployment failed during git pull');
    }
  } else {
    res.status(400).send('Not main branch');
  }
});

app.listen(9000, () => console.log('Webhook listener on port 9000'));

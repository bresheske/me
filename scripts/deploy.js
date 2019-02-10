const proc = require('child_process').exec;
const fs = require('fs');
const symbols = require('log-symbols');
const UI = require('console-ui')
const ui = new UI({
  inputStream: process.stdin,
  outputStream: process.stdout,
  errorStream: process.stderr,
  writeLevel: 'INFO',
  ci: false
});

const exec = (cmd) => {
    return new Promise((res) => {
        proc(cmd, (error, stdout, stderr) => {
            if (error)
                ui.writeError(error);
            
            res(!error);
        });
    });
}

(async() => {
    const steps = [
        () => ui.writeInfoLine('Website Deployment'),
        () => ui.startProgress('Building Website'),
        () => exec(`npm run ng -- build --prod`),
        () => { ui.writeInfoLine(`${symbols.success} Building Website`); ui.stopProgress(); ui.startProgress('Initializing Git'); },
        () => exec(`cd dist && git init && git remote add origin https://github.com/bresheske/bresheske.github.io.git`),
        () => { ui.writeInfoLine(`${symbols.success} Initializing Git`); ui.stopProgress(); ui.startProgress('Creating 404 File'); },
        () => { fs.createReadStream('dist/index.html').pipe(fs.createWriteStream('dist/404.html')); },
        () => { ui.writeInfoLine(`${symbols.success} Creating 404 File`); ui.stopProgress(); ui.startProgress('Deploying'); },
        () => exec(`cd dist && git add -A && git stage * && git commit -m "commit from deploy.js" && git push --set-upstream origin master --force`),
        () => { ui.writeInfoLine(`${symbols.success} Deploying`); ui.stopProgress(); },
    ];
    for (const step of steps) {
        await step();
    }

})();

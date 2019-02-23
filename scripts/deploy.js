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

const execFn = (name, fn) => {
    ui.startProgress(name);
    return new Promise(async (res) => {
        try {
            const result = fn();
            if (result && result.then)
                result = await result;

            ui.stopProgress();
            ui.writeInfoLine(`${symbols.success} ${name}`);
            res(true);
        }
        catch (ex) {
            ui.stopProgress();
            ui.writeError(`${symbols.error} ${name}`);
            res(false);
        }
    });
}

const exec = (name, cmd) => {
    ui.startProgress(name);
    return new Promise((res) => {
        proc(cmd, (error, stdout, stderr) => {
            ui.stopProgress();
            const write = error
                ? () => ui.writeWarnLine(`${symbols.error} ${name}`)
                : () => ui.writeInfoLine(`${symbols.success} ${name}`);
            write();
            res(!error);
        });
    });
}

(async() => {
    const steps = [
        () => ui.writeInfoLine('Website Deployment'),
        () => exec(`Building Website`, `npm run ng -- build --prod`),
        () => exec(`Initializing Git`, `cd dist && git init && git remote add origin https://github.com/bresheske/bresheske.github.io.git`),
        () => execFn(`Copying 404 File`, () => { fs.createReadStream('dist/index.html').pipe(fs.createWriteStream('dist/404.html')); }),
        () => exec(`Deploying`, `cd dist && git add -A && git stage * && git commit -m "commit from deploy.js" && git push --set-upstream origin master --force`),
        () => exec(`Executing Test Suite`, `npm run test`),
    ];
    for (const step of steps) {
        const res = await step();
        if (res === false)
            break;
    }

})();

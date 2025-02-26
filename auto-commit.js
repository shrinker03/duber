const chokidar = require('chokidar');
const simpleGit = require('simple-git');
const path = require('path');

const git = simpleGit();

const watchDirectory = path.resolve(__dirname); // Change to a specific folder if needed

// Initialize Git if not already a repo
git
    .checkIsRepo()
    .then((isRepo) => {
        if (!isRepo) {
            console.log('Not a Git repository. Initializing...');
            return git.init();
        }
    })
    .then(() => console.log(`Watching for changes in: ${watchDirectory}`));

// Watch for file changes
chokidar
    .watch(watchDirectory, { ignored: /node_modules|\.git/, persistent: true })
    .on('all', async (event, filePath) => {
        console.log(`[${event}] ${filePath}`);

        try {
            await git.add('.');
            await git.commit(`Duber: ${new Date().toLocaleString()}`);
            await git.push('origin', 'main'); // Change 'main' to your branch name if different
            console.log('Changes committed and pushed.');
        } catch (error) {
            console.error('Git Error:', error);
        }
    });

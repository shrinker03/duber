const chokidar = require('chokidar');
const simpleGit = require('simple-git');
const path = require('path');

const git = simpleGit();
const watchDirectory = path.resolve(__dirname); // Change to a specific folder if needed
let commitTimeout = null;
const DEBOUNCE_TIME = 20; // 20 minutes

// Initialize Git if not already a repo
git.checkIsRepo()
    .then(isRepo => {
        if (!isRepo) {
            console.log("Not a Git repository. Initializing...");
            return git.init();
        }
    })
    .then(() => console.log(`Watching for changes in: ${watchDirectory}`));

// Function to commit and push changes
const commitAndPush = async () => {
    try {
        await git.add('.');
        await git.commit(`Duber Auto-commit: ${new Date().toLocaleString()}`);
        await git.push('origin', 'main'); // Change 'main' to your branch name if different
        console.log("Changes committed and pushed.");
    } catch (error) {
        console.error("Git Error:", error);
    }
};

// Watch for file changes
chokidar.watch(watchDirectory, { ignored: /node_modules|\.git/, persistent: true })
    .on('all', (event, filePath) => {
        console.log(`[${event}] ${filePath}`);

        // Reset debounce timer
        if (commitTimeout) clearTimeout(commitTimeout);
        commitTimeout = setTimeout(commitAndPush, DEBOUNCE_TIME);
    });

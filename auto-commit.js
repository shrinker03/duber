// const chokidar = require('chokidar');
// const simpleGit = require('simple-git');
// const path = require('path');
// const git = simpleGit();
// const watchDirectory = path.resolve(__dirname);
// const DEBOUNCE_TIME = 1200000; // 20 minutes

// let hasChanges = false;
// let debounceTimer = null;

// // Initialize Git if not already a repo
// git.checkIsRepo()
//     .then(isRepo => {
//         if (!isRepo) {
//             console.log("Not a Git repository. Initializing...");
//             return git.init();
//         }
//     })
//     .then(() => console.log(`Watching for changes in: ${watchDirectory}`));

// // Function to commit and push changes
// const commitAndPush = async () => {
//     if (!hasChanges) return; // Skip if no changes
//     hasChanges = false;
//     try {
//         await git.add('.');
//         await git.commit(`Duber Auto-commit: ${new Date().toLocaleString()}`);
//         await git.push('origin', 'main'); // Change 'main' to your branch name if different
//         console.log("Changes committed and pushed.");
//     } catch (error) {
//         console.error("Git Error:", error);
//     }
// };

// // Watch for file changes
// chokidar.watch(watchDirectory, { ignored: /node_modules|\.git/, persistent: true })
//     .on('all', (event, filePath) => {
//         console.log(`[${event}] ${filePath}`);
//         hasChanges = true; // Mark that changes exist

//         // Clear previous timer and set a new one
//         clearTimeout(debounceTimer);
//         debounceTimer = setTimeout(commitAndPush, DEBOUNCE_TIME);
//     });
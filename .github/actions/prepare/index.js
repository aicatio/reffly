const core = require('@actions/core');
const jsonfile = require('jsonfile');
const bumpVersion = require('semver-increment');
const latestVersion = require('latest-version').default;
const Git = require('git-commands');
const fs = require('fs');

(async function() {
  try {
    // Workdir path
    const projPath = process.env.GITHUB_WORKSPACE;
    const git = new Git({ reps: projPath });

    if (fs.existsSync(`${projPath}/package.json`)) {
      // Get the current version & calculate next version
      const verNum = await latestVersion('@aicat/reffly');
      const nextVer = bumpVersion([0, 0, 1], verNum);

      // Do some tweaks on package
      const package = jsonfile.readFileSync(`${projPath}/package.json`);
      package.version = nextVer;
      delete package['size-limit'];
      delete package.staticFiles;
      delete package.scripts;

      // Write the new package
      fs.writeFileSync(
        `${projPath}/build/package.json`,
        JSON.stringify(package, null, 2)
      );

      // Test git commands, will use git later
      console.log(git.command('--version'));

      // Broadcust the output
      core.setOutput('tag_ref', `refs/tags/v${nextVer}`);
      console.log('tag_ref:', `refs/tags/v${nextVer}`);
    } else {
      core.setFailed('Please checkout first, i.e, - uses: actions/checkout@v2');
    }
  } catch (error) {
    core.setFailed(error.message);
  }
})();

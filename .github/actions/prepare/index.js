const core = require('@actions/core');
const jsonfile = require('jsonfile');
const bumpVersion = require('semver-increment');
const latestVersion = require('latest-version').default;
const fs = require('fs');

(async function() {
  try {
    // Workdir path
    const projPath = process.env.GITHUB_WORKSPACE;
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

      // Broadcust the output
      core.setOutput('version', nextVer);
      console.log('package:', package);
    } else {
      core.setFailed('Please checkout first, i.e, - uses: actions/checkout@v2');
    }
  } catch (error) {
    core.setFailed(error.message);
  }
})();

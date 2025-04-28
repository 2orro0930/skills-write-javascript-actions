const getJoke = require("./joke");
const core = require("@actions/core");

async function run() {
  try {
    const joke = await getJoke();
    console.log(joke);
    core.setOutput("joke-output", joke);
  } catch (error) {
    core.setFailed(`Action failed: ${error}`);
  }
}

run();

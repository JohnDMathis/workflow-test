const core = require( "@actions/core" );
const github = require( "@actions/github" );

try {
  // `who-to-greet` input defined in action metadata file
  const minValue = core.getInput( "min-val" );
  const maxValue = core.getInput( "max-val" );
  console.log( "maxValue:", maxValue );
  const rando = Math.floor( Math.random() * (maxValue - minValue + 1) + min );
  console.log( "rando:", rando );
  core.setOutput( "random", rando );
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
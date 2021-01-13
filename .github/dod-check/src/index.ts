import * as github from '@actions/github';

async function run() {
  const context = github.context;
  console.log(
    context.payload.comment,
    context.actor,
    context.payload.issue?.user,
    context.payload.issue?.pull_request
  );
}

run();

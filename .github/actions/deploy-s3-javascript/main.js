const core = require('@actions/core')
const github = require('@actions/github')

function run(){
    core.notice('Hello from my custom JavaScript Action!')
}

run();
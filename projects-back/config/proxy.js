const issuesAddress = process.env.ISSUE_ADDRESS || 'localhost';
const issuesPort = process.env.ISSUE_PORT || 4000;
const tasksAddress = process.env.TASK_ADDRESS || 'localhost';
const tasksPort = process.env.TASK_PORT || 5000;
const testsAddress = process.env.TEST_ADDRESS || 'localhost';
const testsPort = process.env.TEST_PORT || 5001;

module.exports = {
  issueProxy: `http://${issuesAddress}:${issuesPort}`,
  taskProxy: `http://${tasksAddress}:${tasksPort}`,
  testProxy: `http://${testsAddress}:${testsPort}`,
};

const { spawnSync } = require('child_process');

describe('E2E Tests for insert-tasks CLI Command', () => {
  it('should insert tasks from inline JSON', () => {
    const script = './cli/invokeUserServiceInsertTasks.js';
    const tasks = "[{'description': 'foo', 'responsable': 'john.doe', 'status': 'todo'}]";
    const result = spawnSync('node', [script, tasks]);

    expect(result.stdout?.toString()).toContain('Tasks inserted successfully'); // Check for a success message
  });

  it('should insert tasks from a JSON file', () => {
    const script = './cli/invokeUserServiceInsertTasks.js';
    const jsonFile = './data/sample-insert-tasks.json'; // Replace with the path to your JSON file
    const result = spawnSync('node', [script, jsonFile]);

    expect(result.stdout?.toString()).toContain('Tasks inserted successfully'); // Check for a success message
  });

  it('should try to insert tasks from a empty JSON file', () => {
    const script = './cli/invokeUserServiceInsertTasks.js';
    const jsonFile = './data/sample-empty.json'; // Replace with the path to your JSON file
    const result = spawnSync('node', [script, jsonFile]);

    expect(result.status).toBe(1); // should fail
  });

  it('should try to insert tasks from a wrong JSON file', () => {
    const script = './cli/invokeUserServiceInsertTasks.js';
    const jsonFile = './data/sample-wrong.json'; // Replace with the path to your JSON file
    const result = spawnSync('node', [script, jsonFile]);

    expect(result.status).toBe(1); // should fail
  });
});

describe('E2E Tests for get-tasks CLI Command', () => {
  it('should try to get tasks', () => {
    const script = './cli/invokeUserServiceGetTasks.js';
    const result = spawnSync('node', [script]);

    expect(result.stdout?.toString()?.split('\n')[0])
      .toBe("id - description - responsable - status"); // the table header
  });
});

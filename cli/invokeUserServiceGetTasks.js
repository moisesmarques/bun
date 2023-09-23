#!/usr/bin/env node

const { getTasks } = require("../api/services/userService");

const tasks = getTasks();

console.log(`description - responsable - status`);
tasks.forEach( task => console.log(`${task.description} - ${task.responsable} - ${task.status}`));
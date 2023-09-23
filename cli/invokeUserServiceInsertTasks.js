#!/usr/bin/env node
const { insertTasks } = require("../api/services/userService")
const fs = require('fs');

let tasks = []

try {
    tasks = process.argv.slice(2)[0]

    if(tasks.endsWith('.json')){
        tasks = fs.readFileSync(tasks, 'utf8');
    }

    tasks = JSON.parse(tasks.replace(/'/g, '"'))

    insertTasks(tasks)

    console.log('succcess!')

} catch (error) {
    console.log(error)
    console.log("\n\nUsage: insert-tasks <tasks>")
    console.log("Ex. 1: insert-tasks \"[{'description': 'foo', 'responsable': 'john.doe', 'status': 'todo'}]\"")
    console.log("Ex. 2: insert-tasks \"./data/sample-insert-tasks.json\"")
}



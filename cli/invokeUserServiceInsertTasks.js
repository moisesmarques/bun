#!/usr/bin/env node
const database = require('../api/config/database');
const { insertTasks } = require("../api/services/userService");
const fs = require('fs');

// initialize the database
database.init()
let tasks = []

try {
    tasks = process.argv.slice(2)[0];

    if(!tasks || tasks.trim() === ''){
        throw Error('missing parameter <tasks>')
    }

    if(tasks.endsWith('.json')){
        tasks = fs.readFileSync(tasks, 'utf8');
    }

    tasks = JSON.parse(tasks.replace(/'/g, '"'));
    insertTasks(tasks).then(({error}) => {
        if (error){
            throw Error(error);
        }
        console.log('Tasks inserted successfully');
        process.exit(0);
    });

} catch (error) {
    console.log(error);
    console.log("\n\nUsage: insert-tasks <tasks>");
    console.log("Ex. 1: insert-tasks \"[{'description': 'foo', 'responsable': 'john.doe', 'status': 'todo'}]\"");
    console.log("Ex. 2: insert-tasks \"./data/sample-insert-tasks.json\"");
    process.exit(1);
}


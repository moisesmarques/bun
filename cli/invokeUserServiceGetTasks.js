#!/usr/bin/env node
const database = require('../api/config/database');
const { getTasks } = require("../api/services/userService");

// initialize the database
database.init()

try {
    getTasks().then(({tasks}) => {
        console.log(`id - description - responsable - status`);
        tasks.forEach( task => console.log(`${task.id} - ${task.description} - ${task.responsable} - ${task.status}`));
        process.exit(0);

    })
} catch (error) {
    console.log(error);
    process.exit(1);

}

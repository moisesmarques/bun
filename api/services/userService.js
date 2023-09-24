const { insertTasksSchema } = require('../validation/userServiceValidation');
const database = require('../config/database');
const { nanoid } = require('nanoid');

exports.insertTasks = async (tasks) => {
    const result = insertTasksSchema.validate(tasks);
    if(result.error){
        return result;
    }

    const col = database.getDb().collection('tasks');
    return await Promise.all(tasks.map( task => {
        const docRef = col.doc(nanoid());
        return docRef.set(task);
    }));
}

exports.getTasks = async () => {
    const col = database.getDb().collection('tasks');
    const result = await col.get();
    let tasks = [];
    result.forEach( task => tasks.push({id: task.id, ...task.data()}));
    return { tasks };
}
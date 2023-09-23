exports.insertTasks = (tasks) => {

    return tasks;
}

exports.getTasks = () => {

    const tasks = [
        {
            "description":"Criar Login",
            "responsable":"bruno",
            "status":"done"
        }, 
        {
            "description":"Criar Menu",
            "responsable":"bruno",
            "status":"doing"
        }, 
        {
            "description":"Criar tela de perfil",
            "responsable":"bruno",
            "status":"todo"
        }
    ]

    return tasks;
}
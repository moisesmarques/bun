# bun

## HTTP endpoints

### insert tasks
curl --location 'localhost:8085/insert-tasks' \
--header 'Content-Type: application/json' \
--data '[
    {"description":"Criar Login","responsable":"bruno","status":"done"},
    {"description":"Criar Menu","responsable":"bruno","status":"doing"},
    {"description":"Criar tela de perfil","responsable":"bruno","status":"todo"}
]'

### get tasks
curl --location 'localhost:8085/get-tasks'

## CLI commands

### Install

RUN> `npm install -g .`

### insert tasks
RUN> `insert-tasks <tasks>`
Ex. 1: insert tasks "[{'description': 'foo', 'responsable': 'john.doe', 'status': 'todo'}]"
Ex. 2: insert tasks "./data/sample-insert-tasks.json"

### get tasks
RUN> `get-tasks`

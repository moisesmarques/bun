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
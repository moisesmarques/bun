# bun

## How to Install

### Install NPM packages
RUN> `npm install -g .`

### 1. Create a Firebase service account key
1.1 Tutorial: https://clemfournier.medium.com/how-to-get-my-firebase-service-account-key-file-f0ec97a21620
1.2 Download de service account key, rename the file to "serviceAccountKey.json" and move to project_folder/api/config directory

### 2. Setup the environment variables
2.1 Got to project_folder/api/config directory
2.2 Create a copy of file 'config.env.sample' and rename it to 'config.env'
2.3 Change the parameters in config.env file as needed

## How to Use

### HTTP endpoints
#### insert tasks
curl --location 'localhost:8085/insert-tasks' \
--header 'Content-Type: application/json' \
--data '[
    {"description":"Criar Login","responsable":"bruno","status":"done"},
    {"description":"Criar Menu","responsable":"bruno","status":"doing"},
    {"description":"Criar tela de perfil","responsable":"bruno","status":"todo"}
]'

#### get tasks
curl --location 'localhost:8085/get-tasks'

### CLI commands
#### insert tasks
RUN> `insert-tasks <tasks>`
Ex. 1: insert tasks "[{'description': 'foo', 'responsable': 'john.doe', 'status': 'todo'}]"
Ex. 2: insert tasks "./data/sample-insert-tasks.json"

Expected output: 'Tasks inserted successfully'
#### get tasks
RUN> `get-tasks`

Expected output:
id - description - responsable - status
76r90EJlIJZChSo2x3s2V - Criar Menu - bruno - doing
ILrKUb2VXm1tJ5BeYWfQW - Criar tela de perfil - bruno - todo
tpm_PYTZ_7tMndJl5DlR4 - Criar Login - bruno - done

### Running E2E tests

RUN> `npm run test`

Expected output:
> bun@1.0.0 test
> jest

 PASS  tests/apiUserServiceE2E.test.js
 PASS  tests/cliUserServiceE2E.test.js

Test Suites: 2 passed, 2 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        4.214 s
Ran all test suites.



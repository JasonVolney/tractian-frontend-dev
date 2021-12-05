# Traction
# This App is for consuming Fake API 

## Dependencies:

### Icons

npm install --save-dev @iconify/react

import { Icon } from '@iconify/react';

### Packages:

npm install --save-dev react-router-dom

npm install -g json-server
Command: npx json-server --watch data/db.json --port 8000

### Endpoints: 

http://localhost:8000/assets GET Fetch all assets
http://localhost:8000/assets/{id} GET Fetch a single asset


http://localhost:8000/units GET Fetch all units
http://localhost:8000/units/{id} GET Fetch a single unit

http://localhost:8000/users GET Fetch all users
http://localhost:8000/users/{id} GET Fetch a single user

http://localhost:8000/companies GET Fetch all companies
http://localhost:8000/companies/{id} GET Fetch a single company
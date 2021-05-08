require('dotenv').config();
const app = require('./app')

// Database
require('./database');

// Listening the server
async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();
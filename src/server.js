const server = require('./app');
require('dotenv').config();

server.listen(process.env.PORT || 3333, () => {
    console.log('Server is running');
})

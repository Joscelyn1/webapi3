//resources
// manage products (8)
// manage clients (8)
// manage orders
// manage suppliers

const server = require('./api/server.js');

const port = 5000;
server.listen(port, () => console.log(`\nAPI on port ${port} \n`));

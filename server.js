var americano = require('americano');

var port = process.env.PORT || 9876;
americano.start({name: 'fontenay', port: port});

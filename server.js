var express = require('express'),
    expeditures = require('./routes/expeditures');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.get('/expeditures', expeditures.findAll);
app.get('/expeditures/:id', expeditures.findById);
app.post('/expeditures', expeditures.create);
app.put('/expeditures/:id', expeditures.update);
app.delete('/expeditures/:id', expeditures.delete);

app.listen(3000);
console.log('Listening on port 3000...');
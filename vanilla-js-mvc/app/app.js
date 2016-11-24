var 
    app = express(),
    resourceData = require('./js/resources.json'),
    reload = require('reload'),
    server;

app.set('port', process.env.PORT || 3000 );
app.set('resources', resourceData);
app.set('view engine', 'ejs');
app.set('views', 'app/views');


// Run server
server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

// Reload the server when changes happen
reload(server, app);
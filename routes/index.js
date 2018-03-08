/**
 * All the routes goes here
 * @author Sandeep G
 * @since 20180222
 */
app = require('../app');

/* now all the route declarations goe here */
var user = require('./user');
var company = require('./companies');
var requestExample = require('./requestExample');
var database = require('./database');

/* actual routes goes here */
app.get('/', user.list);
app.get('/company', company.list);
app.get('/req', requestExample.demoParams);
app.get('/req/:name', requestExample.demoParamsWithId);

app.get('/db', database.connectionTest);
app.get('/db/get', database.getData);
app.get('/db/post', database.postData);
app.get('/db/query/:item', database.queryParam);
app.get('/db/update/:id', database.updateData);
app.get('/db/sort', database.sortData);
app.get('/db/join', database.joinData);
app.get('/db/joinm', database.joinDataMultiple);

const express = require('express');
const app = express();
const Renderer = require('docsify-server-renderer')
const readFileSync = require('fs').readFileSync
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
 
var options = {
  customCss: '.swagger-ui .topbar { display: none } .swagger-ui .info { display: none } .swagger-ui { font-family: Ubuntu,sans-serif; color: #303133;} .swagger-ui .opblock-tag { font-family: Ubuntu; } .swagger-ui .opblock .opblock-summary-operation-id, .swagger-ui .opblock .opblock-summary-path, .swagger-ui .opblock .opblock-summary-path__deprecated { font-size: 18px; font-family: Ubuntu,sans-serif; }'
};

app.use(express.static('public'));
app.use('/ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.listen(5000, function () {
  	console.log('Example app listening on port 5000!');
});

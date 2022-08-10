const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'My Description',
    },
    host: 'localhost:3333',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/modules/url/infra/http/routes/index.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc);

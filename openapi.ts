export const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Students API',
      version: '1.0.0',
      description: 'The REST API for Student List'
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Development server'
      }
    ],
  },
  apis: ['**/*.ts'],
}

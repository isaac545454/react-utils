const path = require('path');

/** @type {import('orval').Options} */
module.exports = {
  backend: {
    output: {
      mode: 'single',
      prettier: true,

      client: 'react-query',
      target: path.resolve(__dirname, './src/query.ts'),

      override: {
        mutator: {
          path: require.resolve('./src/api/axios.ts'),
          name: 'request'
        },
        query: {
          useQuery: true,
        },
        header: () => '//@ts-nocheck\n'
      }
    },

    input: {
      target: require.resolve('./swagger.json')
    }
  }
};
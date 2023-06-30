module.exports = {
  openapi: {
    output: {
      mode: 'split',
      target: './src/apis/api.ts',
      schemas: 'src/apis/types',
      client: 'swr',
      mock: true,
      hooks: {
        afterAllFilesWrite: 'prettier --write',
      },
    },
    input: {
      target: './openapi.json',
    },
  },
};

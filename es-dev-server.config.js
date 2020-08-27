const less = require('less');
module.exports = {
  port: 8080,
  watch: true,
  nodeResolve: true,
  appIndex: './index.html',
  plugins: [
    {
      resolveMimeType(context) {
        if (context.path.endsWith('.css') || context.path.endsWith('.less')) {
          return 'js';
        }
      },

      async transform(context) {
        if (context.path.endsWith('.css')) {
          const stylesheet = `export default ${JSON.stringify(context.body)};`;
          return { body: stylesheet };
        } else if (context.path.endsWith('.less')) {
          return {
            body: `export default ${JSON.stringify(
              await less.render(context.body).then((result) => {
                console.log('!!', result);
                return result.css;
              })
            )}`,
          };
        }
      },
    },
  ],
  moduleDirs: ['node_modules', 'web_modules'],
};

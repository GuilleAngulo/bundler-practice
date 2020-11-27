const chokidar = require('chokidar');
const colors = require('colors');

colors.enable();

const mode = process.argv[2] && process.argv[2].split('=')[1]

index(mode)

function index(mode) {
  if (mode === 'development') {
    chokidar.watch('.', { ignored: /public|node_modules/ }).on('all', (event, path) => {
      console.info('[esbuild] Compilation starting...')
      //console.info(event, path);
      const hrstart = process.hrtime()
      require('esbuild').build({
        entryPoints: ['src/app.tsx'],
        bundle: true,
        minify: true,
        outdir: 'public',
        define: {
          'process.env.NODE_ENV': '"production"'
        },
        target: ['safari14'],
        format: 'esm',
        sourcemap: true,
        splitting: true
      }).catch(() => process.exit(1))
      const hrend = process.hrtime(hrstart)
      console.info('[esbuild] ' + colors.green('Compilation finished'))
      console.log('[esbuild] ' + colors.green('Compiled successfully in %dms'), hrend[1] / 1000000)
      console.info('[esbuild] Watching files for updates...')
    });
  }

  else if (mode === 'production') {
    require('esbuild').build({
      entryPoints: ['src/app.tsx'],
      bundle: true,
      minify: true,
      outdir: 'public',
      define: {
        'process.env.NODE_ENV': '"production"'
      },
      target: ['safari14'],
      format: 'esm',
      sourcemap: true,
      splitting: true
    }).catch(() => process.exit(1))
  }

  else console.error(colors.red("You must provide: --mode=development|production"))

};



module.exports = index
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
      console.info(`[esbuild] ${terminalColor('Compilation finished', 'info')}`)
      console.log(`[esbuild]  ${terminalColor(`Compiled successfully in ${hrend[1] / 1000000}ms`, 'info')}`)
      console.info('[esbuild] Watching files for updates...')
    });
  }

  else if (mode === 'production') {
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
      console.info(`[esbuild] ${terminalColor('Compilation finished', 'info')}`)
      console.log(`[esbuild]  ${terminalColor(`Compiled successfully in ${hrend[1] / 1000000}ms`, 'info')}`)
  }

  else console.error(`${terminalColor("You must provide: --mode=development|production", 'error')}`)

};


function terminalColor(text, level) {
  switch (level) {
    /** green */
    case 'info':
    default:
      return `\x1b[32m${text}\x1b[0m`;
    /** yellow */
    case 'warn':
      return `\x1b[33m${text}\x1b[0m`;
    /** red */
    case 'error':
      return `\x1b[31m${text}\x1b[0m`;
  }
}


module.exports = index
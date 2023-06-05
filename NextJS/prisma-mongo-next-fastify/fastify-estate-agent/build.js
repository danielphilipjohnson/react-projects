const { build } = require("esbuild");
const { dependencies, peerDependencies } = require('./package.json');
const { Generator } = require('npm-dts');

const fs = require('fs')
const path = require('path')
const env = process.argv[2]

new Generator({
	entry: 'src/index.ts',
	output: 'dist/index.d.ts',
}).generate();

const formatPeerDependencyExist = peerDependencies ? peerDependencies : {}
const externalDependencies = [...Object.keys(dependencies), ...Object.keys(formatPeerDependencyExist)];

const sharedConfig = {
	entryPoints: ["src/index.ts"],
	bundle: true,
	minify: true,
	external: externalDependencies
};

let fileArray = []
const getFilesRecursively = (dir) => {
	const files = fs.readdirSync(dir)
	files.forEach((file) => {
		const filePath = path.join(dir, file)
		if (fs.statSync(filePath).isDirectory()) {
			getFilesRecursively(filePath)
		} else {
			fileArray.push(filePath)
		}
	})
}
getFilesRecursively('src')

const entryPoints = fileArray.filter((filename) => filename.endsWith('.ts'))

build({
	...sharedConfig,
	entryPoints,
	logLevel: 'info',
	outdir: env === 'dev' ? 'dist' : 'build/cjs',
	bundle: env === 'dev' ? false : true,
	platform: 'node', // for CJS
});

build({
	...sharedConfig,
	entryPoints,
	logLevel: 'info',
	outdir: env === 'dev' ? 'dist' : 'build/esm',
	bundle: env === 'dev' ? false : true,
	platform: 'node', // for ESM
	format: "esm",
})
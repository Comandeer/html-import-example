const { readFileSync } = require( 'fs' );

module.exports = function() {
	require.extensions[ '.html' ] = ( module, path ) => {
		const html = readFileSync( path, 'utf8' );
		const code = `const hogan = require( 'hogan.js' );
const template = hogan.compile( \`${ html }\` );

module.exports = template;`;

		module._compile( code, path );
	};
};

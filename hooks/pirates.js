const { readFileSync } = require( 'fs' );
const { addHook } = require( 'pirates' );

module.exports = function() {
	addHook(
		( code, path ) => {
			const html = readFileSync( path, 'utf8' );

			return `const hogan = require( 'hogan.js' );
const template = hogan.compile( \`${ html }\` );

module.exports = template;`;
		},
		{ exts: [ '.html' ] }
	);
};

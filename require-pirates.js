require( './hooks/pirates.js' )();

const template = require( './templates/hello.html' );

console.log( template.render( {
	user: 'Comandeer'
} ) );

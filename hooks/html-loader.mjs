import { URL, pathToFileURL, fileURLToPath } from 'url';
import { promises as fs } from 'fs';
import hogan from 'hogan.js';

const { readFile } = fs;
const baseURL = pathToFileURL( process.cwd() ).href;

export async function resolve( path, parentModuleURL = baseURL, defaultResolve ) {
	if ( !path.endsWith( '.html' ) ) {
		return defaultResolve( path, parentModuleURL );
	}

	const url = new URL( path, parentModuleURL ).href;

	return {
		url,
		format: 'dynamic'
	};
};

export async function dynamicInstantiate( url ) {
	const path = fileURLToPath( url );
	const html = await readFile( path, 'utf8' );
	const template = hogan.compile( html );

	return {
		exports: [ 'default' ],
		execute( exports ) {
			exports.default.set( template );
		}
	};
}

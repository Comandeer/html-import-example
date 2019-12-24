# HTML import example

Example for the [blog post about importing HTML in Node.js](https://blog.comandeer.pl/html-w-node.html).

## Installation

```bash
npm install
```

## Usage

For `require.js` and `require-pirate.js`:

```bash
node <file-name>
```

For `esm.mjs`:

```bash
node --experimental-modules --experimental-loader ./hooks/html-loader.mjs esm.mjs
```

All hooks are located in `hooks` directory. Sample HTML template is located in `templates` directory.

## License

See [LICENSE](./LICENSE) file for details.

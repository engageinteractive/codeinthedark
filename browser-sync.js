module.exports = {
	files: ['src'],
	notify: false,
	port: 8080,
	server: {
		baseDir: ['boilerplate', 'src'],
		serveStaticOptions: {
			cacheControl: false,
		},
	},
	ghostMode: false,
	ui: false,
	open: false,
};

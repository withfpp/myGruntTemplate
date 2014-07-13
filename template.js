exports.description = "Sets up application";

exports.template = function (grunt, init, done){
	init.process({},[
		init.prompt("name"),
		init.prompt("description"),
		init.prompt("version"),
		init.prompt("licenses", "MIT"),
		init.prompt("author_name"),
		init.prompt("author_url")
		], function (err, props) {

			var files = init.filesToCopy(props);

			init.addLicenseFiles(files, props.licenses);
			init.copyAndProcess(files, props);	

			init.writePackageJSON("package.json", {
				name: props.name,
				version: props.version,
				description: props.description,
				author: {
					name: props.author_name,
					url: props.author_url
				},
				dependencies: {

				},
				devDependencies: {
				 	'grunt'					: 'latest',
			        'grunt-contrib-jshint': '~0.10.0',
			        'grunt-contrib-qunit': '~0.2.0',
			        'grunt-contrib-concat': '~0.3.0',
			        'grunt-contrib-uglify': '~0.2.0',
			        'grunt-contrib-watch': '~0.4.0',
			        'grunt-contrib-clean': '~0.4.0'
		        },
			});
			done();
		});
};
module.exports = function(grunt){

	//Proejct configuration
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			compass: {
				files: ['scss/*.{scss, sass}'],
				tasks: ['compass:dev']
			},
			js: {
				files: ['js/*.js'],
				tasks: ['uglify']
			}
		},

		compass: {
			dev: {
				options: {
					sassDir: ['scss'],
					cssDir: ['css'],
					environment: 'development'
				}
			},
			prod: {
				options: {
					sassDir: ['dist/sass'],
					cssDir: ['dist/css'],
					environment: 'production'
				}
			}
		},

		uglify: {
			all: {
				files: {
					'js/main.min.js': [
						'js/*.js'
					]
				}
			}
		}



	});


	// Dependent Plugins

	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');


	// Tasks

	grunt.registerTask('default', ['compass:dev' , 'uglify' , 'watch']);

}
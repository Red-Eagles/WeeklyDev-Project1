module.exports = function(grunt){
	// Load Plugins
	[
		'grunt-contrib-sass',
		'grunt-contrib-uglify'
	].forEach(function(task) {
		grunt.loadNpmTasks(task);
	});

	// Configure Plugins
	// Sass files are concatinated/compiled here
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'public/css/stylesheet.css' : 'public/sass/main.scss'
				},
				options: {
					noCache : true
				}
			}
		},
		// Javascript files are concatinated here
		uglify: {
			my_target: {
				files: {
					'public/js/redeagles.min.js': 
					[
						'public/js/redeagles.main.js', 
						'public/js/redeagles.example.js'
					]
				}
			}
		},
	});

	// Register Tasks
	grunt.registerTask('css', ['sass']);
	grunt.registerTask('js', ['uglify']);
	grunt.registerTask('all', ['sass', 'uglify']);
};

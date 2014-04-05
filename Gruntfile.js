module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		js_files: ['public/javascripts/app.js', 'public/javascripts/script.js', 'public/javascripts/script2.js'],
		css_files: ['public/styles/style.css', 'public/styles/style2.css', 'public/styles/style3.css'],
		html_files: ['public/*.html'],
		phantomas: {
			perf : {
				options : {
					indexPath : './phantomas/',
					options   : {},
					url: 'http://localhost:9999/'
				}
			}
		},

		concat: {
			js: {
				src: ['<%= js_files %>'],
				dest: 'public/javascripts/app.concat.js'
			},

			styles: {
				src: ['<%= css_files %>'],
				dest: 'public/styles/styles.concat.css',
				//here you should concatenate styles
			}
		},

		uglify: {
			js: {
				files: {
					'public/javascripts/app.min.js': ['<%= js_files %>']
				}
			}
		},

		cssmin: {
			'public/styles/styles.min.css': 'public/styles/styles.concat.css'
		},

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'public/index.min.html':'public/index.html'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.loadNpmTasks('grunt-phantomas');

	grunt.registerTask('default', ['concat', 'cssmin', 'htmlmin', 'phantomas']);
};

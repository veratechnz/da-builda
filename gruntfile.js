//Main wrapper function 
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
			  	pkg: grunt.file.readJSON('paclage.json')
			  	connect: {
			  		//task options, overides built in defaults
			  	options: {
			  		port: 9000, 
			  		open: true,
			  		livereload: 35729,
			  		hostname: 'localhost'
			  	},
			  	//Target
			  	development: {
			  		//target options, overides task options
			  		options: {
			  			middleware: function(connect){
			  				return [
			  					connect.static('app')
			  				];
			  			}
			  		}
			  	}
			  }
  });

  // Load the plugin that provides the "uglify" task.
  require('load-grunt-tasks')(grunt);

  // Default task
  grunt.registerTask('default', []);

};
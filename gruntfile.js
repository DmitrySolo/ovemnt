module.exports = function(grunt) {
    // Do grunt-related things in here
    grunt.initConfig({
        jade: { 
            options: {
                pretty : true
            },
            compile: {
                files: {
                    "Build/jade_templates/index.html": "Build/jade_templates/index.jade"
                }
            }
        },
        watch: {
            jade: {
                // We watch and compile sass files as normal but don't live reload here
                files: ['Build/jade_templates/index.jade'],
                tasks: ['jade'],
            },
            livereload: {
                // Here we watch the files the sass task will compile to
                // These files are sent to the live reload server after sass compiles to them
                options: { livereload: true },
                files: ['Build/jade_templates/index.html'],
            },
        }
});
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
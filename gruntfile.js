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
        }
});
    grunt.loadNpmTasks('grunt-contrib-jade');
};
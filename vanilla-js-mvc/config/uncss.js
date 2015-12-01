var uncss = require('uncss');
 
var files   = ['../build/index.html'],
    options = {
      csspath  : ['../build/css/']
    };
 
uncss(files, options, function (error, output) {
    console.log(output);
});
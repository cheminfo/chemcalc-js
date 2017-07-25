'use strict';

var child_process = require('child_process');
var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var exporter = require('gwt-api-exporter');
var argv = require('minimist')(process.argv.slice(2));

var verbose = argv.v;

try {
    var config = require('./config.json');
} catch (e) {
    console.error('config.json not found. You can copy config.default.json to start from an example.');
    process.exit(1);
}

var classpath = ['src'];

classpath.push(path.join(config.chemcalc, 'src'));

classpath.push(path.join(config.gwt, 'gwt-dev.jar'), path.join(config.gwt, 'gwt-user.jar'));

classpath = classpath.join(':');

gulp.task('compile:min', compile('min'));
gulp.task('compile:pretty', compile('pretty'));

gulp.task('build:pretty', ['compile:pretty'], build);
gulp.task('build:min', ['compile:min'], build);
gulp.task('export', build);

gulp.task('default', ['build:min']);

gulp.task('update', updateGIT);

function build(done) {
    var warDir = 'war/chemcalc';
    var files = fs.readdirSync(warDir);
    var file;
    for (var i = 0; i < files.length; i++) {
        if (files[i].indexOf('.cache.js') > 0) {
            file = path.join(warDir, files[i]);
            break;
        }
    }
    if (!file) {
        throw new Error('Could not find GWT file');
    }
    exporter({
        input: file,
        output: 'dist/chemcalc.js',
        exports: 'CI.Chemcalc',
        'package': require('./package.json')
    }).then(function () {
        done();
    }, function (e) {
        console.error(e);
    })
}

function compile(mode) {
    return function () {
        log('Compiling module chemcalc');
        var args = [
            '-Xmx512m',
            '-cp', classpath,
            'com.google.gwt.dev.Compiler',
            'org.chemcalc.ChemcalcJS',
            '-optimize', '9',
            '-XnocheckCasts',
            '-XnoclassMetadata',
            '-nocheckAssertions',
            '-generateJsInteropExports',
            '-style'
        ];
        if (mode === 'min') {
            args.push('OBF');
        } else {
            args.push('PRETTY');
        }
        var execOptions;
        if (verbose) {
            args.push('-logLevel', 'DEBUG');
        } else {
            execOptions = {
                stdio: 'inherit'
            };
        }
        var result = child_process.execFileSync('java', args, execOptions);
        if (verbose) {
            var name = 'compile.log';
            fs.writeFileSync('./' + name, result);
            log('Compilation log written to ' + name);
        }
    }
}

function updateGIT() {
    log('updating chemcalc GIT repo');
    child_process.execFileSync('git', ['pull'], {
        cwd: config.chemcalc,
        stdio: 'inherit'
    });
}

function log(value) {
    if (verbose) {
        console.log(value);
    }
}

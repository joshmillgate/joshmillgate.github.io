const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const minifyCss = require('gulp-clean-css');
const del = require('del');

function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function(file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

const build = (done) => {
    var folders = getFolders('./');
    if (folders.length === 0) return done();
    var tasks = folders.map(function(folder) {
        return gulp.src([
                './' + folder + '/*.css',
                './base.css'
            ], { base: './' })
            // concat into foldername.js
            .pipe(concat(folder + '.min.css'))
            // minify the CSS
            .pipe(minifyCss())
            // write to output
            .pipe(gulp.dest('./' + folder))
    });
    // Created by Josh Millgate
    done();
};

const watch = () => {
    gulp.watch('./', build);
}

const clean = () => {
    console.log('Deleting all "min.css" files')
    return del(['./*/*.min.css']);
}

exports.build = build;
exports.clean = clean;
exports.watch = watch;
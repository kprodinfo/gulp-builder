'use strict';
const gulp = require('gulp'),
    prettify = require('gulp-prettify'),
    browserSync = require('browser-sync'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    watch = require('gulp-watch'),
    clear = require('del'),
    rename = require('gulp-rename'),
    include = require("gulp-include"),
    pug = require('gulp-pug'),
    scss = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    sourcemap = require('gulp-sourcemaps');

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        icons: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: ['app/blocks/*.pug'],
        scss: [
            'app/scss/main.scss'
        ],
        js: 'app/js/custom.js',
        img: 'app/blocks/**/img/*.*',
        icons: 'app/blocks/**/icons/*.*',
        fonts: ['app/fonts/**/*.*'],
        vendor_js: [
            'bower_components/jquery/dist/jquery.min.js'
        ],
        vendor_css: [
            'bower_components/normalize-css/normalize.css'
        ]
    },
    watch: {
        html: ['app/blocks/**/*.pug'],
        scss: [
            'app/blocks/**/*.scss',
            'app/scss/**/*.scss'
        ],
        js: 'app/blocks/**/*.js',
        fonts: 'app/fonts/**/*.*',
        img: 'app/blocks/**/img/*.*',
        icons: 'app/blocks/**/icons/*.*',
        libs: 'app/libs/**/*.*'
    },
    clear: {
        html: 'build/*.html',
        img: 'build/img/*.*',
        icons: 'build/img/icons/*.*',
        fonts: 'build/fonts',
        style: 'build/css/style.css',
        vendor_style: 'build/css/libs.min.css',
        js: 'build/js/custom.js',
        vendor_js: 'build/js/libs.min.js',
        sourcemaps: 'build/css/sourcemaps'
    },
    sourcemaps: './sourcemaps',
};

gulp.task('pug', function () {
    return gulp.src(path.src.html)
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Error in PUG',
                message: '<%= error.message %>'
            })
        }))
        .pipe(pug())
        .pipe(prettify({
            indent_size: 4,
            indent_inner_html: true,
            unformatted: ['i', 'a', 'span', 'b', 'strong', 'sup', 'sub']
        }))
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('scss', function () {
    return gulp.src(path.src.scss)
        .pipe(sourcemap.init())
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Error in SCSS',
                message: '<%= error.message %>'
            })
        }))
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(autoprefixer("last 10 version"))
        .pipe(rename('style.css'))
        .pipe(sourcemap.write(path.sourcemaps))
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task("js", function () {
    return gulp.src(path.src.js)
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Error in JavaScript',
                message: '<%= error.message %>'
            })
        }))
        .pipe(include())
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('img', function () {
    clear(path.clear.img);
    return gulp.src(path.src.img)
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Error in IMG',
                message: '<%= error.message %>'
            })
        }))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('icons', function () {
    clear(path.clear.icons);
    return gulp.src(path.src.icons)
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Error in ICONS',
                message: '<%= error.message %>'
            })
        }))
        .pipe(rename({dirname: 'icons'}))
        .pipe(gulp.dest(path.build.icons))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('fonts', function () {
    clear(path.clear.fonts);
    return gulp.src(path.src.fonts)
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Error in FONTS',
                message: '<%= error.message %>'
            })
        }))
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('vendor:js', function () {
    return gulp.src(path.src.vendor_js)
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Error in Vendor JavaScript',
                message: '<%= error.message %>'
            })
        }))
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('vendor:css', function () {
    return gulp.src(path.src.vendor_css)
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Error in Vendor CSS',
                message: '<%= error.message %>'
            })
        }))
        .pipe(concat('libs.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest(path.build.css));
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'build/'
        },
        notify: false
    });
});

gulp.task('clear', function () {
    clear.sync('./build');
});

gulp.task('build', ['clear', 'pug', 'scss', 'js', 'img', 'icons', 'fonts', 'vendor:js', 'vendor:css'], function () {
    clear.sync(path.clear.sourcemaps);
});
gulp.task('watch', ['clear', 'pug', 'scss', 'js', 'img', 'icons', 'fonts', 'vendor:js', 'vendor:css', 'browser-sync'], function () {

    watch(path.watch.html, function () {
        gulp.start('pug');
    });
    watch(path.watch.scss, function () {
        gulp.start('scss');
    });
    watch(path.watch.img, function () {
        gulp.start('img');
    });
    watch(path.watch.icons, function () {
        gulp.start('icons');
    });
    watch(path.watch.fonts, function () {
        gulp.start('fonts');
    });
    watch(path.watch.js, function () {
        gulp.start('js');
    });
    watch(path.watch.libs, function () {
        gulp.start('vendor:js');
        gulp.start('vendor:css');
    });
});

gulp.task('default', ['watch']);
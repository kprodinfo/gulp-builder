'use strict';
let config = {
    watch: false
};

let gulp = require('gulp'),
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
    pugbem = require('gulp-pugbem'),
    scss = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    sourcemap = require('gulp-sourcemaps'),
    htmlInjector = require("bs-html-injector"),
    emitty = require('emitty').setup('app', 'pug'),
    svgstore = require('gulp-svgstore'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    gulpIf = require('gulp-if'),
    babel = require('gulp-babel');

pugbem.e = '__';
pugbem.m = '_';

let path = {
    build: {
        pug: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        sprite: 'build/img/',
        fonts: 'build/fonts/',
    },
    src: {
        pug: 'app/pages/*.pug',
        scss: 'app/scss/main.scss',
        js: 'app/js/custom.js',
        img: 'app/elements/**/img/*.*',
        icons: 'app/elements/**/icons/*.*',
        svg_icons: 'app/elements/**/svg-icons/*.svg',
        fonts: 'app/fonts/**/*.*',
        vendor_js: [
            'bower_components/jquery/dist/jquery.min.js'
        ],
        vendor_css: [
            'bower_components/normalize-css/normalize.css'
        ]
    },
    watch: {
        elements: 'app/elements/**/*.pug',
        pages: 'app/pages/*.pug',
        scss: [
            'app/elements/**/*.scss',
            'app/scss/**/*.scss'
        ],
        js: [
            'app/elements/**/*.js',
            'app/js/*.*js'
        ],
        fonts: 'app/fonts/**/*.*',
        img: 'app/elements/**/img/*.*',
        icons: 'app/elements/**/icons/*.*',
        svg_icons: 'app/elements/**/svg-icons/*.svg'
    },
    clear: {
        dev: 'build',
        img: 'build/img',
        fonts: 'build/fonts'
    },
    sourcemaps: './sourcemaps'
};

gulp.task('pug', function () {
    return gulp.src(path.src.pug)
        .pipe(gulpIf(config.watch, emitty.stream()))
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Error in PUG',
                message: '<%= error.message %>'
            })
        }))
        .pipe(pug({
            plugins: [pugbem]
        }))
        .pipe(prettify({
            indent_size: 4,
            indent_inner_html: true,
            unformatted: ['i', 'a', 'span', 'b', 'strong', 'sup', 'sub']
        }))
        .pipe(gulp.dest(path.build.pug))
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
        .pipe(replace('url(img/', 'url(../img/'))
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(replace('img/', '../img/'))
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
        .pipe(babel({
            plugins: ['transform-es2015-arrow-functions']
        }))
        //.pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('img', function () {
    return gulp.src(path.src.img)
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Error in img',
                message: '<%= error.message %>'
            })
        }))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('icons', function () {
    return gulp.src(path.src.icons)
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Error in icons',
                message: '<%= error.message %>'
            })
        }))
        .pipe(rename({dirname: 'icons'}))
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('svg-icons', function () {
    return gulp.src(path.src.svg_icons)
        .pipe(cheerio({
            run: function ($) {
                $('[fill^="#"]').removeAttr('fill');
                $('[stroke^="#"]').removeAttr('stroke');
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(svgstore({inlineSvg: true}))
        .pipe(gulp.dest(path.build.sprite))
});


gulp.task('fonts', function () {
    clear(path.clear.fonts);
    return gulp.src(path.src.fonts)
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Error in fonts',
                message: '<%= error.message %>'
            })
        }))
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('vendor:js', function () {
    return gulp.src(path.src.vendor_js)
        .pipe(plumber({
            errorHandler: notify.onError({
                title: 'Error in vendor JavaScript',
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
                title: 'Error in vendor CSS',
                message: '<%= error.message %>'
            })
        }))
        .pipe(concat('libs.min.css'))
        .pipe(cssnano({zindex: false}))
        .pipe(gulp.dest(path.build.css));
});

gulp.task('browser-sync', function () {
    browserSync.use(htmlInjector, {
        files: "build/*.html"
    });
    browserSync({
        server: {
            baseDir: 'build/'
        }
    });
});

gulp.task('clear', function () {
    clear.sync(path.clear.dev);
});

gulp.task('watch', ['clear', 'pug', 'scss', 'js', 'img', 'icons', 'svg-icons', 'fonts', 'vendor:js', 'vendor:css', 'browser-sync'], function () {
    config.watch = true;
    watch(path.watch.elements, function () {
        gulp.start('pug');
    });
    watch(path.watch.pages, function () {
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
    watch(path.watch.svg_icons, function () {
        gulp.start('svg-icons');
    });
    watch(path.watch.fonts, function () {
        gulp.start('fonts');
    });
    watch(path.watch.js, function () {
        gulp.start('js');
    });
});

gulp.task('default', ['watch']);
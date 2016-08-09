var gulp = require('gulp'),
	sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
	browserSync = require('browser-sync').create();

var reload = browserSync.reload;

// 静态服务器
gulp.task('browser-sync', ['sass', 'scripts'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("src/styles/**/*.scss", ['sass']);
    gulp.watch("src/javascripts/**/*.js", ['scripts']);
    gulp.watch("**/*.html").on("change", reload);
    gulp.watch("dist/stylesheets/*.css").on("change", reload);
});

// 样式处理
gulp.task('sass', function() {
    return gulp.src('src/styles/*.scss')
    .pipe(plumber({
        errorHandler: function(error){
            this.emit('end');
            console.log(
`-------------------- 错误信息 --------------------
错误行数： 第 ${error.line} 行
错误文件： ${error.file}
错误类型： ${error.messageOriginal}

错误信息： ${error.messageFormatted}
--------------------------------------------------`
            );
        }
    }))
    .pipe(plumber({errorHandler: notify.onError({
        title: "SASS编译失败！",
        message: `<%= error.messageOriginal %>（<%= error.line %>行）`
    })}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    //添加前缀
    .pipe(autoprefixer([">5%"]))
    //保存未压缩文件到我们指定的目录下面
    .pipe(gulp.dest('dist/stylesheets'))
    //给文件添加.min后缀
    .pipe(rename({ suffix: '.min' }))
    //压缩样式文件
    .pipe(minifycss())
    //输出压缩文件到指定目录
    .pipe(gulp.dest('dist/stylesheets'))
    // .pipe(notify({ message: 'sass编译成功！' }))
    // .pipe(reload({stream: true}))
});

// Scripts任务
gulp.task('scripts', function() {
    return gulp.src('src/javascripts/*.js')
    .pipe(plumber({
        errorHandler: function(error){
            this.emit('end');
            console.log(
`-------------------- 错误信息 --------------------
错误行数： 第 ${error.loc.line} 行
错误文件： ${error.fileName}
错误类型： ${error.name}

错误信息： ${error.message}
--------------------------------------------------`
            );
        }
    }))
    .pipe(plumber({errorHandler: notify.onError({
        title: "Javascript编译失败！",
        message: `<%= error.message %>`
    })}))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    // .pipe(concat('all.js'))  //代码合并
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/javascripts'))
    // .pipe(notify({ message: 'Javascript编译成功！' }))
    .pipe(reload({stream: true}))
});

// 图片压缩
gulp.task('images', function() {
  return gulp.src('src/images/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: '图片压缩完成！' }));
});

//  gulp默认开启调试工作
gulp.task('default', ['browser-sync']);

//  gulp执行优化操作
gulp.task('seo', ['images'], function() {
	// notify({ message: 'SEO OK'})
});
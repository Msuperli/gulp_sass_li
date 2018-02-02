var gulp= require('gulp');
var sass= require('gulp-sass');


gulp.task('compileSass',function(){
   gulp.src('./src/sass/*.scss') //得到文件流（文件存在内存中）

   .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError)) //得到css文件
   // 通过管道传输
   // 输出到硬盘  自己选择路径
   .pipe(gulp.dest('./src/css/'))
});

// gulp.task('compileSass',function(){
//     // 查找sass文件
//     gulp.src('./src/sass/*.scss')   //得到文件流（文件在内存中的状态）scss

//     // 通过管道传输
//     // 编译
//     .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))                        //编译后的文件流 css


//     // 输出到硬盘
//     .pipe(gulp.dest('./src/css/'))
// });


// 创建文件监听任务：文件有修改，则自动编译
// gulp.task('jtSass',function(){
//     // 当文件有修改，则执行complieSass任务
//     gulp.watch('./src/sass/*.scss',['compileSass'])
// });

// 创建文件监听：文件有修改，则自动编译
gulp.task('jtSass',function(){
    gulp.watch('./src/sass/*.scss',['compileSass'])
});




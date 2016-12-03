// 引入gulp
var gulp = require("gulp");

// 引入压缩插件
var uglify = require("gulp-uglify");

// 引入sass编译
var sass = require("gulp-sass");

// 启动服务
var webserver = require("gulp-webserver");

// 构建压缩任务
gulp.task("uglify",function(){
	gulp.src("./app/src/scripts/lib/js.js")
	    .pipe(uglify())
	    .pipe(gulp.dest("./app/dist/scripts"))
})

// 编译SASS
var sassFiles = ["./app/src/styles/**/*.scss"]; 

gulp.task("sass",function(){
	gulp.src(sassFiles)
	    .pipe(sass())
        .pipe(gulp.dest("./app/prd/styles"));
})

// 启动服务
gulp.task("webserver",function(){
	gulp.src("./")
	    .pipe(webserver({
	    	port:80,
	    	livereload:true, // 页面保存浏览器自动刷新
	    	directoryListing:{   // 目录结构的配置
	    		enable:true,     // 显示目录
	    		path:"./"     // 显示具体路径下的目录
	    	},
	    	
	    }))
})

// 监测文件
gulp.task("watch",function(){
	gulp.watch(sassFiles,["sass"]);
})

// 设置默认任务
gulp.task("default",["watch","uglify","webserver"]);